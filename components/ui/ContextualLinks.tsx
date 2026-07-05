import Link from "next/link";

export interface ContextualLinkItem {
  href: string;
  label: string;
}

interface ContextualLinksProps {
  title?: string;
  links: readonly ContextualLinkItem[] | ContextualLinkItem[];
  className?: string;
  variant?: "pills" | "inline";
}

export function ContextualLinks({
  title,
  links,
  className = "",
  variant = "pills",
}: ContextualLinksProps) {
  if (links.length === 0) return null;

  return (
    <div className={className}>
      {title && (
        <p className="font-label-md text-label-md text-on-surface-variant mb-4 text-center">
          {title}
        </p>
      )}
      <div
        className={
          variant === "pills"
            ? "flex flex-wrap justify-center gap-2"
            : "flex flex-wrap gap-x-4 gap-y-2 justify-center"
        }
      >
        {links.map((link) =>
          variant === "pills" ? (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-2 rounded-full bg-surface-container text-on-surface-variant text-sm font-label-md hover:bg-secondary-container hover:text-secondary transition-colors border border-outline-variant/50"
            >
              {link.label}
            </Link>
          ) : (
            <Link
              key={link.href}
              href={link.href}
              className="text-secondary font-label-md hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          )
        )}
      </div>
    </div>
  );
}
