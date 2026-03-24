import { useState } from "react";
import { useCMS } from "../hooks";

const FALLBACK_TOURS = [
  /* ── Aerial tours ─────────────────────────────────────────────── */
  { id:1,  cat:"Aerial",   label:"Aerial View",  title:"The Nest",            loc:"Ahmedabad", tag:"Aerial 360°",   href:"https://tours.savitarrealty.in/virtualtour/0635f123", badge:"Featured", badgeCol:"#1A50A0", thumb:"/thumbs/nest-aerial.png" },
  { id:2,  cat:"Aerial",   label:"Aerial View",  title:"The Linea",           loc:"Ahmedabad", tag:"Aerial 360°",   href:"https://tours.savitarrealty.in/virtualtour/f3c98418", badge:null,                          thumb:"/thumbs/linea.png" },
  { id:3,  cat:"Aerial",   label:"Aerial View",  title:"Maple Vivanta",       loc:"Ahmedabad", tag:"Aerial 360°",   href:"https://tours.savitarrealty.in/virtualtour/b05c6704", badge:null,                          thumb:"/thumbs/maple-vivanta.png" },
  { id:4,  cat:"Aerial",   label:"Aerial View",  title:"Reva 80",             loc:"Ahmedabad", tag:"Aerial 360°",   href:"https://tours.savitarrealty.in/virtualtour/bd4e7079", badge:null,                          thumb:"/thumbs/reva-80.png" },
  { id:5,  cat:"Aerial",   label:"Aerial View",  title:"The Verity",          loc:"Ahmedabad", tag:"Aerial 360°",   href:"https://tours.savitarrealty.in/virtualtour/d40536d4", badge:null,                          thumb:"/thumbs/verity-aerial.png" },
  { id:6,  cat:"Aerial",   label:"Aerial View",  title:"Urbanest",            loc:"Ahmedabad", tag:"Aerial 360°",   href:"https://tours.savitarrealty.in/virtualtour/6ccd655c", badge:null,                          thumb:"/thumbs/urbanest.png" },
  /* ── Interior 360° tours ──────────────────────────────────────── */
  { id:7,  cat:"Interior", label:"360° Interior", title:"The Verity",          loc:"Ahmedabad", tag:"360° Interior", href:"https://tours.savitarrealty.in/virtualtour/feb88b0e", badge:"Premium",  badgeCol:"#1A50A0", thumb:"/thumbs/verity-interior.png" },
  { id:8,  cat:"Interior", label:"360° Interior", title:"The Nest",            loc:"Ahmedabad", tag:"360° Interior", href:"https://tours.savitarrealty.in/virtualtour/d8a6b0b4", badge:null,                          thumb:"/thumbs/nest-interior.png" },
  { id:9,  cat:"Interior", label:"360° Interior", title:"Eminence 96",         loc:"Ahmedabad", tag:"360° Interior", href:"https://tours.savitarrealty.in/virtualtour/be0e0c66", badge:"New",       badgeCol:"#16a34a", thumb:"/thumbs/eminence-96.png" },
  { id:10, cat:"Interior", label:"360° Interior", title:"Reva by Kaavyaratna", loc:"Ahmedabad", tag:"360° Interior", href:"https://tours.savitarrealty.in/virtualtour/800b583a", badge:null,                          thumb:"/thumbs/reva-kaavyaratna.png" },
];

const toTour = (doc, i) => ({
  id:       i + 1,
  cat:      doc.category === "aerial" ? "Aerial" : "Interior",
  label:    doc.category === "aerial" ? "Aerial View" : "360° Interior",
  title:    doc.name,
  loc:      doc.location?.split(",")[0] || "Ahmedabad",
  tag:      doc.category === "aerial" ? "Aerial 360°" : "360° Interior",
  href:     doc.tourUrl,
  badge:    doc.badge    || null,
  badgeCol: doc.badgeColor || null,
  thumb:    doc.thumbnail || `/thumbs/${doc.name.toLowerCase().replace(/\s+/g, "-")}.png`,
});

const EXPLORE_ENDPOINT = "/api/projects?where[showInExplore][equals]=true&where[active][equals]=true&sort=order&limit=50";

const CATS = ["All", "Aerial", "Interior"];

