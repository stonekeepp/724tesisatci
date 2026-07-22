import { getContactRepository } from "@/lib/repositories";
import { contactFormSchema, type ContactFormData } from "@/lib/validation/schemas";
import { emailService } from "./emailService";

export async function submitContactForm(data: ContactFormData) {
  const parsed = contactFormSchema.safeParse(data);
  if (!parsed.success) {
    return { success: false as const, errors: parsed.error.flatten().fieldErrors };
  }

  const lead = await getContactRepository().create(parsed.data);

  try {
    await emailService.sendContactNotification(parsed.data);
  } catch (error) {
    console.error("[contactService] Email notification failed:", error);
  }

  return { success: true as const, data: lead };
}
