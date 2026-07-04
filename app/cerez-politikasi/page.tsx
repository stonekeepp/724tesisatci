import { SiteLayout } from "@/components/layout/SiteLayout";
import { buildMetadata } from "@/lib/services/seoService";
import { staticPageSeo } from "@/data/mock/seo";

export const metadata = buildMetadata(staticPageSeo["cerez-politikasi"]);

export default function CerezPolitikasiPage() {
  return (
    <SiteLayout>
      <section className="py-section-padding bg-surface-container-lowest px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto max-w-3xl">
          <h1 className="font-display-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-8">
            Çerez Politikası
          </h1>
          <div className="space-y-6 font-body-md text-body-md text-on-surface-variant leading-relaxed">
            <p>
              724 Tesisatçı web sitesi, kullanıcı deneyimini iyileştirmek ve site trafiğini analiz etmek amacıyla çerezler kullanabilir.
            </p>
            <h2 className="font-headline-md text-headline-md text-primary pt-4">
              Çerez Nedir?
            </h2>
            <p>
              Çerezler, web sitesini ziyaret ettiğinizde tarayıcınıza kaydedilen küçük metin dosyalarıdır. Site işlevselliği ve analitik amaçlarla kullanılır.
            </p>
            <h2 className="font-headline-md text-headline-md text-primary pt-4">
              Kullanılan Çerez Türleri
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Zorunlu çerezler: Sitenin temel işlevleri için gereklidir.</li>
              <li>Analitik çerezler: Ziyaretçi istatistiklerini anonim olarak toplar.</li>
            </ul>
            <h2 className="font-headline-md text-headline-md text-primary pt-4">
              Çerez Tercihleri
            </h2>
            <p>
              Tarayıcı ayarlarınızdan çerezleri devre dışı bırakabilirsiniz. Ancak bu durumda sitenin bazı özellikleri düzgün çalışmayabilir.
            </p>
            <h2 className="font-headline-md text-headline-md text-primary pt-4">
              İletişim
            </h2>
            <p>
              Çerez politikası hakkında sorularınız için info@724tesisatci.com adresinden bize ulaşabilirsiniz.
            </p>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
