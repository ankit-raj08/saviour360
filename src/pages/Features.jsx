import { useState } from "react";
import { Link } from "react-router-dom";

const FEATURES = [
  {
    id: "dollhouse",
    icon: "⬡",
    category: "Immersive",
    title: "3D Dollhouse View",
    headline: "See the whole property at once.",
    desc: "An isometric 3D model of the property lets viewers see every floor and room layout simultaneously — like lifting the roof off. Buyers understand full spatial context before navigating.",
    points: [
      "Full 3D model auto-generated from the 360° scan",
      "Navigate to any room directly from the dollhouse view",
      "Floor-by-floor isolation for multi-storey properties",
      "Rotation and zoom controls on all devices",
    ],
    stat: "Buyers spend 55% longer in tours with dollhouse enabled",
    showEmbed: false,
  },
  {
    id: "polygon",
    icon: "⬔",
    category: "Interactive",
    title: "Polygon Content Hubs",
    headline: "Map any object. Add any content.",
    desc: "Draw a polygon around any surface or object inside a tour. That polygon becomes a clickable hotspot — attach images, videos, spec sheets, price lists, or links. Buyers get detail without leaving the tour.",
    points: [
      "Freehand polygon drawing around any object or area",
      "Attach images, videos, PDFs, or external links",
      "Ideal for showcasing finishes, fittings, and materials",
      "Up to 100% more clicks vs circular hotspots",
    ],
    stat: "Up to 100% more clicks vs standard circular hotspots",
    showEmbed: false,
  },
  {
    id: "floorplan",
    icon: "◫",
    category: "Navigation",
    title: "Interactive Floor Plans",
    headline: "Navigate by tapping the map.",
    desc: "2D and 3D floor plans embedded inside the tour. Viewers tap any room on the plan and jump directly to that viewpoint. Spatial orientation stays clear throughout the entire walkthrough.",
    points: [
      "2D and 3D floor plan integration",
      "Tap to navigate — jump to any room from the plan",
      "Real-time position indicator shows where you are",
      "MLS-compatible format for portal submissions",
    ],
    stat: "Buyers spend 40% longer in tours with floor plan navigation",
    showEmbed: false,
  },
  {
    id: "magic-embed",
    icon: "◈",
    category: "Distribution",
    title: "Magic Embed",
    headline: "One line of code. Works everywhere.",
    desc: "Every tour ships with an iframe embed code that works on any website, portal, or blog. Copy, paste, done. Responsive on all screen sizes, no technical knowledge needed.",
    points: [
      "Single iframe — paste into any website or CMS",
      "Auto-responsive — adapts to any container width",
      "Works on WordPress, Squarespace, Wix, or custom sites",
      "Compatible with Magicbricks, 99acres, and Housing.com",
    ],
    stat: "Works on any platform with zero technical knowledge",
    showEmbed: true,
    embedSrc: "https://cdn.pannellum.org/2.5/pannellum.htm#panorama=https://pannellum.org/images/alma.jpg&autoLoad=true&title=Live%20Embedded%20Tour",
  },
  {
    id: "virtual-host",
    icon: "◉",
    category: "Engagement",
    title: "Virtual Host",
    headline: "A guided tour, even when you are unavailable.",
    desc: "Add a pre-recorded video of yourself or a sales agent narrating the tour. The virtual host appears at key moments — explaining room features, highlighting finishes, answering common questions.",
    points: [
      "Pre-recorded video overlaid at specific viewpoints",
      "Appears automatically or on user click",
      "Ideal for luxury properties and developer launches",
      "Builds trust — buyers hear from a real person",
    ],
    stat: "Tours with virtual hosts see 35% higher re-visit rates",
    showEmbed: false,
  },
  {
    id: "analytics",
    icon: "◎",
    category: "Data",
    title: "Visitor Analytics",
    headline: "Know what buyers look at — and for how long.",
    desc: "Track exactly which rooms receive the most attention, average time per viewpoint, total views, and engagement drop-off. Use data to refine your listing, not guess at it.",
    points: [
      "Per-room view duration and engagement tracking",
      "Total tours views and unique visitor count",
      "Entry source tracking — which platform sent the visit",
      "Exportable reports per property",
    ],
    stat: "Identify your strongest rooms before the site visit",
    showEmbed: false,
  },
  {
    id: "hiRes",
    icon: "⬢",
    category: "Quality",
    title: "High-Resolution Capture",
    headline: "No compression. No compromise.",
    desc: "We capture up to 32MP panoramas — the highest resolution available. Every surface, texture, and detail stays sharp when buyers zoom in on premium finishes.",
    points: [
      "Up to 32MP resolution — no resizing or compression",
      "Sharp detail on luxury finishes, stone, and woodwork",
      "Consistent quality across all lighting conditions",
      "HDR processing for balanced exposures throughout",
    ],
    stat: "32MP maximum — higher than any standard competitor",
    showEmbed: false,
  },
  {
    id: "password",
    icon: "◷",
    category: "Privacy",
    title: "Password Protected Tours",
    headline: "Off-market listings stay off-market.",
    desc: "Share a private tour link with a password to pre-qualified buyers, brokers, or investors only. No public indexing. Full analytics still available on private tours.",
    points: [
      "Set a password on any tour — active immediately",
      "Used for off-market listings and pre-launch inventory",
      "Revoke access at any time",
      "Full analytics still available on private tours",
    ],
    stat: "Preferred by 40% of premium developers for pre-launch tours",
    showEmbed: false,
  },
];

