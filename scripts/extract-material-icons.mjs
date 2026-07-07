import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const scanDirs = ["app", "components", "data"];
const extensions = new Set([".ts", ".tsx"]);

const iconPatterns = [
  /icon:\s*["'`]([a-z0-9_]+)["'`]/g,
  /material-symbols-outlined[^>]*>\s*([a-z0-9_]+)\s*</g,
  /material-symbols-outlined[^>]*>\s*\{\s*open\s*\?\s*["'`]([a-z0-9_]+)["'`]\s*:\s*["'`]([a-z0-9_]+)["'`]/g,
  /material-symbols-outlined[^>]*>\s*\{\s*!isPremium\s*&&\s*\(isOpen\s*\?\s*["'`]([a-z0-9_]+)["'`]\s*:\s*["'`]([a-z0-9_]+)["'`]/g,
];

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === "node_modules" || entry.name === ".next") continue;
      walk(fullPath, files);
    } else if (extensions.has(path.extname(entry.name))) {
      files.push(fullPath);
    }
  }
  return files;
}

function extractIcons(content) {
  const icons = new Set();

  for (const pattern of iconPatterns) {
    const regex = new RegExp(pattern.source, pattern.flags);
    let match;
    while ((match = regex.exec(content)) !== null) {
      for (let i = 1; i < match.length; i += 1) {
        if (match[i]) icons.add(match[i]);
      }
    }
  }

  return icons;
}

const allIcons = new Set();

for (const dir of scanDirs) {
  const fullDir = path.join(root, dir);
  if (!fs.existsSync(fullDir)) continue;
  for (const file of walk(fullDir)) {
    const content = fs.readFileSync(file, "utf8");
    for (const icon of extractIcons(content)) {
      allIcons.add(icon);
    }
  }
}

const sorted = [...allIcons].sort();
const outputPath = path.join(__dirname, "material-icons.json");
fs.writeFileSync(outputPath, `${JSON.stringify(sorted, null, 2)}\n`, "utf8");

console.log(`Extracted ${sorted.length} Material Symbol icons -> ${outputPath}`);
