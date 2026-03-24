import { useState } from "react";
import { FEATURES as FALLBACK_FEATURES } from "../../constants";
import { useCMS } from "../../hooks";

const toFeature = (doc) => ({ icon: doc.icon || "◉", title: doc.title, desc: doc.description || doc.desc || "" });
const FEATURES_ENDPOINT = "/api/home-features?where[active][equals]=true&sort=order&limit=20";

export default function FeaturesSection() {
  const { data: FEATURES } = useCMS(FEATURES_ENDPOINT, FALLBACK_FEATURES, toFeature);
  return (
    <section id="features" style={{ background: "#F5F0E8", padding: "72px 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 2.5rem" }}>
        <div style={{ marginBottom: 48 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
            <div style={{ width: 32, height: 1, background: "#1A50A0" }} />
            <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: 3.5, textTransform: "uppercase", color: "#1A50A0" }}>Features</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 20 }}>
            <h2 style={{ fontFamily: "'Cormorant',serif", fontWeight: 700, fontSize: "clamp(2.8rem,5vw,5rem)", color: "#0D1520", lineHeight: 0.95, letterSpacing: -0.5 }}>
              Everything your<br /><em style={{ color: "#1A50A0", fontStyle: "italic" }}>listings need</em>
            </h2>
            <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 14, color: "rgba(13,21,32,0.48)", lineHeight: 1.85, maxWidth: 360 }}>
              Purpose-built for real estate professionals who need results, not complexity.
            </p>
          </div>
        </div>

        {/* Desktop 3-col */}
        <div className="features-desktop" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
          {FEATURES.map((f, i) => <FeatureCard key={f.title} {...f} index={i} total={FEATURES.length} />)}
        </div>

        {/* Mobile 2x2 compact */}
        <div className="features-mobile" style={{ display: "none", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          {FEATURES.slice(0, 6).map((f, i) => (
            <div key={f.title} style={{ padding: "20px 18px", borderRadius: 12, background: "#FFFFFF", border: "1px solid rgba(13,21,32,0.07)" }}>
              <div style={{ fontFamily: "'Inter',sans-serif", fontSize: 9, fontWeight: 700, letterSpacing: 2, color: "#1A50A0", marginBottom: 8 }}>
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 style={{ fontFamily: "'Cormorant',serif", fontWeight: 700, fontSize: 16, color: "#0D1520", marginBottom: 6, lineHeight: 1.2 }}>{f.title}</h3>
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 11, color: "rgba(13,21,32,0.5)", lineHeight: 1.65 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media(max-width:640px){
          .features-desktop{ display:none !important; }
          .features-mobile{ display:grid !important; }
        }
      `}</style>
    </section>
  );
}

function FeatureCard({ title, desc, index, total }) {
  const [h, setH] = useState(false);
  const col = index % 3; const row = Math.floor(index / 3); const rows = Math.ceil(total / 3);
  return (
    <div onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ padding: "40px 36px", background: h ? "#FFFFFF" : "transparent", transition: "background 0.3s ease", borderRight: col < 2 ? "1px solid rgba(13,21,32,0.07)" : "none", borderBottom: row < rows - 1 ? "1px solid rgba(13,21,32,0.07)" : "none", cursor: "default" }}>
      <div style={{ fontFamily: "'Inter',sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: 2.5, color: h ? "#1A50A0" : "rgba(13,21,32,0.22)", marginBottom: 18, transition: "color 0.3s" }}>
        {String(index + 1).padStart(2, "0")}
      </div>
      <h3 style={{ fontFamily: "'Cormorant',serif", fontWeight: 600, fontSize: 22, color: "#0D1520", marginBottom: 10, lineHeight: 1.2, letterSpacing: -0.2 }}>{title}</h3>
      <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 13.5, color: "rgba(13,21,32,0.52)", lineHeight: 1.8 }}>{desc}</p>
      {h && <div style={{ marginTop: 20, width: 32, height: 1.5, background: "#1A50A0", animation: "drawLine 0.3s ease both" }} />}
    </div>
  );
}
