import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "", email: "", company: "", phone: "",
    propertyType: "", city: "", tourType: "", message: "",
  });
  const [focused, setFocused] = useState(null);
  const [sent, setSent] = useState(false);
  const set = k => e => setForm(f => ({ ...f, [k]: e.target.value }));

  return (
    <div style={{ background: "#F5F0E8", minHeight: "100vh", paddingTop: 68 }}>
      {/* Header band */}
      <div style={{ background: "linear-gradient(160deg, #080F1A 0%, #0A1628 60%, #0C1E38 100%)", padding: "80px 2.5rem", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(26,80,160,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(26,80,160,0.06) 1px, transparent 1px)", backgroundSize: "70px 70px", pointerEvents: "none" }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, justifyContent: "center", marginBottom: 18 }}>
            <div style={{ width: 28, height: 1, background: "rgba(46,108,200,0.6)" }} />
            <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: 3.5, textTransform: "uppercase", color: "rgba(91,143,224,0.8)" }}>Get In Touch</span>
            <div style={{ width: 28, height: 1, background: "rgba(46,108,200,0.6)" }} />
          </div>
          <h1 style={{ fontFamily: "'Cormorant',serif", fontWeight: 700, fontSize: "clamp(3.5rem,7vw,6.5rem)", letterSpacing: -1.5, color: "#FFFFFF", lineHeight: 0.92, marginBottom: 16 }}>
            Let's talk<br /><em style={{ color: "#5B8FE0", fontStyle: "italic" }}>real estate</em>
          </h1>
          <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 14, color: "rgba(255,255,255,0.34)", marginTop: 18, fontWeight: 300 }}>Questions, demos, partnerships — we're here.</p>
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 2.5rem", display: "grid", gridTemplateColumns: "1fr 1.8fr", gap: 72 }} className="contact-layout">
        {/* Info column */}
        <div>
          <h2 style={{ fontFamily: "'Cormorant',serif", fontWeight: 700, fontSize: 34, letterSpacing: -0.8, color: "#0D1520", marginBottom: 8 }}>Contact Info</h2>
          <div style={{ width: 36, height: 1.5, background: "#1A50A0", marginBottom: 36 }} />
          {[{ l: "Email", v: "hello@saviour360.com", href: "mailto:hello@saviour360.com" }, { l: "Sales", v: "sales@saviour360.com", href: "mailto:sales@saviour360.com" }, { l: "Support", v: "support@saviour360.com", href: "mailto:support@saviour360.com" }].map(c => (
            <div key={c.l} style={{ marginBottom: 26 }}>
              <div style={{ fontFamily: "'Inter',sans-serif", fontSize: 9.5, fontWeight: 600, letterSpacing: 2.5, textTransform: "uppercase", color: "rgba(13,21,32,0.35)", marginBottom: 4 }}>{c.l}</div>
              <a href={c.href} style={{ fontFamily: "'Inter',sans-serif", fontSize: 14, color: "#0D1520", textDecoration: "none", fontWeight: 400, transition: "color 0.2s" }}
                onMouseEnter={e => e.target.style.color = "#1A50A0"} onMouseLeave={e => e.target.style.color = "#0D1520"}>{c.v}</a>
            </div>
          ))}
          <div style={{ marginTop: 48, padding: "28px 30px", background: "#0A1628", borderRadius: 12 }}>
            <div style={{ fontFamily: "'Cormorant',serif", fontWeight: 600, fontSize: 22, color: "#5B8FE0", marginBottom: 8 }}>Book a Demo</div>
            <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 13, color: "rgba(255,255,255,0.38)", lineHeight: 1.7, marginBottom: 18, fontWeight: 300 }}>See Saviour360 in a 20-min guided demo.</p>
            <a href="#" style={{ display: "inline-block", padding: "10px 22px", borderRadius: 7, background: "linear-gradient(135deg, #1A50A0, #2E6CC8)", fontFamily: "'Inter',sans-serif", fontSize: 13, fontWeight: 600, color: "#fff", textDecoration: "none" }}>Schedule Demo</a>
          </div>
        </div>

        {/* Form */}
        <div>
          {sent ? <ThankYou /> : (
            <div style={{ background: "#FFFFFF", padding: "48px", borderRadius: 14, boxShadow: "0 4px 30px rgba(13,21,32,0.06)" }} className="contact-form-card">
              <h3 style={{ fontFamily: "'Cormorant',serif", fontWeight: 700, fontSize: 30, letterSpacing: -0.5, color: "#0D1520", marginBottom: 32 }}>Send a message</h3>

              {/* Row 1: Name + Email */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }} className="form-row-2">
                <InputGroup label="Full Name" type="text" value={form.name} onChange={set("name")} placeholder="Your name" id="cn" f={focused} sf={setFocused} />
                <InputGroup label="Email" type="email" value={form.email} onChange={set("email")} placeholder="your@email.com" id="ce" f={focused} sf={setFocused} />
              </div>

              {/* Row 2: Company + Phone */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }} className="form-row-2">
                <InputGroup label="Company / Firm" type="text" value={form.company} onChange={set("company")} placeholder="Your real estate firm" id="cc" f={focused} sf={setFocused} />
                <InputGroup label="Phone Number" type="text" value={form.phone} onChange={set("phone")} placeholder="+91 98765 43210" id="cp" f={focused} sf={setFocused} />
              </div>

              {/* Row 3: Property Type + City */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }} className="form-row-2">
                <SelectGroup
                  label="Property Type"
                  value={form.propertyType}
                  onChange={set("propertyType")}
                  id="cpt" f={focused} sf={setFocused}
                  options={["Apartment", "Villa", "Commercial", "Plot", "Other"]}
                />
                <InputGroup label="City" type="text" value={form.city} onChange={set("city")} placeholder="e.g. Mumbai, Pune, Bangalore" id="cct" f={focused} sf={setFocused} />
              </div>

              {/* Row 4: Tour Type – full width */}
              <div style={{ marginBottom: 16 }}>
                <SelectGroup
                  label="Tour Type"
                  value={form.tourType}
                  onChange={set("tourType")}
                  id="ctt" f={focused} sf={setFocused}
                  options={["360° Interior", "Aerial Drone", "Helicopter View", "Google Street View", "Full Package"]}
                />
              </div>

              {/* Row 5: Message */}
              <div style={{ marginBottom: 24 }}>
                <label style={{ display: "block", fontFamily: "'Inter',sans-serif", fontSize: 10, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", color: "rgba(13,21,32,0.38)", marginBottom: 7 }}>Message</label>
                <textarea value={form.message} onChange={set("message")} placeholder="How can we help?" rows={4}
                  onFocus={() => setFocused("cm")} onBlur={() => setFocused(null)}
                  style={{ width: "100%", padding: "12px 14px", borderRadius: 7, border: `1.5px solid ${focused === "cm" ? "#1A50A0" : "rgba(13,21,32,0.1)"}`, background: "#FFFFFF", fontFamily: "'Inter',sans-serif", fontSize: 14, fontWeight: 300, color: "#0D1520", outline: "none", resize: "vertical", transition: "border-color 0.2s" }} />
              </div>

              <button onClick={() => setSent(true)}
                style={{ width: "100%", padding: "13px", borderRadius: 7, border: "none", cursor: "pointer", background: "#0A1628", fontFamily: "'Inter',sans-serif", fontSize: 13, fontWeight: 600, color: "#FFFFFF", transition: "background 0.25s" }}
                onMouseEnter={e => e.target.style.background = "#1A50A0"} onMouseLeave={e => e.target.style.background = "#0A1628"}>
                Send Message
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function InputGroup({ label, type, value, onChange, placeholder, id, f, sf }) {
  const active = f === id;
  return (
    <div>
      <label style={{ display: "block", fontFamily: "'Inter',sans-serif", fontSize: 10, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", color: "rgba(13,21,32,0.38)", marginBottom: 7 }}>{label}</label>
      <input type={type} value={value} placeholder={placeholder} onChange={onChange}
        onFocus={() => sf(id)} onBlur={() => sf(null)}
        style={{ width: "100%", padding: "12px 14px", borderRadius: 7, border: `1.5px solid ${active ? "#1A50A0" : "rgba(13,21,32,0.1)"}`, background: "#FFFFFF", fontFamily: "'Inter',sans-serif", fontSize: 14, fontWeight: 300, color: "#0D1520", outline: "none", transition: "border-color 0.2s" }} />
    </div>
  );
}

function SelectGroup({ label, value, onChange, id, f, sf, options }) {
  const active = f === id;
  return (
    <div>
      <label style={{ display: "block", fontFamily: "'Inter',sans-serif", fontSize: 10, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", color: "rgba(13,21,32,0.38)", marginBottom: 7 }}>{label}</label>
      <div style={{ position: "relative" }}>
        <select
          value={value} onChange={onChange}
          onFocus={() => sf(id)} onBlur={() => sf(null)}
          style={{
            width: "100%", padding: "12px 36px 12px 14px", borderRadius: 7,
            border: `1.5px solid ${active ? "#1A50A0" : "rgba(13,21,32,0.1)"}`,
            background: "#FFFFFF", fontFamily: "'Inter',sans-serif", fontSize: 14,
            fontWeight: 300, color: value ? "#0D1520" : "rgba(13,21,32,0.35)",
            outline: "none", transition: "border-color 0.2s",
            appearance: "none", WebkitAppearance: "none", cursor: "pointer",
          }}>
          <option value="" disabled>Select…</option>
          {options.map(o => <option key={o} value={o}>{o}</option>)}
        </select>
        <svg style={{ position: "absolute", right: 13, top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}
          width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M2.5 4.5L6 8L9.5 4.5" stroke={active ? "#1A50A0" : "rgba(13,21,32,0.35)"} strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  );
}

function ThankYou() {
  return (
    <div style={{ background: "#FFFFFF", padding: "80px 48px", borderRadius: 14, boxShadow: "0 4px 30px rgba(13,21,32,0.06)", textAlign: "center" }}>
      <div style={{ width: 56, height: 56, borderRadius: "50%", background: "linear-gradient(135deg, #1A50A0, #2E6CC8)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px", fontSize: 20, color: "#fff" }}>✓</div>
      <h3 style={{ fontFamily: "'Cormorant',serif", fontWeight: 700, fontSize: 34, letterSpacing: -0.5, color: "#0D1520", marginBottom: 10 }}>Message sent.</h3>
      <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 14, color: "rgba(13,21,32,0.45)", lineHeight: 1.8, fontWeight: 300 }}>We'll get back to you within one business day.</p>
    </div>
  );
}
