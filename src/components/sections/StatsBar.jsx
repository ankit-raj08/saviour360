import { STATS } from "../../constants";

export default function StatsBar() {
  return (
    <section style={{ background: "#FFFFFF", borderTop: "1px solid rgba(13,21,32,0.06)", borderBottom: "1px solid rgba(13,21,32,0.06)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}>
        {STATS.map((s, i) => (
          <div key={s.label} style={{ padding: "44px 0", textAlign: "center", borderRight: i < 3 ? "1px solid rgba(13,21,32,0.06)" : "none" }}>
            <div style={{ fontFamily: "'Cormorant',serif", fontWeight: 700, fontSize: "clamp(2rem,3vw,3.4rem)", color: "#1A50A0", lineHeight: 1, letterSpacing: -0.5 }}>{s.value}</div>
            <div style={{ fontFamily: "'Inter',sans-serif", fontSize: 12, color: "rgba(13,21,32,0.4)", marginTop: 8, letterSpacing: 0.3, lineHeight: 1.5, padding: "0 12px" }}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
