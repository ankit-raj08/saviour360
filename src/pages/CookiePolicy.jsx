const LAST_UPDATED = "March 17, 2025";

const COOKIE_TYPES = [
  {
    name: "Essential Cookies",
    required: true,
    examples: "Session management, CSRF protection, load balancing",
    purpose: "These cookies are strictly necessary for the website to function. They enable core functionality such as security, session management, and accessibility. The website cannot function properly without these cookies and they cannot be disabled.",
  },
  {
    name: "Analytical Cookies",
    required: false,
    examples: "Google Analytics (_ga, _gid, _gat)",
    purpose: "We use Google Analytics to understand how visitors interact with our website — including which pages are most visited, how users navigate between pages, and where they exit. All data collected is anonymised. This helps us improve the website experience.",
  },
  {
    name: "Functional Cookies",
    required: false,
    examples: "Language preference, cookie consent record",
    purpose: "Functional cookies allow the website to remember choices you make (such as your cookie consent preference) to provide enhanced, personalised features. These cookies do not track browsing activity on other websites.",
  },
];

const THIRD_PARTY = [
  {
    service: "Google Analytics",
    provider: "Google LLC",
    purpose: "Website usage analytics",
    policy: "https://policies.google.com/privacy",
  },
  {
    service: "TeliportMe",
    provider: "TeliportMe Inc.",
    purpose: "360° tour embedding and playback",
    policy: "https://teliportme.com/privacy",
  },
];

