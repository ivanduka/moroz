import fs from "fs/promises";
import path from "path";
import { glob } from "glob";
import { fileURLToPath } from "url";
import iconv from "iconv-lite";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

let htmlFiles = await glob("**/*.html", { ignore: "node_modules/**" });

// htmlFiles = htmlFiles.slice(0, 10);

for (const htmlFile of htmlFiles) {
  console.log(htmlFile);
  const fileFullPath = path.join(__dirname, htmlFile);
  const content = await fs.readFile(fileFullPath);
  const decoded = iconv.decode(content, "koi8-r");
  await fs.writeFile(fileFullPath, decoded);
}
