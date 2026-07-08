import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { JsonLdScript } from "@/components/seo/JsonLdScript";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { ContextualLinks } from "@/components/ui/ContextualLinks";
import { getBlogPostBySlug } from "@/lib/services/blogService";
import { getAllServices } from "@/lib/services/serviceService";
import { getSiteSettings } from "@/lib/services/settingsService";
import { buildMetadata, seoFromEntity } from "@/lib/services/seoService";
import {
  buildBlogPostingSchema,
  buildBreadcrumbSchema,
  buildFAQSchema,
} from "@/lib/services/schemaService";
import { blogPosts } from "@/data/mock/blogPosts";
import { getPhoneHref, getWhatsAppHref } from "@/data/mock/siteSettings";
import { primaryHubLinks } from "@/lib/utils/internalLinks";

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
      const [heading, ...body] = block.replace("## ", "").split("\n");
      return (
        <div key={i}>
          <h2 className="font-headline-md text-headline-md text-primary mt-8 mb-4">
            {heading}
          </h2>
          {body.length > 0 && (
            <p className="font-body-md text-body-md text-on-surface-variant mb-4 leading-relaxed">
              {body.join("\n")}
            </p>
          )}
        </div>
      );
    }
    if (block.startsWith("### ")) {
      const [heading, ...body] = block.replace("### ", "").split("\n");
      return (
        <div key={i}>
          <h3 className="font-headline-md text-xl text-primary mt-6 mb-3">
            {heading}
          </h3>
          {body.length > 0 && (
            <p className="font-body-md text-body-md text-on-surface-variant mb-4 leading-relaxed">
              {body.join("\n")}
            </p>
          )}
        </div>
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
  const relatedPosts = blogPosts
    .filter((p) => p.status === "published" && p.slug !== post.slug)
    .slice(0, 3);

  const settings = await getSiteSettings();

  const breadcrumbs = [
    { label: "Ana Sayfa", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: post.title, href: post.canonicalPath },
  ];

  const schemas = [
    buildBlogPostingSchema(post, settings),
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

      {relatedPosts.length > 0 && (
        <section className="py-section-padding bg-surface-container-low px-margin-mobile md:px-margin-desktop">
          <div className="max-w-container-max mx-auto max-w-3xl">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-6">
              Diğer Yazılar
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={related.canonicalPath}
                  className="bg-surface-container-lowest rounded-xl p-4 border border-outline-variant hover:border-secondary transition-colors"
                >
                  <h3 className="font-headline-md text-sm text-primary line-clamp-2">
                    {related.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-section-padding bg-primary-container px-margin-mobile md:px-margin-desktop text-center">
        <div className="max-w-container-max mx-auto">
          <h2 className="font-headline-lg text-headline-lg text-on-primary mb-4">
            Profesyonel destek mi gerekiyor?
          </h2>
          <p className="font-body-md text-body-md text-on-primary-container mb-8 max-w-xl mx-auto">
            İstanbul genelinde 7/24 tesisat ekibimiz yazılı teklif ve garantili işçilik ile hizmet verir.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <a
              href={getPhoneHref(settings.phone)}
              className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-on-secondary rounded-xl font-label-md hover:bg-on-secondary-container transition-colors shadow-lg"
            >
              Hemen Ara
            </a>
            <Link
              href="/iletisim"
              className="inline-flex items-center gap-2 px-8 py-4 bg-surface text-primary rounded-xl font-label-md hover:bg-surface-variant transition-colors shadow-lg"
            >
              Servis Talebi
            </Link>
          </div>
          <ContextualLinks
            title="İlgili sayfalar"
            links={[
              {
                href: "/hizmet-bolgeleri/kagithane",
                label: "Kağıthane merkez tesisat ekibi",
              },
              {
                href: "/hizmet-bolgeleri/istanbul",
                label: "İstanbul geneli tesisat hizmeti",
              },
              ...primaryHubLinks,
            ]}
            className="[&_a]:bg-white/10 [&_a]:text-on-primary [&_a]:border-white/20 [&_a:hover]:bg-white/20"
          />
        </div>
      </section>
    </SiteLayout>
  );
}
