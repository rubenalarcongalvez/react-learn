import { readdir } from "node:fs/promises";
import path from "node:path";

export type AppRoute = {
  path: string;
};

const PAGE_FILE_REGEX = /^page\.(tsx|ts|jsx|js|mdx)$/i;

function isIgnoredFolder(name: string): boolean {
  return (
    name.startsWith("_") ||
    name.startsWith("@") ||
    name.startsWith(".") ||
    name === "node_modules"
  );
}

function nextUrlSegments(current: string[], folderName: string): string[] {
  if (folderName.startsWith("(") && folderName.endsWith(")")) return current;
  return [...current, folderName];
}

async function walkAppDir(dir: string, urlSegments: string[], acc: string[]) {
  const entries = await readdir(dir, { withFileTypes: true });

  const hasPage = entries.some((entry) => entry.isFile() && PAGE_FILE_REGEX.test(entry.name));
  if (hasPage) {
    const routePath = `/${urlSegments.join("/")}`.replace(/\/+/g, "/");
    acc.push(routePath === "" ? "/" : routePath);
  }

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    if (isIgnoredFolder(entry.name)) continue;

    const childDir = path.join(dir, entry.name);
    const childUrlSegments = nextUrlSegments(urlSegments, entry.name);
    await walkAppDir(childDir, childUrlSegments, acc);
  }
}

export async function getAppRoutes(): Promise<AppRoute[]> {
  const appDir = path.join(process.cwd(), "app");
  const found: string[] = [];

  await walkAppDir(appDir, [], found);

  const unique = Array.from(new Set(found)).filter((path) => path !== "/");
  unique.sort((a, b) => a.localeCompare(b, "es"));

  return unique.map((routePath) => ({ path: routePath }));
}
