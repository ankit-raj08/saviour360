import { useState } from "react";
import { Link } from "react-router-dom";
import { useCMS } from "../../hooks";

const FALLBACK_DEMOS = [
  { id: 0, name: "Maple Vivanta",     label: "Aerial View",   url: "https://tours.savitarrealty.in/virtualtour/b05c6704", thumb: "/thumbs/maple-vivanta.png" },
  { id: 1, name: "Reva 80",           label: "Aerial View",   url: "https://tours.savitarrealty.in/virtualtour/bd4e7079", thumb: "/thumbs/reva-80.png" },
  { id: 2, name: "Urbanest",          label: "Aerial View",   url: "https://tours.savitarrealty.in/virtualtour/6ccd655c", thumb: "/thumbs/urbanest.png" },
  { id: 3, name: "The Verity Aerial", label: "Aerial View",   url: "https://tours.savitarrealty.in/virtualtour/d40536d4", thumb: "/thumbs/verity-aerial.png" },
  { id: 4, name: "The Nest Interior", label: "360° Interior", url: "https://tours.savitarrealty.in/virtualtour/d8a6b0b4", thumb: "/thumbs/nest-interior.png" },
];

const toDemo = (doc, i) => ({
  id:    i,
  name:  doc.name,
  label: doc.category === "aerial" ? "Aerial View" : "360° Interior",
  url:   doc.tourUrl,
  thumb: doc.thumbnail?.url || `/thumbs/${doc.name.toLowerCase().replace(/\s+/g, "-")}.png`,
});

const DEMO_ENDPOINT = "/api/projects?where[showInLiveDemo][equals]=true&where[active][equals]=true&sort=order&limit=8";

function ClickOverlay({ project, index, onLaunch }) {
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
      {/* Real photo background */}
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
        background: hovered ? "rgba(6,14,28,0.55)" : "rgba(6,14,28,0.42)",
        transition: "background 0.3s",
      }} />

      {/* Play button */}
      <div style={{
        width: 72, height: 72, borderRadius: "50%",
        background: hovered ? "rgba(26,80,160,0.92)" : "rgba(26,80,160,0.7)",
        border: "1.5px solid rgba(91,143,224,0.5)",
        display: "flex", alignItems: "center", justifyContent: "center",
        boxShadow: hovered ? "0 0 40px rgba(46,108,200,0.55)" : "0 0 20px rgba(46,108,200,0.25)",
        transition: "all 0.25s",
        transform: hovered ? "scale(1.1)" : "scale(1)",
        marginBottom: 18, position: "relative", zIndex: 1,
      }}>
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <path d="M8 5.5l10 5.5L8 16.5V5.5z" fill="white"/>
        </svg>
      </div>

      {/* Labels */}
      <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
        <div style={{
          fontFamily: "'Cormorant',serif", fontWeight: 700,
          fontSize: 28, color: "#FFFFFF", letterSpacing: -0.3,
          marginBottom: 4, lineHeight: 1,
          textShadow: "0 2px 12px rgba(0,0,0,0.5)",
        }}>
          {project.name}
        </div>
        <div style={{
          fontFamily: "'Inter',sans-serif", fontSize: 11,
          color: "rgba(255,255,255,0.55)", marginBottom: 16, fontWeight: 300,
        }}>
          Savitar Realty · 360° Interior Tour
        </div>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 6,
          padding: "6px 14px", borderRadius: 100,
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

      {/* 360 badge */}
      <div style={{
        position: "absolute", top: 14, right: 14, zIndex: 1,
        padding: "4px 10px", borderRadius: 100,
        background: "rgba(0,0,0,0.5)", backdropFilter: "blur(6px)",
        border: "1px solid rgba(255,255,255,0.1)",
        fontFamily: "'Inter',sans-serif", fontSize: 10,
        fontWeight: 700, color: "rgba(91,143,224,0.85)", letterSpacing: 0.5,
      }}>360°</div>
    </div>
  );
}

