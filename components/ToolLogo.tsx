"use client";

type Props = {
  website: string;
  name: string;
  fallbackEmoji: string;
  size?: number;
};

export default function ToolLogo({ website, name, fallbackEmoji, size = 40 }: Props) {
  let domain = "";
  try {
    domain = new URL(website).hostname;
  } catch {
    // fallback to emoji if URL is invalid
  }

  if (!domain) {
    return <span style={{ fontSize: size * 0.6 }}>{fallbackEmoji}</span>;
  }

  return (
    <img
      src={`https://logo.clearbit.com/${domain}`}
      alt={`${name} logo`}
      width={size}
      height={size}
      style={{ objectFit: "contain", width: `${size}px`, height: `${size}px` }}
      onError={(e) => {
        const target = e.currentTarget;
        target.style.display = "none";
        const parent = target.parentElement;
        if (parent) {
          parent.innerHTML = `<span style="font-size:${size * 0.55}px">${fallbackEmoji}</span>`;
        }
      }}
    />
  );
}
