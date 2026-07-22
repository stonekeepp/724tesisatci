import { chromium } from "playwright";

const BASE = "http://localhost:3000";
const PATHS = ["/", "/hizmetler/kombi-servisi-ve-tesisati", "/kagithane-pimas-acma", "/iletisim"];
const VIEWPORTS = [
  { name: "desktop", width: 1280, height: 800 },
  { name: "mobile", width: 390, height: 844 },
];

(async () => {
  const browser = await chromium.launch({ headless: true });
  const results = [];

  for (const vp of VIEWPORTS) {
    const context = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
    });
    const page = await context.newPage();

    for (const path of PATHS) {
      const url = BASE + path;
      const entry = { viewport: vp.name, path, pass: true, notes: [] };
      try {
        const res = await page.goto(url, { waitUntil: "domcontentloaded", timeout: 30000 });
        if (!res || res.status() >= 400) {
          entry.pass = false;
          entry.notes.push(`status=${res ? res.status() : "null"}`);
        }

        const h1 = page.locator("h1").first();
        await h1.waitFor({ timeout: 10000 });
        const h1Text = ((await h1.innerText()) || "").trim();
        if (!h1Text) {
          entry.pass = false;
          entry.notes.push("empty H1");
        }
        if (/schedule/i.test(h1Text)) {
          entry.pass = false;
          entry.notes.push("H1 contains schedule");
        }

        const h1Box = await h1.boundingBox();
        if (h1Box) {
          if (h1Box.x < -2 || h1Box.x + h1Box.width > vp.width + 2) {
            entry.pass = false;
            entry.notes.push("H1 horizontal overflow");
          }
        }

        const header = page.locator("header").first();
        if (await header.count()) {
          const headerBox = await header.boundingBox();
          if (headerBox && headerBox.width > vp.width + 4) {
            entry.pass = false;
            entry.notes.push("header wider than viewport");
          }
        }

        const scrollWidth = await page.evaluate(() => ({
          sw: document.documentElement.scrollWidth,
          cw: document.documentElement.clientWidth,
        }));
        if (scrollWidth.sw > scrollWidth.cw + 8) {
          entry.pass = false;
          entry.notes.push(`page horizontal scroll ${scrollWidth.sw}>${scrollWidth.cw}`);
        }

        // asset checks on relevant pages
        if (path === "/" || path.includes("kombi")) {
          const logo = await page.evaluate(async () => {
            const r = await fetch("/logo.webp", { method: "HEAD" });
            return r.status;
          });
          if (logo !== 200) {
            entry.pass = false;
            entry.notes.push(`logo.webp=${logo}`);
          }
        }
        if (path.includes("kombi")) {
          const hero = await page.evaluate(async () => {
            const r = await fetch("/images/kombi-servisi-hero.webp", { method: "HEAD" });
            return r.status;
          });
          if (hero !== 200) {
            entry.pass = false;
            entry.notes.push(`kombi hero=${hero}`);
          }
        }

        entry.h1 = h1Text.slice(0, 80);
      } catch (e) {
        entry.pass = false;
        entry.notes.push(String(e.message || e));
      }
      results.push(entry);
    }
    await context.close();
  }

  await browser.close();
  const failed = results.filter((r) => !r.pass);
  console.log(JSON.stringify({ total: results.length, failed: failed.length, results }, null, 2));
  process.exit(failed.length ? 1 : 0);
})();
