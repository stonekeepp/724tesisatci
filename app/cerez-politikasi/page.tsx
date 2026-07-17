import Link from "next/link";
import { CookiePreferencesButton } from "@/components/analytics/AnalyticsClient";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { ContactEmailLink } from "@/components/ui/ContactEmailLink";
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
              724 Tesisatçı web sitesi, kullanıcı deneyimini iyileştirmek ve
              site performansını analiz etmek amacıyla, izniniz doğrultusunda
              analitik çerezler kullanır.
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
              <li>
                Analitik çerezler: Google Analytics 4 aracılığıyla ziyaret
                edilen sayfalar, oturum ve etkileşim bilgileri, yaklaşık konum,
                cihaz/tarayıcı bilgileri ile sayfa performans metriklerini
                toplar.
              </li>
            </ul>
            <h2 className="font-headline-md text-headline-md text-primary pt-4">
              Google Analytics 4
            </h2>
            <p>
              Bu veriler yalnızca sitenin kullanımını, teknik performansını ve
              hizmet sayfalarının faydasını değerlendirmek için kullanılır.
              Reklam kişiselleştirmesi yapılmaz; Google reklam depolama ve
              kişiselleştirme sinyalleri kapalı tutulur.
            </p>
            <h2 className="font-headline-md text-headline-md text-primary pt-4">
              Çerez Tercihleri
            </h2>
            <p>
              Analitik çerezleri kabul edebilir veya reddedebilirsiniz.
              Tercihiniz verilene kadar analitik depolama kapalıdır. Kararınızı
              aşağıdaki düğmeyle daha sonra değiştirebilir; ayrıca tarayıcı
              ayarlarınızdan kayıtlı çerezleri ve site verilerini
              temizleyebilirsiniz.
            </p>
            <div>
              <CookiePreferencesButton />
            </div>
            <h2 className="font-headline-md text-headline-md text-primary pt-4">
              İletişim
            </h2>
            <p>
              Çerez politikası hakkında sorularınız için{" "}
              <ContactEmailLink /> adresinden bize ulaşabilirsiniz.
            </p>
            <div className="flex flex-wrap gap-4 pt-6 border-t border-outline-variant">
              <Link href="/gizlilik-politikasi" className="text-secondary font-label-md hover:text-primary transition-colors">
                Gizlilik Politikası
              </Link>
              <Link href="/iletisim" className="text-secondary font-label-md hover:text-primary transition-colors">
                İletişim
              </Link>
              <Link href="/" className="text-secondary font-label-md hover:text-primary transition-colors">
                Ana Sayfa
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