function TourCard({ tour }) {
  const [hovered, setHovered] = useState(false);
  const [imgErr, setImgErr]   = useState(false);

  return (
    <div
      onClick={() => window.open(tour.href, "_blank", "noopener,noreferrer")}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#FFFFFF", borderRadius: 12,
        border: "1px solid rgba(13,21,32,0.07)",
        overflow: "hidden", cursor: "pointer",
        boxShadow: hovered ? "0 16px 48px rgba(13,21,32,0.13)" : "0 2px 12px rgba(13,21,32,0.05)",
        transform: hovered ? "translateY(-4px)" : "none",
        transition: "box-shadow 0.25s, transform 0.25s",
      }}
    >
      {/* Thumbnail */}
      <div style={{ position: "relative", paddingBottom: "58%", overflow: "hidden", background: "#0A1628" }}>
        {!imgErr ? (
          <img src={tour.thumb} alt={tour.title} onError={() => setImgErr(true)}
            style={{
              position: "absolute", inset: 0, width: "100%", height: "100%",
              objectFit: "cover",
              transform: hovered ? "scale(1.05)" : "scale(1)",
              transition: "transform 0.45s ease",
            }}
          />
        ) : (
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(140deg,#0A1628,#0E2040)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontFamily: "'Cormorant',serif", fontWeight: 700, fontSize: 18, color: "rgba(91,143,224,0.5)" }}>{tour.title}</span>
          </div>
        )}

        {/* Bottom gradient */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 70, background: "linear-gradient(to top,rgba(6,14,28,0.7),transparent)", pointerEvents: "none" }} />

        {/* Hover overlay */}
        <div style={{ position: "absolute", inset: 0, background: "rgba(6,14,28,0.38)", opacity: hovered ? 1 : 0, transition: "opacity 0.25s", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ width: 46, height: 46, borderRadius: "50%", background: "rgba(255,255,255,0.13)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.22)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3 15L15 3M15 3H8M15 3V10" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
        </div>

        {/* Tag */}
        <div style={{ position: "absolute", top: 11, left: 11 }}>
          <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 9, fontWeight: 600, letterSpacing: 1.5, textTransform: "uppercase", color: "#FFFFFF", background: "rgba(8,16,32,0.65)", backdropFilter: "blur(8px)", padding: "3px 9px", borderRadius: 100 }}>{tour.tag}</span>
        </div>
        {tour.badge && (
          <div style={{ position: "absolute", top: 11, right: 11 }}>
            <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 9, fontWeight: 600, color: "#FFFFFF", background: tour.badgeCol, padding: "3px 9px", borderRadius: 100 }}>{tour.badge}</span>
          </div>
        )}
      </div>

      {/* Info */}
      <div style={{ padding: "15px 17px 17px" }}>
        <div style={{ fontFamily: "'Inter',sans-serif", fontSize: 9, fontWeight: 500, letterSpacing: 2, textTransform: "uppercase", color: "rgba(26,80,160,0.7)", marginBottom: 4 }}>{tour.label}</div>
        <div style={{ fontFamily: "'Cormorant',serif", fontWeight: 700, fontSize: 19, color: "#0D1520", letterSpacing: -0.2, lineHeight: 1.15, marginBottom: 5 }}>{tour.title}</div>
        <div style={{ display: "flex", alignItems: "center", gap: 4, marginBottom: 10 }}>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="rgba(13,21,32,0.3)"/></svg>
          <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 11, color: "rgba(13,21,32,0.38)" }}>Savitar Realty · {tour.loc}</span>
        </div>
        <div style={{ borderTop: "1px solid rgba(13,21,32,0.06)", paddingTop: 10, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 10, color: "rgba(13,21,32,0.28)" }}>{tour.cat === "Aerial" ? "Aerial Tour" : "360° Tour"}</span>
          <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 11, color: "#1A50A0", fontWeight: 500 }}>Open Tour ↗</span>
        </div>
      </div>
    </div>
  );
}

