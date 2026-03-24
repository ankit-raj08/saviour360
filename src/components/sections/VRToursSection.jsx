import { useState } from "react";
import { useCMS } from "../../hooks";

const FALLBACK_VR = [
  {
    id: "nest",
    name: "The Nest",
    tag: "FEATURED",
    type: "Residential · Interior",
    location: "Savitar Realty, Ahmedabad",
    rooms: ["Living Room", "Master Bedroom", "Kitchen", "Study", "Balcony"],
    tourUrl: "https://tours.savitarrealty.in/virtualtour/d8a6b0b4",
    thumb: "/thumbs/nest-interior.png",
    grad: "linear-gradient(140deg,#0C1A38,#0F2250 50%,#132A60)",
    accent: "#5B8FE0",
  },
  {
    id: "reva",
    name: "Reva by Kaavyaratna",
    tag: "NEW",
    type: "Residential · Interior",
    location: "Savitar Realty, Ahmedabad",
    rooms: ["Entrance", "Living Area", "Bedroom 1", "Bedroom 2", "Terrace"],
    tourUrl: "https://tours.savitarrealty.in/virtualtour/800b583a",
    thumb: "/thumbs/reva-kaavyaratna.png",
    grad: "linear-gradient(140deg,#080F22,#0D1C40 50%,#0A1840)",
    accent: "#6A9FE8",
  },
  {
    id: "maple",
    name: "Maple Vivanta",
    tag: "TRENDING",
    type: "Aerial View",
    location: "Savitar Realty, Ahmedabad",
    rooms: ["Site Overview", "Surroundings", "Airport View", "Township", "Roads"],
    tourUrl: "https://tours.savitarrealty.in/virtualtour/b05c6704",
    thumb: "/thumbs/maple-vivanta.png",
    grad: "linear-gradient(140deg,#060E20,#091840 50%,#0C2050)",
    accent: "#4A7FD4",
  },
];

const toVRProject = (doc, i) => ({
  id:       doc.id || String(i),
  name:     doc.name,
  tag:      doc.badge || "FEATURED",
  type:     doc.category === "aerial" ? "Aerial View" : "Residential · Interior",
  location: "Savitar Realty, Ahmedabad",
  rooms:    (doc.rooms || []).map(r => r.label),
  tourUrl:  doc.tourUrl,
  thumb:    doc.thumbnail || `/thumbs/${doc.name.toLowerCase().replace(/\s+/g, "-")}.png`,
  grad:     "linear-gradient(140deg,#0C1A38,#0F2250 50%,#132A60)",
  accent:   doc.accent || "#5B8FE0",
});

const VR_ENDPOINT = "/api/projects?where[showInVRTours][equals]=true&where[active][equals]=true&sort=order&limit=6";

