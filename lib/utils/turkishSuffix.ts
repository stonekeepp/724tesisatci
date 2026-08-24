/**
 * Turkish locative for proper nouns (place names).
 * Handles da/de/ta/te and known -nda/-nde cases (Beyoğlu'nda, Zeytinburnu'nda).
 */
const HARD_CONSONANTS = new Set([
  "f",
  "s",
  "t",
  "k",
  "ç",
  "ş",
  "h",
  "p",
]);

const VOWELS = new Set(["a", "e", "ı", "i", "o", "ö", "u", "ü"]);

/** Istanbul / TR place names that take buffer -n- before locative. */
const N_BUFFER_STEMS = new Set(["beyoğlu", "zeytinburnu"]);

function toLowerTr(ch: string): string {
  if (ch === "I") return "ı";
  if (ch === "İ") return "i";
  return ch.toLocaleLowerCase("tr-TR");
}

function toLowerTrWord(value: string): string {
  return [...value].map(toLowerTr).join("");
}

function lastVowel(value: string): string | null {
  for (let i = value.length - 1; i >= 0; i--) {
    const lower = toLowerTr(value[i]);
    if (VOWELS.has(lower)) return lower;
  }
  return null;
}

function isFrontVowel(vowel: string): boolean {
  return vowel === "e" || vowel === "i" || vowel === "ö" || vowel === "ü";
}

function stripTrailingApostropheJunk(value: string): string {
  return value.replace(/['''][a-zçğıöşü]*$/i, "").trim();
}

/** Returns only the locative suffix: da | de | ta | te | nda | nde */
export function getTurkishLocativeSuffixOnly(value: string): string {
  const trimmed = stripTrailingApostropheJunk(value.trim());
  if (!trimmed) return "";

  const lastLower = toLowerTr(trimmed[trimmed.length - 1]);
  const vowel = lastVowel(trimmed);
  const front = vowel ? isFrontVowel(vowel) : true;
  const hard = HARD_CONSONANTS.has(lastLower);
  const needsN = N_BUFFER_STEMS.has(toLowerTrWord(trimmed));

  if (needsN) {
    return front ? "nde" : "nda";
  }
  if (hard) {
    return front ? "te" : "ta";
  }
  return front ? "de" : "da";
}

/**
 * Turkish locative case with apostrophe for proper nouns.
 * Examples: Adalar'da, Beşiktaş'ta, Kadıköy'de, Beyoğlu'nda
 */
export function getTurkishLocative(value: string): string {
  if (typeof value !== "string") return "";
  const trimmed = stripTrailingApostropheJunk(value.trim());
  if (!trimmed) return "";
  const suffix = getTurkishLocativeSuffixOnly(trimmed);
  return `${trimmed}'${suffix}`;
}

/** @deprecated Alias — prefer getTurkishLocative */
export function getTurkishLocativeSuffix(value: string): string {
  return getTurkishLocative(value);
}
