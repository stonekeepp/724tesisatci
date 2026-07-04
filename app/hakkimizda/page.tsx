import Link from "next/link";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { buildMetadata } from "@/lib/services/seoService";
import { staticPageSeo } from "@/data/mock/seo";
import { pageImages } from "@/data/mock/images";
import { StitchImage } from "@/components/ui/StitchImage";

export const metadata = buildMetadata(staticPageSeo.hakkimizda);

export default function HakkimizdaPage() {
  return (
    <SiteLayout activePath="/hakkimizda">
      <section className="pt-16 md:pt-section-padding pb-16 md:pb-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
          <div className="md:col-span-6 flex flex-col gap-stack-lg">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high w-fit">
              <span
                className="material-symbols-outlined text-[16px] text-secondary"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                verified_user
              </span>
              <span className="font-label-md text-label-md text-on-surface-variant">
                Güvenilir Kurumsal Yapı
              </span>
            </div>
            <h1 className="font-headline-lg-mobile md:font-display-lg text-headline-lg-mobile md:text-display-lg text-on-background">
              Sıhhi Tesisatta <br />
              <span className="text-secondary">Yeni Nesil Uzmanlık.</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg">
              Klasik yöntemlerin ötesinde, ileri teknoloji cihazlar ve mühendislik prensipleriyle çalışıyoruz. Amacımız sadece arızayı gidermek değil, yapılarınıza kalıcı değer katan, temiz ve şeffaf çözümler sunmaktır.
            </p>
            <div className="flex gap-4 pt-4">
              <div className="flex flex-col border-l-2 border-outline-variant pl-4">
                <span className="font-headline-md text-headline-md text-primary">15+</span>
                <span className="font-label-md text-label-md text-on-surface-variant">Yıllık Tecrübe</span>
              </div>
              <div className="flex flex-col border-l-2 border-outline-variant pl-4">
                <span className="font-headline-md text-headline-md text-primary">10B+</span>
                <span className="font-label-md text-label-md text-on-surface-variant">Mutlu Müşteri</span>
              </div>
            </div>
          </div>
          <div className="md:col-span-6 relative mt-12 md:mt-0">
            <div className="absolute inset-0 bg-secondary opacity-5 rounded-2xl transform translate-x-4 translate-y-4" />
            <StitchImage
              src={pageImages.hakkimizdaHero}
              alt="Profesyonel Tesisat Uzmanı"
              className="relative w-full h-[400px] md:h-[500px] object-cover rounded-2xl soft-shadow border border-outline-variant z-10"
            />
          </div>
        </div>
      </section>

      <section className="bg-surface py-section-padding px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto flex flex-col gap-stack-lg">
          <div className="text-center max-w-2xl mx-auto flex flex-col gap-stack-sm mb-8">
            <h2 className="font-headline-lg text-headline-lg text-on-background">Temel Değerlerimiz</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Hizmet kalitemizi belirleyen, her projede taviz vermediğimiz standartlarımız.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "speed",
                title: "Hız ve Zamanlama",
                description:
                  "Zamanınızın değerini biliyoruz. Randevu saatlerine tam riayet eder, arızalara en kısa sürede kalıcı müdahalede bulunuruz.",
              },
              {
                icon: "policy",
                title: "Şeffaf Fiyatlandırma",
                description:
                  "Sürpriz maliyetlere yer yok. İşlem öncesinde detaylı teşhis koyar, net ve şeffaf bir maliyet tablosu sunarız.",
              },
              {
                icon: "engineering",
                title: "Cihazlı Uzmanlık",
                description:
                  "Kırma dökme işlemlerini minimuma indiren termal kameralar ve akustik dinleme cihazları ile noktasal tespit yapıyoruz.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-surface-container-lowest border border-outline-variant rounded-xl p-8 soft-shadow flex flex-col gap-4"
              >
                <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-secondary">
                  <span
                    className="material-symbols-outlined text-[28px]"
                    style={item.icon === "engineering" ? { fontVariationSettings: "'FILL' 1" } : undefined}
                  >
                    {item.icon}
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-background">{item.title}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-section-padding px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <StitchImage
              src={pageImages.hakkimizdaLeakDevice}
              alt="Cihazlı Su Kaçağı Tespiti"
              className="w-full h-auto rounded-2xl soft-shadow border border-outline-variant"
            />
          </div>
          <div className="flex flex-col gap-stack-md order-1 md:order-2">
            <h2 className="font-headline-lg text-headline-lg text-on-background">Neden Biz?</h2>
            <h3 className="font-headline-md text-headline-md text-secondary">
              Kırmadan, Dökmeden, Temiz İşçilik.
            </h3>
            <p className="font-body-lg text-body-lg text-on-surface-variant mt-2">
              Geleneksel tahmine dayalı tesisatçılığın aksine, arızayı gözle değil, teknoloji ile arıyoruz. Bu yaklaşımımız sayesinde evinizde veya iş yerinizde gereksiz inşaat molozları oluşmaz, onarım süresi ve maliyetler önemli ölçüde düşer.
            </p>
            <ul className="flex flex-col gap-3 mt-4">
              {["Termal Kamera ile Tespit", "Akustik Dinleme Cihazları", "Robotik Tıkanıklık Açma"].map(
                (label) => (
                  <li key={label} className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-secondary">check_circle</span>
                    <span className="font-body-md text-body-md text-on-background">{label}</span>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-lowest border-y border-outline-variant py-section-padding px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/3 flex flex-col gap-stack-md">
              <h2 className="font-headline-lg text-headline-lg text-on-background">
                İstanbul Geneli Servis Ağı
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Anadolu ve Avrupa yakasındaki stratejik noktalarımızda bulunan mobil ekiplerimiz sayesinde, acil tesisat çağrılarınıza en hızlı şekilde yanıt veriyoruz.
              </p>
              <div className="bg-surface rounded-lg p-4 border border-outline-variant mt-4 flex items-center gap-4">
                <span
                  className="material-symbols-outlined text-secondary text-[32px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  location_on
                </span>
                <div>
                  <p className="font-label-md text-label-md text-on-background font-bold">
                    Ortalama Varış Süresi
                  </p>
                  <p className="font-headline-md text-headline-md text-secondary">30 - 45 Dk</p>
                </div>
              </div>
            </div>
            <div className="md:w-2/3 w-full h-[400px] rounded-2xl overflow-hidden border border-outline-variant relative soft-shadow">
              <StitchImage src={pageImages.hakkimizdaServiceMap} alt="İstanbul Servis Haritası" fill />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-section-padding px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center flex flex-col items-center">
        <h2 className="font-display-lg text-display-lg text-on-background mb-4">
          Profesyonel Çözüm Ortağınız.
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-12">
          Sorunsuz bir altyapı, huzurlu bir yaşam alanının temelidir. İhtiyacınız olan güvenilir hizmet için ekibimiz hazır.
        </p>
        <div className="w-full max-w-4xl h-[300px] md:h-[450px] relative rounded-3xl overflow-hidden soft-shadow mb-12">
          <StitchImage src={pageImages.hakkimizdaTeam} alt="Profesyonel Tesisat Ekibimiz" fill />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-container/80 to-transparent flex items-end justify-center pb-8">
            <p className="font-headline-md text-headline-md text-white">
              Alanında Uzman, Sertifikalı Personel
            </p>
          </div>
        </div>
        <Link
          href="/iletisim"
          className="bg-primary-container text-on-primary font-label-md text-label-md px-8 py-4 rounded-xl hover:bg-secondary transition-colors soft-shadow flex items-center gap-2"
        >
          <span className="material-symbols-outlined">call</span>
          Servis Talebi Oluştur
        </Link>
      </section>
    </SiteLayout>
  );
}
