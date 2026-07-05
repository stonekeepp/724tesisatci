interface LocationHeroImageProps {
  title: string;
  subtitle?: string;
  slug: string;
  className?: string;
}

function slugHue(slug: string): number {
  return slug.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0) % 40;
}

export function LocationHeroImage({
  title,
  subtitle = "7/24 Tesisat Hizmeti",
  slug,
  className = "w-full h-full",
}: LocationHeroImageProps) {
  const accent = 175 + slugHue(slug);

  return (
    <svg
      viewBox="0 0 800 500"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label={`${title} tesisatçı hizmeti`}
    >
      <defs>
        <linearGradient id={`hero-${slug}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#131b2e" />
          <stop offset="55%" stopColor="#0a3d4a" />
          <stop offset="100%" stopColor={`hsl(${accent}, 55%, 32%)`} />
        </linearGradient>
        <pattern
          id={`grid-${slug}`}
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 40 0 L 0 0 0 40"
            fill="none"
            stroke="rgba(255,255,255,0.04)"
            strokeWidth="1"
          />
        </pattern>
      </defs>
      <rect width="800" height="500" fill={`url(#hero-${slug})`} />
      <rect width="800" height="500" fill={`url(#grid-${slug})`} />
      <circle cx="680" cy="120" r="180" fill={`hsla(${accent}, 70%, 50%, 0.12)`} />
      <circle cx="120" cy="400" r="140" fill="rgba(118, 220, 255, 0.08)" />
      <g transform="translate(48, 340)">
        <path
          d="M0 0h48v48h-48z"
          fill="rgba(118,220,255,0.15)"
          rx="12"
        />
        <text
          x="24"
          y="32"
          textAnchor="middle"
          fontFamily="Inter, Arial, sans-serif"
          fontSize="22"
          fill="#76dcff"
        >
          724
        </text>
      </g>
      <text
        x="48"
        y="200"
        fontFamily="Inter, Arial, sans-serif"
        fontSize="52"
        fontWeight="700"
        fill="#ffffff"
      >
        {title}
      </text>
      <text
        x="48"
        y="250"
        fontFamily="Inter, Arial, sans-serif"
        fontSize="22"
        fill="#76dcff"
      >
        {subtitle}
      </text>
      <text
        x="48"
        y="290"
        fontFamily="Inter, Arial, sans-serif"
        fontSize="16"
        fill="rgba(255,255,255,0.75)"
      >
        Cihazlı Tespit · Yazılı Teklif · Garantili İşçilik
      </text>
    </svg>
  );
}
