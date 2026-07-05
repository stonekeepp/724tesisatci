export function sanitizePhoneInput(value: string): string {
  return value.replace(/[^\d+\s()-]/g, "");
}

export function normalizeTurkishPhoneDigits(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  if (digits.startsWith("90") && digits.length >= 12) {
    return digits.slice(2);
  }
  if (digits.startsWith("0") && digits.length >= 11) {
    return digits.slice(1);
  }
  return digits;
}

export function isValidTurkishMobilePhone(phone: string): boolean {
  const digits = normalizeTurkishPhoneDigits(phone);
  return /^5\d{9}$/.test(digits);
}
