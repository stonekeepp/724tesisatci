import Link from "next/link";
import type { BreadcrumbItem } from "@/types";

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="hidden md:block max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-4"
    >
      <ol className="flex flex-wrap items-center gap-2 font-body-md text-body-md text-on-surface-variant">
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center gap-2">
            {index > 0 && (
              <span className="material-symbols-outlined text-sm text-outline">
                chevron_right
              </span>
            )}
            {index === items.length - 1 ? (
              <span className="text-primary font-medium">{item.label}</span>
            ) : (
              <Link
                href={item.href}
                className="hover:text-secondary transition-colors"
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