const CATEGORIES = ["All","Immersive","Interactive","Navigation","Distribution","Engagement","Data","Quality","Privacy"];

function FeatureCard({ feature, active, onClick }) {
  const [hov, setHov] = useState(false);
  return (
    <button
      onClick={() => onClick(feature.id)}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{ all:"unset", display:"block", cursor:"pointer", padding:"16px 18px", borderRadius:10,
        border:`1px solid ${active?"rgba(26,80,160,0.3)":hov?"rgba(13,21,32,0.1)":"rgba(13,21,32,0.07)"}`,
        background:active?"rgba(26,80,160,0.05)":hov?"#FFFFFF":"#FDFCFA",
        transition:"all 0.2s", textAlign:"left",
        boxShadow:active?"0 4px 20px rgba(26,80,160,0.08)":"none"
      }}
    >
      <div style={{ display:"flex", alignItems:"center", gap:12 }}>
        <div style={{ width:32, height:32, borderRadius:7, background:active?"rgba(26,80,160,0.12)":"rgba(13,21,32,0.05)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:14, flexShrink:0 }}>
          {feature.icon}
        </div>
        <div>
          <div style={{ fontFamily:"'Inter',sans-serif", fontSize:9, fontWeight:600, letterSpacing:2, textTransform:"uppercase", color:active?"#1A50A0":"rgba(13,21,32,0.3)", marginBottom:3 }}>{feature.category}</div>
          <div style={{ fontFamily:"'Cormorant',serif", fontWeight:700, fontSize:15, color:"#0D1520", lineHeight:1.1 }}>{feature.title}</div>
        </div>
      </div>
    </button>
  );
}

export default function Features() {
  const [activeId, setActiveId] = useState("dollhouse");
  const [filterCat, setFilterCat] = useState("All");
  const [embedLoaded, setEmbedLoaded] = useState(false);

  const active = FEATURES.find(f => f.id === activeId);
  const filtered = filterCat === "All" ? FEATURES : FEATURES.filter(f => f.category === filterCat);

  return (
    <div style={{ background:"#F5F0E8", minHeight:"100vh", paddingTop:68 }}>

      <div style={{ background:"linear-gradient(160deg,#080F1A 0%,#0A1628 60%,#0C1E38 100%)", padding:"80px 2.5rem 72px", textAlign:"center", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", inset:0, backgroundImage:"linear-gradient(rgba(26,80,160,0.07) 1px,transparent 1px),linear-gradient(90deg,rgba(26,80,160,0.07) 1px,transparent 1px)", backgroundSize:"70px 70px", pointerEvents:"none" }} />
        <div style={{ position:"relative", zIndex:1 }}>
          <div style={{ display:"flex", alignItems:"center", gap:12, justifyContent:"center", marginBottom:18 }}>
            <div style={{ width:28, height:1, background:"rgba(46,108,200,0.5)" }} />
            <span style={{ fontFamily:"'Inter',sans-serif", fontSize:11, fontWeight:500, letterSpacing:3.5, textTransform:"uppercase", color:"rgba(91,143,224,0.8)" }}>Platform Features</span>
            <div style={{ width:28, height:1, background:"rgba(46,108,200,0.5)" }} />
          </div>
          <h1 style={{ fontFamily:"'Cormorant',serif", fontWeight:700, fontSize:"clamp(3.2rem,6vw,5.8rem)", letterSpacing:-1.5, color:"#FFFFFF", lineHeight:0.92, marginBottom:20 }}>
            Built for<br />
            <em style={{ color:"#5B8FE0", fontStyle:"italic" }}>real estate professionals</em>
          </h1>
          <p style={{ fontFamily:"'Inter',sans-serif", fontSize:14, color:"rgba(255,255,255,0.38)", maxWidth:460, margin:"0 auto", fontWeight:300, lineHeight:1.8 }}>
            Every feature below is included in your tour. No extra plans, no plugins.
          </p>
        </div>
      </div>

      <div style={{ background:"#FFFFFF", borderBottom:"1px solid rgba(13,21,32,0.06)", position:"sticky", top:68, zIndex:100, overflowX:"auto" }}>
        <div style={{ maxWidth:1280, margin:"0 auto", padding:"0 2rem", display:"flex", gap:2, scrollbarWidth:"none", minWidth:"max-content" }}>
          {CATEGORIES.map(cat => (
            <button key={cat} onClick={() => { setFilterCat(cat); const first = cat==="All"?FEATURES[0]:FEATURES.find(f=>f.category===cat); if(first) setActiveId(first.id); }}
              style={{ padding:"14px 14px", background:"none", border:"none", borderBottom:filterCat===cat?"2px solid #1A50A0":"2px solid transparent", fontFamily:"'Inter',sans-serif", fontSize:12, fontWeight:filterCat===cat?600:400, color:filterCat===cat?"#0D1520":"rgba(13,21,32,0.45)", cursor:"pointer", whiteSpace:"nowrap", transition:"color 0.2s", marginBottom:-1 }}>
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div style={{ maxWidth:1280, margin:"0 auto", padding:"48px 2rem 80px" }}>
        <div className="features-page-layout" style={{ display:"grid", gridTemplateColumns:"300px 1fr", gap:28 }}>

          <div style={{ display:"flex", flexDirection:"column", gap:7 }}>
            {filtered.map(f => <FeatureCard key={f.id} feature={f} active={activeId===f.id} onClick={setActiveId} />)}
          </div>

          {active && (
            <div style={{ background:"#FFFFFF", borderRadius:16, border:"1px solid rgba(13,21,32,0.07)", overflow:"hidden", boxShadow:"0 4px 32px rgba(13,21,32,0.06)", alignSelf:"start", position:"sticky", top:116 }}>
              <div style={{ height:3, background:"linear-gradient(90deg,#1A50A0,#5B8FE0)" }} />
              <div style={{ padding:"36px 40px 40px" }}>
                <div style={{ display:"flex", alignItems:"center", gap:14, marginBottom:20 }}>
                  <div style={{ width:44, height:44, borderRadius:10, background:"rgba(26,80,160,0.1)", border:"1px solid rgba(26,80,160,0.15)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:18 }}>{active.icon}</div>
                  <div>
                    <div style={{ fontFamily:"'Inter',sans-serif", fontSize:9.5, fontWeight:600, letterSpacing:2.5, textTransform:"uppercase", color:"#1A50A0", marginBottom:4 }}>{active.category}</div>
                    <div style={{ fontFamily:"'Cormorant',serif", fontWeight:700, fontSize:26, color:"#0D1520", letterSpacing:-0.3, lineHeight:1 }}>{active.title}</div>
                  </div>
                </div>
                <p style={{ fontFamily:"'Cormorant',serif", fontWeight:600, fontSize:20, color:"#0D1520", fontStyle:"italic", marginBottom:14, lineHeight:1.25 }}>"{active.headline}"</p>
                <p style={{ fontFamily:"'Inter',sans-serif", fontSize:13.5, color:"rgba(13,21,32,0.55)", lineHeight:1.9, fontWeight:300, marginBottom:24 }}>{active.desc}</p>
                <div style={{ display:"flex", flexDirection:"column", gap:10, marginBottom:22 }}>
                  {active.points.map((p,i) => (
                    <div key={i} style={{ display:"flex", alignItems:"flex-start", gap:10 }}>
                      <div style={{ width:18, height:18, borderRadius:"50%", background:"rgba(26,80,160,0.1)", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, marginTop:2 }}>
                        <svg width="9" height="9" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="#1A50A0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </div>
                      <span style={{ fontFamily:"'Inter',sans-serif", fontSize:13, color:"rgba(13,21,32,0.65)", lineHeight:1.6 }}>{p}</span>
                    </div>
                  ))}
                </div>
                <div style={{ padding:"13px 16px", background:"rgba(26,80,160,0.05)", borderRadius:8, border:"1px solid rgba(26,80,160,0.1)", marginBottom:22 }}>
                  <span style={{ fontFamily:"'Inter',sans-serif", fontSize:12, color:"#1A50A0", fontWeight:500 }}>★ {active.stat}</span>
                </div>
                {active.showEmbed && (
                  <div style={{ marginBottom:22 }}>
                    <div style={{ fontFamily:"'Inter',sans-serif", fontSize:11, color:"rgba(13,21,32,0.4)", marginBottom:8 }}>Live demo — drag to explore:</div>
                    <div style={{ position:"relative", paddingBottom:"50%", borderRadius:10, overflow:"hidden", background:"#060D18" }}>
                      {!embedLoaded && <div style={{ position:"absolute", inset:0, display:"flex", alignItems:"center", justifyContent:"center" }}><div style={{ width:28, height:28, borderRadius:"50%", border:"2px solid rgba(46,108,200,0.3)", borderTop:"2px solid #2E6CC8", animation:"spin360 0.8s linear infinite" }} /></div>}
                      <iframe src={active.embedSrc} title={active.title} allowFullScreen allow="fullscreen" onLoad={() => setEmbedLoaded(true)} style={{ position:"absolute", inset:0, width:"100%", height:"100%", border:"none" }} />
                    </div>
                  </div>
                )}
                <Link to="/contact"
                  style={{ display:"block", padding:"13px", borderRadius:8, background:"linear-gradient(135deg,#0A1628,#1A50A0)", fontFamily:"'Inter',sans-serif", fontSize:13, fontWeight:600, color:"#FFFFFF", textDecoration:"none", textAlign:"center" }}
                  onMouseEnter={e=>e.currentTarget.style.opacity="0.88"}
                  onMouseLeave={e=>e.currentTarget.style.opacity="1"}>
                  Enquire About This Feature →
                </Link>
              </div>
            </div>
          )}
        </div>

        <div style={{ marginTop:64, background:"linear-gradient(135deg,#0A1628,#0E2040)", borderRadius:16, padding:"52px 48px", display:"flex", alignItems:"center", justifyContent:"space-between", gap:32, flexWrap:"wrap", border:"1px solid rgba(255,255,255,0.05)" }}>
          <div>
            <h3 style={{ fontFamily:"'Cormorant',serif", fontWeight:700, fontSize:"clamp(2rem,3.5vw,3rem)", color:"#FFFFFF", letterSpacing:-0.5, lineHeight:1.1, marginBottom:12 }}>
              All features included.<br /><em style={{ color:"#5B8FE0" }}>Every tour. No upgrades.</em>
            </h3>
            <p style={{ fontFamily:"'Inter',sans-serif", fontSize:13, color:"rgba(255,255,255,0.4)", fontWeight:300 }}>No tiered plans. What you see here is what every client gets.</p>
          </div>
          <div style={{ display:"flex", gap:12, flexWrap:"wrap" }}>
            <Link to="/contact" style={{ padding:"14px 32px", borderRadius:8, background:"linear-gradient(135deg,#1A50A0,#2E6CC8)", fontFamily:"'Inter',sans-serif", fontSize:14, fontWeight:600, color:"#FFFFFF", textDecoration:"none" }}>Request a Tour →</Link>
            <Link to="/explore" style={{ padding:"14px 32px", borderRadius:8, border:"1px solid rgba(255,255,255,0.12)", fontFamily:"'Inter',sans-serif", fontSize:14, fontWeight:500, color:"rgba(255,255,255,0.65)", textDecoration:"none" }}>See Live Examples</Link>
          </div>
        </div>
      </div>

      <style>{`
        @media(max-width:900px){ .features-page-layout{ grid-template-columns:1fr !important; } }
        @keyframes spin360{ to{ transform:rotate(360deg); } }
      `}</style>
    </div>
  );
}
