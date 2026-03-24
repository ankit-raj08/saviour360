import { useState } from "react";
import { INDUSTRIES } from "../../constants";
import { Link } from "react-router-dom";

export default function IndustriesSection() {
  return (
    <section id="industries" style={{ background: "#F5F0E8", padding: "72px 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 2.5rem" }}>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 20, marginBottom: 52 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
              <div style={{ width: 32, height: 1, background: "#1A50A0" }} />
              <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: 3.5, textTransform: "uppercase", color: "#1A50A0" }}>Industries</span>
            </div>
            <h2 style={{ fontFamily: "'Cormorant',serif", fontWeight: 700, fontSize: "clamp(2.4rem, 4vw, 4.5rem)", color: "#0D1520", lineHeight: 0.95, letterSpacing: -0.5 }}>
              Built for every<br /><em style={{ color: "#1A50A0", fontStyle: "italic" }}>type of space</em>
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 16 }}>
            <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 14, color: "rgba(13,21,32,0.48)", lineHeight: 1.85, maxWidth: 340, fontWeight: 300 }}>
              From residential apartments to construction sites, Saviour360 serves every industry that sells, leases, or presents physical space.
            </p>
            <Link to="/industries"
              style={{ fontFamily: "'Inter',sans-serif", fontSize: 12, fontWeight: 500, color: "#1A50A0", textDecoration: "none", letterSpacing: 0.3, display: "flex", alignItems: "center", gap: 4, transition: "gap 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.gap = "8px"; e.currentTarget.style.color = "#2E6CC8"; }}
              onMouseLeave={e => { e.currentTarget.style.gap = "4px"; e.currentTarget.style.color = "#1A50A0"; }}>
              View all industries →
            </Link>
          </div>
        </div>

        {/* Desktop 3-col grid */}
        <div className="industries-desktop" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", border: "1px solid rgba(13,21,32,0.07)", borderRadius: 12, overflow: "hidden" }}>
          {INDUSTRIES.map((ind, i) => (
            <IndustryCard key={ind.id} {...ind} index={i} total={INDUSTRIES.length} />
          ))}
        </div>

        {/* Mobile 2x2 compact */}
        <div className="industries-mobile" style={{ display: "none", flexDirection: "column", gap: 12 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {INDUSTRIES.slice(0, 4).map((ind) => (
              <div key={ind.id} style={{ padding: "20px 16px", borderRadius: 12, background: "#FFFFFF", border: "1px solid rgba(13,21,32,0.07)" }}>
                <div style={{ fontSize: 18, marginBottom: 10 }}>{ind.icon}</div>
                <h3 style={{ fontFamily: "'Cormorant',serif", fontWeight: 700, fontSize: 17, color: "#0D1520", marginBottom: 4, lineHeight: 1.2 }}>{ind.title}</h3>
                <div style={{ fontFamily: "'Inter',sans-serif", fontSize: 10, fontWeight: 600, color: "#1A50A0", marginBottom: 6 }}>{ind.stat}</div>
                <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 11, color: "rgba(13,21,32,0.5)", lineHeight: 1.55 }}>{ind.desc}</p>
              </div>
            ))}
          </div>
          <Link to="/industries" style={{
            display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
            padding: "14px", borderRadius: 10,
            background: "linear-gradient(135deg,#1A50A0,#2E6CC8)",
            fontFamily: "'Inter',sans-serif", fontSize: 14, fontWeight: 600, color: "#FFFFFF",
            textDecoration: "none", boxShadow: "0 4px 16px rgba(26,80,160,0.25)",
          }}>
            View All Industries →
          </Link>
        </div>
      </div>
      <style>{`
        @media(max-width:640px){
          .industries-desktop{ display:none !important; }
          .industries-mobile{ display:flex !important; }
        }
      `}</style>
    </section>
  );
}

function IndustryCard({ title, stat, desc, icon, index, total }) {
  const [h, setH] = useState(false);
  const col = index % 3; const row = Math.floor(index / 3); const rows = Math.ceil(total / 3);
  return (
    <div onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ padding: "44px 36px", background: h ? "#0A1628" : "#FFFFFF", borderRight: col < 2 ? "1px solid rgba(13,21,32,0.07)" : "none", borderBottom: row < rows - 1 ? "1px solid rgba(13,21,32,0.07)" : "none", transition: "background 0.35s ease", cursor: "default", position: "relative" }}>
      <div style={{ width: 42, height: 42, borderRadius: 10, background: h ? "rgba(46,108,200,0.18)" : "rgba(26,80,160,0.07)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, marginBottom: 20, transition: "background 0.35s" }}>{icon}</div>
      <h3 style={{ fontFamily: "'Cormorant',serif", fontWeight: 700, fontSize: 22, letterSpacing: -0.3, color: h ? "#FFFFFF" : "#0D1520", marginBottom: 8, transition: "color 0.35s", lineHeight: 1.15 }}>{title}</h3>
      <div style={{ fontFamily: "'Inter',sans-serif", fontSize: 11, fontWeight: 600, color: h ? "#5B8FE0" : "#1A50A0", letterSpacing: 0.3, marginBottom: 12, transition: "color 0.35s" }}>{stat}</div>
      <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 13, color: h ? "rgba(255,255,255,0.48)" : "rgba(13,21,32,0.52)", lineHeight: 1.8, transition: "color 0.35s" }}>{desc}</p>
      <div style={{ marginTop: 24, height: 1.5, width: h ? 32 : 0, background: h ? "#2E6CC8" : "transparent", transition: "width 0.35s ease" }} />
    </div>
  );
}
