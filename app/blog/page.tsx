import Link from "next/link";
import Image from "next/image";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { JsonLdScript } from "@/components/seo/JsonLdScript";
import { ContextualLinks } from "@/components/ui/ContextualLinks";
import { getPublishedBlogPosts } from "@/lib/services/blogService";
import { getSiteSettings } from "@/lib/services/settingsService";
import { buildMetadata, getSiteUrl } from "@/lib/services/seoService";
import {
  buildBreadcrumbSchema,
  buildItemListSchema,
} from "@/lib/services/schemaService";
import { staticPageSeo } from "@/data/mock/seo";
import { popularServiceLinks, primaryHubLinks } from "@/lib/utils/internalLinks";

export const metadata = buildMetadata(staticPageSeo.blog);

export default async function BlogPage() {
  const [posts, settings] = await Promise.all([
    getPublishedBlogPosts(),
    getSiteSettings(),
  ]);

  const breadcrumbs = [
    { label: "Ana Sayfa", href: "/" },
    { label: "Blog", href: "/blog" },
  ];

  const schemas = [
    buildBreadcrumbSchema(breadcrumbs),
    buildItemListSchema(
      "724 Tesisatçı Blog Yazıları",
      posts.map((post) => ({
        name: post.title,
        url: post.canonicalPath,
      }))
    ),
    {
      "@context": "https://schema.org",
      "@type": "Blog",
      name: "724 Tesisatçı Blog",
      description: staticPageSeo.blog.description,
      url: `${getSiteUrl()}/blog`,
      publisher: {
        "@type": "Organization",
        name: settings.siteName,
      },
    },
  ];

  return (
    <SiteLayout activePath="/blog">
      <JsonLdScript data={schemas} />
      <Breadcrumb items={breadcrumbs} />
      <section className="py-section-padding bg-surface-container-lowest px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto">
          <div className="text-center mb-16">
            <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-primary mb-4">
              Tesisat Blog
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
              Kağıthane merkezli tesisat ekibinden su kaçağı, tıkanıklık, kombi, petek ve bakım konularında pratik rehberler.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="bg-surface-container-lowest rounded-xl border border-outline-variant overflow-hidden soft-shadow group flex flex-col"
              >
                <div className="h-48 bg-surface-container-low relative">
                  {post.image && (
                    <Image
                      src={post.image}
                      alt={post.imageAlt ?? post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                  <div className="absolute top-4 left-4 bg-tertiary-container text-on-tertiary-container px-3 py-1 rounded-md font-label-md text-label-md shadow-sm">
                    {post.category}
                  </div>
                  {post.localFocus && (
                    <div className="absolute top-4 right-4 bg-surface/90 text-primary px-3 py-1 rounded-md font-label-md text-label-md shadow-sm">
                      {post.localFocus}
                    </div>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <time
                    className="font-label-md text-label-md text-on-surface-variant mb-2"
                    dateTime={post.publishedAt}
                  >
                    {new Date(post.publishedAt).toLocaleDateString("tr-TR")} · {post.readingTime} dk okuma
                  </time>
                  <h2 className="font-headline-md text-headline-md mb-3 text-primary group-hover:text-secondary transition-colors line-clamp-2">
                    <Link href={post.canonicalPath}>{post.title}</Link>
                  </h2>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-6 line-clamp-3 flex-grow">
                    {post.excerpt}
                  </p>
                  <Link
                    href={post.canonicalPath}
                    className="inline-flex items-center gap-2 font-label-md text-label-md text-secondary hover:text-primary transition-colors font-bold mt-auto"
                  >
                    Devamını Oku{" "}
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <ContextualLinks
            title="Hizmetlerimiz ve kaynaklar"
            links={[...popularServiceLinks, ...primaryHubLinks.slice(0, 4)]}
            className="mt-16 pt-12 border-t border-outline-variant"
          />
        </div>
      </section>
    </SiteLayout>
  );
}
