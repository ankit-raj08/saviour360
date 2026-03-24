import { useState } from "react";
import { Link } from "react-router-dom";
import { FOOTER_LINKS } from "../../constants";

const SOCIALS = [
  {
    key: "linkedin",
    href: "#",
    label: "LinkedIn",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    key: "instagram",
    href: "#",
    label: "Instagram",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
      </svg>
    ),
  },
  {
    key: "twitter",
    href: "#",
    label: "Twitter / X",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    key: "youtube",
    href: "#",
    label: "YouTube",
    icon: (
      <svg width="16" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/>
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer style={{ background: "#050B14", paddingTop: 72, paddingBottom: 0, position: "relative", overflow: "hidden" }}>

      {/* Subtle background grid line */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0,
        backgroundImage: "linear-gradient(rgba(46,108,200,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(46,108,200,0.03) 1px, transparent 1px)",
        backgroundSize: "64px 64px",
      }} />

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 2.5rem", position: "relative", zIndex: 1 }}>

        {/* ── Top section ─────────────────────────────────────── */}
        <div className="footer-top" style={{
          display: "grid",
          gridTemplateColumns: "1.8fr 1fr 1fr 1fr 1fr",
          gap: 48,
          paddingBottom: 56,
          borderBottom: "1px solid rgba(255,255,255,0.05)",
          alignItems: "start",
        }}>

          {/* Brand column */}
          <div>
            {/* Logo */}
            <Link to="/" style={{ display: "inline-flex", alignItems: "center", gap: 11, textDecoration: "none", marginBottom: 22 }}>
              <div style={{ width: 36, height: 36, borderRadius: 9, background: "linear-gradient(135deg, #1A50A0, #2E6CC8)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: "0 4px 14px rgba(26,80,160,0.3)" }}>
                <svg width="19" height="19" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="4.5" stroke="white" strokeWidth="1.4"/>
                  <circle cx="10" cy="10" r="8.5" stroke="rgba(255,255,255,0.32)" strokeWidth="1"/>
                  <line x1="10" y1="1" x2="10" y2="19" stroke="rgba(255,255,255,0.4)" strokeWidth="1"/>
                  <line x1="1" y1="10" x2="19" y2="10" stroke="rgba(255,255,255,0.4)" strokeWidth="1"/>
                </svg>
              </div>
              <div>
                <div style={{ fontFamily: "'Inter',sans-serif", fontSize: 14, fontWeight: 700, letterSpacing: 2, color: "#FFFFFF", textTransform: "uppercase", lineHeight: 1.1 }}>
                  Saviour<span style={{ color: "#2E6CC8" }}>360</span>
                </div>
                <div style={{ fontFamily: "'Inter',sans-serif", fontSize: 9, fontWeight: 400, letterSpacing: 3.5, color: "rgba(255,255,255,0.28)", textTransform: "uppercase", marginTop: 2 }}>
                  Virtual Realty
                </div>
              </div>
            </Link>

            {/* Tagline */}
            <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 13, fontWeight: 300, color: "rgba(255,255,255,0.3)", lineHeight: 1.9, maxWidth: 260, marginBottom: 28 }}>
              360° virtual tours built for real estate professionals. Close faster, reach further.
            </p>

            {/* Socials */}
            <div style={{ marginBottom: 4 }}>
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 9, fontWeight: 600, letterSpacing: 3, textTransform: "uppercase", color: "rgba(255,255,255,0.2)", marginBottom: 12 }}>
                Follow Us
              </p>
              <div style={{ display: "flex", gap: 8 }}>
                {SOCIALS.map(s => <SocialBtn key={s.key} {...s} />)}
              </div>
            </div>
          </div>

          {/* Link columns */}
          {FOOTER_LINKS.map(col => <LinkCol key={col.section} {...col} />)}
        </div>

        {/* ── Bottom bar ──────────────────────────────────────── */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 12,
          padding: "24px 0 28px",
        }}>
          <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 11.5, color: "rgba(255,255,255,0.15)", letterSpacing: 0.2 }}>
            © {new Date().getFullYear()} Saviour360. All rights reserved.
          </span>
          <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 11.5, color: "rgba(255,255,255,0.12)", letterSpacing: 0.2, fontStyle: "italic" }}>
            Built for real estate that means business.
          </span>
        </div>
      </div>

      <style>{`
        @media(max-width:1024px){
          .footer-top{ grid-template-columns:1fr 1fr 1fr !important; gap:40px !important; }
          .footer-top > div:first-child{ grid-column:1 / -1; border-bottom:1px solid rgba(255,255,255,0.05); padding-bottom:32px; }
          .footer-top > div:first-child > a{ margin-bottom:16px; }
        }
        @media(max-width:640px){
          .footer-top{ grid-template-columns:1fr 1fr !important; gap:32px 24px !important; }
          .footer-top > div:first-child{ grid-column:1 / -1; }
        }
        @media(max-width:380px){
          .footer-top{ grid-template-columns:1fr !important; }
        }
      `}</style>
    </footer>
  );
}

function SocialBtn({ href, label, icon }) {
  const [h, setH] = useState(false);
  return (
    <a
      href={href}
      aria-label={label}
      title={label}
      target="_blank"
      rel="noreferrer"
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        width: 34, height: 34, borderRadius: 8,
        border: `1px solid ${h ? "rgba(46,108,200,0.5)" : "rgba(255,255,255,0.08)"}`,
        background: h ? "rgba(26,80,160,0.15)" : "transparent",
        display: "flex", alignItems: "center", justifyContent: "center",
        color: h ? "#5B8FE0" : "rgba(255,255,255,0.28)",
        textDecoration: "none",
        transition: "all 0.2s ease",
        flexShrink: 0,
      }}
    >
      {icon}
    </a>
  );
}

function LinkCol({ section, links }) {
  return (
    <div>
      <h4 style={{
        fontFamily: "'Inter',sans-serif",
        fontSize: 9, fontWeight: 700,
        letterSpacing: 3.5, textTransform: "uppercase",
        color: "rgba(255,255,255,0.22)",
        marginBottom: 18,
        paddingBottom: 12,
        borderBottom: "1px solid rgba(255,255,255,0.04)",
      }}>
        {section}
      </h4>
      <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
        {links.map(l => <FooterLink key={l.label} label={l.label} href={l.href} />)}
      </ul>
    </div>
  );
}

function FooterLink({ label, href }) {
  const [h, setH] = useState(false);
  return (
    <li>
      <a
        href={href}
        onMouseEnter={() => setH(true)}
        onMouseLeave={() => setH(false)}
        style={{
          fontFamily: "'Inter',sans-serif",
          fontSize: 13, fontWeight: 300,
          color: h ? "#FFFFFF" : "rgba(255,255,255,0.35)",
          textDecoration: "none",
          transition: "color 0.18s",
          display: "inline-flex", alignItems: "center", gap: 6,
          lineHeight: 1.4,
        }}
      >
        {h && (
          <span style={{ width: 3, height: 3, borderRadius: "50%", background: "#2E6CC8", flexShrink: 0 }} />
        )}
        {label}
      </a>
    </li>
  );
}
