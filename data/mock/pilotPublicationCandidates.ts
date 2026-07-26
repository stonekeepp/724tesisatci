/**
 * Pilot publication candidates for PR-5A / PR-5B review workflow.
 * Being a pilot does NOT mean published or publication-ready.
 */
export const pilotPublicationCandidateSlugs = [
  "musluklar-kapaliyken-su-sayaci-neden-doner",
  "tikaniklik-acildiktan-sonra-neden-tekrar-eder",
  "petegin-alti-soguk-ustu-sicaksa-ne-yapilmali",
] as const;

export type PilotPublicationCandidateSlug =
  (typeof pilotPublicationCandidateSlugs)[number];

export function isPilotPublicationCandidate(slug: string): boolean {
  return (pilotPublicationCandidateSlugs as readonly string[]).includes(slug);
}
