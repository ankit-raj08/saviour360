import { useState } from "react";

/* ── Validation helpers ─────────────────────────────────────────── */
const validate = (form) => {
  const e = {};
  if (!form.name.trim()) e.name = "Name is required";
  if (!form.email.trim()) e.email = "Email is required";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email)) e.email = "Enter a valid email";
  if (form.phone && !/^\d{10}$/.test(form.phone.replace(/[\s\-+]/g, "")))
    e.phone = "Enter a valid 10-digit number";
  return e;
};

/* ── Input component ────────────────────────────────────────────── */
function Field({ label, id, error, children }) {
  return (
    <div>
      <label style={{ display: "block", fontFamily: "'Inter',sans-serif", fontSize: 10, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", color: "rgba(13,21,32,0.38)", marginBottom: 6 }}>
        {label}
      </label>
      {children}
      {error && (
        <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 11, color: "#e53e3e", marginTop: 4, display: "flex", alignItems: "center", gap: 4 }}>
          <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><circle cx="6" cy="6" r="5" stroke="#e53e3e" strokeWidth="1.2"/><path d="M6 3.5v3M6 8h.01" stroke="#e53e3e" strokeWidth="1.2" strokeLinecap="round"/></svg>
          {error}
        </p>
      )}
    </div>
  );
}

const inputStyle = (active, error) => ({
  width: "100%", padding: "11px 13px", borderRadius: 7,
  border: `1.5px solid ${error ? "#e53e3e" : active ? "#1A50A0" : "rgba(13,21,32,0.1)"}`,
  background: "#FFFFFF", fontFamily: "'Inter',sans-serif", fontSize: 14,
  fontWeight: 300, color: "#0D1520", outline: "none", transition: "border-color 0.2s",
  boxSizing: "border-box",
});

