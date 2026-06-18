export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://kresha325.github.io/melisa";

export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function assetPath(path: string): string {
  return `${BASE_PATH}${path}`;
}

export function pagePath(path: string): string {
  if (!path || path === "/") {
    return `${BASE_PATH}/`;
  }

  if (path.startsWith("#")) {
    return `${BASE_PATH}/${path}`;
  }

  if (path.includes("#")) {
    const [pathname, hash] = path.split("#");
    const base =
      pathname === "/" ? `${BASE_PATH}/` : `${BASE_PATH}${pathname}`;
    return `${base}#${hash}`;
  }

  const normalized = path.startsWith("/") ? path : `/${path}`;
  const full = `${BASE_PATH}${normalized}`;
  return full.endsWith("/") ? full : `${full}/`;
}
