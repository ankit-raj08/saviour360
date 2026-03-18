import { useState } from "react";
import { Link } from "react-router-dom";
import { FOOTER_LINKS } from "../../constants";

export default function Footer() {
  return (
    <footer style={{ background: "#050B14", padding: "72px 0 36px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 2.5rem" }}>
        <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 1fr", gap: 56, marginBottom: 56 }}>
          <Brand />
          {FOOTER_LINKS.map(col => <LinkCol key={col.section} {...col} />)}
        </div>
        <div style={{ height: 1, background: "rgba(255,255,255,0.05)", marginBottom: 32 }} />
        <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 12, color: "rgba(255,255,255,0.18)" }}>© 2025 Saviour360. All rights reserved.</span>
          <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 12, color: "rgba(255,255,255,0.18)" }}>Built for real estate that means business.</span>
        </div>
      </div>
    </footer>
  );
}

function Brand() {
  return (
    <div>
      <Link to="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", marginBottom: 20 }}>
        <div style={{ width: 34, height: 34, borderRadius: 8, background: "linear-gradient(135deg, #1A50A0, #2E6CC8)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
            <circle cx="10" cy="10" r="4.5" stroke="white" strokeWidth="1.4"/>
            <circle cx="10" cy="10" r="8.5" stroke="rgba(255,255,255,0.35)" strokeWidth="1"/>
            <line x1="10" y1="1" x2="10" y2="19" stroke="rgba(255,255,255,0.4)" strokeWidth="1"/>
            <line x1="1" y1="10" x2="19" y2="10" stroke="rgba(255,255,255,0.4)" strokeWidth="1"/>
          </svg>
        </div>
        <div>
          <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 14, fontWeight: 700, letterSpacing: 1.5, color: "#FFFFFF", textTransform: "uppercase", display: "block", lineHeight: 1.1 }}>Saviour<span style={{ color: "#2E6CC8" }}>360</span></span>
          <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 9, fontWeight: 400, letterSpacing: 3, color: "rgba(255,255,255,0.3)", textTransform: "uppercase", display: "block", marginTop: 1 }}>Virtual Realty</span>
        </div>
      </Link>
      <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 13, color: "rgba(255,255,255,0.28)", lineHeight: 1.85, maxWidth: 280, marginBottom: 24, fontWeight: 300 }}>
        360° tours for real estate professionals. Built to close faster.
      </p>
      <div style={{ display: "flex", gap: 8 }}>
        {["in","tw","ig"].map(s => (
          <a key={s} href="#" style={{ width: 32, height: 32, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Inter',sans-serif", fontSize: 10, fontWeight: 600, color: "rgba(255,255,255,0.28)", textDecoration: "none", textTransform: "uppercase", transition: "all 0.2s" }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "#2E6CC8"; e.currentTarget.style.color = "#5B8FE0"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; e.currentTarget.style.color = "rgba(255,255,255,0.28)"; }}>
            {s}
          </a>
        ))}
      </div>
    </div>
  );
}

function LinkCol({ section, links }) {
  return (
    <div>
      <h4 style={{ fontFamily: "'Inter',sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", color: "rgba(255,255,255,0.28)", marginBottom: 20 }}>{section}</h4>
      <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 11 }}>
        {links.map(l => <FooterLink key={l.label} label={l.label} href={l.href} />)}
      </ul>
    </div>
  );
}

function FooterLink({ label, href }) {
  const [h, setH] = useState(false);
  return (
    <li>
      <a href={href} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
        style={{ fontFamily: "'Inter',sans-serif", fontSize: 13, fontWeight: 300, color: h ? "#5B8FE0" : "rgba(255,255,255,0.38)", textDecoration: "none", transition: "color 0.2s" }}>
        {label}
      </a>
    </li>
  );
}
