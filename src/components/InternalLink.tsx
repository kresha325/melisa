import Link from "next/link";
import { BASE_PATH, pagePath } from "@/lib/site";

type InternalLinkProps = {
  href: string;
  className?: string;
  children: React.ReactNode;
};

/**
 * GitHub Pages static export: use plain anchors with basePath
 * to avoid client-router requests that 404 on subpath hosting.
 */
export function InternalLink({ href, className, children }: InternalLinkProps) {
  if (BASE_PATH) {
    return (
      <a href={pagePath(href)} className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
