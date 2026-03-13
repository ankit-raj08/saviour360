import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const INDUSTRIES = [
  {
    id: "real-estate",
    eyebrow: "Industry 01",
    tag: "Most Popular",
    tagColor: "#1A50A0",
    title: "Real Estate",
    subtitle: "Buyers arrive ready to decide — not to explore.",
    desc: "360° virtual tours give residential and commercial property buyers a complete walkthrough before stepping foot on-site. The result is fewer wasted visits, higher inquiry quality, and faster decisions.",
    usecases: ["Apartment listings", "Villa & bungalow showcases", "Off-plan and under-construction projects", "Premium leasing", "Builder floor presentations"],
    stat: "3×",
    statLabel: "More qualified inquiries",
    dark: false,
  },
  {
    id: "architecture",
    eyebrow: "Industry 02",
    tag: null,
    title: "Architecture & Design",
    subtitle: "Sell a vision, not just a render.",
    desc: "Present architectural proposals, interior design concepts, and completed spaces in a way no PDF or static render can. Clients navigate the space at their own pace.",
    usecases: ["Interior design client presentations", "Architectural walkthroughs pre-construction", "Design approval workflows", "Portfolio showcase", "Show flats and model units"],
    stat: "2×",
    statLabel: "Faster design approval cycles",
    dark: true,
  },
  {
    id: "hospitality",
    eyebrow: "Industry 03",
    tag: null,
    title: "Hospitality",
    subtitle: "Let guests tour before they book.",
    desc: "Hotels, resorts, and event venues that show the actual space — not just stock photography — see measurably higher booking conversion. Guests reduce risk. You reduce no-shows.",
    usecases: ["Hotel room and suite tours", "Event and banquet hall walkthroughs", "Resort and spa facility showcases", "Wedding venue presentations", "Restaurant ambience tours"],
    stat: "14%",
    statLabel: "Increase in direct bookings",
    dark: false,
  },
  {
    id: "construction",
    eyebrow: "Industry 04",
    tag: null,
    title: "Construction",
    subtitle: "Investors stay informed without being on-site.",
    desc: "Document construction progress with dated 360° captures. Stakeholders, investors, and clients see exactly where the project stands — without a site visit.",
    usecases: ["Monthly progress documentation", "Investor progress reporting", "Pre-handover walkthroughs", "Safety and compliance records", "Post-completion snag documentation"],
    stat: "80%",
    statLabel: "Fewer unnecessary site visits",
    dark: true,
  },
  {
    id: "commercial",
    eyebrow: "Industry 05",
    tag: null,
    title: "Commercial Spaces",
    subtitle: "Qualify tenants before the first meeting.",
    desc: "Office buildings, retail units, co-working spaces, and industrial facilities — let tenants remotely tour before committing to a physical visit. Faster lease cycles, better-matched tenants.",
    usecases: ["Office and co-working walkthroughs", "Retail unit presentations", "Industrial and warehouse tours", "Campus and business park showcases", "Pre-fit-out condition documentation"],
    stat: "60%",
    statLabel: "Faster lease decision cycle",
    dark: false,
  },
  {
    id: "aerial",
    eyebrow: "Industry 06",
    tag: null,
    title: "Location & Aerial",
    subtitle: "Buyers don't just buy rooms. They buy location.",
    desc: "Aerial 360° views show the neighbourhood, access roads, green spaces, and surrounding infrastructure. Context that no floor plan or interior tour can provide.",
    usecases: ["Township and plotted development overviews", "Neighbourhood and proximity mapping", "Infrastructure and connectivity showcases", "Industrial estate and logistics hub coverage", "Large campus and institution aerials"],
    stat: "2×",
    statLabel: "Longer average viewer engagement",
    dark: true,
  },
];

