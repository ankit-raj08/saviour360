const LAST_UPDATED = "March 17, 2025";

const SECTIONS = [
  {
    title: "1. Information We Collect",
    content: [
      {
        sub: "Information you provide directly",
        text: "When you request a tour, fill out our contact form, or create an account, we collect your name, email address, phone number, company name, and property details you share with us.",
      },
      {
        sub: "Information collected automatically",
        text: "When you visit our website, we automatically collect certain information about your device and browsing behaviour, including your IP address, browser type, pages visited, time spent on pages, and referring URLs. We use cookies and similar tracking technologies to collect this information.",
      },
      {
        sub: "Tour engagement data",
        text: "If you view a 360° tour hosted on our platform, we may collect analytics data including which rooms were viewed, how long you spent in each scene, device type, and interaction patterns. This data is used to improve tour quality and provide engagement insights to property owners.",
      },
    ],
  },
  {
    title: "2. How We Use Your Information",
    content: [
      {
        sub: "Service delivery",
        text: "We use your information to deliver 360° tours, process bookings, respond to enquiries, and provide customer support.",
      },
      {
        sub: "Communications",
        text: "With your consent, we may send you updates about your tour, service announcements, and marketing communications. You may opt out of marketing emails at any time by clicking the unsubscribe link in any email we send.",
      },
      {
        sub: "Improvement and analytics",
        text: "We use aggregated, anonymised data to understand how our services are used, improve our platform, and develop new features.",
      },
      {
        sub: "Legal compliance",
        text: "We may use your information to comply with applicable laws, respond to legal requests, enforce our terms of service, and protect the rights and safety of Saviour360, our users, and the public.",
      },
    ],
  },
  {
    title: "3. Information Sharing",
    content: [
      {
        sub: "We do not sell your data",
        text: "Saviour360 does not sell, rent, or trade your personal information to third parties for their marketing purposes.",
      },
      {
        sub: "Service providers",
        text: "We may share your information with trusted third-party vendors who assist us in operating our website and delivering our services — including cloud hosting providers, analytics services, and email delivery platforms. These providers are contractually obligated to use your data only to provide services to us.",
      },
      {
        sub: "Property owners",
        text: "If you interact with a tour associated with a specific property, we may share your contact details with that property's owner or marketing agent, with your consent.",
      },
      {
        sub: "Legal requirements",
        text: "We may disclose your information if required to do so by law, court order, or government regulation.",
      },
    ],
  },
  {
    title: "4. Data Retention",
    content: [
      {
        sub: "How long we keep your data",
        text: "We retain your personal information for as long as necessary to provide our services and comply with legal obligations. Contact form submissions are retained for 24 months. Account data is retained until you delete your account. Tour analytics data may be retained in anonymised form indefinitely.",
      },
    ],
  },
  {
    title: "5. Cookies",
    content: [
      {
        sub: "Types of cookies we use",
        text: "We use essential cookies required for the website to function, analytical cookies to understand how visitors use our site (via Google Analytics), and functional cookies to remember your preferences. We do not use advertising or tracking cookies.",
      },
      {
        sub: "Managing cookies",
        text: "You can control cookies through your browser settings. Disabling certain cookies may affect the functionality of our website. See our Cookie Policy for full details.",
      },
    ],
  },
  {
    title: "6. Your Rights",
    content: [
      {
        sub: "Access and correction",
        text: "You have the right to request access to the personal information we hold about you, and to request that we correct any inaccurate information.",
      },
      {
        sub: "Deletion",
        text: "You may request that we delete your personal information. We will fulfil deletion requests subject to our legal obligations to retain certain records.",
      },
      {
        sub: "Portability",
        text: "You may request a copy of your personal data in a structured, commonly used, machine-readable format.",
      },
      {
        sub: "How to exercise your rights",
        text: "To exercise any of these rights, contact us at info@saviour360.com. We will respond within 30 days.",
      },
    ],
  },
  {
    title: "7. Security",
    content: [
      {
        sub: "How we protect your data",
        text: "We implement industry-standard security measures including HTTPS encryption, access controls, and regular security reviews. However, no method of transmission over the internet is 100% secure. We encourage you to use strong passwords and keep your account credentials confidential.",
      },
    ],
  },
  {
    title: "8. Changes to This Policy",
    content: [
      {
        sub: "Updates",
        text: "We may update this Privacy Policy from time to time. We will notify you of significant changes by posting a notice on our website or sending you an email. Your continued use of our services after any changes constitutes acceptance of the updated policy.",
      },
    ],
  },
  {
    title: "9. Contact Us",
    content: [
      {
        sub: "Privacy enquiries",
        text: "If you have questions about this Privacy Policy or our data practices, contact us at: info@saviour360.com · Saviour360, Ahmedabad, Gujarat, India.",
      },
    ],
  },
];

export default function PrivacyPolicy() {
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
            Privacy Policy
          </h1>
          <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 13, color: "rgba(255,255,255,0.35)", fontWeight: 300 }}>
            Last updated: {LAST_UPDATED}
          </p>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "64px 2.5rem 80px" }}>
        <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 14, color: "rgba(13,21,32,0.6)", lineHeight: 1.85, fontWeight: 300, marginBottom: 48, padding: "20px 24px", background: "#FFFFFF", borderRadius: 10, border: "1px solid rgba(13,21,32,0.07)" }}>
          Saviour360 ("we", "our", "us") is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our website and services.
        </p>

        {SECTIONS.map((section) => (
          <div key={section.title} style={{ marginBottom: 44 }}>
            <h2 style={{ fontFamily: "'Cormorant',serif", fontWeight: 700, fontSize: 24, color: "#0D1520", letterSpacing: -0.3, marginBottom: 20, paddingBottom: 10, borderBottom: "1px solid rgba(13,21,32,0.08)" }}>
              {section.title}
            </h2>
            {section.content.map((item) => (
              <div key={item.sub} style={{ marginBottom: 20 }}>
                <h3 style={{ fontFamily: "'Inter',sans-serif", fontSize: 13, fontWeight: 600, color: "#0D1520", marginBottom: 6 }}>{item.sub}</h3>
                <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 14, color: "rgba(13,21,32,0.58)", lineHeight: 1.85, fontWeight: 300 }}>{item.text}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
