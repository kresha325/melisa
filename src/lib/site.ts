export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://kresha325.github.io/melisa";

export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function assetPath(path: string): string {
  return `${BASE_PATH}${path}`;
}

export function pagePath(path: string): string {
  if (!path || path === "/") return `${BASE_PATH}/`;
  return `${BASE_PATH}${path.startsWith("/") ? path : `/${path}`}`;
}
