
import { execFileSync } from "node:child_process";
import { cp, mkdir, readdir, rm, copyFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const flaskDir = path.resolve(projectDir, "..", "kwooby-site");
const distDir = path.join(projectDir, "dist");
const assetsDir = path.join(distDir, "assets");
const flaskAssetsDir = path.join(flaskDir, "static", "portfolio", "assets");
const flaskTemplate = path.join(flaskDir, "templates", "portfolio", "react-index.html");

console.log("Building React portfolio...");
execFileSync("npm", ["run", "build"], {
  cwd: projectDir,
  stdio: "inherit",
  shell: process.platform === "win32",
});

console.log("Copying built assets to kwooby-site...");
await mkdir(flaskAssetsDir, { recursive: true });

for (const entry of await readdir(flaskAssetsDir)) {
  await rm(path.join(flaskAssetsDir, entry), { recursive: true, force: true });
}

await cp(assetsDir, flaskAssetsDir, { recursive: true });

const flaskStaticDir = path.join(flaskDir, "static", "portfolio");

await mkdir(flaskStaticDir, { recursive: true });

await copyFile(
  path.join(projectDir, "public", "favicon.svg"),
  path.join(flaskStaticDir, "favicon.svg")
);

await copyFile(
  path.join(projectDir, "public", "icons.svg"),
  path.join(flaskStaticDir, "icons.svg")
);

await copyFile(path.join(distDir, "index.html"), flaskTemplate);

console.log("Portfolio build copied successfully.");
console.log("Next: review and commit the changes in kwooby-site, then push to GitHub to deploy.");
