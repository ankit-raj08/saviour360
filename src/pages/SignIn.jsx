import { useState } from "react";
import { Link } from "react-router-dom";

export default function SignIn() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [focused, setFocused] = useState(null);
  const set = k => v => setForm(f => ({ ...f, [k]: v }));

  return (
    <div style={{ minHeight: "100vh", display: "grid", gridTemplateColumns: "1fr 1fr" }}>
      <LeftPanel title="Welcome back." sub="Sign in to manage your 360° tours, track leads, and close more properties." />
      <div style={{ background: "#F5F0E8", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem" }}>
        <div style={{ width: "100%", maxWidth: 400, animation: "fadeUp 0.6s ease both" }}>
          <h1 style={{ fontFamily: "'Cormorant',serif", fontWeight: 700, fontSize: 56, color: "#0D1520", lineHeight: 1, letterSpacing: -1, marginBottom: 8 }}>Sign In</h1>
          <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 13, color: "rgba(13,21,32,0.45)", marginBottom: 36, fontWeight: 300 }}>
            New to Saviour360? <Link to="/contact" style={{ color: "#1A50A0", textDecoration: "none", fontWeight: 500 }}>Request access →</Link>
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <Field label="Email Address" type="email" value={form.email} onChange={set("email")} placeholder="you@company.com" id="email" focused={focused} setFocused={setFocused} />
            <Field label="Password" type="password" value={form.password} onChange={set("password")} placeholder="Your password" id="password" focused={focused} setFocused={setFocused} />
            <div style={{ textAlign: "right" }}>
              <a href="#" style={{ fontFamily: "'Inter',sans-serif", fontSize: 12, color: "#1A50A0", textDecoration: "none" }}>Forgot password?</a>
            </div>
            <SubmitBtn label="Sign In" />
          </div>
          <Divider />
          <OAuthBtns />
        </div>
      </div>
    </div>
  );
}

/* ── Shared across SignIn + SignUp ─────────────────── */

export function LeftPanel({ title, sub }) {
  return (
    <div style={{ background: "linear-gradient(160deg, #080F1A 0%, #0A1628 55%, #0C1E38 100%)", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "80px 56px", position: "relative", overflow: "hidden" }}>
      {/* Grid bg */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(26,80,160,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(26,80,160,0.06) 1px, transparent 1px)", backgroundSize: "70px 70px", pointerEvents: "none" }} />
      {/* Ambient glow */}
      <div style={{ position: "absolute", bottom: "20%", right: "8%", width: 340, height: 340, borderRadius: "50%", background: "radial-gradient(circle, rgba(46,108,200,0.1) 0%, transparent 70%)", pointerEvents: "none" }} />

      {/* Content — no logo here, navbar handles branding */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <h2 style={{ fontFamily: "'Cormorant',serif", fontWeight: 700, fontSize: "clamp(3rem,4.5vw,4.5rem)", letterSpacing: -1, color: "#FFFFFF", lineHeight: 1, marginBottom: 20 }}>{title}</h2>
        <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 14, fontWeight: 300, color: "rgba(255,255,255,0.38)", lineHeight: 1.85, maxWidth: 340, marginBottom: 36 }}>{sub}</p>
        {["10,000+ properties listed","Trusted by 2,000+ real estate teams","98% client satisfaction rate"].map(item => (
          <div key={item} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
            <div style={{ width: 18, height: 18, borderRadius: "50%", border: "1px solid rgba(46,108,200,0.35)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9, color: "#5B8FE0", flexShrink: 0 }}>✓</div>
            <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 13, color: "rgba(255,255,255,0.38)", fontWeight: 300 }}>{item}</span>
          </div>
        ))}
      </div>

      <div style={{ position: "relative", zIndex: 1, marginTop: 52, fontFamily: "'Cormorant',serif", fontStyle: "italic", fontSize: 15, color: "rgba(255,255,255,0.18)", letterSpacing: 0.2 }}>
        "The fastest way to sell properties."
      </div>
    </div>
  );
}

export function Field({ label, type, value, onChange, placeholder, id, focused, setFocused }) {
  const f = focused === id;
  return (
    <div>
      <label style={{ display: "block", fontFamily: "'Inter',sans-serif", fontSize: 10, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", color: "rgba(13,21,32,0.42)", marginBottom: 7 }}>{label}</label>
      <input id={id} type={type} value={value} placeholder={placeholder}
        onChange={e => onChange(e.target.value)}
        onFocus={() => setFocused(id)} onBlur={() => setFocused(null)}
        style={{ width: "100%", padding: "12px 14px", borderRadius: 7, border: `1.5px solid ${f ? "#1A50A0" : "rgba(13,21,32,0.12)"}`, background: f ? "rgba(26,80,160,0.03)" : "#FFFFFF", fontFamily: "'Inter',sans-serif", fontSize: 14, fontWeight: 300, color: "#0D1520", outline: "none", transition: "border-color 0.2s, background 0.2s" }} />
    </div>
  );
}

export function SubmitBtn({ label }) {
  const [h, setH] = useState(false);
  return (
    <button onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ width: "100%", padding: "13px", borderRadius: 7, border: "none", cursor: "pointer", background: h ? "#1A50A0" : "#0A1628", fontFamily: "'Inter',sans-serif", fontSize: 13, fontWeight: 600, letterSpacing: 0.3, color: "#FFFFFF", transition: "background 0.25s, transform 0.25s", transform: h ? "translateY(-1px)" : "none", boxShadow: h ? "0 6px 20px rgba(26,80,160,0.28)" : "0 2px 8px rgba(10,22,40,0.15)" }}>
      {label}
    </button>
  );
}

export function Divider() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 14, margin: "24px 0" }}>
      <div style={{ flex: 1, height: 1, background: "rgba(13,21,32,0.08)" }} />
      <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 11, color: "rgba(13,21,32,0.3)", fontWeight: 300 }}>or continue with</span>
      <div style={{ flex: 1, height: 1, background: "rgba(13,21,32,0.08)" }} />
    </div>
  );
}

export function OAuthBtns() {
  const [h, setH] = useState(null);
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 9 }}>
      {[{ label: "Google", k: "G" }, { label: "Microsoft", k: "M" }].map(o => (
        <button key={o.label}
          onMouseEnter={() => setH(o.label)} onMouseLeave={() => setH(null)}
          style={{ padding: "11px", borderRadius: 7, border: `1.5px solid ${h === o.label ? "#1A50A0" : "rgba(13,21,32,0.1)"}`, background: "transparent", cursor: "pointer", fontFamily: "'Inter',sans-serif", fontSize: 13, fontWeight: 400, color: h === o.label ? "#1A50A0" : "rgba(13,21,32,0.55)", display: "flex", alignItems: "center", justifyContent: "center", gap: 7, transition: "all 0.2s" }}>
          <span style={{ width: 18, height: 18, borderRadius: "50%", background: "rgba(13,21,32,0.05)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 700 }}>{o.k}</span>
          {o.label}
        </button>
      ))}
    </div>
  );
}
