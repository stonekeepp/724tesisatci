import Link from "next/link";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { buildMetadata } from "@/lib/services/seoService";
import { staticPageSeo } from "@/data/mock/seo";

export const metadata = buildMetadata(staticPageSeo["gizlilik-politikasi"]);

export default function GizlilikPolitikasiPage() {
  return (
    <SiteLayout>
      <section className="py-section-padding bg-surface-container-lowest px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto max-w-3xl">
          <h1 className="font-display-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-8">
            Gizlilik Politikası / KVKK
          </h1>
          <div className="space-y-6 font-body-md text-body-md text-on-surface-variant leading-relaxed">
            <p>
              724 Tesisatçı olarak kişisel verilerinizin güvenliği bizim için önemlidir. Bu gizlilik politikası, web sitemizi ziyaret ettiğinizde ve hizmetlerimizden yararlandığınızda toplanan verilerin nasıl işlendiğini açıklar.
            </p>
            <h2 className="font-headline-md text-headline-md text-primary pt-4">
              Toplanan Veriler
            </h2>
            <p>
              İletişim formu aracılığıyla ad soyad, telefon numarası, adres bilgisi ve hizmet talebi açıklaması toplanabilir. Bu veriler yalnızca hizmet sunumu amacıyla kullanılır.
            </p>
            <h2 className="font-headline-md text-headline-md text-primary pt-4">
              Verilerin Kullanım Amacı
            </h2>
            <p>
              Toplanan kişisel veriler; servis talebinizin karşılanması, sizinle iletişim kurulması ve yasal yükümlülüklerin yerine getirilmesi amacıyla işlenir.
            </p>
            <h2 className="font-headline-md text-headline-md text-primary pt-4">
              KVKK Haklarınız
            </h2>
            <p>
              6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında verilerinize erişim, düzeltme, silme ve itiraz etme haklarına sahipsiniz. Talepleriniz için info@724tesisatci.com adresine başvurabilirsiniz.
            </p>
            <h2 className="font-headline-md text-headline-md text-primary pt-4">
              İletişim
            </h2>
            <p>
              Gizlilik politikası hakkında sorularınız için info@724tesisatci.com adresinden bize ulaşabilirsiniz.
            </p>
            <div className="flex flex-wrap gap-4 pt-6 border-t border-outline-variant">
              <Link href="/cerez-politikasi" className="text-secondary font-label-md hover:text-primary transition-colors">
                Çerez Politikası
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
