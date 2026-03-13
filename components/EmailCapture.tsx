"use client";

import { useState, FormEvent } from "react";

type Variant = "inline" | "banner";

interface EmailCaptureProps {
  variant?: Variant;
  heading?: string;
  subtext?: string;
}

export default function EmailCapture({
  variant = "banner",
  heading = "Get the weekly Field Sales Insider",
  subtext = "Tool updates, pricing changes, and tactics from D2D practitioners — delivered every Tuesday.",
}: EmailCaptureProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email || !email.includes("@")) return;

    setStatus("loading");

    // POST to a simple API route that can be wired to Mailchimp / ConvertKit / etc.
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        style={{
          background: variant === "banner" ? "linear-gradient(135deg, #0f2340 0%, #1a3a5c 100%)" : "#f0fdf4",
          borderRadius: 16,
          padding: variant === "banner" ? "40px 28px" : "20px 24px",
          textAlign: "center",
          border: variant === "inline" ? "1px solid #bbf7d0" : "none",
        }}
      >
        <div style={{ fontSize: 28, marginBottom: 8 }}>✓</div>
        <p
          style={{
            color: variant === "banner" ? "#86efac" : "#166534",
            fontSize: 16,
            fontWeight: 600,
            margin: 0,
          }}
        >
          You&apos;re in! Check your inbox Tuesday.
        </p>
      </div>
    );
  }

  if (variant === "inline") {
    return (
      <div
        style={{
          background: "#f8fafc",
          borderRadius: 12,
          padding: "20px 24px",
          border: "1px solid #e2e8f0",
        }}
      >
        <p style={{ color: "#0f2340", fontWeight: 700, fontSize: 15, margin: "0 0 6px" }}>
          {heading}
        </p>
        <p style={{ color: "#64748b", fontSize: 13, margin: "0 0 12px", lineHeight: 1.5 }}>
          {subtext}
        </p>
        <form onSubmit={handleSubmit} style={{ display: "flex", gap: 0 }}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            required
            style={{
              flex: 1,
              padding: "10px 14px",
              fontSize: 13,
              border: "1px solid #e2e8f0",
              borderRight: "none",
              borderRadius: "8px 0 0 8px",
              outline: "none",
              color: "#0f2340",
              background: "#fff",
            }}
          />
          <button
            type="submit"
            disabled={status === "loading"}
            style={{
              background: "#1d6ce8",
              color: "#fff",
              border: "none",
              padding: "10px 18px",
              borderRadius: "0 8px 8px 0",
              fontSize: 13,
              fontWeight: 600,
              cursor: status === "loading" ? "wait" : "pointer",
              whiteSpace: "nowrap",
              opacity: status === "loading" ? 0.7 : 1,
            }}
          >
            {status === "loading" ? "..." : "Subscribe"}
          </button>
        </form>
        {status === "error" && (
          <p style={{ color: "#dc2626", fontSize: 12, marginTop: 6, marginBottom: 0 }}>
            Something went wrong. Try again.
          </p>
        )}
      </div>
    );
  }

  // Banner variant (default) — full-width dark CTA
  return (
    <div
      style={{
        background: "linear-gradient(135deg, #0f2340 0%, #1a3a5c 100%)",
        borderRadius: 16,
        padding: "40px 28px",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          color: "#fff",
          fontSize: "clamp(20px, 3vw, 26px)",
          fontWeight: 800,
          margin: "0 0 10px",
          letterSpacing: "-0.3px",
        }}
      >
        {heading}
      </h2>
      <p
        style={{
          color: "#94a3b8",
          fontSize: 15,
          maxWidth: 480,
          margin: "0 auto 24px",
          lineHeight: 1.6,
        }}
      >
        {subtext}
      </p>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          gap: 0,
          maxWidth: 440,
          margin: "0 auto",
        }}
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          required
          style={{
            flex: 1,
            padding: "13px 16px",
            fontSize: 14,
            border: "none",
            borderRadius: "8px 0 0 8px",
            outline: "none",
            color: "#0f2340",
          }}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          style={{
            background: "#1d6ce8",
            color: "#fff",
            border: "none",
            padding: "13px 24px",
            borderRadius: "0 8px 8px 0",
            fontSize: 14,
            fontWeight: 700,
            cursor: status === "loading" ? "wait" : "pointer",
            whiteSpace: "nowrap",
            opacity: status === "loading" ? 0.7 : 1,
          }}
        >
          {status === "loading" ? "Subscribing..." : "Subscribe Free →"}
        </button>
      </form>
      {status === "error" && (
        <p style={{ color: "#ef4444", fontSize: 13, marginTop: 10, marginBottom: 0 }}>
          Something went wrong. Please try again.
        </p>
      )}
      <p style={{ color: "#475569", fontSize: 11, marginTop: 12, marginBottom: 0 }}>
        No spam. Unsubscribe anytime. ~1,200 field sales pros subscribed.
      </p>
    </div>
  );
}
