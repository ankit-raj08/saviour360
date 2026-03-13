import { Link } from "react-router-dom";

export default function AerialSection() {
  return (
    <section id="aerial" style={{ background: "linear-gradient(160deg, #060C16 0%, #080F1A 50%, #0A1628 100%)", padding: "120px 0", position: "relative", overflow: "hidden" }}>

      {/* Grid overlay */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(42,92,180,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(42,92,180,0.05) 1px, transparent 1px)", backgroundSize: "80px 80px", pointerEvents: "none" }} />

      {/* Radial glow */}
      <div style={{ position: "absolute", top: "40%", right: "10%", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(26,80,160,0.09) 0%, transparent 68%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 2.5rem", position: "relative", zIndex: 1 }}>
        <div className="aerial-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>

          {/* Left — copy */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
              <div style={{ width: 32, height: 1, background: "#2E6CC8" }} />
              <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: 3.5, textTransform: "uppercase", color: "rgba(91,143,224,0.9)" }}>Aerial & Helicopter View</span>
            </div>

            <h2 style={{ fontFamily: "'Cormorant',serif", fontWeight: 700, fontSize: "clamp(2.8rem, 5vw, 5.5rem)", color: "#FFFFFF", lineHeight: 0.92, letterSpacing: -0.5, marginBottom: 28 }}>
              Buyers don't just<br />buy rooms.<br /><em style={{ color: "#5B8FE0", fontStyle: "italic" }}>They buy location.</em>
            </h2>

            <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 14, fontWeight: 300, color: "rgba(255,255,255,0.42)", lineHeight: 1.9, maxWidth: 460, marginBottom: 40 }}>
              Saviour360 is the only virtual tour provider in India offering integrated aerial and helicopter-view capture. Buyers see the neighbourhood, access roads, surrounding landmarks, and the full site context — all from a single tour link.
            </p>

            {/* India exclusive callout */}
            <div style={{ background: "rgba(26,80,160,0.1)", border: "1px solid rgba(46,108,200,0.2)", borderRadius: 10, padding: "18px 22px", marginBottom: 36, display: "flex", alignItems: "flex-start", gap: 14 }}>
              <div style={{ width: 36, height: 36, borderRadius: 8, background: "rgba(46,108,200,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 16 }}>◉</div>
              <div>
                <div style={{ fontFamily: "'Inter',sans-serif", fontSize: 12, fontWeight: 600, color: "#5B8FE0", letterSpacing: 0.3, marginBottom: 4 }}>India Exclusive</div>
                <div style={{ fontFamily: "'Inter',sans-serif", fontSize: 13, color: "rgba(255,255,255,0.4)", lineHeight: 1.7, fontWeight: 300 }}>
                  Aerial and ground-level 360° in a single integrated product. DGCA certified operations.
                </div>
              </div>
            </div>

            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <Link to="/contact"
                style={{ padding: "13px 32px", borderRadius: 7, background: "linear-gradient(135deg, #1A50A0, #2E6CC8)", fontFamily: "'Inter',sans-serif", fontSize: 13, fontWeight: 600, color: "#FFFFFF", textDecoration: "none", boxShadow: "0 6px 24px rgba(26,80,160,0.4)", transition: "transform 0.25s, box-shadow 0.25s" }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 10px 32px rgba(26,80,160,0.5)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 6px 24px rgba(26,80,160,0.4)"; }}>
                Request Aerial Tour
              </Link>
              <a href="#live-demo"
                style={{ padding: "13px 28px", borderRadius: 7, border: "1px solid rgba(255,255,255,0.1)", fontFamily: "'Inter',sans-serif", fontSize: 13, fontWeight: 400, color: "rgba(255,255,255,0.6)", textDecoration: "none", backdropFilter: "blur(8px)", transition: "all 0.25s" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(91,143,224,0.4)"; e.currentTarget.style.color = "#5B8FE0"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; e.currentTarget.style.color = "rgba(255,255,255,0.6)"; }}>
                See Demo Tour
              </a>
            </div>
          </div>

          {/* Right — visual */}
          <div style={{ position: "relative" }}>
            <AerialVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

function AerialVisual() {
  return (
    <div style={{ position: "relative", aspectRatio: "4/3" }} className="aerial-visual">
      {/* Main aerial SVG illustration */}
      <div style={{ width: "100%", height: "100%", borderRadius: 14, overflow: "hidden", background: "#060C18", border: "1px solid rgba(46,108,200,0.12)", boxShadow: "0 32px 80px rgba(0,0,0,0.4)" }}>
        <svg width="100%" height="100%" viewBox="0 0 560 420" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Sky gradient */}
          <defs>
            <linearGradient id="skyG" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#060C18"/>
              <stop offset="100%" stopColor="#0A1E38"/>
            </linearGradient>
            <radialGradient id="sunG" cx="75%" cy="30%" r="30%">
              <stop offset="0%" stopColor="rgba(91,143,224,0.12)"/>
              <stop offset="100%" stopColor="transparent"/>
            </radialGradient>
          </defs>
          <rect width="560" height="420" fill="url(#skyG)"/>
          <rect width="560" height="420" fill="url(#sunG)"/>

          {/* Horizon glow */}
          <ellipse cx="280" cy="210" rx="280" ry="60" fill="rgba(26,80,160,0.06)"/>

          {/* City grid from aerial perspective */}
          {/* Main roads */}
          <line x1="0" y1="210" x2="560" y2="210" stroke="rgba(255,255,255,0.06)" strokeWidth="2"/>
          <line x1="0" y1="270" x2="560" y2="270" stroke="rgba(255,255,255,0.04)" strokeWidth="1.5"/>
          <line x1="0" y1="310" x2="560" y2="310" stroke="rgba(255,255,255,0.04)" strokeWidth="1.5"/>
          <line x1="140" y1="160" x2="140" y2="420" stroke="rgba(255,255,255,0.04)" strokeWidth="1.5"/>
          <line x1="280" y1="160" x2="280" y2="420" stroke="rgba(255,255,255,0.06)" strokeWidth="2"/>
          <line x1="420" y1="160" x2="420" y2="420" stroke="rgba(255,255,255,0.04)" strokeWidth="1.5"/>

          {/* City blocks from above */}
          {[
            [50, 225, 70, 35], [130, 225, 50, 35], [200, 225, 60, 35],
            [50, 275, 70, 25], [130, 275, 50, 25], [200, 275, 55, 25],
            [300, 225, 80, 35], [395, 225, 60, 35], [470, 225, 70, 35],
            [300, 275, 80, 25], [395, 275, 60, 25], [470, 275, 65, 25],
            [50, 320, 70, 30], [130, 320, 50, 30], [200, 320, 55, 30],
            [300, 320, 80, 30], [395, 320, 65, 30], [470, 320, 65, 30],
          ].map(([x, y, w, h], i) => (
            <rect key={i} x={x} y={y} width={w} height={h} rx={2}
              fill={`rgba(${26 + i * 3},${50 + i * 2},${100 + i * 4},${0.55 + (i % 4) * 0.06})`}
              stroke="rgba(46,108,200,0.1)" strokeWidth="0.5"/>
          ))}

          {/* Featured property — center highlighted */}
          <rect x="220" y="218" width="48" height="42" rx={3} fill="rgba(26,80,160,0.5)" stroke="rgba(91,143,224,0.7)" strokeWidth="1.5"/>
          {/* Pulse rings around featured property */}
          <rect x="210" y="210" width="68" height="58" rx={5} fill="none" stroke="rgba(91,143,224,0.25)" strokeWidth="1.5" strokeDasharray="4 3"/>
          <rect x="200" y="202" width="88" height="74" rx={7} fill="none" stroke="rgba(91,143,224,0.12)" strokeWidth="1"/>

          {/* Location pin */}
          <ellipse cx="244" cy="206" rx="6" ry="8" fill="#2E6CC8"/>
          <ellipse cx="244" cy="215" rx="3" ry="2" fill="rgba(46,108,200,0.3)"/>
          <circle cx="244" cy="204" r="3" fill="rgba(255,255,255,0.9)"/>

          {/* Drone icon top-right */}
          <g transform="translate(440, 80)">
            <circle cx="0" cy="0" r="28" fill="rgba(10,22,40,0.8)" stroke="rgba(46,108,200,0.2)" strokeWidth="1"/>
            {/* Drone body */}
            <rect x="-10" y="-5" width="20" height="10" rx="3" fill="rgba(46,108,200,0.6)" stroke="rgba(91,143,224,0.4)" strokeWidth="0.8"/>
            {/* Arms */}
            <line x1="-10" y1="-5" x2="-18" y2="-13" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2"/>
            <line x1="10" y1="-5" x2="18" y2="-13" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2"/>
            <line x1="-10" y1="5" x2="-18" y2="13" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2"/>
            <line x1="10" y1="5" x2="18" y2="13" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2"/>
            {/* Rotors */}
            {[[-18,-13],[18,-13],[-18,13],[18,13]].map(([cx,cy],i) => (
              <ellipse key={i} cx={cx} cy={cy} rx="7" ry="2" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6"/>
            ))}
            {/* Camera lens */}
            <circle cx="0" cy="5" r="3.5" fill="rgba(10,22,40,0.9)" stroke="rgba(91,143,224,0.5)" strokeWidth="0.8"/>
            <circle cx="0" cy="5" r="1.8" fill="rgba(26,80,160,0.6)"/>
            {/* LED */}
            <circle cx="0" cy="-3" r="1.5" fill="#22c55e"/>
          </g>

          {/* Dashed flight path */}
          <path d="M440 108 Q400 150 320 185" stroke="rgba(46,108,200,0.3)" strokeWidth="1" strokeDasharray="5 4" fill="none"/>

          {/* Compass rose */}
          <g transform="translate(50, 80)">
            <circle cx="0" cy="0" r="22" fill="rgba(10,22,40,0.8)" stroke="rgba(46,108,200,0.2)" strokeWidth="1"/>
            <text x="0" y="-10" textAnchor="middle" fontFamily="Inter" fontSize="8" fill="rgba(255,255,255,0.7)" fontWeight="600">N</text>
            <text x="0" y="16" textAnchor="middle" fontFamily="Inter" fontSize="7" fill="rgba(255,255,255,0.3)">S</text>
            <text x="14" y="4" textAnchor="middle" fontFamily="Inter" fontSize="7" fill="rgba(255,255,255,0.3)">E</text>
            <text x="-14" y="4" textAnchor="middle" fontFamily="Inter" fontSize="7" fill="rgba(255,255,255,0.3)">W</text>
            <polygon points="0,-14 2.5,0 0,3 -2.5,0" fill="#2E6CC8"/>
            <polygon points="0,14 2.5,0 0,-3 -2.5,0" fill="rgba(255,255,255,0.2)"/>
          </g>

          {/* Altitude badge */}
          <rect x="20" y="360" width="100" height="38" rx="6" fill="rgba(10,22,40,0.85)" stroke="rgba(46,108,200,0.2)" strokeWidth="1"/>
          <text x="30" y="374" fontFamily="Inter" fontSize="8" fill="rgba(255,255,255,0.35)" letterSpacing="1">ALTITUDE</text>
          <text x="30" y="390" fontFamily="Inter" fontSize="13" fontWeight="600" fill="rgba(91,143,224,0.9)">120m AGL</text>

          {/* Scale bar */}
          <line x1="440" y1="395" x2="540" y2="395" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5"/>
          <line x1="440" y1="390" x2="440" y2="400" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5"/>
          <line x1="540" y1="390" x2="540" y2="400" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5"/>
          <text x="490" y="410" textAnchor="middle" fontFamily="Inter" fontSize="8" fill="rgba(255,255,255,0.3)">500m</text>

          {/* Scanline */}
          <line x1="0" y1="1" x2="560" y2="1" stroke="rgba(91,143,224,0.15)" strokeWidth="1"/>
        </svg>
      </div>

      {/* Floating stat cards */}
      <div style={{ position: "absolute", top: "12%", left: "-5%", background: "rgba(8,15,26,0.92)", backdropFilter: "blur(16px)", border: "1px solid rgba(46,108,200,0.2)", borderRadius: 10, padding: "12px 16px", animation: "fadeUp 0.7s ease 0.3s both" }}>
        <div style={{ fontFamily: "'Inter',sans-serif", fontSize: 9.5, fontWeight: 600, letterSpacing: 2.5, textTransform: "uppercase", color: "rgba(91,143,224,0.7)", marginBottom: 4 }}>Coverage</div>
        <div style={{ fontFamily: "'Cormorant',serif", fontWeight: 700, fontSize: 22, color: "#FFFFFF", lineHeight: 1 }}>360°</div>
        <div style={{ fontFamily: "'Inter',sans-serif", fontSize: 10, color: "rgba(255,255,255,0.32)", marginTop: 2 }}>Aerial + Ground</div>
      </div>

      <div style={{ position: "absolute", bottom: "14%", right: "-4%", background: "rgba(8,15,26,0.92)", backdropFilter: "blur(16px)", border: "1px solid rgba(46,108,200,0.2)", borderRadius: 10, padding: "12px 16px", animation: "fadeUp 0.7s ease 0.5s both" }}>
        <div style={{ fontFamily: "'Inter',sans-serif", fontSize: 9.5, fontWeight: 600, letterSpacing: 2.5, textTransform: "uppercase", color: "rgba(91,143,224,0.7)", marginBottom: 4 }}>India Only</div>
        <div style={{ fontFamily: "'Inter',sans-serif", fontSize: 12, fontWeight: 600, color: "#FFFFFF", lineHeight: 1.4 }}>DGCA<br/>Certified</div>
      </div>
    </div>
  );
}
