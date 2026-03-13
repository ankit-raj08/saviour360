import { useState } from "react";
import { FAQS } from "../../constants";

export default function FAQSection() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" style={{ background: "#FFFFFF", padding: "100px 0" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 2.5rem" }}>
        <div className="faq-layout" style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 80, alignItems: "flex-start" }}>

          {/* Left */}
          <div className="faq-sticky-col" style={{ position: "sticky", top: 100 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
              <div style={{ width: 32, height: 1, background: "#1A50A0" }} />
              <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: 3.5, textTransform: "uppercase", color: "#1A50A0" }}>FAQ</span>
            </div>
            <h2 style={{ fontFamily: "'Cormorant',serif", fontWeight: 700, fontSize: "clamp(2.4rem, 4vw, 4.2rem)", color: "#0D1520", lineHeight: 0.95, letterSpacing: -0.5, marginBottom: 20 }}>
              Common<br /><em style={{ color: "#1A50A0", fontStyle: "italic" }}>questions</em>
            </h2>
            <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 14, color: "rgba(13,21,32,0.45)", lineHeight: 1.85, fontWeight: 300, marginBottom: 32 }}>
              Can't find what you're looking for? Our team responds within 24 hours.
            </p>
            <a href="/contact"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 24px", borderRadius: 7, border: "1.5px solid rgba(13,21,32,0.12)", fontFamily: "'Inter',sans-serif", fontSize: 13, fontWeight: 500, color: "rgba(13,21,32,0.65)", textDecoration: "none", transition: "all 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#1A50A0"; e.currentTarget.style.color = "#1A50A0"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(13,21,32,0.12)"; e.currentTarget.style.color = "rgba(13,21,32,0.65)"; }}>
              Contact Us
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
          </div>

          {/* Right — accordion */}
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {FAQS.map((faq, i) => (
              <FAQItem key={i} {...faq} index={i} isOpen={open === i} toggle={() => setOpen(open === i ? -1 : i)} isLast={i === FAQS.length - 1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQItem({ q, a, index, isOpen, toggle, isLast }) {
  return (
    <div style={{ borderTop: "1px solid rgba(13,21,32,0.07)", borderBottom: isLast ? "1px solid rgba(13,21,32,0.07)" : "none" }}>
      <button
        onClick={toggle}
        style={{ width: "100%", padding: "22px 0", background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "flex-start", gap: 16, textAlign: "left" }}>
        <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 11, fontWeight: 600, color: isOpen ? "#1A50A0" : "rgba(13,21,32,0.25)", letterSpacing: 1.5, minWidth: 24, marginTop: 1, transition: "color 0.2s" }}>
          {String(index + 1).padStart(2, "0")}
        </span>
        <span style={{ flex: 1, fontFamily: "'Inter',sans-serif", fontSize: 14, fontWeight: 500, color: isOpen ? "#0D1520" : "rgba(13,21,32,0.72)", lineHeight: 1.5, transition: "color 0.2s" }}>
          {q}
        </span>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ flexShrink: 0, marginTop: 2, transform: isOpen ? "rotate(180deg)" : "none", transition: "transform 0.28s ease", color: isOpen ? "#1A50A0" : "rgba(13,21,32,0.3)" }}>
          <path d="M4.5 6.75L9 11.25L13.5 6.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* Answer — animated height */}
      <div style={{
        overflow: "hidden",
        maxHeight: isOpen ? "300px" : "0",
        transition: "max-height 0.35s cubic-bezier(0.25, 0, 0.25, 1)",
      }}>
        <p style={{ paddingBottom: 22, paddingLeft: 40, fontFamily: "'Inter',sans-serif", fontSize: 13.5, fontWeight: 300, color: "rgba(13,21,32,0.55)", lineHeight: 1.85 }}>
          {a}
        </p>
      </div>
    </div>
  );
}
