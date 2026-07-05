const fs = require("fs");
const path = require("path");

async function main() {
  let sharp;
  try {
    sharp = require("sharp");
  } catch {
    console.error("sharp not installed");
    process.exit(1);
  }

  const input = path.join(__dirname, "../public/logo.png");
  const output = path.join(__dirname, "../public/logo-dark.png");

  const { data, info } = await sharp(input)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const lum = 0.299 * r + 0.587 * g + 0.114 * b;

    if (lum > 240) {
      data[i + 3] = 0;
      continue;
    }
    if (lum < 60) {
      data[i] = 224;
      data[i + 1] = 227;
      data[i + 2] = 229;
      continue;
    }
    if (b > r && b > g) {
      data[i] = 118;
      data[i + 1] = 220;
      data[i + 2] = 255;
    }
  }

  await sharp(data, {
    raw: { width: info.width, height: info.height, channels: 4 },
  })
    .png()
    .toFile(output);

  console.log("Created", output, info.width, "x", info.height);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
