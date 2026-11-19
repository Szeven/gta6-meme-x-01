// gta6-meme-x-01 entry program (Node 22, standard library only).
// It copies POST.json from the repository into the output directory.
// The house reads the X post itself from the URL in that file.
import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
const post = JSON.parse(readFileSync("POST.json", "utf8"));
if (typeof post.url !== "string" || !post.url.startsWith("https://")) {
  throw new Error("POST.json must hold an https post url");
}
copyFileSync("POST.json", join(outDir, "POST.json"));
console.log("POST.json -> " + join(outDir, "POST.json"));
