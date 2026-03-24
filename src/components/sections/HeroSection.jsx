import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useCMS } from "../../hooks";

const FALLBACK_PROJECTS = [
  {
    id: 0,
    name: "The Nest",
    location: "Ahmedabad, Gujarat",
    type: "Aerial View",
    href: "https://tours.savitarrealty.in/virtualtour/0635f123",
    thumb: "/thumbs/nest-aerial.png",
    accent: "#4A7FD4",
    rooms: ["Site Overview", "SG Highway", "Surroundings"],
  },
  {
    id: 1,
    name: "The Verity",
    location: "Ahmedabad, Gujarat",
    type: "360° Interior",
    href: "https://tours.savitarrealty.in/virtualtour/feb88b0e",
    thumb: "/thumbs/verity-interior.png",
    accent: "#5B8FE0",
    rooms: ["Entrance", "Living Room", "Master Suite"],
  },
  {
    id: 2,
    name: "The Linea",
    location: "Ahmedabad, Gujarat",
    type: "Aerial View",
    href: "https://tours.savitarrealty.in/virtualtour/f3c98418",
    thumb: "/thumbs/linea.png",
    accent: "#6A9FE8",
    rooms: ["West View", "Site Overview", "Location"],
  },
  {
    id: 3,
    name: "Eminence 96",
    location: "Ahmedabad, Gujarat",
    type: "360° Interior",
    href: "https://tours.savitarrealty.in/virtualtour/be0e0c66",
    thumb: "/thumbs/eminence-96.png",
    accent: "#3A6FBF",
    rooms: ["Living Room", "Dining Area", "Balcony"],
  },
];

const toHeroProject = (doc, i) => ({
  id:       i,
  name:     doc.name,
  location: doc.location || "Ahmedabad, Gujarat",
  type:     doc.category === "aerial" ? "Aerial View" : "360° Interior",
  href:     doc.tourUrl,
  thumb:    doc.thumbnail || `/thumbs/${doc.name.toLowerCase().replace(/\s+/g, "-")}.png`,
  accent:   doc.accent || "#5B8FE0",
  rooms:    (doc.rooms || []).map(r => r.label),
});

const HERO_ENDPOINT = "/api/projects?where[showInHero][equals]=true&where[active][equals]=true&sort=order&limit=6";

/* Fixed card dimensions — never change, prevents all flicker */
const CARD_W = 360;
const CARD_H = 460;

