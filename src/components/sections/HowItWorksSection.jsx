import { useState } from "react";
import { STEPS } from "../../constants";

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" style={{ background: "#FFFFFF", padding: "100px 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 2.5rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
          <div style={{ width: 32, height: 1, background: "#1A50A0" }} />
          <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: 3.5, textTransform: "uppercase", color: "#1A50A0" }}>Process</span>
        </div>
        <h2 style={{ fontFamily: "'Cormorant',serif", fontWeight: 700, fontSize: "clamp(2.8rem,5vw,5rem)", color: "#0D1520", lineHeight: 0.95, letterSpacing: -0.5, marginBottom: 52 }}>
          Live in <em style={{ color: "#1A50A0", fontStyle: "italic" }}>4 steps</em>
        </h2>

        <div className="steps-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
          {STEPS.map((s, i) => (
            <StepCard key={s.step} {...s} isLast={i === STEPS.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StepCard({ step, title, desc, isLast }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: "48px 36px",
        cursor: "default",
        background: hovered ? "linear-gradient(160deg, #1A50A0 0%, #0D2E6E 100%)" : "#FFFFFF",
        borderRight: isLast ? "none" : `1px solid ${hovered ? "transparent" : "rgba(13,21,32,0.07)"}`,
        transition: "background 0.35s ease, transform 0.35s ease, box-shadow 0.35s ease",
        transform: hovered ? "translateY(-8px) scale(1.025)" : "translateY(0) scale(1)",
        boxShadow: hovered ? "0 20px 52px rgba(26,80,160,0.22)" : "none",
        borderRadius: hovered ? 10 : 0,
        zIndex: hovered ? 1 : 0,
        position: "relative",
      }}>
      <div style={{ fontFamily: "'Cormorant',serif", fontWeight: 700, fontSize: 64, lineHeight: 1, color: hovered ? "rgba(255,255,255,0.18)" : "rgba(26,80,160,0.14)", marginBottom: 20, transition: "color 0.35s", letterSpacing: -2 }}>{step}</div>
      <h3 style={{ fontFamily: "'Cormorant',serif", fontWeight: 700, fontSize: 24, letterSpacing: -0.3, color: hovered ? "#FFFFFF" : "#0D1520", marginBottom: 12, transition: "color 0.35s" }}>{title}</h3>
      <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 13.5, color: hovered ? "rgba(255,255,255,0.72)" : "rgba(13,21,32,0.58)", lineHeight: 1.8, transition: "color 0.35s" }}>{desc}</p>
      <div style={{ marginTop: 28, height: 1.5, width: hovered ? 32 : 0, background: hovered ? "rgba(255,255,255,0.5)" : "#2E6CC8", transition: "width 0.35s ease" }} />
    </div>
  );
}
