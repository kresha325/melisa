import { assetPath } from "@/lib/site";

type LogoProps = {
  className?: string;
  height?: number;
  priority?: boolean;
};

const LOGO_ASPECT_RATIO = 1536 / 1024;

export default function Logo({
  className = "",
  height = 56,
  priority = false,
}: LogoProps) {
  const width = Math.round(height * LOGO_ASPECT_RATIO);

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={assetPath("/logo.png")}
      alt="Die Energiesparer - Strom und Gas Kosten senken"
      width={width}
      height={height}
      fetchPriority={priority ? "high" : "auto"}
      decoding="async"
      className={`block object-contain shrink-0 bg-transparent ${className}`}
      style={{
        height: `${height}px`,
        width: `${width}px`,
        maxWidth: "none",
        background: "none",
      }}
    />
  );
}
