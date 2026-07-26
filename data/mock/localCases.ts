import type { LocalCase } from "@/types";

/** No fictional cases — publish only when verified + privacyApproved. */
export const localCases: LocalCase[] = [];

export function getPublishableLocalCases(): LocalCase[] {
  return localCases.filter(
    (item) =>
      item.verificationStatus === "verified" && item.privacyApproved
  );
}

export function getPublishableLocalCaseBySlug(
  slug: string
): LocalCase | undefined {
  return getPublishableLocalCases().find((item) => item.slug === slug);
}