export default function EmbedDemoSection() {
  const { data: DEMOS } = useCMS(DEMO_ENDPOINT, FALLBACK_DEMOS, toDemo);
  const [active, setActive]       = useState(0);
  const [launched, setLaunched]   = useState({});  /* which iframes user has clicked */
  const [loaded, setLoaded]       = useState({});
  const [switching, setSwitching] = useState(false);

  const select = (i) => {
    if (i === active) return;
    setSwitching(true);
    setTimeout(() => { setActive(i); setSwitching(false); }, 260);
  };

  const launch = (i) => {
    setLaunched(prev => ({ ...prev, [i]: true }));
  };

  const proj = DEMOS[active];
  const isLaunched = !!launched[active];
  const isLoaded   = !!loaded[active];

  return (
    <section id="live-demo" style={{ background: "#FFFFFF", padding: "80px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2.5rem" }}>

        {/* Header */}
        <div style={{
          display: "flex", alignItems: "flex-end",
          justifyContent: "space-between", gap: 20,
          flexWrap: "wrap", marginBottom: 24,
        }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
              <div style={{ width: 22, height: 1, background: "#1A50A0" }} />
              <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 10, fontWeight: 500, letterSpacing: 3, textTransform: "uppercase", color: "#1A50A0" }}>Live Demo</span>
            </div>
            <h2 style={{ fontFamily: "'Cormorant',serif", fontWeight: 700, fontSize: "clamp(1.9rem,3vw,2.9rem)", color: "#0D1520", lineHeight: 1, letterSpacing: -0.4 }}>
              What your buyers experience
            </h2>
          </div>
          <Link to="/contact"
            style={{ padding: "10px 22px", borderRadius: 7, background: "#0A1628", fontFamily: "'Inter',sans-serif", fontSize: 12, fontWeight: 600, color: "#FFFFFF", textDecoration: "none", transition: "background 0.2s", whiteSpace: "nowrap" }}
            onMouseEnter={e => e.currentTarget.style.background = "#1A50A0"}
            onMouseLeave={e => e.currentTarget.style.background = "#0A1628"}>
            Get This for Your Property →
          </Link>
        </div>

        {/* Pills */}
        <div style={{ display: "flex", gap: 5, marginBottom: 12, flexWrap: "wrap" }}>
          {DEMOS.map((d, i) => (
            <button key={d.id} onClick={() => select(i)}
              style={{
                padding: "6px 14px", borderRadius: 100, border: "none", cursor: "pointer", outline: "none",
                fontFamily: "'Inter',sans-serif", fontSize: 12,
                fontWeight: active === i ? 600 : 400,
                background: active === i ? "#0A1628" : "rgba(13,21,32,0.06)",
                color: active === i ? "#FFFFFF" : "rgba(13,21,32,0.48)",
                transition: "all 0.15s",
              }}
              onMouseEnter={e => { if (active !== i) { e.currentTarget.style.background = "rgba(13,21,32,0.1)"; e.currentTarget.style.color = "#0D1520"; } }}
              onMouseLeave={e => { if (active !== i) { e.currentTarget.style.background = "rgba(13,21,32,0.06)"; e.currentTarget.style.color = "rgba(13,21,32,0.48)"; } }}
            >
              {d.name}
            </button>
          ))}
        </div>

        {/* Embed */}
        <div style={{
          borderRadius: 14, overflow: "hidden",
          border: "1px solid rgba(13,21,32,0.08)",
          boxShadow: "0 8px 40px rgba(13,21,32,0.07)",
        }}>
          {/* Bar */}
          <div style={{
            background: "#0A1628", padding: "9px 18px",
            display: "flex", alignItems: "center", justifyContent: "space-between",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ width: 5, height: 5, borderRadius: "50%", background: isLaunched ? "#22c55e" : "#888", display: "inline-block" }} />
              <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 11, color: "rgba(255,255,255,0.4)" }}>
                {proj.name} — 360° Interior Tour
              </span>
            </div>
            <a href={proj.url} target="_blank" rel="noopener noreferrer"
              style={{ fontFamily: "'Inter',sans-serif", fontSize: 11, fontWeight: 500, color: "rgba(91,143,224,0.6)", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={e => e.currentTarget.style.color = "#5B8FE0"}
              onMouseLeave={e => e.currentTarget.style.color = "rgba(91,143,224,0.6)"}>
              Open Full Tour ↗
            </a>
          </div>

          {/* iframe area */}
          <div style={{
            position: "relative", paddingBottom: "50%", background: "#060D18",
            opacity: switching ? 0 : 1, transition: "opacity 0.26s",
          }}>
            {/* Click-to-load overlay — hides once user clicks */}
            {!isLaunched && (
              <ClickOverlay project={proj} index={active} onLaunch={() => launch(active)} />
            )}

            {/* Loading spinner (only after click, before load) */}
            {isLaunched && !isLoaded && (
              <div style={{
                position: "absolute", inset: 0, zIndex: 2,
                display: "flex", flexDirection: "column",
                alignItems: "center", justifyContent: "center",
              }}>
                <div style={{
                  width: 30, height: 30, borderRadius: "50%",
                  border: "2px solid rgba(46,108,200,0.2)", borderTop: "2px solid #2E6CC8",
                  animation: "spinDemo 0.8s linear infinite", marginBottom: 10,
                }} />
                <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 11, color: "rgba(255,255,255,0.28)" }}>Loading tour…</span>
              </div>
            )}

            {/* iframe — only in DOM after user clicks */}
            {isLaunched && (
              <iframe
                key={proj.url}
                src={proj.url}
                title={proj.name}
                allowFullScreen
                allow="fullscreen; xr-spatial-tracking"
                onLoad={() => setLoaded(prev => ({ ...prev, [active]: true }))}
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none" }}
              />
            )}
          </div>
        </div>

        {/* Facts strip */}
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(3,1fr)",
          marginTop: 1, borderRadius: "0 0 14px 14px",
          overflow: "hidden", border: "1px solid rgba(13,21,32,0.07)", borderTop: "none",
        }} className="demo-facts">
          {[["Works on any device","No app download needed"],["Drag to explore","Every room, every angle"],["VR headset ready","Apple Vision Pro · Oculus"]].map(([a, b]) => (
            <div key={a} style={{ padding: "13px 18px", background: "rgba(13,21,32,0.02)", borderRight: "1px solid rgba(13,21,32,0.05)" }}>
              <div style={{ fontFamily: "'Inter',sans-serif", fontSize: 12, fontWeight: 500, color: "#0D1520", marginBottom: 2 }}>{a}</div>
              <div style={{ fontFamily: "'Inter',sans-serif", fontSize: 11, color: "rgba(13,21,32,0.38)", fontWeight: 300 }}>{b}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes spinDemo { to{transform:rotate(360deg)} }
        @media(max-width:640px){ #live-demo .demo-facts{ grid-template-columns:1fr !important; } }
      `}</style>
    </section>
  );
}
