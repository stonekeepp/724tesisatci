import { z } from "zod";

export const contactFormSchema = z.object({
  fullName: z.string().min(2, "Ad soyad en az 2 karakter olmalıdır"),
  phone: z.string().min(10, "Geçerli bir telefon numarası giriniz"),
  district: z.string().optional(),
  serviceType: z.string().optional(),
  description: z.string().min(10, "Açıklama en az 10 karakter olmalıdır"),
});

export const blogFormSchema = z.object({
  title: z.string().min(3, "Başlık zorunludur"),
  slug: z
    .string()
    .min(3, "Slug zorunludur")
    .regex(/^[a-z0-9-]+$/, "Slug sadece küçük harf, rakam ve tire içerebilir"),
  excerpt: z.string().min(10, "Özet en az 10 karakter olmalıdır"),
  content: z.string().min(20, "İçerik en az 20 karakter olmalıdır"),
  category: z.string().min(2, "Kategori zorunludur"),
  status: z.enum(["draft", "published"]),
  seoTitle: z.string().max(70, "Meta title en fazla 70 karakter olmalıdır"),
  seoDescription: z.string().max(160, "Meta description en fazla 160 karakter olmalıdır"),
  relatedServices: z.array(z.string()).default([]),
  publishedAt: z.string().optional(),
});

export const loginSchema = z.object({
  username: z.string().min(1),
  password: z.string().min(1),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
export type BlogFormData = z.infer<typeof blogFormSchema>;
