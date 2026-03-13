import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const SERVICES = [
  {
    id: "interior",
    eyebrow: "Service 01",
    title: "360° Interior Tours",
    subtitle: "Every room. Every angle. From any device.",
    desc: "A fully navigable walkthrough of your property — delivered as a shareable link, embed code, or QR. Buyers explore at their own pace, from anywhere in the world.",
    points: [
      "Full room-by-room navigation with smooth transitions",
      "Interactive hotspots for room dimensions, finishes, and highlights",
      "Works on any phone, tablet, laptop, or VR headset",
      "No app download — opens directly in a browser",
      "Delivered in 48 hours from booking",
    ],
    stat: "3×",
    statLabel: "More qualified buyer inquiries",
    cta: "Get a Tour for Your Property",
    dark: false,
  },
  {
    id: "aerial",
    eyebrow: "Service 02",
    title: "Aerial & Drone Tours",
    subtitle: "Show the site, not just the structure.",
    desc: "DGCA-certified drone operations capturing your site, plot boundaries, surrounding infrastructure, and neighbourhood context — all in 360°.",
    points: [
      "DGCA-certified pilots — fully legal commercial operations",
      "Site overview, plot boundaries, access roads, and surroundings",
      "4K resolution stills and 360° panoramic drone footage",
      "Combined with interior tours in a single deliverable link",
      "Insured operations for every flight",
    ],
    stat: "100%",
    statLabel: "DGCA certified operations",
    cta: "Request an Aerial Tour",
    dark: true,
  },
  {
    id: "helicopter",
    eyebrow: "Service 03",
    title: "Helicopter View",
    subtitle: "Cinematic altitude. Unmatched scale.",
    desc: "For large townships, plotted developments, and industrial estates where drone altitude isn't sufficient. Helicopter-mounted cameras capture the full scope of your project.",
    points: [
      "High-altitude coverage — 500m+ elevation views",
      "Township master plans shown at full scale",
      "Ideal for plotted layouts, commercial corridors, and large campuses",
      "4K cinematic footage with post-production editing",
      "Branded delivery with logo and property overlays",
    ],
    stat: "500m+",
    statLabel: "Maximum coverage altitude",
    cta: "Enquire About Helicopter Coverage",
    dark: false,
  },
  {
    id: "google",
    eyebrow: "Service 04",
    title: "Google Street View Publishing",
    subtitle: "Be found before the listing goes live.",
    desc: "We are a Google Street View trusted publisher. Your 360° tour gets published directly to Google Maps — visible in Google Search, Maps, and Street View.",
    points: [
      "Direct publish to Google Maps — no third-party required",
      "Appears in Google Search and Google Maps results",
      "MLS-ready links for Magicbricks, 99acres, and Housing.com",
      "Live on Google Maps within 48–72 hours of delivery",
      "Non-branded links — your property, your identity",
    ],
    stat: "48hrs",
    statLabel: "Average time to go live on Maps",
    cta: "Get Listed on Google Maps",
    dark: true,
  },
];

