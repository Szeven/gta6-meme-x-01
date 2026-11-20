import { copyFileSync, mkdirSync, readdirSync, readFileSync, rmSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = dirname(fileURLToPath(import.meta.url));
const botDir = process.env.MAKEFUN_BOT_DIR ?? repoRoot;
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(repoRoot, "out");

mkdirSync(outDir, { recursive: true });
for (const entry of readdirSync(outDir)) {
  rmSync(join(outDir, entry), { recursive: true, force: true });
}

copyFileSync(join(botDir, "POST.json"), join(outDir, "POST.json"));
copyFileSync(join(botDir, "meme.png"), join(outDir, "meme.png"));

// Validate what we just copied: POST.json must parse and name an X post URL.
const post = JSON.parse(readFileSync(join(outDir, "POST.json"), "utf8"));
if (typeof post.url !== "string" || !post.url.startsWith("https://")) {
  throw new Error("POST.json has no https post url");
}
const memeBytes = statSync(join(outDir, "meme.png")).size;
const postBytes = statSync(join(outDir, "POST.json")).size;
console.log("post:", post.url);
console.log(`copied POST.json (${postBytes} bytes) and meme.png (${memeBytes} bytes) to`, outDir);
