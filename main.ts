import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const src = join(here, "POST.json");
const text = readFileSync(src, "utf8");
const post = JSON.parse(text);
if (typeof post.url !== "string" || !post.url.startsWith("https://")) {
  throw new Error("POST.json: post.url must be an https URL string");
}
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "out";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "POST.json");
writeFileSync(outPath, text);
console.log(`POST.json -> ${outPath}`);