export default function Contact() {
  const [form, setForm] = useState({ name:"", email:"", company:"", phone:"", propertyType:"", city:"", tourType:"", message:"" });
  const [focused, setFocused] = useState(null);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const set = (k) => (e) => {
    let v = e.target.value;
    // Phone: only digits, spaces, +, -, max 15 chars raw / 10 digits
    if (k === "phone") {
      v = v.replace(/[^\d\s\-+]/g, "").slice(0, 15);
    }
    setForm(f => ({ ...f, [k]: v }));
    if (errors[k]) setErrors(er => ({ ...er, [k]: undefined }));
  };

  const handleSubmit = () => {
    const errs = validate(form);
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSent(true);
  };

  const inp = (id) => ({
    onFocus: () => setFocused(id),
    onBlur: () => setFocused(null),
    style: inputStyle(focused === id, errors[id]),
  });

  return (
    <div style={{ background: "#F5F0E8", minHeight: "100vh", paddingTop: 68 }}>

      {/* Header */}
      <div style={{ background: "linear-gradient(160deg,#080F1A 0%,#0A1628 60%,#0C1E38 100%)", padding: "72px 2rem 64px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(26,80,160,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(26,80,160,0.06) 1px,transparent 1px)", backgroundSize: "70px 70px", pointerEvents: "none" }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, justifyContent: "center", marginBottom: 14 }}>
            <div style={{ width: 24, height: 1, background: "rgba(46,108,200,0.6)" }} />
            <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 10, fontWeight: 500, letterSpacing: 3.5, textTransform: "uppercase", color: "rgba(91,143,224,0.8)" }}>Get In Touch</span>
            <div style={{ width: 24, height: 1, background: "rgba(46,108,200,0.6)" }} />
          </div>
          <h1 style={{ fontFamily: "'Cormorant',serif", fontWeight: 700, fontSize: "clamp(3rem,6vw,5.5rem)", letterSpacing: -1.5, color: "#FFFFFF", lineHeight: 0.92, marginBottom: 14 }}>
            Let's talk<br /><em style={{ color: "#5B8FE0", fontStyle: "italic" }}>real estate</em>
          </h1>
          <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 13, color: "rgba(255,255,255,0.32)", fontWeight: 300 }}>Questions, demos, partnerships — we're here.</p>
        </div>
      </div>

      {/* Body */}
      <div style={{ maxWidth: 1060, margin: "0 auto", padding: "64px 1.5rem", display: "grid", gridTemplateColumns: "240px 1fr", gap: 56 }} className="contact-layout">

        {/* Info */}
        <div>
          <h2 style={{ fontFamily: "'Cormorant',serif", fontWeight: 700, fontSize: 28, letterSpacing: -0.5, color: "#0D1520", marginBottom: 6 }}>Contact</h2>
          <div style={{ width: 28, height: 1.5, background: "#1A50A0", marginBottom: 28 }} />

          {[
            { l: "Email",           v: "info@saviour360.com",  href: "mailto:info@saviour360.com" },
            { l: "Sales & Support", v: "sales@saviour360.com", href: "mailto:sales@saviour360.com" },
          ].map(c => (
            <div key={c.l} style={{ marginBottom: 22 }}>
              <div style={{ fontFamily: "'Inter',sans-serif", fontSize: 9, fontWeight: 600, letterSpacing: 2.5, textTransform: "uppercase", color: "rgba(13,21,32,0.32)", marginBottom: 3 }}>{c.l}</div>
              <a href={c.href} style={{ fontFamily: "'Inter',sans-serif", fontSize: 13, color: "#0D1520", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={e => e.target.style.color = "#1A50A0"} onMouseLeave={e => e.target.style.color = "#0D1520"}>{c.v}</a>
            </div>
          ))}

          <div style={{ marginTop: 36, padding: "22px 24px", background: "#0A1628", borderRadius: 10 }}>
            <div style={{ fontFamily: "'Cormorant',serif", fontWeight: 600, fontSize: 20, color: "#5B8FE0", marginBottom: 6 }}>Book a Demo</div>
            <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 12, color: "rgba(255,255,255,0.35)", lineHeight: 1.6, marginBottom: 16, fontWeight: 300 }}>20-min guided walkthrough.</p>
            <a href="mailto:sales@saviour360.com" style={{ display: "inline-block", padding: "8px 18px", borderRadius: 6, background: "linear-gradient(135deg,#1A50A0,#2E6CC8)", fontFamily: "'Inter',sans-serif", fontSize: 12, fontWeight: 600, color: "#fff", textDecoration: "none" }}>Schedule →</a>
          </div>
        </div>

        {/* Form */}
        <div>
          {sent ? <ThankYou /> : (
            <div style={{ background: "#FFFFFF", padding: "40px", borderRadius: 12, boxShadow: "0 2px 20px rgba(13,21,32,0.05)" }} className="contact-form-card">
              <h3 style={{ fontFamily: "'Cormorant',serif", fontWeight: 700, fontSize: 26, letterSpacing: -0.4, color: "#0D1520", marginBottom: 28 }}>Send a message</h3>

              {/* Row 1 */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }} className="form-row-2">
                <Field label="Full Name *" error={errors.name}>
                  <input type="text" value={form.name} onChange={set("name")} placeholder="Your name" {...inp("cn")} />
                </Field>
                <Field label="Email *" error={errors.email}>
                  <input type="email" value={form.email} onChange={set("email")} placeholder="your@email.com" {...inp("ce")} />
                </Field>
              </div>

              {/* Row 2 */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }} className="form-row-2">
                <Field label="Company / Firm">
                  <input type="text" value={form.company} onChange={set("company")} placeholder="Your real estate firm" {...inp("cc")} />
                </Field>
                <Field label="Phone" error={errors.phone}>
                  <input
                    type="tel" value={form.phone} onChange={set("phone")}
                    placeholder="9876543210" maxLength={15}
                    inputMode="numeric"
                    {...inp("cp")}
                  />
                </Field>
              </div>

              {/* Row 3 */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }} className="form-row-2">
                <Field label="Property Type">
                  <SelectInput value={form.propertyType} onChange={set("propertyType")} id="cpt" focused={focused} setFocused={setFocused}
                    options={["Apartment","Villa","Commercial","Plot","Other"]} />
                </Field>
                <Field label="City">
                  <input type="text" value={form.city} onChange={set("city")} placeholder="e.g. Ahmedabad, Mumbai" {...inp("cct")} />
                </Field>
              </div>

              {/* Tour type */}
              <div style={{ marginBottom: 14 }}>
                <Field label="Tour Type">
                  <SelectInput value={form.tourType} onChange={set("tourType")} id="ctt" focused={focused} setFocused={setFocused}
                    options={["360° Interior","Aerial Drone","Google Street View","Full Package"]} />
                </Field>
              </div>

              {/* Message */}
              <div style={{ marginBottom: 24 }}>
                <Field label="Message">
                  <textarea value={form.message} onChange={set("message")} placeholder="How can we help?" rows={3}
                    onFocus={() => setFocused("cm")} onBlur={() => setFocused(null)}
                    style={{ ...inputStyle(focused === "cm", false), resize: "vertical", display: "block" }} />
                </Field>
              </div>

              <button onClick={handleSubmit}
                style={{ width: "100%", padding: "12px", borderRadius: 7, border: "none", cursor: "pointer", background: "#0A1628", fontFamily: "'Inter',sans-serif", fontSize: 13, fontWeight: 600, color: "#FFFFFF", transition: "background 0.2s" }}
                onMouseEnter={e => e.target.style.background = "#1A50A0"}
                onMouseLeave={e => e.target.style.background = "#0A1628"}>
                Send Message
              </button>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @media(max-width:760px){
          .contact-layout{ grid-template-columns:1fr !important; gap:32px !important; padding:40px 1.25rem !important; }
          .contact-form-card{ padding:24px !important; }
          .form-row-2{ grid-template-columns:1fr !important; }
        }
      `}</style>
    </div>
  );
}

function SelectInput({ value, onChange, id, focused, setFocused, options }) {
  const active = focused === id;
  return (
    <div style={{ position: "relative" }}>
      <select value={value} onChange={onChange} onFocus={() => setFocused(id)} onBlur={() => setFocused(null)}
        style={{ width: "100%", padding: "11px 32px 11px 13px", borderRadius: 7, border: `1.5px solid ${active ? "#1A50A0" : "rgba(13,21,32,0.1)"}`, background: "#FFFFFF", fontFamily: "'Inter',sans-serif", fontSize: 14, fontWeight: 300, color: value ? "#0D1520" : "rgba(13,21,32,0.35)", outline: "none", transition: "border-color 0.2s", appearance: "none", WebkitAppearance: "none", cursor: "pointer", boxSizing: "border-box" }}>
        <option value="" disabled>Select…</option>
        {options.map(o => <option key={o} value={o}>{o}</option>)}
      </select>
      <svg style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }} width="11" height="11" viewBox="0 0 12 12" fill="none">
        <path d="M2.5 4.5L6 8L9.5 4.5" stroke={active ? "#1A50A0" : "rgba(13,21,32,0.35)"} strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    </div>
  );
}

function ThankYou() {
  return (
    <div style={{ background: "#FFFFFF", padding: "64px 40px", borderRadius: 12, boxShadow: "0 2px 20px rgba(13,21,32,0.05)", textAlign: "center" }}>
      <div style={{ width: 48, height: 48, borderRadius: "50%", background: "linear-gradient(135deg,#1A50A0,#2E6CC8)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", fontSize: 18, color: "#fff" }}>✓</div>
      <h3 style={{ fontFamily: "'Cormorant',serif", fontWeight: 700, fontSize: 30, letterSpacing: -0.4, color: "#0D1520", marginBottom: 8 }}>Message sent.</h3>
      <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 13, color: "rgba(13,21,32,0.45)", lineHeight: 1.7, fontWeight: 300 }}>We'll respond within one business day.</p>
    </div>
  );
}
