import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <section style={{ background: "linear-gradient(160deg, #080F1A 0%, #0A1628 60%, #0C1E38 100%)", padding: "80px 0", textAlign: "center", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 600, height: 500, borderRadius: "50%", background: "radial-gradient(ellipse, rgba(46,108,200,0.1) 0%, transparent 68%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(26,80,160,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(26,80,160,0.05) 1px, transparent 1px)", backgroundSize: "80px 80px", pointerEvents: "none" }} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: 720, margin: "0 auto", padding: "0 2rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, justifyContent: "center", marginBottom: 28 }}>
          <div style={{ width: 36, height: 1, background: "rgba(46,108,200,0.5)" }} />
          <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 10, fontWeight: 500, letterSpacing: 3.5, textTransform: "uppercase", color: "rgba(91,143,224,0.7)" }}>Get Started Today</span>
          <div style={{ width: 36, height: 1, background: "rgba(46,108,200,0.5)" }} />
        </div>

        <h2 style={{
          fontFamily: "'Cormorant',serif", fontWeight: 700,
          fontSize: "clamp(3rem,7vw,6.5rem)",
          letterSpacing: -1, lineHeight: 0.92,
          color: "#FFFFFF", marginBottom: 24,
        }}>
          See every property<br />
          <em style={{ color: "#5B8FE0", fontStyle: "italic" }}>before you visit.</em>
        </h2>

        <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 14, color: "rgba(255,255,255,0.35)", lineHeight: 1.85, marginBottom: 44, fontWeight: 300, maxWidth: 480, margin: "0 auto 44px" }}>
          Join 10,000+ real estate professionals listing smarter with Saviour360.
        </p>

        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <Link to="/contact"
            style={{ padding: "14px 40px", borderRadius: 7, background: "linear-gradient(135deg, #1A50A0, #2E6CC8)", fontFamily: "'Inter',sans-serif", fontSize: 14, fontWeight: 600, color: "#fff", textDecoration: "none", boxShadow: "0 6px 28px rgba(26,80,160,0.4)", transition: "transform 0.25s, box-shadow 0.25s" }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 10px 38px rgba(26,80,160,0.52)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 6px 28px rgba(26,80,160,0.4)"; }}>
            Request a Tour
          </Link>
          <a href="#faq"
            style={{ padding: "14px 40px", borderRadius: 7, border: "1px solid rgba(255,255,255,0.12)", fontFamily: "'Inter',sans-serif", fontSize: 14, fontWeight: 400, color: "rgba(255,255,255,0.65)", textDecoration: "none", backdropFilter: "blur(8px)", transition: "all 0.25s" }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(91,143,224,0.4)"; e.currentTarget.style.color = "#5B8FE0"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; e.currentTarget.style.color = "rgba(255,255,255,0.65)"; }}>
            See FAQ
          </a>
        </div>
      </div>
      <style>{`
        @media(max-width:500px){
          .cta-buttons{ flex-direction:column !important; }
          .cta-buttons a{ width:100% !important; text-align:center !important; }
        }
      `}</style>
    </section>
  );
}
