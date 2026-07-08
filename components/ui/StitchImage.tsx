import Image from "next/image";

interface StitchImageProps {
  src: string;
  alt: string;
  className?: string;
  fill?: boolean;
  width?: number;
  height?: number;
  sizes?: string;
  priority?: boolean;
}

export function StitchImage({
  src,
  alt,
  className = "",
  fill,
  width = 1200,
  height = 800,
  sizes = "(max-width: 768px) 100vw, 50vw",
  priority = false,
}: StitchImageProps) {
  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={`object-cover ${className}`}
      />
    );
  }
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      sizes={sizes}
      priority={priority}
      className={className}
    />
  );
}

interface HeroImagePanelProps {
  src: string;
  alt: string;
  variant?: "default" | "dark";
  imageClassName?: string;
  overlay?: React.ReactNode;
  priority?: boolean;
}

export function HeroImagePanel({
  src,
  alt,
  variant = "default",
  imageClassName = "object-center",
  overlay,
  priority = false,
}: HeroImagePanelProps) {
  if (variant === "dark") {
    return (
      <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-outline-variant/30">
        <StitchImage
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, 50vw"
          className={`opacity-90 ${imageClassName}`}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-container via-primary-container/80 to-transparent" />
        {overlay}
      </div>
    );
  }

  return (
    <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-outline-variant/30">
      <StitchImage
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 768px) 100vw, 50vw"
        className={imageClassName}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
      {overlay}
    </div>
  );
}
