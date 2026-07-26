import type { ExpertProfile } from "@/types";

/**
 * Real reviewers only. Do not invent certificates, MYK numbers, or document URLs.
 * Mesleki belge bilgisi doğrulanamadı. Teknik inceleme, reviewer’ın yazılı onayı
 * ve beyan ettiği saha deneyimi kapsamında kaydedildi.
 */
export const expertProfiles: ExpertProfile[] = [
  {
    id: "mucahit-korkmaz",
    name: "Mücahit Korkmaz",
    role: "Sıhhi tesisat, kombi ve ısıtma sistemleri uygulayıcısı",
    bio: "Temiz ve atık su tesisatları, su kaçağı tespiti, tıkanıklık açma, radyatör sistemleri, kombi bağlantıları, tesisat bakımı ve arıza tespiti alanlarında saha deneyimi bulunduğunu beyan etmektedir.",
    experienceYears: 10,
    specialties: [
      "sıhhi tesisat",
      "su kaçağı tespiti",
      "gider ve tıkanıklık sistemleri",
      "radyatör sistemleri",
      "kalorifer tesisatı",
      "kombi bağlantıları",
      "tesisat bakım ve arıza tespiti",
    ],
    verification: {
      identity: "verified",
      writtenApproval: "verified",
      experienceClaim: "needs-verification",
      credentials: "needs-verification",
    },
    credentials: [],
    internalNotes: [
      "Teknik içerik inceleme formu 26.07.2026 tarihinde doldurulmuştur.",
      "Mesleki belge veya sertifika dosyaları henüz doğrulanmamıştır.",
      "Reviewer için sertifikalı, belgeli veya MYK onaylı ifadeleri kullanılmamalıdır.",
      "Mesleki belge bilgisi doğrulanamadı. Teknik inceleme, reviewer’ın yazılı onayı ve beyan ettiği saha deneyimi kapsamında kaydedildi.",
    ],
  },
];

/** Eligible for technical content review: identity + written approval only. */
export function isExpertEligibleForTechnicalReview(
  profile: ExpertProfile
): boolean {
  return (
    profile.verification.identity === "verified" &&
    profile.verification.writtenApproval === "verified"
  );
}

export function getVerifiedExpertById(
  id: string
): ExpertProfile | undefined {
  return expertProfiles.find(
    (profile) =>
      profile.id === id && isExpertEligibleForTechnicalReview(profile)
  );
}

export function getVerifiedExperts(): ExpertProfile[] {
  return expertProfiles.filter(isExpertEligibleForTechnicalReview);
}

export function getCredentialVerifiedExperts(): ExpertProfile[] {
  return expertProfiles.filter(
    (profile) => profile.verification.credentials === "verified"
  );
}
