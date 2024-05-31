import { readdir, readFile, writeFile, rename } from "fs/promises";
import { exec, execFile, execSync } from "child_process";
import path from "path";

const key = "";

const dir = ".";

async function main() {
  const files = await readdir(dir, { recursive: true });

  const readmeFiles = [];
  const otherFiles = [];

  for (const file of files) {
    if (!file.endsWith(".md")) {
      continue;
    }
    if (file.endsWith("README.md")) {
      readmeFiles.push(file);
    } else {
      // otherFiles.push(file);
    }
  }

  // Upload README files first to ensure parentDocSlug exists.
  for (const file of readmeFiles) {
    const mdFile = path.join(dir, file);
    execSync(`rdme docs ${mdFile} --key ${key}`);
  }

  execSync(`rdme docs ${dir} --key ${key}`);
  // for (const file of otherFiles) {
  //   const mdFile = path.join(dir, file);
  //   execSync(`rdme docs ${mdFile} --key ${key}`);
  // }
}

main();
