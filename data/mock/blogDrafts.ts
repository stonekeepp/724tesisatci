import type { BlogPost } from "@/types";
import { draftBlogPosts as suKacagiDrafts } from "./blogDrafts.su-kacagi";
import { draftBlogPostsTikaniklik } from "./blogDrafts.tikaniklik";
import { draftBlogPostsIsitma } from "./blogDrafts.isitma";

/** PR-2 topical authority guides (published wave + weekly topical posts). */
export const draftBlogPosts: BlogPost[] = [
  ...suKacagiDrafts,
  ...draftBlogPostsTikaniklik,
  ...draftBlogPostsIsitma,
];

export const PR2_DRAFT_SLUGS = [
  "musluklar-kapaliyken-su-sayaci-neden-doner",
  "alt-kata-su-sizmasinin-kaynagi-nasil-bulunur",
  "duvar-nemi-su-kacagi-mi-yogusma-mi",
  "tikaniklik-acildiktan-sonra-neden-tekrar-eder",
  "robotla-tikaniklik-acma-ile-pimas-yikama-farki",
  "birden-fazla-gider-ayni-anda-neden-yavaslar",
  "kombi-basinci-neden-surekli-duser",
  "petegin-alti-soguk-ustu-sicaksa-ne-yapilmali",
  "kombi-arizasi-ile-tesisat-arizasi-nasil-ayirt-edilir",
  "musluk-neden-damlar",
  "rezervuar-neden-su-akiyor",
] as const;
