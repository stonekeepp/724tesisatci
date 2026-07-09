/**
 * Harici lh3.googleusercontent.com görsellerini public/images altına indirir.
 * Kullanım: node scripts/migrate-external-images.mjs
 */
import { writeFileSync, mkdirSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const outDir = join(root, "public", "images");

const images = [
  {
    file: "hakkimizda-hero.webp",
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuAWNBOn-uLuDEMtrw1omAl2PsDWQJBSwL0cu9VYYfqjVl2KFiH7X4imwVCKewvOtunKxCvsdRjGZD0Et9Y3fiMwOzgst3ZOR_A0qcoQufn_8VshEx4BlMX_rXCq6m58gwQFQ2MHU0_v0ztsmGAx6Sz_I0Fe1UQrk6pWBRwxHh3bs_2_WyhFhHPbidAKprBAn7H6YLArJkBF2dbloFO2Ge7efHcn71ueblTxI3sKUHRZQXXstd8v-fYRyA",
  },
  {
    file: "hakkimizda-leak-device.webp",
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDGPTkRQquVx0R7THB_JVFrfrrdiJgpNqpN83QT1v_c5tqunwO8p0yFMq8mm0vcfTqyeGZ7sFAzB_tgvIYTY2GphMWhUZgYinJAWdqNvZj-ECy5nVjJjb7zgfv7lWIClz2YU0eDwFnsxoYrV3c6T4UPe7qAVbj8RrkjObNinciykeux1dDiA-VkWrgJ9InRP2oWz0T0Xvmf9oQ1WyudoizjHk3Tf0d8ntO2EBHbSt3212e32OvccHDqvA",
  },
  {
    file: "hakkimizda-team.webp",
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDCIOlqPpoM-k6-4h1-Ju1aFE4SYcHY7bkPRviY5zWimOjG476gfnXobylrdRgXqpdsMOQPngr3m5EBkCZMnZoljlnKIi-zQReqHSZ_MNednBH7NDGTFfJc3FrtaYvUcmZNEAifte48q449HhDVg73VdNlkjbWGhLUlbQvjW8xuIi2c5nu6q6EfbOXu9fDgtr5wBHSDMFsl0DDQDo3yvCG91fi6_Cr_pHugTB7bX3chUMyvMUENOreq8A",
  },
  {
    file: "sss-cta.webp",
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBznL5vkpIw0o5_M_-3nU6odpu1XtfjwjyJtJNFJ-rHDlgu343LhrYkXRrsB7_X1QMW1VGiX6-lbWbYzFhZzNLN-xfpUDU5E7at_RVjKagPne5iFcHQSGxHygzn2riX4TJQgRFJHp5UEP_VCfuhuVVko6zOlaeWeliElw7wKNB6vOUOaj8lVHpLiev-bGtp2ujnMcuFB4HJ6BrQevA8OX1urKddiJYQ_aGNWrEmQYELbgsEsiedQUI3Hg",
  },
  {
    file: "su-tesisati-hero.webp",
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDz9iXBWaIPpbcJSdk0IT6zIA-NfMGKgZlMI4ElKFgGILwsxGeqVaseGZAolynEYnzjLEpQQKxESXxHee1Tayde0vLaYRWTvi1i61ujca4J4u2LQCAcI3wAXj313ZQR3tx7e1NOrordrRv8smz1a-KqjlLo8k4RbR7DH2VgzOugnHIJy1Iau6HoVTUepdJHF25OQp-S2X5WowJDvlU-ug5n6V00xESlejNlpdyZ5U3uKJopcxZnBKnylQ",
  },
  {
    file: "kombi-servisi-hero.webp",
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBmU3I_hIbaUkF0QynbNrFM1H7OQ5gRnoz9oiPWXq1rUGfZ7V4AjrgHV3ZF6CwojkQ5Muym2dlQvE_SqDE4cSGVfl8Wtu5pNPb3a1L9KSjdBYB9n_i0BGWuYGQOcChSXsQH7l0DKy1ICNHMYLvjHreeWmvMKlnBXlvpjH_fg_Pwo1bZLJz8NFx9v2AWszCj7wS2XlZ_nS8IaVHQc7RGeD92walH561ypcQ7jZFM01JKlEs1ZXQONXqY4Q",
  },
  {
    file: "su-kacagi-tespit-hero.webp",
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuAPpZ7yp-v-DIqPvKzKJd6wSSKZ14tyffvxCp7c494fsSu5SVodEqLcD3ok9sE9DbkccyHuv7IpberAuRX_zr8xXJ-6ys01TSUb2IXN0V7wQNSjecm9t6LnGzb6qVmIHAsLPWT9QrTKphMof_phVAA_ABWj4-joCjdfiNZbk-K_8ZBLdKNzGj-WA5V3r0qUaTbgRC4P1kU9De-zyxmA7bPG8TU-dpdcWfmOVm1yJLSWRMzcYmjIVdatEQ",
  },
  {
    file: "tikaniklik-acma-hero.webp",
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuB8j6e9A-AseECbShGJxTAvLHIZq30v39FOapzByT64QWj_9f4E1WEeZNn3MxJYXGcjh8kPVl20VIxwAKZO7qdaLXTOwg92Bc6Vcde_2uf1kKmHhOE-wy-l-sFGULXb05DQDeHsb2wafWCAfiXc4fxbyav7opB7zsBspBfN6agx5Sl_-rys_htOLOU2ONqh592Id_mveyi-ejuVl5UvGcLjaltMHNW1DTM1Gai-0TfE1owKF4fN6Xk3tA",
  },
  {
    file: "petek-temizleme-hero.webp",
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCGQs1tBkFUfZYHv2feXSa-mD_EULzCU6e5fklKiXfevDKgzTYqk-9aB2wJIgFGIaurX7fh5dCwmwImIjeOsZZmWIhC4joo2vmt6A1CiFSA-AP_1oXqStP1n_-WXg-7uC3IpjExAWm_-EnmzAqAQXSOefheKCC2CqugygBFsZou6NN-WUMxBrz5-yk5dnOhTD8-vV3jb5Y7fZtXmGvndkKnEGOJ1POefMZt9RuBIECZX7gLeP7jmWgaSg",
  },
  {
    file: "kamerali-tesisat-hero.webp",
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuAFMZ7Ps8hWc0Kpp4BLitfl0dPdyVjMSe7kVmNu-31JJG2KdHtFPmbjSdOv27GuXBgoF0sLodd09Zlv0VDuMjl6Hs8i970XoRUlY6kF9UvfZjM0_zmO3Kllv2EDx07Kte7q3GEp2t13yijjw7XlnOXMhDtOUwfhnn0K722IXQVkGlP70vRXrLqoZUDDGSWKvHr_Dx3cySYKjHQeahefAVnO3354BRPJvnpRuUY8-4PRgSkPSgCU-has8A",
  },
  {
    file: "dogalgaz-tesisati-hero.webp",
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuD4QLlN-gZZ0tKHo-JqNR7q-KixshtbT3_MQbEsbGQjK-3N1vPzcKjtkRIzdIOU2onEPPjOu6roJXLRXs20hpOp3Opn0bQnM9U_4OFZjZ3ziuNzFV1Deo9-jGcGyh_vtfddppfuvBnlIvzSruGK6GFDi6SS2TpDAWIFtNFM_zS2GnDwbEp3qTVn1n50ZeFU_McudLESi_ohi_k9y1N7TdN7xVPduqTwt06hB_O0RkZh33spIa_krdYndA",
  },
  {
    file: "pimas-yikama-hero.webp",
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDQmjt3NEgWXnMK9YatotsW4oBDwaCXfN6C0w-k0Bf9jxqzLjl2-bJhbqcsBvBG3uOKtfpZyKH7wTtLiyeMj5YebyXjj_msf-z8LTwfGz4n1gkJITrA7DNsDWTN4E56LXGeb5UhYL4t0lhpSJCqSFuC4u_DdHmndMa3cNE0EKUOQpZ-OUZLCrNuZCyj2-AVgCsVQXDKd4OFx72ukjRTtbyGkmB-3nyyRCgCLEkrQepowr4IQxVbYhXkxQ",
  },
  {
    file: "blog-su-kacagi-belirtileri.webp",
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCbZCICSvVeE2BcmHX4mCRGFc8_ddpAaip6j4tyURz0a7XoLpy67QHvY4GhE6P4LrKosC7gkd9DVfZ3UF5STUFvsxt6qBcdYW8kYq4Q_v6Iun-9J3ZGJ6AwFzjmksbW0zwQ1UV4tlkTbZcqL4WHu8DvvF2SGU6IqqGwP45YFGnmbD0wag9FGJxcpBSu2w9W9vas4j7JLlTWIOrg3BxuMKBYzURxX7_yPsDJ_2LZdvfJM3EK-2wL2e-66Q",
  },
  {
    file: "blog-kombi-basinci.webp",
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuAu4WWjgR46_SPxV-H3BZ0Gr1mk20LUjGrCncZTr5D8EBE7NJXo5lN71iWZV4w7iYWCicW_ZmAFcMSQazThYkf5HPUfoQak5mNm08OzrGbFUySrXgnTs974hRua95RrnKYKvg_WPpOA3cvnvrx-S805Rq7Ugs-Bn-5We0EsTnNkSiNcEyWIVY2mNek8yOYYszBghrhBQedy5eX2BjKfpZw954cbrEjbz7uy-5yGXNzs6yU_Vuub-WgyOw",
  },
  {
    file: "blog-lavabo-tikanikligi.webp",
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBuA6pwckSo8qdApTM6ZaKK9hjNl1-BsEQF4p0Z9nuoGhy-5G6t-jkydoU87hhKtrp86q54dUFVQggCSGbPFGTfxA7zqkP-eOXBKNyNaZmdP6KDHedglaC9cF7CfKkFA-baCOKFQUuui-szRvZl3lmGLZ9BhkDrGJLQQz0F08-q6A10UrjnLultpuXLmbLQbYA8_E8XPBzVkTjmL8O056XFgB9K3gy1QsYfcSG1TbeiPQYymxkzI1XhUw",
  },
  {
    file: "blog-periyodik-bakim.webp",
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuAy79xMFEK-v071W7UnrdXGTvhk5E3U6C1E8kRYc4wNcOkInNSn-nJZoTFzC1FpeoaBASeT5wXX0b9go5qHrE0fH4Mejuh4a8rb4YEk33Y4N3sJByMt87GezRVkSh5XGZWlewE1NdnWzc0_NOyfsi18ojRpiMI-UqzqP1-ivjXw1NE5etyuTjFWynTkhqgwMuRsVRhDjEoPDpxPMTaBx671yqP0r-jIMuAVnRdcFHTQ2iEEFFjoI2V3mg",
  },
];

if (!existsSync(outDir)) {
  mkdirSync(outDir, { recursive: true });
}

for (const { file, url } of images) {
  const dest = join(outDir, file);
  process.stdout.write(`Downloading ${file}... `);
  const res = await fetch(url);
  if (!res.ok) {
    console.error(`FAILED (${res.status})`);
    process.exitCode = 1;
    continue;
  }
  const buf = Buffer.from(await res.arrayBuffer());
  writeFileSync(dest, buf);
  console.log(`OK (${buf.length} bytes)`);
}

console.log("Done.");