function ClickOverlay({ project, onLaunch }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onClick={onLaunch}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "absolute", inset: 0, zIndex: 2,
        cursor: "pointer",
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Real photo */}
      <img
        src={project.thumb}
        alt={project.name}
        style={{
          position: "absolute", inset: 0, width: "100%", height: "100%",
          objectFit: "cover",
          transform: hovered ? "scale(1.04)" : "scale(1)",
          transition: "transform 0.4s ease",
        }}
      />

      {/* Dark overlay */}
      <div style={{
        position: "absolute", inset: 0,
        background: hovered ? "rgba(6,14,28,0.55)" : "rgba(6,14,28,0.44)",
        transition: "background 0.3s",
      }} />

      {/* Sphere graphic */}
      <div style={{ position: "relative", zIndex: 1, marginBottom: 20 }}>
        <div style={{
          width: 72, height: 72, borderRadius: "50%",
          background: hovered ? "rgba(26,80,160,0.88)" : "rgba(26,80,160,0.65)",
          border: `1.5px solid rgba(91,143,224,0.5)`,
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: hovered ? `0 0 32px rgba(46,108,200,0.5)` : `0 0 16px rgba(46,108,200,0.2)`,
          transition: "all 0.25s",
          transform: hovered ? "scale(1.1)" : "scale(1)",
        }}>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path d="M8 5.5l10 5.5L8 16.5V5.5z" fill="white"/>
          </svg>
        </div>
      </div>

      {/* Text */}
      <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
        <div style={{
          fontFamily: "'Cormorant',serif", fontWeight: 700,
          fontSize: 24, color: "#FFFFFF", letterSpacing: -0.3, marginBottom: 4,
          textShadow: "0 2px 10px rgba(0,0,0,0.5)",
        }}>{project.name}</div>
        <div style={{
          fontFamily: "'Inter',sans-serif", fontSize: 11,
          color: "rgba(255,255,255,0.52)", marginBottom: 14, fontWeight: 300,
        }}>{project.location}</div>

        <div style={{
          display: "inline-flex", alignItems: "center", gap: 6,
          padding: "5px 12px", borderRadius: 100,
          background: hovered ? "rgba(26,80,160,0.45)" : "rgba(0,0,0,0.35)",
          border: "1px solid rgba(255,255,255,0.15)",
          backdropFilter: "blur(8px)",
          transition: "background 0.2s",
        }}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2 6h8M7 3l3 3-3 3" stroke="rgba(255,255,255,0.7)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span style={{
            fontFamily: "'Inter',sans-serif", fontSize: 11,
            color: "rgba(255,255,255,0.7)", fontWeight: 500,
          }}>Click to start tour</span>
        </div>
      </div>
    </div>
  );
}