export default function Industries() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  }, [hash]);

  return (
    <div style={{ background: "#F5F0E8", minHeight: "100vh", paddingTop: 68 }}>

      {/* Hero */}
      <div style={{ background: "linear-gradient(160deg, #080F1A 0%, #0A1628 60%, #0C1E38 100%)", padding: "80px 2.5rem 72px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(26,80,160,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(26,80,160,0.07) 1px, transparent 1px)", backgroundSize: "70px 70px", pointerEvents: "none" }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, justifyContent: "center", marginBottom: 18 }}>
            <div style={{ width: 28, height: 1, background: "rgba(46,108,200,0.5)" }} />
            <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: 3.5, textTransform: "uppercase", color: "rgba(91,143,224,0.8)" }}>Who We Serve</span>
            <div style={{ width: 28, height: 1, background: "rgba(46,108,200,0.5)" }} />
          </div>
          <h1 style={{ fontFamily: "'Cormorant',serif", fontWeight: 700, fontSize: "clamp(3.2rem,6vw,5.8rem)", letterSpacing: -1.5, color: "#FFFFFF", lineHeight: 0.92, marginBottom: 20 }}>
            Every industry that<br />
            <em style={{ color: "#5B8FE0", fontStyle: "italic" }}>sells physical space</em>
          </h1>
          <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 14, color: "rgba(255,255,255,0.38)", maxWidth: 460, margin: "0 auto", fontWeight: 300, lineHeight: 1.8 }}>
            From a single apartment listing to a 200-acre township. If it has a floor, we can tour it.
          </p>
          {/* Quick nav */}
          <div style={{ display: "flex", gap: 10, justifyContent: "center", marginTop: 36, flexWrap: "wrap" }}>
            {INDUSTRIES.map(ind => (
              <a key={ind.id} href={`#${ind.id}`}
                style={{ padding: "8px 18px", borderRadius: 100, border: "1px solid rgba(255,255,255,0.12)", fontFamily: "'Inter',sans-serif", fontSize: 12, color: "rgba(255,255,255,0.55)", textDecoration: "none", transition: "all 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(26,80,160,0.25)"; e.currentTarget.style.color = "#FFFFFF"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "rgba(255,255,255,0.55)"; }}>
                {ind.title}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Industry sections */}
      {INDUSTRIES.map((ind) => (
        <section
          key={ind.id}
          id={ind.id}
          style={{ background: ind.dark ? "#0A1628" : "#FFFFFF", padding: "96px 0", scrollMarginTop: 68 }}
        >
          <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 2.5rem" }}>
            <div className="industry-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>

              {/* Text side */}
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                  <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 10, fontWeight: 600, letterSpacing: 3, textTransform: "uppercase", color: ind.dark ? "rgba(91,143,224,0.6)" : "#1A50A0" }}>{ind.eyebrow}</span>
                  {ind.tag && <span style={{ padding: "3px 10px", borderRadius: 100, background: ind.tagColor, fontFamily: "'Inter',sans-serif", fontSize: 9, fontWeight: 600, color: "#FFFFFF", letterSpacing: 1 }}>{ind.tag}</span>}
                </div>
                <h2 style={{ fontFamily: "'Cormorant',serif", fontWeight: 700, fontSize: "clamp(2.4rem,4vw,3.8rem)", color: ind.dark ? "#FFFFFF" : "#0D1520", letterSpacing: -0.8, lineHeight: 1, marginBottom: 14 }}>
                  {ind.title}
                </h2>
                <p style={{ fontFamily: "'Cormorant',serif", fontWeight: 600, fontSize: 20, color: ind.dark ? "#5B8FE0" : "#1A50A0", fontStyle: "italic", marginBottom: 20 }}>
                  "{ind.subtitle}"
                </p>
                <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 14, color: ind.dark ? "rgba(255,255,255,0.45)" : "rgba(13,21,32,0.55)", lineHeight: 1.9, fontWeight: 300, marginBottom: 28 }}>
                  {ind.desc}
                </p>

                {/* Use cases */}
                <div style={{ marginBottom: 32 }}>
                  <div style={{ fontFamily: "'Inter',sans-serif", fontSize: 10, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", color: ind.dark ? "rgba(255,255,255,0.2)" : "rgba(13,21,32,0.3)", marginBottom: 12 }}>Common Use Cases</div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {ind.usecases.map((uc, i) => (
                      <span key={i} style={{ padding: "6px 12px", borderRadius: 100, background: ind.dark ? "rgba(255,255,255,0.05)" : "rgba(13,21,32,0.05)", border: `1px solid ${ind.dark ? "rgba(255,255,255,0.08)" : "rgba(13,21,32,0.08)"}`, fontFamily: "'Inter',sans-serif", fontSize: 12, color: ind.dark ? "rgba(255,255,255,0.45)" : "rgba(13,21,32,0.55)" }}>
                        {uc}
                      </span>
                    ))}
                  </div>
                </div>

                <Link to="/contact"
                  style={{ display: "inline-block", padding: "13px 28px", borderRadius: 8, background: ind.dark ? "linear-gradient(135deg,#1A50A0,#2E6CC8)" : "#0A1628", fontFamily: "'Inter',sans-serif", fontSize: 13, fontWeight: 600, color: "#FFFFFF", textDecoration: "none", transition: "opacity 0.2s, transform 0.2s" }}
                  onMouseEnter={e => { e.currentTarget.style.opacity = "0.85"; e.currentTarget.style.transform = "translateY(-1px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "none"; }}>
                  Get a Tour for {ind.title} →
                </Link>
              </div>

              {/* Stat card */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ width: "100%", maxWidth: 340, padding: "52px 44px", borderRadius: 20, background: ind.dark ? "rgba(255,255,255,0.04)" : "rgba(10,22,40,0.04)", border: `1px solid ${ind.dark ? "rgba(255,255,255,0.07)" : "rgba(13,21,32,0.07)"}`, textAlign: "center" }}>
                  <div style={{ fontFamily: "'Cormorant',serif", fontWeight: 700, fontSize: "clamp(4rem,8vw,6.5rem)", color: ind.dark ? "#5B8FE0" : "#1A50A0", letterSpacing: -2, lineHeight: 1 }}>
                    {ind.stat}
                  </div>
                  <div style={{ fontFamily: "'Inter',sans-serif", fontSize: 13, color: ind.dark ? "rgba(255,255,255,0.35)" : "rgba(13,21,32,0.45)", marginTop: 12, fontWeight: 300 }}>
                    {ind.statLabel}
                  </div>
                  <div style={{ width: 40, height: 1, background: ind.dark ? "rgba(91,143,224,0.3)" : "rgba(26,80,160,0.2)", margin: "20px auto" }} />
                  <Link to="/explore" style={{ fontFamily: "'Inter',sans-serif", fontSize: 11, color: ind.dark ? "#5B8FE0" : "#1A50A0", textDecoration: "none", letterSpacing: 0.5 }}>
                    See example tours →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <div style={{ background: "#F5F0E8", padding: "80px 2.5rem" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <h3 style={{ fontFamily: "'Cormorant',serif", fontWeight: 700, fontSize: "clamp(2.2rem,4vw,3.4rem)", color: "#0D1520", letterSpacing: -0.5, marginBottom: 16 }}>
            Don't see your industry?
          </h3>
          <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 14, color: "rgba(13,21,32,0.5)", fontWeight: 300, marginBottom: 32 }}>
            If it has a physical space, we can build a 360° tour for it. Tell us about your project.
          </p>
          <Link to="/contact"
            style={{ display: "inline-block", padding: "14px 36px", borderRadius: 8, background: "#0A1628", fontFamily: "'Inter',sans-serif", fontSize: 14, fontWeight: 600, color: "#FFFFFF", textDecoration: "none" }}>
            Talk to Us →
          </Link>
        </div>
      </div>

      <style>{`
        @media(max-width:900px){
          .industry-grid{ grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </div>
  );
}
