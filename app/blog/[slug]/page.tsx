import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { JsonLdScript } from "@/components/seo/JsonLdScript";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { getBlogPostBySlug } from "@/lib/services/blogService";
import { getAllServices } from "@/lib/services/serviceService";
import { getSiteSettings } from "@/lib/services/settingsService";
import { buildMetadata, seoFromEntity } from "@/lib/services/seoService";
import {
  buildArticleSchema,
  buildBreadcrumbSchema,
  buildFAQSchema,
} from "@/lib/services/schemaService";
import { blogPosts } from "@/data/mock/blogPosts";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const published = blogPosts.filter((p) => p.status === "published");
  return published.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post || post.status !== "published") return {};
  return buildMetadata(seoFromEntity(post));
}

function renderContent(content: string) {
  return content.split("\n\n").map((block, i) => {
    if (block.startsWith("## ")) {
      return (
        <h2 key={i} className="font-headline-md text-headline-md text-primary mt-8 mb-4">
          {block.replace("## ", "")}
        </h2>
      );
    }
    if (block.startsWith("### ")) {
      return (
        <h3 key={i} className="font-headline-md text-xl text-primary mt-6 mb-3">
          {block.replace("### ", "")}
        </h3>
      );
    }
    return (
      <p key={i} className="font-body-md text-body-md text-on-surface-variant mb-4 leading-relaxed">
        {block}
      </p>
    );
  });
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post || post.status !== "published") notFound();

  const allServices = await getAllServices();
  const relatedServices = allServices.filter((s) =>
    post.relatedServices.includes(s.slug)
  );
  const settings = await getSiteSettings();

  const breadcrumbs = [
    { label: "Ana Sayfa", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: post.title, href: post.canonicalPath },
  ];

  const schemas = [
    buildArticleSchema(post, settings),
    buildBreadcrumbSchema(breadcrumbs),
    buildFAQSchema(post.faq),
  ].filter(Boolean);

  return (
    <SiteLayout activePath="/blog">
      <JsonLdScript data={schemas} />
      <Breadcrumb items={breadcrumbs} />
      <article className="py-section-padding bg-surface-container-lowest px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto max-w-3xl">
          <span className="inline-block py-1 px-3 rounded-full bg-secondary-container text-on-secondary-container font-label-md text-label-md mb-4">
            {post.category}
          </span>
          <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-primary mb-4">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 font-label-md text-label-md text-on-surface-variant mb-8 pb-8 border-b border-outline-variant">
            <time dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString("tr-TR")}
            </time>
            <span>{post.readingTime} dk okuma</span>
          </div>
          <div className="prose-content">{renderContent(post.content)}</div>
        </div>
      </article>

      {relatedServices.length > 0 && (
        <section className="py-section-padding bg-surface-container-low px-margin-mobile md:px-margin-desktop">
          <div className="max-w-container-max mx-auto max-w-3xl">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-6">
              İlgili Hizmetler
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {relatedServices.map((service) => (
                <Link
                  key={service.slug}
                  href={service.canonicalPath}
                  className="bg-surface-container-lowest rounded-xl p-4 border border-outline-variant hover:border-secondary transition-colors"
                >
                  <h3 className="font-headline-md text-headline-md text-primary">
                    {service.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {post.faq.length > 0 && (
        <section className="py-section-padding bg-surface-bright px-margin-mobile md:px-margin-desktop">
          <div className="max-w-container-max mx-auto max-w-3xl">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-6">
              Sık Sorulan Sorular
            </h2>
            <FAQAccordion items={post.faq} />
          </div>
        </section>
      )}
    </SiteLayout>
  );
}