export default function Services() {
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
            <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: 3.5, textTransform: "uppercase", color: "rgba(91,143,224,0.8)" }}>What We Offer</span>
            <div style={{ width: 28, height: 1, background: "rgba(46,108,200,0.5)" }} />
          </div>
          <h1 style={{ fontFamily: "'Cormorant',serif", fontWeight: 700, fontSize: "clamp(3.2rem,6vw,5.8rem)", letterSpacing: -1.5, color: "#FFFFFF", lineHeight: 0.92, marginBottom: 20 }}>
            Four ways to show<br />
            <em style={{ color: "#5B8FE0", fontStyle: "italic" }}>every property</em>
          </h1>
          <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 14, color: "rgba(255,255,255,0.38)", maxWidth: 460, margin: "0 auto", fontWeight: 300, lineHeight: 1.8 }}>
            Interior walkthroughs, aerial views, helicopter coverage, and Google Maps publishing — all in 48 hours.
          </p>
          {/* Quick nav */}
          <div style={{ display: "flex", gap: 10, justifyContent: "center", marginTop: 36, flexWrap: "wrap" }}>
            {SERVICES.map(s => (
              <a key={s.id} href={`#${s.id}`}
                style={{ padding: "8px 18px", borderRadius: 100, border: "1px solid rgba(255,255,255,0.12)", fontFamily: "'Inter',sans-serif", fontSize: 12, color: "rgba(255,255,255,0.55)", textDecoration: "none", transition: "all 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(26,80,160,0.25)"; e.currentTarget.style.color = "#FFFFFF"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "rgba(255,255,255,0.55)"; }}>
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Service sections */}
      {SERVICES.map((svc) => (
        <section
          key={svc.id}
          id={svc.id}
          style={{ background: svc.dark ? "#0A1628" : "#FFFFFF", padding: "96px 0", scrollMarginTop: 68 }}
        >
          <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 2.5rem" }}>
            <div className="service-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>

              {/* Text */}
              <div>
                <div style={{ fontFamily: "'Inter',sans-serif", fontSize: 10, fontWeight: 600, letterSpacing: 3, textTransform: "uppercase", color: svc.dark ? "rgba(91,143,224,0.6)" : "#1A50A0", marginBottom: 12 }}>{svc.eyebrow}</div>
                <h2 style={{ fontFamily: "'Cormorant',serif", fontWeight: 700, fontSize: "clamp(2.4rem,4vw,3.8rem)", color: svc.dark ? "#FFFFFF" : "#0D1520", letterSpacing: -0.8, lineHeight: 1, marginBottom: 14 }}>
                  {svc.title}
                </h2>
                <p style={{ fontFamily: "'Cormorant',serif", fontWeight: 600, fontSize: 20, color: svc.dark ? "#5B8FE0" : "#1A50A0", fontStyle: "italic", marginBottom: 20 }}>
                  "{svc.subtitle}"
                </p>
                <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 14, color: svc.dark ? "rgba(255,255,255,0.45)" : "rgba(13,21,32,0.55)", lineHeight: 1.9, fontWeight: 300, marginBottom: 28 }}>
                  {svc.desc}
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 32 }}>
                  {svc.points.map((p, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                      <div style={{ width: 18, height: 18, borderRadius: "50%", background: svc.dark ? "rgba(91,143,224,0.15)" : "rgba(26,80,160,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
                        <svg width="9" height="9" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke={svc.dark ? "#5B8FE0" : "#1A50A0"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </div>
                      <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 13, color: svc.dark ? "rgba(255,255,255,0.55)" : "rgba(13,21,32,0.65)", lineHeight: 1.65 }}>{p}</span>
                    </div>
                  ))}
                </div>
                <Link to="/contact"
                  style={{ display: "inline-block", padding: "13px 28px", borderRadius: 8, background: svc.dark ? "linear-gradient(135deg,#1A50A0,#2E6CC8)" : "#0A1628", fontFamily: "'Inter',sans-serif", fontSize: 13, fontWeight: 600, color: "#FFFFFF", textDecoration: "none", transition: "opacity 0.2s, transform 0.2s" }}
                  onMouseEnter={e => { e.currentTarget.style.opacity = "0.85"; e.currentTarget.style.transform = "translateY(-1px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "none"; }}>
                  {svc.cta} →
                </Link>
              </div>

              {/* Stat card */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ width: "100%", maxWidth: 360, padding: "52px 44px", borderRadius: 20, background: svc.dark ? "rgba(255,255,255,0.04)" : "rgba(10,22,40,0.04)", border: `1px solid ${svc.dark ? "rgba(255,255,255,0.07)" : "rgba(13,21,32,0.07)"}`, textAlign: "center" }}>
                  <div style={{ fontFamily: "'Cormorant',serif", fontWeight: 700, fontSize: "clamp(4rem,8vw,6.5rem)", color: svc.dark ? "#5B8FE0" : "#1A50A0", letterSpacing: -2, lineHeight: 1 }}>
                    {svc.stat}
                  </div>
                  <div style={{ fontFamily: "'Inter',sans-serif", fontSize: 13, color: svc.dark ? "rgba(255,255,255,0.35)" : "rgba(13,21,32,0.45)", marginTop: 12, fontWeight: 300 }}>
                    {svc.statLabel}
                  </div>
                  <div style={{ width: 40, height: 1, background: svc.dark ? "rgba(91,143,224,0.3)" : "rgba(26,80,160,0.2)", margin: "20px auto" }} />
                  <div style={{ fontFamily: "'Inter',sans-serif", fontSize: 11, color: svc.dark ? "rgba(255,255,255,0.2)" : "rgba(13,21,32,0.25)", letterSpacing: 1.5, textTransform: "uppercase" }}>
                    Saviour360
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Bottom CTA */}
      <div style={{ background: "#F5F0E8", padding: "80px 2.5rem" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <h3 style={{ fontFamily: "'Cormorant',serif", fontWeight: 700, fontSize: "clamp(2.2rem,4vw,3.4rem)", color: "#0D1520", letterSpacing: -0.5, marginBottom: 16 }}>
            Not sure which service fits your property?
          </h3>
          <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 14, color: "rgba(13,21,32,0.5)", fontWeight: 300, marginBottom: 32 }}>
            Tell us about your project. We'll recommend the right combination and give you a clear estimate.
          </p>
          <Link to="/contact"
            style={{ display: "inline-block", padding: "14px 36px", borderRadius: 8, background: "#0A1628", fontFamily: "'Inter',sans-serif", fontSize: 14, fontWeight: 600, color: "#FFFFFF", textDecoration: "none" }}>
            Talk to Us →
          </Link>
        </div>
      </div>

      <style>{`
        @media(max-width:900px){
          .service-grid{ grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </div>
  );
}
