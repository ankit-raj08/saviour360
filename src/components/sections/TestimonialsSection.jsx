import { useState, useEffect, useRef, useCallback } from "react";
import { TESTIMONIALS } from "../../constants";

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const timerRef = useRef(null);

  const resetTimer = useCallback(() => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => setActive(p => (p + 1) % TESTIMONIALS.length), 5500);
  }, []);

  useEffect(() => { resetTimer(); return () => clearInterval(timerRef.current); }, [resetTimer]);

  const go = useCallback((i) => { setActive(i); resetTimer(); }, [resetTimer]);

  return (
    <section style={{ background: "#F5F0E8", padding: "100px 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 2.5rem" }}>

        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
          <div style={{ width: 32, height: 1, background: "#1A50A0" }} />
          <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: 3.5, textTransform: "uppercase", color: "#1A50A0" }}>Testimonials</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 20, marginBottom: 52 }}>
          <h2 style={{ fontFamily: "'Cormorant',serif", fontWeight: 700, fontSize: "clamp(2.8rem,5vw,5rem)", color: "#0D1520", lineHeight: 0.95, letterSpacing: -0.5 }}>
            What clients<br /><em style={{ color: "#1A50A0", fontStyle: "italic" }}>actually say</em>
          </h2>
          <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 14, color: "rgba(13,21,32,0.45)", lineHeight: 1.7, maxWidth: 320 }}>Trusted by 2,000+ real estate professionals across India.</p>
        </div>

        {/* Three cards — click side ones to navigate */}
        <div className="testimonials-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20, marginBottom: 40 }}>
          {[-1, 0, 1].map((offset) => {
            const idx = (active + offset + TESTIMONIALS.length) % TESTIMONIALS.length;
            return (
              <TestCard key={`${active}-${offset}`} t={TESTIMONIALS[idx]} isCenter={offset === 0} onClick={() => offset !== 0 && go(idx)} />
            );
          })}
        </div>

        {/* Dot nav — the only controls */}
        <div style={{ display: "flex", gap: 7, justifyContent: "center" }}>
          {TESTIMONIALS.map((_, i) => (
            <button key={i} onClick={() => go(i)}
              style={{ width: i === active ? 26 : 7, height: 7, borderRadius: 100, border: "none", cursor: "pointer", background: i === active ? "#1A50A0" : "rgba(13,21,32,0.15)", padding: 0, transition: "all 0.35s ease" }} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestCard({ t, isCenter, onClick }) {
  const [h, setH] = useState(false);
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => !isCenter && setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        padding: "32px 28px", borderRadius: 12,
        cursor: isCenter ? "default" : "pointer",
        background: isCenter ? "#FFFFFF" : "transparent",
        border: `1px solid ${isCenter ? "rgba(13,21,32,0.08)" : h ? "rgba(13,21,32,0.1)" : "rgba(13,21,32,0.05)"}`,
        transform: isCenter ? "scale(1.02)" : h ? "scale(0.98)" : "scale(0.96)",
        opacity: isCenter ? 1 : h ? 0.75 : 0.52,
        transition: "all 0.4s cubic-bezier(0.25, 0, 0.25, 1)",
        boxShadow: isCenter ? "0 8px 40px rgba(13,21,32,0.07)" : "none",
        position: "relative",
      }}>
      {/* Corner accent on center */}
      {isCenter && (
        <div style={{ position: "absolute", top: 0, left: 0, width: 20, height: 20, borderTop: "2px solid #1A50A0", borderLeft: "2px solid #1A50A0", borderRadius: "12px 0 0 0" }} />
      )}
      <div style={{ fontFamily: "'Cormorant',serif", fontSize: 36, color: isCenter ? "rgba(26,80,160,0.2)" : "rgba(13,21,32,0.08)", lineHeight: 1, marginBottom: 8 }}>"</div>
      <p style={{ fontFamily: "'Inter',sans-serif", fontStyle: "italic", fontSize: 13.5, color: isCenter ? "rgba(13,21,32,0.72)" : "rgba(13,21,32,0.42)", lineHeight: 1.8, marginBottom: 22, minHeight: 80 }}>{t.text}</p>
      <div style={{ display: "flex", alignItems: "center", gap: 11 }}>
        <div style={{ width: 36, height: 36, borderRadius: "50%", background: isCenter ? "linear-gradient(135deg, #1A50A0, #2E6CC8)" : "rgba(13,21,32,0.08)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Inter',sans-serif", fontSize: 11, fontWeight: 700, color: isCenter ? "#fff" : "rgba(13,21,32,0.4)", flexShrink: 0 }}>{t.avatar}</div>
        <div>
          <div style={{ fontFamily: "'Inter',sans-serif", fontSize: 13, fontWeight: 600, color: isCenter ? "#0D1520" : "rgba(13,21,32,0.42)" }}>{t.name}</div>
          <div style={{ fontFamily: "'Inter',sans-serif", fontSize: 11, color: isCenter ? "rgba(13,21,32,0.42)" : "rgba(13,21,32,0.28)", marginTop: 1 }}>{t.role}</div>
        </div>
      </div>
      {isCenter && (
        <div style={{ display: "flex", gap: 2, marginTop: 16 }}>
          {[1,2,3,4,5].map(s => <span key={s} style={{ color: "#1A50A0", fontSize: 11 }}>★</span>)}
        </div>
      )}
    </div>
  );
}
