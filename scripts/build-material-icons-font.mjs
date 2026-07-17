import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const iconsPath = path.join(__dirname, "material-icons.json");
const outputDir = path.join(root, "public", "fonts");
const outputFont = path.join(outputDir, "material-symbols-subset.woff2");

if (!fs.existsSync(iconsPath)) {
  console.error("Run `node scripts/extract-material-icons.mjs` first.");
  process.exit(1);
}

const icons = JSON.parse(fs.readFileSync(iconsPath, "utf8"));
const iconNames = icons.join(",");
const cssUrl =
  "https://fonts.googleapis.com/css2?" +
  "family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0..1,0" +
  `&icon_names=${encodeURIComponent(iconNames)}` +
  "&display=swap";

const cssResponse = await fetch(cssUrl, {
  headers: {
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
  },
});

if (!cssResponse.ok) {
  console.error(`Failed to fetch Google Fonts CSS: ${cssResponse.status}`);
  process.exit(1);
}

const css = await cssResponse.text();
const woff2Match = css.match(/url\((https:\/\/fonts\.gstatic\.com\/[^)]+)\)/);

if (!woff2Match) {
  console.error("Could not find woff2 URL in Google Fonts CSS response.");
  console.error(css);
  process.exit(1);
}

const fontResponse = await fetch(woff2Match[1]);
if (!fontResponse.ok) {
  console.error(`Failed to download subset font: ${fontResponse.status}`);
  process.exit(1);
}

const fontBuffer = Buffer.from(await fontResponse.arrayBuffer());
fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(outputFont, fontBuffer);

console.log(
  `Built subset font (${(fontBuffer.length / 1024).toFixed(1)} KiB) for ${icons.length} icons -> ${outputFont}`
);
