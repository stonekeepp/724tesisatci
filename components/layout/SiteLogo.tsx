import Image from "next/image";
import Link from "next/link";

interface SiteLogoProps {
  variant?: "light" | "dark";
  className?: string;
  imageClassName?: string;
}

export function SiteLogo({
  variant = "light",
  className = "",
  imageClassName = "h-14 md:h-16 w-auto",
}: SiteLogoProps) {
  const src = variant === "dark" ? "/logo-dark.webp" : "/logo.webp";

  return (
    <Link
      href="/"
      className={`inline-flex items-center shrink-0 ${className}`}
      aria-label="724 Tesisatçı — Ana Sayfa"
    >
      <Image
        src={src}
        alt="724 Tesisatçı"
        width={1024}
        height={341}
        className={imageClassName}
        priority={variant === "light"}
      />
    </Link>
  );
}
