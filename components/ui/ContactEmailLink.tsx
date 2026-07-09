import { siteSettings } from "@/data/mock/siteSettings";

interface ContactEmailLinkProps {
  className?: string;
}

/** Cloudflare e-posta obfuscation 404'unu önlemek için email_off yorumları kullanır. */
export function ContactEmailLink({
  className = "text-secondary hover:underline",
}: ContactEmailLinkProps) {
  return (
    <a href={`mailto:${siteSettings.email}`} className={className}>
      <span
        dangerouslySetInnerHTML={{
          __html: `<!--email_off-->${siteSettings.email}<!--/email_off-->`,
        }}
      />
    </a>
  );
}
