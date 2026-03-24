import { STATS } from "../../constants";

export default function StatsBar() {
  return (
    <section style={{ background: "#FFFFFF", borderTop: "1px solid rgba(13,21,32,0.06)", borderBottom: "1px solid rgba(13,21,32,0.06)" }}>
      {/* Desktop: 4 columns */}
      <div className="stats-desktop" style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}>
        {STATS.map((s, i) => (
          <div key={s.label} style={{ padding: "36px 0", textAlign: "center", borderRight: i < 3 ? "1px solid rgba(13,21,32,0.06)" : "none" }}>
            <div style={{ fontFamily: "'Cormorant',serif", fontWeight: 700, fontSize: "clamp(2rem,3vw,3.4rem)", color: "#1A50A0", lineHeight: 1, letterSpacing: -0.5 }}>{s.value}</div>
            <div style={{ fontFamily: "'Inter',sans-serif", fontSize: 11, color: "rgba(13,21,32,0.4)", marginTop: 7, letterSpacing: 0.3, lineHeight: 1.5, padding: "0 12px" }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Mobile: 2x2 compact */}
      <div className="stats-mobile" style={{ display: "none", maxWidth: 1280, margin: "0 auto", gridTemplateColumns: "1fr 1fr" }}>
        {STATS.map((s, i) => (
          <div key={s.label} style={{
            padding: "22px 12px", textAlign: "center",
            borderRight: i % 2 === 0 ? "1px solid rgba(13,21,32,0.06)" : "none",
            borderBottom: i < 2 ? "1px solid rgba(13,21,32,0.06)" : "none",
          }}>
            <div style={{ fontFamily: "'Cormorant',serif", fontWeight: 700, fontSize: "1.9rem", color: "#1A50A0", lineHeight: 1, letterSpacing: -0.5 }}>{s.value}</div>
            <div style={{ fontFamily: "'Inter',sans-serif", fontSize: 10, color: "rgba(13,21,32,0.4)", marginTop: 5, letterSpacing: 0.2, lineHeight: 1.4, padding: "0 8px" }}>{s.label}</div>
          </div>
        ))}
      </div>

      <style>{`
        @media(max-width:640px){
          .stats-desktop{ display:none !important; }
          .stats-mobile{ display:grid !important; }
        }
      `}</style>
    </section>
  );
}