export default function VRToursSection() {
  const { data: VR_PROJECTS } = useCMS(VR_ENDPOINT, FALLBACK_VR, toVRProject);
  const [activeTour, setActiveTour] = useState(0);
  const [launched, setLaunched]     = useState({});
  const [loaded, setLoaded]         = useState({});
  const [switching, setSwitching]   = useState(false);

  const tour = VR_PROJECTS[activeTour];
  const isLaunched = !!launched[activeTour];
  const isLoaded   = !!loaded[activeTour];

  const handleTourChange = (i) => {
    if (i === activeTour) return;
    setSwitching(true);
    setTimeout(() => { setActiveTour(i); setSwitching(false); }, 300);
  };

  return (
    <section id="360-tours" style={{ background: "linear-gradient(160deg,#080F1A 0%,#0A1628 100%)", padding: "80px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2.5rem" }}>

        {/* Header */}
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 28, flexWrap: "wrap", gap: 14 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
              <div style={{ width: 22, height: 1, background: "#2E6CC8" }} />
              <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 10, fontWeight: 500, letterSpacing: 3, textTransform: "uppercase", color: "rgba(91,143,224,0.8)" }}>Live 360° Tours</span>
            </div>
            <h2 style={{ fontFamily: "'Cormorant',serif", fontWeight: 700, fontSize: "clamp(2.2rem,4vw,3.8rem)", color: "#FFFFFF", lineHeight: 0.95, letterSpacing: -0.5 }}>
              Step Inside<br /><em style={{ color: "#5B8FE0", fontStyle: "italic" }}>Any Property</em>
            </h2>
          </div>
          <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
            {VR_PROJECTS.map((t, i) => (
              <button key={t.id} onClick={() => handleTourChange(i)}
                style={{
                  padding: "7px 15px", borderRadius: 100, border: "none", cursor: "pointer", outline: "none",
                  fontFamily: "'Inter',sans-serif", fontSize: 12,
                  fontWeight: activeTour === i ? 600 : 400,
                  background: activeTour === i ? "rgba(91,143,224,0.18)" : "rgba(255,255,255,0.05)",
                  color: activeTour === i ? "#FFFFFF" : "rgba(255,255,255,0.4)",
                  border: `1px solid ${activeTour === i ? "rgba(91,143,224,0.3)" : "transparent"}`,
                  transition: "all 0.18s",
                }}
                onMouseEnter={e => { if (activeTour !== i) { e.currentTarget.style.background = "rgba(255,255,255,0.09)"; e.currentTarget.style.color = "rgba(255,255,255,0.7)"; } }}
                onMouseLeave={e => { if (activeTour !== i) { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.color = "rgba(255,255,255,0.4)"; } }}
              >
                {t.name}
              </button>
            ))}
          </div>
        </div>

        {/* Layout */}
        <div className="vr-layout" style={{ display: "grid", gridTemplateColumns: "1fr 250px", gap: 14 }}>

          {/* iframe */}
          <div style={{
            borderRadius: 14, overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.07)",
            background: "#060D18",
            opacity: switching ? 0 : 1, transition: "opacity 0.3s",
            position: "relative", minHeight: 460,
          }}>
            {/* Top overlay bar */}
            <div style={{
              position: "absolute", top: 0, left: 0, right: 0, zIndex: 3,
              padding: "10px 14px",
              display: "flex", alignItems: "center", justifyContent: "space-between",
              background: "linear-gradient(to bottom,rgba(6,13,24,0.9),transparent)",
              pointerEvents: "none",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 7, pointerEvents: "auto" }}>
                <span style={{ width: 5, height: 5, borderRadius: "50%", background: isLaunched ? "#22c55e" : "#555", display: "inline-block" }} />
                <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 10, color: "rgba(255,255,255,0.45)" }}>{tour.name}</span>
              </div>
              <a href={tour.tourUrl} target="_blank" rel="noopener noreferrer"
                style={{ fontFamily: "'Inter',sans-serif", fontSize: 10, color: "rgba(91,143,224,0.6)", textDecoration: "none", pointerEvents: "auto", transition: "color 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.color = "#5B8FE0"}
                onMouseLeave={e => e.currentTarget.style.color = "rgba(91,143,224,0.6)"}>
                Full Screen ↗
              </a>
            </div>

            {/* Click overlay */}
            {!isLaunched && !switching && (
              <ClickOverlay project={tour} onLaunch={() => setLaunched(prev => ({ ...prev, [activeTour]: true }))} />
            )}

            {/* Spinner */}
            {isLaunched && !isLoaded && (
              <div style={{ position: "absolute", inset: 0, zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                <div style={{ width: 28, height: 28, borderRadius: "50%", border: "2px solid rgba(46,108,200,0.2)", borderTop: "2px solid #2E6CC8", animation: "vrSpin 0.8s linear infinite", marginBottom: 8 }} />
                <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 11, color: "rgba(255,255,255,0.22)" }}>Loading tour…</span>
              </div>
            )}

            {isLaunched && (
              <iframe
                key={tour.tourUrl}
                src={tour.tourUrl}
                title={tour.name}
                allowFullScreen
                allow="fullscreen; xr-spatial-tracking"
                onLoad={() => setLoaded(prev => ({ ...prev, [activeTour]: true }))}
                style={{ width: "100%", height: "100%", minHeight: 460, display: "block", border: "none" }}
              />
            )}
          </div>

          {/* Info */}
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <div style={{ flex: 1, background: "rgba(255,255,255,0.04)", borderRadius: 12, border: "1px solid rgba(255,255,255,0.06)", padding: "20px 18px" }}>
              <div style={{ display: "inline-block", padding: "3px 9px", borderRadius: 100, background: "rgba(91,143,224,0.12)", border: "1px solid rgba(91,143,224,0.2)", marginBottom: 12 }}>
                <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 9, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: "#5B8FE0" }}>{tour.tag}</span>
              </div>
              <h3 style={{ fontFamily: "'Cormorant',serif", fontWeight: 700, fontSize: 22, color: "#FFFFFF", letterSpacing: -0.2, marginBottom: 4, lineHeight: 1.1 }}>{tour.name}</h3>
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 11, color: "rgba(91,143,224,0.55)", marginBottom: 16 }}>Savitar Realty · {tour.type}</p>
              <div style={{ fontFamily: "'Inter',sans-serif", fontSize: 9, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", color: "rgba(255,255,255,0.18)", marginBottom: 8 }}>Scenes</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                {tour.rooms.map(r => (
                  <span key={r} style={{ padding: "3px 9px", borderRadius: 100, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", fontFamily: "'Inter',sans-serif", fontSize: 11, color: "rgba(255,255,255,0.38)", fontWeight: 300 }}>{r}</span>
                ))}
              </div>
            </div>
            <a href={tour.tourUrl} target="_blank" rel="noopener noreferrer"
              style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 7, padding: "12px", borderRadius: 10, background: "linear-gradient(135deg,#1A50A0,#2E6CC8)", fontFamily: "'Inter',sans-serif", fontSize: 13, fontWeight: 600, color: "#FFFFFF", textDecoration: "none", boxShadow: "0 4px 16px rgba(26,80,160,0.3)", transition: "transform 0.2s,box-shadow 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(26,80,160,0.45)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 4px 16px rgba(26,80,160,0.3)"; }}>
              Launch Full Tour
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M1.5 9.5l8-8M9.5 9.5V1.5H1.5" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
            {[["48hrs","Delivery"],["DGCA","Certified"],["360°","All Rooms"]].map(([n,l]) => (
              <div key={l} style={{ padding: "10px 14px", background: "rgba(255,255,255,0.03)", borderRadius: 9, border: "1px solid rgba(255,255,255,0.05)", display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ fontFamily: "'Cormorant',serif", fontWeight: 700, fontSize: 17, color: "#5B8FE0", letterSpacing: -0.5 }}>{n}</span>
                <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 9, color: "rgba(255,255,255,0.25)", textTransform: "uppercase", letterSpacing: 1.5, fontWeight: 500 }}>{l}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Mobile: card grid with View All */}
      <div className="vr-mobile-grid" style={{ display: "none", flexDirection: "column", gap: 16 }}>
        {VR_PROJECTS.slice(0, 3).map((p, i) => (
          <a key={p.id} href={p.tourUrl} target="_blank" rel="noreferrer" style={{
            display: "block", borderRadius: 16, overflow: "hidden", textDecoration: "none",
            position: "relative", height: 180, border: "1px solid rgba(255,255,255,0.07)",
          }}>
            <img src={p.thumb} alt={p.name} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(160deg, rgba(7,14,26,0.1), rgba(7,14,26,0.75))" }} />
            <div style={{ position: "absolute", top: 12, left: 12, padding: "3px 9px", borderRadius: 20, background: "rgba(0,0,0,0.5)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.1)", fontSize: 9, fontWeight: 600, letterSpacing: 2, color: "rgba(255,255,255,0.7)", textTransform: "uppercase" }}>{p.tag}</div>
            <div style={{ position: "absolute", top: 12, right: 12, padding: "5px 12px", borderRadius: 20, background: "linear-gradient(135deg,#1A50A0,#2E6CC8)", fontSize: 10, fontWeight: 600, color: "#fff" }}>Open Tour →</div>
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "14px 16px" }}>
              <div style={{ fontFamily: "'Cormorant',serif", fontSize: 20, fontWeight: 700, color: "#FFFFFF", marginBottom: 2 }}>{p.name}</div>
              <div style={{ fontFamily: "'Inter',sans-serif", fontSize: 10, color: "rgba(255,255,255,0.45)" }}>{p.type}</div>
            </div>
          </a>
        ))}
        <a href="/explore" style={{
          display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
          padding: "14px", borderRadius: 12,
          background: "linear-gradient(135deg,#1A50A0,#2E6CC8)",
          fontFamily: "'Inter',sans-serif", fontSize: 14, fontWeight: 600, color: "#FFFFFF",
          textDecoration: "none", boxShadow: "0 4px 20px rgba(26,80,160,0.4)",
          marginTop: 4,
        }}>
          View All Tours
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 4l3 3-3 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </a>
      </div>

      <style>{`
        @keyframes vrSpin{to{transform:rotate(360deg)}}
        @media(max-width:860px){ .vr-layout{ grid-template-columns:1fr !important; } }
        @media(max-width:700px){
          .vr-layout{ display:none !important; }
          .vr-mobile-grid{ display:flex !important; }
        }
      `}</style>
    </section>
  );
}
