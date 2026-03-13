"use client";

import { useState } from "react";

type Props = {
  website: string;
  name: string;
  fallbackEmoji: string;
  size?: number;
};

/**
 * Renders a tool logo using Google's Favicon API (reliable, always returns an image).
 * Falls back to first-letter avatar if even that fails.
 */
export default function ToolLogo({ website, name, fallbackEmoji, size = 40 }: Props) {
  const [error, setError] = useState(false);

  let domain = "";
  try {
    domain = new URL(website).hostname.replace(/^www\./, "");
  } catch {
    // invalid URL — show fallback
  }

  if (!domain || error) {
    return (
      <div
        style={{
          width: size,
          height: size,
          borderRadius: 8,
          background: "#e2e8f0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: size * 0.45,
          fontWeight: 800,
          color: "#475569",
        }}
      >
        {name.charAt(0).toUpperCase()}
      </div>
    );
  }

  // Google Favicon API — request the largest available size (128px)
  const faviconUrl = `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;

  return (
    <img
      src={faviconUrl}
      alt={`${name} logo`}
      width={size}
      height={size}
      loading="lazy"
      style={{
        objectFit: "contain",
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: 4,
      }}
      onError={() => setError(true)}
    />
  );
}
