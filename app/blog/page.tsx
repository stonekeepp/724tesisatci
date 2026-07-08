import Link from "next/link";
import Image from "next/image";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { ContextualLinks } from "@/components/ui/ContextualLinks";
import { getPublishedBlogPosts } from "@/lib/services/blogService";
import { buildMetadata } from "@/lib/services/seoService";
import { staticPageSeo } from "@/data/mock/seo";
import { popularServiceLinks, primaryHubLinks } from "@/lib/utils/internalLinks";

export const metadata = buildMetadata(staticPageSeo.blog);

export default async function BlogPage() {
  const posts = await getPublishedBlogPosts();

  return (
    <SiteLayout activePath="/blog">
      <section className="py-section-padding bg-surface-container-lowest px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto">
          <div className="text-center mb-16">
            <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-primary mb-4">
              Tesisat Blog
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
              Su kaçağı, tıkanıklık, kombi bakımı ve tesisat konularında uzman rehberler.
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
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                  <div className="absolute top-4 left-4 bg-tertiary-container text-on-tertiary-container px-3 py-1 rounded-md font-label-md text-label-md shadow-sm">
                    {post.category}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <time className="font-label-md text-label-md text-on-surface-variant mb-2">
                    {new Date(post.publishedAt).toLocaleDateString("tr-TR")} · {post.readingTime} dk okuma
                  </time>
                  <h2 className="font-headline-md text-headline-md mb-3 text-primary group-hover:text-secondary transition-colors line-clamp-2">
                    {post.title}
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