export default function Explore() {
  const { data: tours } = useCMS(EXPLORE_ENDPOINT, FALLBACK_TOURS, toTour);
  const [activeCat, setActiveCat] = useState("All");
  const filtered = activeCat === "All" ? tours : tours.filter(t => t.cat === activeCat);

  return (
    <div style={{ background: "#F5F0E8", minHeight: "100vh", paddingTop: 68 }}>
      <div style={{ background: "linear-gradient(160deg,#080F1A 0%,#0A1628 60%,#0C1E38 100%)", padding: "72px 2.5rem 64px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(26,80,160,0.07) 1px,transparent 1px),linear-gradient(90deg,rgba(26,80,160,0.07) 1px,transparent 1px)", backgroundSize: "70px 70px", pointerEvents: "none" }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, justifyContent: "center", marginBottom: 14 }}>
            <div style={{ width: 24, height: 1, background: "rgba(46,108,200,0.5)" }} />
            <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 10, fontWeight: 500, letterSpacing: 3.5, textTransform: "uppercase", color: "rgba(91,143,224,0.8)" }}>Savitar Realty Tours</span>
            <div style={{ width: 24, height: 1, background: "rgba(46,108,200,0.5)" }} />
          </div>
          <h1 style={{ fontFamily: "'Cormorant',serif", fontWeight: 700, fontSize: "clamp(3rem,5.5vw,5.2rem)", letterSpacing: -1.5, color: "#FFFFFF", lineHeight: 0.92, marginBottom: 16 }}>
            Explore real<br /><em style={{ color: "#5B8FE0", fontStyle: "italic" }}>Savitar properties</em>
          </h1>
          <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 13, color: "rgba(255,255,255,0.38)", maxWidth: 440, margin: "0 auto", fontWeight: 300, lineHeight: 1.8 }}>
            Live aerial and 360° interior tours. Click any property to open the full experience.
          </p>
          <div style={{ display: "flex", gap: 40, justifyContent: "center", marginTop: 36, flexWrap: "wrap" }}>
            {[["6", "Aerial Tours"],["4","Interior Tours"],["48hr","Delivery"]].map(([n,l]) => (
              <div key={l} style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "'Cormorant',serif", fontWeight: 700, fontSize: 28, color: "#5B8FE0", letterSpacing: -0.5 }}>{n}</div>
                <div style={{ fontFamily: "'Inter',sans-serif", fontSize: 9, fontWeight: 500, letterSpacing: 2, textTransform: "uppercase", color: "rgba(255,255,255,0.22)", marginTop: 3 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Filter */}
      <div style={{ background: "#FFFFFF", borderBottom: "1px solid rgba(13,21,32,0.06)", position: "sticky", top: 68, zIndex: 100 }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 2.5rem", display: "flex", gap: 4, overflowX: "auto", scrollbarWidth: "none" }}>
          {CATS.map(cat => (
            <button key={cat} onClick={() => setActiveCat(cat)}
              style={{ padding: "15px 18px", background: "none", border: "none", borderBottom: activeCat === cat ? "2px solid #1A50A0" : "2px solid transparent", fontFamily: "'Inter',sans-serif", fontSize: 13, fontWeight: activeCat === cat ? 600 : 400, color: activeCat === cat ? "#0D1520" : "rgba(13,21,32,0.45)", cursor: "pointer", whiteSpace: "nowrap", transition: "color 0.2s", marginBottom: -1 }}>
              {cat}
              {cat !== "All" && (
                <span style={{ marginLeft: 5, fontSize: 10, color: activeCat === cat ? "#1A50A0" : "rgba(13,21,32,0.3)", background: activeCat === cat ? "rgba(26,80,160,0.08)" : "rgba(13,21,32,0.05)", padding: "1px 6px", borderRadius: 100 }}>
                  {tours.filter(t => t.cat === cat).length}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "52px 2.5rem 72px" }}>
        <div style={{ marginBottom: 28, display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
          <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 12, color: "rgba(13,21,32,0.38)" }}>{filtered.length} tour{filtered.length !== 1 ? "s" : ""}{activeCat !== "All" ? ` · ${activeCat}` : ""}</span>
          <a href="https://savitarrealty.com/" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'Inter',sans-serif", fontSize: 12, fontWeight: 500, color: "#1A50A0", textDecoration: "none" }}>Full Savitar portfolio →</a>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 22 }} className="explore-grid">
          {filtered.map(tour => <TourCard key={tour.id} tour={tour} />)}
        </div>
        <div style={{ marginTop: 64, background: "linear-gradient(135deg,#0A1628 0%,#0E2040 100%)", borderRadius: 14, padding: "44px 40px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, flexWrap: "wrap", border: "1px solid rgba(255,255,255,0.05)" }}>
          <div>
            <div style={{ fontFamily: "'Inter',sans-serif", fontSize: 9, fontWeight: 600, letterSpacing: 3, textTransform: "uppercase", color: "rgba(91,143,224,0.55)", marginBottom: 8 }}>Savitar Realty</div>
            <h3 style={{ fontFamily: "'Cormorant',serif", fontWeight: 700, fontSize: "clamp(1.8rem,3vw,2.6rem)", color: "#FFFFFF", letterSpacing: -0.4, lineHeight: 1.1, marginBottom: 8 }}>Explore the full<br /><em style={{ color: "#5B8FE0" }}>Savitar portfolio</em></h3>
            <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 12, color: "rgba(255,255,255,0.35)", fontWeight: 300 }}>Browse all projects and availability on Savitar Realty's website.</p>
          </div>
          <a href="https://savitarrealty.com/" target="_blank" rel="noopener noreferrer"
            style={{ padding: "13px 32px", borderRadius: 8, background: "linear-gradient(135deg,#1A50A0,#2E6CC8)", fontFamily: "'Inter',sans-serif", fontSize: 13, fontWeight: 600, color: "#FFFFFF", textDecoration: "none", boxShadow: "0 4px 20px rgba(26,80,160,0.35)", whiteSpace: "nowrap" }}
            onMouseEnter={e => e.currentTarget.style.opacity = "0.88"} onMouseLeave={e => e.currentTarget.style.opacity = "1"}>
            Visit Savitar Realty ↗
          </a>
        </div>
      </div>
      <style>{`@media(max-width:900px){.explore-grid{grid-template-columns:repeat(2,1fr)!important;}} @media(max-width:540px){.explore-grid{grid-template-columns:1fr!important;}}`}</style>
    </div>
  );
}
