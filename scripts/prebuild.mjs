import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const extPkg = path.resolve(root, "../scholarscope-ext/package.json");
const onVercel = process.env.VERCEL === "1";

if (!onVercel && fs.existsSync(extPkg)) {
  execSync("npm run pack:ext", { stdio: "inherit", cwd: root });
} else {
  console.log("Skipping pack:ext (Vercel build or extension source not present).");
}

execSync("node scripts/build-clone.mjs", { stdio: "inherit", cwd: root });