export default function CookiePolicy() {
  return (
    <div style={{ background: "#F5F0E8", minHeight: "100vh", paddingTop: 68 }}>
      {/* Hero */}
      <div style={{ background: "linear-gradient(160deg,#080F1A 0%,#0A1628 60%,#0C1E38 100%)", padding: "72px 2.5rem 64px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(26,80,160,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(26,80,160,0.06) 1px,transparent 1px)", backgroundSize: "70px 70px", pointerEvents: "none" }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, justifyContent: "center", marginBottom: 14 }}>
            <div style={{ width: 24, height: 1, background: "rgba(46,108,200,0.5)" }} />
            <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 10, fontWeight: 500, letterSpacing: 3.5, textTransform: "uppercase", color: "rgba(91,143,224,0.8)" }}>Legal</span>
            <div style={{ width: 24, height: 1, background: "rgba(46,108,200,0.5)" }} />
          </div>
          <h1 style={{ fontFamily: "'Cormorant',serif", fontWeight: 700, fontSize: "clamp(2.6rem,5vw,4.5rem)", letterSpacing: -1, color: "#FFFFFF", lineHeight: 1, marginBottom: 14 }}>
            Cookie Policy
          </h1>
          <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 13, color: "rgba(255,255,255,0.35)", fontWeight: 300 }}>
            Last updated: {LAST_UPDATED}
          </p>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "64px 2.5rem 80px" }}>

        {/* Intro */}
        <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 14, color: "rgba(13,21,32,0.6)", lineHeight: 1.85, fontWeight: 300, marginBottom: 48, padding: "20px 24px", background: "#FFFFFF", borderRadius: 10, border: "1px solid rgba(13,21,32,0.07)" }}>
          This Cookie Policy explains how Saviour360 uses cookies and similar tracking technologies when you visit our website. By continuing to use our website, you consent to our use of cookies as described in this policy.
        </p>

        {/* What are cookies */}
        <div style={{ marginBottom: 40 }}>
          <h2 style={{ fontFamily: "'Cormorant',serif", fontWeight: 700, fontSize: 24, color: "#0D1520", letterSpacing: -0.3, marginBottom: 12, paddingBottom: 10, borderBottom: "1px solid rgba(13,21,32,0.08)" }}>
            What Are Cookies?
          </h2>
          <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 14, color: "rgba(13,21,32,0.58)", lineHeight: 1.85, fontWeight: 300 }}>
            Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work efficiently and to provide information to website owners. Cookies allow a website to recognise your device and remember certain information across pages or between visits.
          </p>
        </div>

        {/* Cookie types */}
        <div style={{ marginBottom: 40 }}>
          <h2 style={{ fontFamily: "'Cormorant',serif", fontWeight: 700, fontSize: 24, color: "#0D1520", letterSpacing: -0.3, marginBottom: 20, paddingBottom: 10, borderBottom: "1px solid rgba(13,21,32,0.08)" }}>
            Cookies We Use
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {COOKIE_TYPES.map((c) => (
              <div key={c.name} style={{ background: "#FFFFFF", borderRadius: 12, border: "1px solid rgba(13,21,32,0.07)", overflow: "hidden" }}>
                <div style={{ padding: "14px 20px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid rgba(13,21,32,0.06)", background: "rgba(13,21,32,0.02)" }}>
                  <span style={{ fontFamily: "'Cormorant',serif", fontWeight: 700, fontSize: 18, color: "#0D1520", letterSpacing: -0.2 }}>{c.name}</span>
                  <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 10, fontWeight: 600, letterSpacing: 1.5, textTransform: "uppercase", padding: "3px 10px", borderRadius: 100, background: c.required ? "rgba(26,80,160,0.1)" : "rgba(13,21,32,0.06)", color: c.required ? "#1A50A0" : "rgba(13,21,32,0.4)" }}>
                    {c.required ? "Required" : "Optional"}
                  </span>
                </div>
                <div style={{ padding: "16px 20px" }}>
                  <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 13, color: "rgba(13,21,32,0.55)", lineHeight: 1.75, fontWeight: 300, marginBottom: 10 }}>{c.purpose}</p>
                  <div style={{ fontFamily: "'Inter',sans-serif", fontSize: 11, color: "rgba(13,21,32,0.38)" }}>
                    <span style={{ fontWeight: 600, color: "rgba(13,21,32,0.5)" }}>Examples: </span>{c.examples}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Third-party */}
        <div style={{ marginBottom: 40 }}>
          <h2 style={{ fontFamily: "'Cormorant',serif", fontWeight: 700, fontSize: 24, color: "#0D1520", letterSpacing: -0.3, marginBottom: 20, paddingBottom: 10, borderBottom: "1px solid rgba(13,21,32,0.08)" }}>
            Third-Party Cookies
          </h2>
          <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 14, color: "rgba(13,21,32,0.58)", lineHeight: 1.85, fontWeight: 300, marginBottom: 20 }}>
            Some cookies on our site are set by third-party services embedded in our pages. These are governed by those providers' own privacy policies.
          </p>
          <div style={{ background: "#FFFFFF", borderRadius: 12, border: "1px solid rgba(13,21,32,0.07)", overflow: "hidden" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", padding: "10px 20px", background: "rgba(13,21,32,0.03)", borderBottom: "1px solid rgba(13,21,32,0.07)" }}>
              {["Service", "Provider", "Purpose", "Policy"].map(h => (
                <span key={h} style={{ fontFamily: "'Inter',sans-serif", fontSize: 10, fontWeight: 600, letterSpacing: 1.5, textTransform: "uppercase", color: "rgba(13,21,32,0.4)" }}>{h}</span>
              ))}
            </div>
            {THIRD_PARTY.map((t, i) => (
              <div key={t.service} style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", padding: "14px 20px", borderBottom: i < THIRD_PARTY.length - 1 ? "1px solid rgba(13,21,32,0.06)" : "none" }}>
                <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 13, fontWeight: 500, color: "#0D1520" }}>{t.service}</span>
                <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 13, color: "rgba(13,21,32,0.5)", fontWeight: 300 }}>{t.provider}</span>
                <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 13, color: "rgba(13,21,32,0.5)", fontWeight: 300 }}>{t.purpose}</span>
                <a href={t.policy} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'Inter',sans-serif", fontSize: 12, color: "#1A50A0", textDecoration: "none" }}>View Policy ↗</a>
              </div>
            ))}
          </div>
        </div>

        {/* Managing cookies */}
        <div style={{ marginBottom: 40 }}>
          <h2 style={{ fontFamily: "'Cormorant',serif", fontWeight: 700, fontSize: 24, color: "#0D1520", letterSpacing: -0.3, marginBottom: 12, paddingBottom: 10, borderBottom: "1px solid rgba(13,21,32,0.08)" }}>
            Managing Your Cookie Preferences
          </h2>
          <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 14, color: "rgba(13,21,32,0.58)", lineHeight: 1.85, fontWeight: 300, marginBottom: 14 }}>
            You can control and manage cookies through your browser settings. Most browsers allow you to refuse cookies, delete existing cookies, or be notified when cookies are set.
          </p>
          <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 14, color: "rgba(13,21,32,0.58)", lineHeight: 1.85, fontWeight: 300 }}>
            Please note that disabling certain cookies may affect the functionality of our website. Essential cookies cannot be disabled as they are required for the site to function. For instructions on managing cookies in your specific browser, visit your browser's help documentation.
          </p>
        </div>

        {/* Contact */}
        <div style={{ marginBottom: 0 }}>
          <h2 style={{ fontFamily: "'Cormorant',serif", fontWeight: 700, fontSize: 24, color: "#0D1520", letterSpacing: -0.3, marginBottom: 12, paddingBottom: 10, borderBottom: "1px solid rgba(13,21,32,0.08)" }}>
            Contact
          </h2>
          <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 14, color: "rgba(13,21,32,0.58)", lineHeight: 1.85, fontWeight: 300 }}>
            If you have questions about our use of cookies, email us at{" "}
            <a href="mailto:info@saviour360.com" style={{ color: "#1A50A0", textDecoration: "none" }}>info@saviour360.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
