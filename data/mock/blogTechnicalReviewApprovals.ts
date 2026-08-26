import type { TechnicalReviewApproval } from "@/types";

/**
 * Real technical-review approvals submitted by eligible reviewers.
 * Do not invent certificate verification claims in notes.
 */
export const blogTechnicalReviewApprovals: TechnicalReviewApproval[] = [
  {
    slug: "musluklar-kapaliyken-su-sayaci-neden-doner",
    reviewerExpertId: "mucahit-korkmaz",
    reviewedAt: "2026-07-26T12:00:00+03:00",
    decision: "approved",
    approvedItemTopics: [
      "Ana vana karşılaştırma yönteminin güvenli anlatımı",
      "Rezervuar boya testi açıklaması",
      "Ortak bina hattı / paylaşımlı tesisat ifadeleri",
    ],
    notes:
      "Sayaç hareketi, rezervuar kaçağı, ana vana ön kontrolü ve riskli müdahale sınırları teknik açıdan incelenerek uygun bulunmuştur. Reviewer kimliği ve yazılı teknik onayı doğrulanmıştır; mesleki belge dosyaları bu kayıt kapsamında doğrulanmamıştır.",
    evidenceReferences: [
      "seo-audits/pr-5b/TECHNICAL-REVIEW-MUCAHIT-KORKMAZ.md",
    ],
  },
  {
    slug: "tikaniklik-acildiktan-sonra-neden-tekrar-eder",
    reviewerExpertId: "mucahit-korkmaz",
    reviewedAt: "2026-07-26T12:10:00+03:00",
    decision: "approved",
    approvedItemTopics: [
      "Tekrarlayan tıkanıklık nedenleri ve nedensellik dili",
      "Kimyasal ürün güvenlik uyarıları",
      "Hizmet ve iç bağlantı eşlemesi",
    ],
    notes:
      "Tekrarlayan tıkanıklık nedenleri, kimyasal güvenlik uyarıları ve hat/hizmet eşlemesi teknik açıdan incelenerek uygun bulunmuştur. Reviewer kimliği ve yazılı teknik onayı doğrulanmıştır; mesleki belge dosyaları bu kayıt kapsamında doğrulanmamıştır.",
    evidenceReferences: [
      "seo-audits/pr-5b/TECHNICAL-REVIEW-MUCAHIT-KORKMAZ.md",
    ],
  },
  {
    slug: "petegin-alti-soguk-ustu-sicaksa-ne-yapilmali",
    reviewerExpertId: "mucahit-korkmaz",
    reviewedAt: "2026-07-26T12:20:00+03:00",
    decision: "approved",
    approvedItemTopics: [
      "Petek temizliği gereklilik iddiası",
      "Pompa ve dolaşım ifadeleri",
      "Dengeleme ve vana ayrımı",
    ],
    notes:
      "Petek altı soğuk / üstü sıcak belirtileri, temizlik–dengeleme ayrımı ve kullanıcı müdahale sınırları teknik açıdan incelenerek uygun bulunmuştur. Reviewer kimliği ve yazılı teknik onayı doğrulanmıştır; mesleki belge dosyaları bu kayıt kapsamında doğrulanmamıştır.",
    evidenceReferences: [
      "seo-audits/pr-5b/TECHNICAL-REVIEW-MUCAHIT-KORKMAZ.md",
    ],
  },
  {
    slug: "robotla-tikaniklik-acma-ile-pimas-yikama-farki",
    reviewerExpertId: "mucahit-korkmaz",
    reviewedAt: "2026-08-01T01:00:00+03:00",
    decision: "approved",
    approvedItemTopics: [
      "Robot vs pimaş karşılaştırma dili",
      "Basınç ve ekipman uyarı ifadeleri",
      "Kimyasal karıştırma uyarısı",
    ],
    notes:
      "Robot/pimaş yöntem ayrımı, basınç uyarıları ve kimyasal güvenlik ifadeleri teknik açıdan incelenerek uygun bulunmuştur. Reviewer kimliği ve yazılı teknik onayı doğrulanmıştır; mesleki belge dosyaları bu kayıt kapsamında doğrulanmamıştır.",
    evidenceReferences: [
      "seo-audits/pr-5b/TECHNICAL-REVIEW-MUCAHIT-KORKMAZ.md",
    ],
  },
  {
    slug: "birden-fazla-gider-ayni-anda-neden-yavaslar",
    reviewerExpertId: "mucahit-korkmaz",
    reviewedAt: "2026-08-01T01:15:00+03:00",
    decision: "approved",
    approvedItemTopics: [
      "Ortak hat / ana gider ayrım mantığı",
      "Riskli DIY önerileri kontrolü",
      "Yönetim bilgilendirme ve ortak alan dili",
    ],
    notes:
      "Ortak hat ayrımı, riskli DIY sınırları ve yönetim dili teknik açıdan incelenerek uygun bulunmuştur. Reviewer kimliği ve yazılı teknik onayı doğrulanmıştır; mesleki belge dosyaları bu kayıt kapsamında doğrulanmamıştır.",
    evidenceReferences: [
      "seo-audits/pr-5b/TECHNICAL-REVIEW-MUCAHIT-KORKMAZ.md",
    ],
  },
  {
    slug: "alt-kata-su-sizmasinin-kaynagi-nasil-bulunur",
    reviewerExpertId: "mucahit-korkmaz",
    reviewedAt: "2026-08-01T01:30:00+03:00",
    decision: "approved",
    approvedItemTopics: [
      "Isıtma tesisatı kaynaklı sızıntı belirtileri",
      "Ortak kolon / bina hattı sorumluluk ifadeleri",
      "Üst kat komşu iletişimi önerisi",
      "Çatı/cephe kaynaklı ihtimal paragrafı",
    ],
    notes:
      "Alt kata sızıntı kaynak ayrımı, ortak hat dili ve komşu iletişim tonu teknik açıdan incelenerek uygun bulunmuştur. Reviewer kimliği ve yazılı teknik onayı doğrulanmıştır; mesleki belge dosyaları bu kayıt kapsamında doğrulanmamıştır.",
    evidenceReferences: [
      "seo-audits/pr-5b/TECHNICAL-REVIEW-MUCAHIT-KORKMAZ.md",
    ],
  },
  {
    slug: "duvar-nemi-su-kacagi-mi-yogusma-mi",
    reviewerExpertId: "mucahit-korkmaz",
    reviewedAt: "2026-08-26T10:00:00+03:00",
    decision: "approved",
    approvedItemTopics: [
      "Isı köprüsü açıklamasının teknik doğruluğu",
      "Zeminden yükselen nem ile tesisat kaçağı ayrımı",
      "Küf ile ilgili ifadelerin kapsamı",
    ],
    notes:
      "Duvar nemi ayrımı, ısı köprüsü ve küf kapsamı teknik açıdan incelenerek uygun bulunmuştur. Reviewer kimliği ve yazılı teknik onayı doğrulanmıştır; mesleki belge dosyaları bu kayıt kapsamında doğrulanmamıştır.",
    evidenceReferences: [
      "seo-audits/pr-5b/TECHNICAL-REVIEW-MUCAHIT-KORKMAZ.md",
    ],
  },
  {
    slug: "kombi-basinci-neden-surekli-duser",
    reviewerExpertId: "mucahit-korkmaz",
    reviewedAt: "2026-08-26T10:15:00+03:00",
    decision: "approved",
    approvedItemTopics: [
      "Basınç aralığı ifadeleri",
      "Genleşme tankı ve kaçak ayrımı",
      "Kombi alt bağlantı rakorları",
      "Emniyet ventili güvenlik uyarısı",
    ],
    notes:
      "Sürekli basınç düşüşü nedenleri, genleşme tankı ayrımı ve emniyet ventili uyarıları teknik açıdan incelenerek uygun bulunmuştur. Reviewer kimliği ve yazılı teknik onayı doğrulanmıştır; mesleki belge dosyaları bu kayıt kapsamında doğrulanmamıştır.",
    evidenceReferences: [
      "seo-audits/pr-5b/TECHNICAL-REVIEW-MUCAHIT-KORKMAZ.md",
    ],
  },
  {
    slug: "kombi-arizasi-ile-tesisat-arizasi-nasil-ayirt-edilir",
    reviewerExpertId: "mucahit-korkmaz",
    reviewedAt: "2026-08-26T10:30:00+03:00",
    decision: "approved",
    approvedItemTopics: [
      "Hata kodu genellemeleri",
      "Senaryo bazlı ayrım listesi",
      "Basınç düşüşü ile tesisat ilişkisi",
    ],
    notes:
      "Kombi/tesisat ön değerlendirme senaryoları ve hata kodu dili teknik açıdan incelenerek uygun bulunmuştur. Reviewer kimliği ve yazılı teknik onayı doğrulanmıştır; mesleki belge dosyaları bu kayıt kapsamında doğrulanmamıştır.",
    evidenceReferences: [
      "seo-audits/pr-5b/TECHNICAL-REVIEW-MUCAHIT-KORKMAZ.md",
    ],
  },
  {
    slug: "musluk-neden-damlar",
    reviewerExpertId: "mucahit-korkmaz",
    reviewedAt: "2026-08-26T10:45:00+03:00",
    decision: "approved",
    approvedItemTopics: [
      "Conta ve kartuş ayrımı",
      "Basınç etkisi ifadeleri",
      "DIY müdahale sınırları",
    ],
    notes:
      "Musluk damlaması conta/kartuş ayrımı, basınç etkisi ve DIY sınırları teknik açıdan incelenerek uygun bulunmuştur. Reviewer kimliği ve yazılı teknik onayı doğrulanmıştır; mesleki belge dosyaları bu kayıt kapsamında doğrulanmamıştır.",
    evidenceReferences: [
      "seo-audits/pr-5b/TECHNICAL-REVIEW-MUCAHIT-KORKMAZ.md",
    ],
  },
  {
    slug: "rezervuar-neden-su-akiyor",
    reviewerExpertId: "mucahit-korkmaz",
    reviewedAt: "2026-08-26T11:00:00+03:00",
    decision: "approved",
    approvedItemTopics: [
      "Şamandıra ve doldurma ventili ayrımı",
      "Gıda boyası testi açıklaması",
      "Gömme rezervuar erişim dili",
    ],
    notes:
      "Rezervuar akış nedenleri, boya testi ve gömme erişim dili teknik açıdan incelenerek uygun bulunmuştur. Reviewer kimliği ve yazılı teknik onayı doğrulanmıştır; mesleki belge dosyaları bu kayıt kapsamında doğrulanmamıştır.",
    evidenceReferences: [
      "seo-audits/pr-5b/TECHNICAL-REVIEW-MUCAHIT-KORKMAZ.md",
    ],
  },
];