export default function HeroSection() {
  const { data: PROJECTS } = useCMS(HERO_ENDPOINT, FALLBACK_PROJECTS, toHeroProject);
  const [active, setActive]     = useState(0);
  const [progress, setProgress] = useState(0);
  const timerRef    = useRef(null);
  const progressRef = useRef(null);
  const DURATION    = 5500;

  const startTimer = (idx) => {
    clearTimeout(timerRef.current);
    clearInterval(progressRef.current);
    setProgress(0);
    let elapsed = 0;
    progressRef.current = setInterval(() => {
      elapsed += 40;
      setProgress(Math.min((elapsed / DURATION) * 100, 100));
    }, 40);
    timerRef.current = setTimeout(() => {
      const next = (idx + 1) % PROJECTS.length;
      setActive(next);
      startTimer(next);
    }, DURATION);
  };

  useEffect(() => {
    startTimer(0);
    return () => { clearTimeout(timerRef.current); clearInterval(progressRef.current); };
  }, []);

  const goTo   = (i) => { setActive(i); startTimer(i); };
  const goNext = ()  => goTo((active + 1) % PROJECTS.length);
  const goPrev = ()  => goTo((active - 1 + PROJECTS.length) % PROJECTS.length);

  return (
    <section style={{
      position: "relative", width: "100%",
      minHeight: "100vh",
      background: "#070E1A", overflow: "hidden",
    }}>
      {/* Background orb per project */}
      {PROJECTS.map((p, i) => (
        <div key={p.id} style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          transition: "opacity 0.9s ease",
          opacity: i === active ? 1 : 0,
          background: `radial-gradient(ellipse 55% 60% at 70% 50%, ${p.accent}20, transparent 65%)`,
        }} />
      ))}

      {/* Grid */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: "linear-gradient(rgba(42,92,180,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(42,92,180,0.04) 1px,transparent 1px)",
        backgroundSize: "72px 72px",
      }} />

      {/* ── Symmetric two-column layout ──────────────────── */}
      <div className="hero-outer" style={{
        position: "relative", zIndex: 2,
        maxWidth: 1200, margin: "0 auto",
        padding: "0 2.5rem",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 48,
        minHeight: "calc(100vh - 68px)",
        alignItems: "center",
        paddingTop: 88,
        paddingBottom: 56,
      }}>

        {/* ── LEFT ─────────────────────────────────────── */}
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
          {/* Badge */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "5px 12px", borderRadius: 100, alignSelf: "flex-start",
            background: "rgba(26,80,160,0.14)",
            border: "1px solid rgba(46,108,200,0.2)",
            marginBottom: 24,
          }}>
            <span style={{
              width: 5, height: 5, borderRadius: "50%", background: "#22c55e",
              display: "inline-block", animation: "heroPulse 2s infinite",
            }} />
            <span style={{
              fontFamily: "'Inter',sans-serif", fontSize: 10, fontWeight: 500,
              letterSpacing: 2.5, textTransform: "uppercase", color: "rgba(255,255,255,0.52)",
            }}>Savitar Realty · Live Tours</span>
          </div>

          {/* Heading — 2 lines */}
          <h1 style={{
            fontFamily: "'Cormorant',serif", fontWeight: 700,
            fontSize: "clamp(2.8rem,4.2vw,5rem)",
            lineHeight: 0.95, color: "#FFFFFF",
            letterSpacing: -1.2, marginBottom: 20,
          }}>
            Walk Inside<br />
            <em style={{ color: "#5B8FE0", fontStyle: "italic" }}>Before You Buy</em>
          </h1>

          <p style={{
            fontFamily: "'Inter',sans-serif", fontSize: 14, fontWeight: 300,
            lineHeight: 1.8, color: "rgba(255,255,255,0.4)",
            maxWidth: 380, marginBottom: 36,
          }}>
            Immersive 360° property tours — delivered in 48 hours.
            Buyers explore every room from anywhere.
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 40 }}>
            <Link to="/contact" style={{
              padding: "12px 28px", borderRadius: 7,
              background: "linear-gradient(135deg,#1A50A0,#2E6CC8)",
              fontFamily: "'Inter',sans-serif", fontSize: 13, fontWeight: 600,
              color: "#FFFFFF", textDecoration: "none",
              boxShadow: "0 4px 20px rgba(26,80,160,0.4)",
              transition: "transform 0.2s,box-shadow 0.2s",
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 28px rgba(26,80,160,0.5)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(26,80,160,0.4)"; }}
            >
              Request a Tour
            </Link>
            <Link to="/explore" style={{
              padding: "12px 24px", borderRadius: 7,
              border: "1px solid rgba(255,255,255,0.12)",
              fontFamily: "'Inter',sans-serif", fontSize: 13, fontWeight: 400,
              color: "rgba(255,255,255,0.6)", textDecoration: "none",
              transition: "border-color 0.2s,color 0.2s",
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(91,143,224,0.4)"; e.currentTarget.style.color = "#FFFFFF"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; e.currentTarget.style.color = "rgba(255,255,255,0.6)"; }}
            >
              Explore Tours
            </Link>
          </div>

          {/* Progress dots */}
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            {PROJECTS.map((_, i) => (
              <button key={i} onClick={() => goTo(i)} style={{
                width: active === i ? 28 : 7,
                height: 7, borderRadius: 4, border: "none",
                cursor: "pointer", padding: 0,
                background: active === i ? "#5B8FE0" : "rgba(255,255,255,0.2)",
                transition: "width 0.35s ease, background 0.35s ease",
                position: "relative", overflow: "hidden",
              }}>
                {active === i && (
                  <div style={{
                    position: "absolute", inset: 0, borderRadius: 4,
                    background: "#5B8FE0", transformOrigin: "left",
                    transform: `scaleX(${progress / 100})`,
                    transition: "transform 0.04s linear",
                  }} />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* ── RIGHT: carousel ──────────────────────────── */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 20 }}>

          {/* Card stage */}
          <div style={{
            position: "relative",
            width: "100%",
            height: CARD_H,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>

            {/* ← arrow */}
            <button onClick={goPrev} style={{
              position: "absolute", left: -8, top: "50%",
              transform: "translateY(-50%)", zIndex: 10,
              width: 36, height: 36, borderRadius: "50%", border: "none",
              background: "rgba(255,255,255,0.1)", backdropFilter: "blur(8px)",
              cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
              transition: "background 0.2s",
            }}
              onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.2)"}
              onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.1)"}
            >
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path d="M8.5 10.5L4.5 6.5l4-4" stroke="rgba(255,255,255,0.75)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Cards — all SAME fixed size, only transform changes */}
            {PROJECTS.map((p, i) => {
              let offset = i - active;
              if (offset > 1)  offset -= PROJECTS.length;
              if (offset < -1) offset += PROJECTS.length;

              const isActive = offset === 0;
              const visible  = Math.abs(offset) <= 1;

              /* Side card position */
              const tx = offset === -1 ? -220 : offset === 1 ? 220 : 0;
              const scale = isActive ? 1 : 0.82;
              const ry = offset === -1 ? 12 : offset === 1 ? -12 : 0;

              return (
                <div
                  key={p.id}
                  onClick={() => !isActive && goTo(i)}
                  style={{
                    position: "absolute",
                    /* ✅ FIXED size — never changes, no flicker */
                    width: CARD_W,
                    height: CARD_H,
                    borderRadius: 20,           /* constant */
                    overflow: "hidden",
                    flexShrink: 0,
                    border: `1px solid ${isActive ? "rgba(91,143,224,0.3)" : "rgba(255,255,255,0.07)"}`,
                    boxShadow: isActive
                      ? "0 24px 60px rgba(0,0,0,0.65), 0 0 0 1px rgba(91,143,224,0.2)"
                      : "0 8px 24px rgba(0,0,0,0.4)",
                    /* Only transition transform + opacity — no size, no layout thrash */
                    transform: `translateX(${tx}px) scale(${scale}) perspective(900px) rotateY(${ry}deg)`,
                    opacity: visible ? (isActive ? 1 : 0.48) : 0,
                    transition: "transform 0.48s cubic-bezier(0.34,1.1,0.64,1), opacity 0.4s ease, border-color 0.3s, box-shadow 0.3s",
                    zIndex: isActive ? 3 : 1,
                    cursor: isActive ? "default" : "pointer",
                  }}
                >
                  {/* Photo — fills whole card */}
                  <img
                    src={p.thumb}
                    alt={p.name}
                    style={{
                      position: "absolute", inset: 0,
                      width: "100%", height: "100%",
                      objectFit: "cover",
                      transform: isActive ? "scale(1.03)" : "scale(1)",
                      transition: "transform 0.7s ease",
                    }}
                  />

                  {/* Gradient so info bar reads cleanly */}
                  <div style={{
                    position: "absolute", inset: 0,
                    background: "linear-gradient(to top, rgba(6,14,28,0.9) 0%, rgba(6,14,28,0.3) 45%, transparent 70%)",
                    pointerEvents: "none",
                  }} />

                  {/* Room pills — top-left */}
                  <div style={{
                    position: "absolute", top: 14, left: 14,
                    display: "flex", gap: 5, flexWrap: "wrap",
                  }}>
                    {p.rooms.slice(0, isActive ? 3 : 2).map(r => (
                      <span key={r} style={{
                        padding: "3px 8px", borderRadius: 100,
                        background: "rgba(0,0,0,0.55)", backdropFilter: "blur(6px)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        fontFamily: "'Inter',sans-serif", fontSize: 9,
                        color: "rgba(255,255,255,0.6)",
                      }}>{r}</span>
                    ))}
                  </div>

                  {/* Live badge — top-right */}
                  <div style={{
                    position: "absolute", top: 14, right: 14,
                    display: "flex", alignItems: "center", gap: 5,
                    padding: "3px 9px", borderRadius: 100,
                    background: "rgba(0,0,0,0.5)", backdropFilter: "blur(8px)",
                    border: "1px solid rgba(255,255,255,0.09)",
                  }}>
                    <span style={{
                      width: 5, height: 5, borderRadius: "50%", background: "#22c55e",
                      display: "inline-block", animation: "heroPulse 2s infinite",
                    }} />
                    <span style={{
                      fontFamily: "'Inter',sans-serif", fontSize: 9,
                      color: "rgba(255,255,255,0.45)", letterSpacing: 0.8, textTransform: "uppercase",
                    }}>Live</span>
                  </div>

                  {/* Info bar — always bottom, fixed height */}
                  <div style={{
                    position: "absolute", bottom: 0, left: 0, right: 0,
                    padding: "18px 20px 20px",
                    background: "rgba(6,14,28,0.85)",
                    backdropFilter: "blur(16px)",
                    borderTop: "1px solid rgba(255,255,255,0.07)",
                  }}>
                    <div style={{
                      fontFamily: "'Inter',sans-serif", fontSize: 9, fontWeight: 600,
                      letterSpacing: 2, textTransform: "uppercase",
                      color: "rgba(91,143,224,0.65)", marginBottom: 5,
                    }}>Savitar Realty</div>
                    <div style={{
                      fontFamily: "'Cormorant',serif", fontWeight: 700,
                      fontSize: 22, color: "#FFFFFF", letterSpacing: -0.2,
                      lineHeight: 1.1, marginBottom: isActive ? 6 : 0,
                    }}>{p.name}</div>
                    {isActive && (
                      <>
                        <div style={{
                          fontFamily: "'Inter',sans-serif", fontSize: 11,
                          color: "rgba(255,255,255,0.32)", fontWeight: 300, marginBottom: 14,
                        }}>{p.location} · {p.type}</div>
                        <a href={p.href} target="_blank" rel="noopener noreferrer" style={{
                          display: "inline-flex", alignItems: "center", gap: 6,
                          padding: "8px 18px", borderRadius: 7,
                          background: "linear-gradient(135deg,#1A50A0,#2E6CC8)",
                          fontFamily: "'Inter',sans-serif", fontSize: 11, fontWeight: 600,
                          color: "#FFFFFF", textDecoration: "none",
                          boxShadow: "0 3px 14px rgba(26,80,160,0.4)",
                          transition: "opacity 0.2s",
                        }}
                          onMouseEnter={e => e.currentTarget.style.opacity = "0.85"}
                          onMouseLeave={e => e.currentTarget.style.opacity = "1"}
                        >
                          Launch Tour
                          <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                            <path d="M1.5 7.5l6-6M7.5 7.5V1.5H1.5" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </a>
                      </>
                    )}
                  </div>
                </div>
              );
            })}

            {/* → arrow */}
            <button onClick={goNext} style={{
              position: "absolute", right: -8, top: "50%",
              transform: "translateY(-50%)", zIndex: 10,
              width: 36, height: 36, borderRadius: "50%", border: "none",
              background: "rgba(255,255,255,0.1)", backdropFilter: "blur(8px)",
              cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
              transition: "background 0.2s",
            }}
              onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.2)"}
              onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.1)"}
            >
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path d="M4.5 2.5l4 4-4 4" stroke="rgba(255,255,255,0.75)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0,
        height: 80, pointerEvents: "none", zIndex: 3,
        background: "linear-gradient(to bottom,transparent,#070E1A)",
      }} />

      <style>{`
        @keyframes heroPulse {
          0%,100% { box-shadow:0 0 0 0 rgba(34,197,94,0.45); }
          50%      { box-shadow:0 0 0 5px rgba(34,197,94,0); }
        }
        @media(max-width:980px){
          .hero-outer{ grid-template-columns:1fr !important; padding:0 1.25rem !important; padding-top:88px !important; padding-bottom:24px !important; min-height:unset !important; }
          .hero-outer > div:last-child { display:none !important; }
          .hero-mobile-cards { display:flex !important; }
        }
        @media(min-width:981px){
          .hero-mobile-cards { display:none !important; }
        }
      `}</style>
      {/* ── Mobile hero cards ── */}
      <div className="hero-mobile-cards" style={{
        display:"none", flexDirection:"column",
        position:"relative", zIndex:2,
        background:"#070E1A",
        padding:"8px 1.25rem 48px",
        gap:12,
      }}>
        {/* Featured card */}
        <a href={PROJECTS[active]?.href} target="_blank" rel="noreferrer"
          style={{display:"block", textDecoration:"none", borderRadius:20, overflow:"hidden", position:"relative", height:260, border:"1px solid rgba(255,255,255,0.07)"}}>
          {/* bg image */}
          <img src={PROJECTS[active]?.thumb} alt={PROJECTS[active]?.name}
            key={PROJECTS[active]?.thumb}
            style={{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover"}}/>
          {/* gradient overlay */}
          <div style={{position:"absolute",inset:0,background:"linear-gradient(160deg,rgba(7,14,26,0.18) 0%,rgba(7,14,26,0.82) 100%)"}}/>
          {/* top badge */}
          <div style={{position:"absolute",top:14,left:14,padding:"4px 10px",borderRadius:20,background:"rgba(7,14,26,0.65)",backdropFilter:"blur(10px)",border:"1px solid rgba(255,255,255,0.1)",fontSize:9,fontWeight:600,letterSpacing:2,color:"rgba(255,255,255,0.7)",textTransform:"uppercase"}}>
            {PROJECTS[active]?.type}
          </div>
          {/* open tour button */}
          <div style={{position:"absolute",top:14,right:14,padding:"6px 14px",borderRadius:20,background:"linear-gradient(135deg,#1A50A0,#2E6CC8)",fontSize:10,fontWeight:600,color:"#fff",boxShadow:"0 4px 16px rgba(26,80,160,0.4)"}}>
            Open Tour →
          </div>
          {/* bottom info */}
          <div style={{position:"absolute",bottom:0,left:0,right:0,padding:"20px 18px"}}>
            <div style={{fontFamily:"'Cormorant',serif",fontSize:24,fontWeight:700,color:"#FFFFFF",lineHeight:1.1,marginBottom:4}}>
              {PROJECTS[active]?.name}
            </div>
            <div style={{fontFamily:"'Inter',sans-serif",fontSize:11,color:"rgba(255,255,255,0.45)",display:"flex",alignItems:"center",gap:5}}>
              <svg width="9" height="9" viewBox="0 0 10 14" fill="none"><path d="M5 0C2.24 0 0 2.24 0 5c0 3.75 5 9 5 9s5-5.25 5-9c0-2.76-2.24-5-5-5zm0 6.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" fill="rgba(255,255,255,0.4)"/></svg>
              {PROJECTS[active]?.location}
            </div>
          </div>
          {/* accent glow */}
          <div style={{position:"absolute",inset:0,background:`radial-gradient(ellipse 60% 50% at 80% 20%, ${PROJECTS[active]?.accent}22, transparent 70%)`,pointerEvents:"none"}}/>
        </a>

        {/* Dot indicators */}
        <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:6,padding:"8px 0 0"}}>
          {PROJECTS.map((_,i)=>(
            <button key={i} onClick={()=>goTo(i)} style={{
              width: i===active ? 22 : 6, height:6, borderRadius:3,
              border:"none", padding:0, cursor:"pointer",
              background: i===active ? "#5B8FE0" : "rgba(255,255,255,0.2)",
              transition:"all 0.3s ease",
            }}/>
          ))}
        </div>
      </div>
    </section>
  );
}
