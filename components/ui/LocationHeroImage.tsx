import Image from "next/image";
import { pageImages } from "@/data/mock/images";

interface LocationHeroImageProps {
  title: string;
  subtitle?: string;
  slug: string;
  className?: string;
  timingNote?: string;
  imageSrc?: string;
  imageAlt?: string;
  priority?: boolean;
}

function slugHue(slug: string): number {
  return slug.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0) % 36;
}

export function LocationHeroImage({
  title,
  subtitle = "7/24 Tesisat Hizmeti",
  slug,
  className = "w-full h-full",
  timingNote,
  imageSrc = pageImages.hizmetBolgeleriHero,
  imageAlt,
  priority = false,
}: LocationHeroImageProps) {
  const accent = 168 + slugHue(slug);

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      role="img"
      aria-label={imageAlt ?? `${title} tesisatçı hizmeti`}
    >
      <Image
        src={imageSrc}
        alt={imageAlt ?? `${title} bölgesinde tesisat hizmeti`}
        fill
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="object-cover object-center"
        priority={priority}
      />
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(145deg, rgba(19,27,46,0.88) 0%, rgba(10,61,74,0.78) 48%, hsla(${accent}, 48%, 22%, 0.72) 100%)`,
        }}
      />
      <div
        className="absolute -right-16 -top-20 h-72 w-72 rounded-full blur-2xl pointer-events-none"
        style={{ background: `hsla(${accent}, 70%, 48%, 0.22)` }}
      />
      <div className="absolute -left-10 bottom-0 h-56 w-56 rounded-full bg-secondary/15 blur-2xl pointer-events-none" />

      <div className="relative z-10 flex h-full flex-col justify-between p-6 md:p-8">
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary/20 px-3 py-1 font-label-md text-label-md text-secondary backdrop-blur-sm">
            <span className="material-symbols-outlined text-base" aria-hidden="true">
              location_on
            </span>
            {title}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 font-label-md text-label-md text-white/90 backdrop-blur-sm">
            <span className="material-symbols-outlined text-base" aria-hidden="true">
              schedule
            </span>
            7/24
          </span>
        </div>

        <div className="max-w-md">
          <p className="mb-2 font-label-md text-xs uppercase tracking-[0.18em] text-secondary">
            724 Tesisatçı
          </p>
          <h2 className="font-display-lg text-headline-lg-mobile md:text-headline-lg font-bold leading-tight text-white">
            {title}
          </h2>
          <p className="mt-3 font-body-lg text-body-lg text-secondary">{subtitle}</p>
          {timingNote ? (
            <p className="mt-3 inline-flex items-center gap-2 rounded-xl border border-white/15 bg-black/25 px-3 py-2 font-body-md text-sm text-white/85 backdrop-blur-sm">
              <span className="material-symbols-outlined text-secondary text-lg" aria-hidden="true">
                directions_car
              </span>
              {timingNote}
            </p>
          ) : null}
          <p className="mt-4 font-body-md text-sm text-white/70">
            Cihazlı Tespit · Yazılı Teklif · Yazılı Servis Formu
          </p>
        </div>
      </div>
    </div>
  );
}
