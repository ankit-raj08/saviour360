const LAST_UPDATED = "March 17, 2025";

const SECTIONS = [
  {
    title: "1. Acceptance of Terms",
    content: "By accessing or using the Saviour360 website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services. We reserve the right to update these terms at any time. Continued use of our services after changes are posted constitutes your acceptance of the revised terms.",
  },
  {
    title: "2. Description of Services",
    content: "Saviour360 provides 360° virtual tour creation, aerial drone photography, and Google Street View publishing services for real estate professionals. Our services include the capture, editing, and delivery of immersive property tours, along with a platform for hosting, sharing, and embedding those tours. Demo tours displayed on our website are provided for illustration purposes and are hosted on behalf of our clients.",
  },
  {
    title: "3. Use of Services",
    content: "You agree to use our services only for lawful purposes and in accordance with these Terms. You must not use our services to upload, transmit, or distribute any content that is unlawful, defamatory, or infringes any third-party intellectual property rights. You agree not to attempt to gain unauthorised access to any part of our platform, interfere with its operation, or use automated tools to scrape, copy, or monitor content without our prior written consent.",
  },
  {
    title: "4. Bookings and Payments",
    content: "Tour bookings are confirmed upon receipt of written confirmation from Saviour360. Payment terms are as agreed in your service order. Cancellations made less than 24 hours before the scheduled shoot may be subject to a cancellation fee. We reserve the right to reschedule due to adverse weather conditions for aerial shoots, DGCA airspace restrictions, or circumstances beyond our reasonable control.",
  },
  {
    title: "5. Intellectual Property",
    content: "Upon full payment, you receive a non-exclusive licence to use the delivered tour content for the agreed purpose — typically property marketing and listing. Saviour360 retains all underlying intellectual property rights in the tour technology, production methodology, and platform. We may use completed tours in our portfolio and marketing materials unless you request otherwise in writing at the time of booking.",
  },
  {
    title: "6. Content and Accuracy",
    content: "All 360° tours are produced from actual property captures. Saviour360 is not responsible for property details, pricing, availability, or accuracy of information added to tours by clients or third parties. Demo content displayed on our website is sourced from completed client projects and is used with client consent.",
  },
  {
    title: "7. Drone and Aerial Operations",
    content: "All drone operations conducted by Saviour360 comply with DGCA regulations under applicable UAS Operator Permits. You are responsible for ensuring that the property owner and relevant authorities have granted permission for aerial photography at the shoot location. Saviour360 reserves the right to refuse or abort any aerial operation where safety or regulatory compliance cannot be assured.",
  },
  {
    title: "8. Limitation of Liability",
    content: "To the maximum extent permitted by applicable law, Saviour360 shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our services, including but not limited to loss of revenue, loss of data, or loss of business opportunity. Our total liability to you for any claim arising from these Terms shall not exceed the amount you paid for the specific service that gave rise to the claim.",
  },
  {
    title: "9. Warranties",
    content: "Saviour360 warrants that our services will be delivered with reasonable skill and care. We do not guarantee that our platform will be uninterrupted or error-free. Tours are delivered in digital format and we make no warranty as to the performance or rendering of tours on specific devices or browsers beyond our stated compatibility.",
  },
  {
    title: "10. Third-Party Services",
    content: "Our services integrate with third-party platforms including Google Street View and TeliportMe. Use of those platforms is subject to their respective terms of service. Saviour360 is not responsible for the availability, performance, or terms of any third-party service.",
  },
  {
    title: "11. Governing Law",
    content: "These Terms of Service are governed by the laws of India. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts of Ahmedabad, Gujarat.",
  },
  {
    title: "12. Contact",
    content: "For questions about these Terms, contact us at info@saviour360.com · Saviour360, Ahmedabad, Gujarat, India.",
  },
];

export default function TermsOfService() {
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
            Terms of Service
          </h1>
          <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 13, color: "rgba(255,255,255,0.35)", fontWeight: 300 }}>
            Last updated: {LAST_UPDATED}
          </p>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "64px 2.5rem 80px" }}>
        <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 14, color: "rgba(13,21,32,0.6)", lineHeight: 1.85, fontWeight: 300, marginBottom: 48, padding: "20px 24px", background: "#FFFFFF", borderRadius: 10, border: "1px solid rgba(13,21,32,0.07)" }}>
          Please read these Terms of Service carefully before using the Saviour360 website or booking any of our services. These terms constitute a legally binding agreement between you and Saviour360.
        </p>

        {SECTIONS.map((section) => (
          <div key={section.title} style={{ marginBottom: 36 }}>
            <h2 style={{ fontFamily: "'Cormorant',serif", fontWeight: 700, fontSize: 24, color: "#0D1520", letterSpacing: -0.3, marginBottom: 12, paddingBottom: 10, borderBottom: "1px solid rgba(13,21,32,0.08)" }}>
              {section.title}
            </h2>
            <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 14, color: "rgba(13,21,32,0.58)", lineHeight: 1.85, fontWeight: 300 }}>
              {section.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
