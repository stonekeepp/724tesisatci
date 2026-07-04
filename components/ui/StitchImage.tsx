interface StitchImageProps {
  src: string;
  alt: string;
  className?: string;
  fill?: boolean;
}

export function StitchImage({ src, alt, className = "", fill }: StitchImageProps) {
  if (fill) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={src} alt={alt} className={`absolute inset-0 w-full h-full object-cover ${className}`} />
    );
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} className={className} />
  );
}

interface HeroImagePanelProps {
  src: string;
  alt: string;
  variant?: "default" | "dark";
  overlay?: React.ReactNode;
}

export function HeroImagePanel({ src, alt, variant = "default", overlay }: HeroImagePanelProps) {
  if (variant === "dark") {
    return (
      <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-outline-variant/30">
        <StitchImage src={src} alt={alt} fill className="opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-container via-primary-container/80 to-transparent" />
        {overlay}
      </div>
    );
  }

  return (
    <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-outline-variant/30">
      <StitchImage src={src} alt={alt} fill />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
      {overlay}
    </div>
  );
}
