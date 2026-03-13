import { useRef, useState, useCallback, useMemo } from "react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section style={{ position: "relative", width: "100%", minHeight: "100vh", overflow: "hidden", background: "linear-gradient(160deg, #080F1A 0%, #0A1628 55%, #0C1E38 100%)" }}>
      <GridLines />
      <Orbs />
      <div style={{ position: "relative", zIndex: 2, maxWidth: 1280, margin: "0 auto", padding: "0 2rem", minHeight: "100vh", display: "flex", alignItems: "center", gap: 48, flexWrap: "wrap" }}>
        <HeroLeft />
        <HeroRight />
      </div>
    </section>
  );
}

function GridLines() {
  return (
    <div style={{ position: "absolute", inset: 0, pointerEvents: "none",
      backgroundImage: "linear-gradient(rgba(42,92,180,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(42,92,180,0.06) 1px, transparent 1px)",
      backgroundSize: "80px 80px" }} />
  );
}

function Orbs() {
  return (
    <>
      <div style={{ position: "absolute", top: "12%", right: "22%", width: 480, height: 480, borderRadius: "50%", background: "radial-gradient(circle, rgba(46,108,200,0.12) 0%, transparent 68%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "8%", left: "4%", width: 360, height: 360, borderRadius: "50%", background: "radial-gradient(circle, rgba(26,80,160,0.09) 0%, transparent 70%)", pointerEvents: "none" }} />
    </>
  );
}

function HeroLeft() {
  return (
    <div style={{ flex: "1 1 420px", minWidth: 0, paddingTop: 80, animation: "fadeUp 0.9s ease both" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 32 }}>
        <div style={{ width: 32, height: 1, background: "#2E6CC8" }} />
        <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: 3.5, textTransform: "uppercase", color: "rgba(91,143,224,0.9)" }}>360° Tours · Aerial / Helicopter View</span>
      </div>

      {/* Trust badge */}
      <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "5px 12px", borderRadius: 100, background: "rgba(26,80,160,0.14)", border: "1px solid rgba(46,108,200,0.22)", marginBottom: 24 }}>
        <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#22c55e", display: "inline-block", animation: "pulseDot 2s ease infinite" }} />
        <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 10, fontWeight: 500, letterSpacing: 2, color: "rgba(255,255,255,0.6)", textTransform: "uppercase" }}>India's #1 Real Estate 360° Tour Platform</span>
      </div>

      <h1 style={{ fontFamily: "'Cormorant',serif", fontWeight: 700, fontSize: "clamp(3.2rem, 5.5vw, 6.5rem)", lineHeight: 0.92, color: "#FFFFFF", marginBottom: 32, letterSpacing: -1 }}>
        Walk Inside<br />
        <em style={{ color: "#5B8FE0", fontStyle: "italic" }}>Before You Buy</em>
      </h1>

      <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 15, fontWeight: 300, color: "rgba(255,255,255,0.48)", lineHeight: 1.85, maxWidth: 420, marginBottom: 44 }}>
        Saviour360 transforms any property into an immersive 360° tour. Buyers explore every room from anywhere — before a single visit.
      </p>

      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 56 }}>
        <Link to="/contact"
          style={{ padding: "14px 36px", borderRadius: 7, background: "linear-gradient(135deg, #1A50A0, #2E6CC8)", fontFamily: "'Inter',sans-serif", fontSize: 13, fontWeight: 600, letterSpacing: 0.3, color: "#FFFFFF", textDecoration: "none", boxShadow: "0 6px 24px rgba(26,80,160,0.4)", transition: "transform 0.25s, box-shadow 0.25s" }}
          onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 10px 32px rgba(26,80,160,0.5)"; }}
          onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 6px 24px rgba(26,80,160,0.4)"; }}>
          Request a Tour
        </Link>
        <a href="#360-tours"
          style={{ padding: "14px 32px", borderRadius: 7, border: "1px solid rgba(255,255,255,0.14)", fontFamily: "'Inter',sans-serif", fontSize: 13, fontWeight: 400, color: "rgba(255,255,255,0.7)", textDecoration: "none", display: "flex", alignItems: "center", gap: 8, backdropFilter: "blur(8px)", transition: "border-color 0.25s, color 0.25s" }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(91,143,224,0.4)"; e.currentTarget.style.color = "#5B8FE0"; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.14)"; e.currentTarget.style.color = "rgba(255,255,255,0.7)"; }}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.2"/><path d="M6.5 5.5l4 2.5-4 2.5V5.5z" fill="currentColor"/></svg>
          Watch Demo
        </a>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
        <AvatarStack />
        <div style={{ width: 1, height: 30, background: "rgba(255,255,255,0.1)" }} />
        <div>
          <div style={{ fontFamily: "'Cormorant',serif", fontWeight: 700, fontSize: 26, color: "#FFFFFF", lineHeight: 1, letterSpacing: -0.5 }}>578M+</div>
          <div style={{ fontFamily: "'Inter',sans-serif", fontSize: 11, color: "rgba(255,255,255,0.38)", marginTop: 2 }}>Clients Worldwide</div>
        </div>
      </div>
    </div>
  );
}

function HeroRight() {
  const containerRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    setTilt({ x: dy * -5, y: dx * 8 });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTilt({ x: 0, y: 0 });
  }, []);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ flex: "1 1 380px", minWidth: 0, position: "relative", minHeight: 520, display: "flex", alignItems: "center", justifyContent: "center" }}
      className="hero-right-col"
    >
      {/* Ambient glow behind towers */}
      <div style={{ position: "absolute", top: "32%", left: "50%", transform: "translate(-50%, -50%)", width: 520, height: 380, borderRadius: "50%", background: "radial-gradient(ellipse, rgba(46,108,200,0.13) 0%, transparent 65%)", pointerEvents: "none" }} />
      {/* Ground glow */}
      <div style={{ position: "absolute", bottom: "18%", left: "50%", transform: "translateX(-50%)", width: 480, height: 70, background: "radial-gradient(ellipse, rgba(26,80,160,0.2) 0%, transparent 70%)", pointerEvents: "none" }} />

      {/* 3D Perspective Building Scene */}
      <div style={{ perspective: "1400px", perspectiveOrigin: "50% 58%", cursor: "crosshair" }}>
        <div style={{
          transform: `rotateX(${2 + tilt.x}deg) rotateY(${-6 + tilt.y}deg)`,
          transition: "transform 0.5s cubic-bezier(0.25, 0, 0.25, 1)",
          transformStyle: "preserve-3d",
          display: "flex",
          alignItems: "flex-end",
          gap: 8,
          animation: "fadeUp 1.1s ease 0.2s both",
          position: "relative",
        }}>
          {/* Ground plane */}
          <div style={{ position: "absolute", bottom: -22, left: -30, right: -30, height: 22, background: "linear-gradient(180deg, rgba(8,20,40,0.95), rgba(6,14,28,0.6))", boxShadow: "0 8px 40px rgba(4,10,22,0.9)" }} />
          {/* Reflection strip */}
          <div style={{ position: "absolute", bottom: -46, left: 0, right: 0, height: 26, background: "linear-gradient(180deg, rgba(46,108,200,0.07), transparent)", filter: "blur(2px)" }} />

          <BuildingTower height={458} width={136} cols={7} rows={20} depth={32} isMain />
          <BuildingTower height={365} width={108} cols={5} rows={16} depth={26} hasAntenna />
          <BuildingTower height={295} width={88} cols={4} rows={13} depth={22} />
        </div>
      </div>

      <FloatCard top="17%" right="3%" delay="0.5s" label="360° ACTIVE" value="360° Live View" dot="#22c55e" />
      <FloatCard top="51%" right="-1%" delay="0.8s" label="LISTED TODAY" value="4 BHK · Bandra West" dot="#2E6CC8" />
      <VerifiedBadge />
      <VRBadge />
    </div>
  );
}

function BuildingTower({ height, width, cols, rows, depth, isMain, hasAntenna }) {
  const frontWindows = useMemo(() =>
    Array.from({ length: rows * cols }, () => {
      const r = Math.random();
      if (r < 0.22) return { state: "dark" };
      if (r < 0.58) return { state: "warm", op: 0.38 + Math.random() * 0.45 };
      return { state: "cool", op: 0.28 + Math.random() * 0.32 };
    })
  , [rows, cols]);

  const sideWindows = useMemo(() =>
    Array.from({ length: rows * 2 }, () => ({
      lit: Math.random() > 0.55,
      op: 0.05 + Math.random() * 0.08,
    }))
  , [rows]);

  return (
    <div style={{
      position: "relative",
      width: width + depth,
      height,
      flexShrink: 0,
      filter: "drop-shadow(0 24px 50px rgba(4,10,22,0.88))",
    }}>
      {hasAntenna && (
        <div style={{ position: "absolute", top: -34, left: "50%", transform: "translateX(-50%)", zIndex: 4 }}>
          <div style={{ width: 2, height: 36, background: "linear-gradient(to top, rgba(46,108,200,0.75), rgba(46,108,200,0.04))", margin: "0 auto" }} />
          <div style={{ position: "absolute", top: -2, left: "50%", transform: "translateX(-50%)", width: 7, height: 7, borderRadius: "50%", background: "#2E6CC8", boxShadow: "0 0 10px rgba(46,108,200,1), 0 0 22px rgba(46,108,200,0.55)" }} />
        </div>
      )}

      {/* Roof highlight */}
      <div style={{ position: "absolute", top: 0, left: 0, width, height: 5, background: isMain ? "linear-gradient(90deg, rgba(46,108,200,0.45), rgba(91,143,224,0.25), rgba(46,108,200,0.12))" : "linear-gradient(90deg, rgba(46,108,200,0.14), rgba(46,108,200,0.04))", borderRadius: "2px 2px 0 0", zIndex: 3 }} />

      {/* Front Facade */}
      <div style={{
        position: "absolute", left: 0, top: 0, width, height,
        background: isMain
          ? "linear-gradient(180deg, #0E2040 0%, #0A1830 35%, #081422 75%, #060E1A 100%)"
          : "linear-gradient(180deg, #0B1C36 0%, #081424 55%, #060E1C 100%)",
        borderRadius: "2px 2px 0 0",
        overflow: "hidden",
      }}>
        {/* Structural column lines */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: `repeating-linear-gradient(90deg, rgba(255,255,255,0.013) 0px, rgba(255,255,255,0.013) 1px, transparent 1px, transparent ${width / cols}px)`, pointerEvents: "none" }} />
        {/* Floor slab lines */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: `repeating-linear-gradient(180deg, rgba(255,255,255,0.007) 0px, rgba(255,255,255,0.007) 1px, transparent 1px, transparent ${height / rows}px)`, pointerEvents: "none" }} />

        {/* Window grid */}
        <div style={{
          position: "absolute",
          top: 14, left: 12, right: 12,
          bottom: Math.round(height * 0.09) + 4,
          display: "grid",
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          gridTemplateRows: `repeat(${rows - 1}, 1fr)`,
          gap: "3px 4px",
        }}>
          {frontWindows.map((w, i) => (
            <div key={i} style={{
              borderRadius: "1px",
              background: w.state === "warm"
                ? `rgba(218,178,72,${w.op})`
                : w.state === "cool"
                  ? `rgba(155,200,255,${w.op})`
                  : "rgba(8,16,30,0.95)",
            }} />
          ))}
        </div>

        {/* Glass reflection */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(120,175,255,0.055) 0%, transparent 42%, rgba(46,108,200,0.018) 100%)", pointerEvents: "none" }} />

        {/* Lobby base */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: Math.round(height * 0.09), background: "linear-gradient(180deg, transparent, rgba(46,108,200,0.07))", borderTop: "1px solid rgba(46,108,200,0.1)" }}>
          <div style={{ position: "absolute", inset: "6px 10px 6px", display: "flex", gap: 5 }}>
            {Array.from({ length: Math.max(2, cols - 1) }).map((_, i) => (
              <div key={i} style={{ flex: 1, background: "rgba(160,210,255,0.11)", borderRadius: "1px" }} />
            ))}
          </div>
        </div>

        {isMain && (
          <div style={{ position: "absolute", bottom: "25%", left: "50%", transform: "translateX(-50%)", width: width * 0.8, height: height * 0.45, background: "radial-gradient(ellipse, rgba(46,108,200,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />
        )}
      </div>

      {/* Right Side Depth Face */}
      <div style={{
        position: "absolute", left: width - 1, top: 8, width: depth, height: height - 8,
        background: "linear-gradient(90deg, #040C18 0%, #050E1C 70%, #040A14 100%)",
        borderRadius: "0 2px 0 0",
        overflow: "hidden",
      }}>
        <div style={{ position: "absolute", top: 14, left: 4, right: 5, bottom: 10, display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: `repeat(${rows}, 1fr)`, gap: "3px 3px" }}>
          {sideWindows.map((w, i) => (
            <div key={i} style={{ background: w.lit ? `rgba(155,200,255,${w.op})` : "rgba(6,14,26,0.9)", borderRadius: "1px" }} />
          ))}
        </div>
        {/* Shadow on left edge of side face */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(0,0,0,0.55) 0%, transparent 45%)", pointerEvents: "none" }} />
      </div>
    </div>
  );
}

function FloatCard({ top, right, delay, label, value, dot }) {
  return (
    <div style={{ position: "absolute", top, right, animation: `fadeUp 0.8s ease ${delay} both`, background: "rgba(255,255,255,0.07)", backdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 12, padding: "13px 17px", boxShadow: "0 8px 30px rgba(0,0,0,0.18)" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 4 }}>
        <span style={{ width: 6, height: 6, borderRadius: "50%", background: dot, display: "inline-block", animation: "pulseDot 2.2s ease infinite" }} />
        <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 9.5, fontWeight: 600, letterSpacing: 2.5, textTransform: "uppercase", color: "rgba(255,255,255,0.42)" }}>{label}</span>
      </div>
      <div style={{ fontFamily: "'Inter',sans-serif", fontSize: 13, fontWeight: 600, color: "#FFFFFF" }}>{value}</div>
    </div>
  );
}

function VerifiedBadge() {
  return (
    <div style={{ position: "absolute", top: "24%", left: "2%", animation: "fadeUp 0.8s ease 0.3s both", background: "rgba(255,255,255,0.07)", backdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 12, padding: "14px 18px", boxShadow: "0 8px 30px rgba(0,0,0,0.18)" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
        <div style={{ width: 32, height: 32, borderRadius: 8, background: "rgba(26,80,160,0.22)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
            <path d="M7.5 1L9.3 5.2H14L10.3 7.8L11.6 12L7.5 9.7L3.4 12L4.7 7.8L1 5.2H5.7L7.5 1Z" fill="rgba(91,143,224,0.8)" stroke="rgba(91,143,224,0.9)" strokeWidth="0.5" strokeLinejoin="round"/>
          </svg>
        </div>
        <div>
          <div style={{ fontFamily: "'Inter',sans-serif", fontSize: 9.5, fontWeight: 500, letterSpacing: 2, textTransform: "uppercase", color: "rgba(255,255,255,0.38)" }}>Premium</div>
          <div style={{ fontFamily: "'Inter',sans-serif", fontSize: 12, fontWeight: 500, color: "#FFFFFF", marginTop: 1 }}>Verified Listing</div>
        </div>
      </div>
      <div style={{ height: 3, borderRadius: 1.5, background: "rgba(255,255,255,0.1)" }}>
        <div style={{ height: "100%", width: "92%", borderRadius: 1.5, background: "linear-gradient(90deg, #1A50A0, #5B8FE0)" }} />
      </div>
    </div>
  );
}

function VRBadge() {
  return (
    <div style={{
      position: "absolute", bottom: "22%", left: "2%",
      animation: "fadeUp 0.8s ease 0.6s both",
      background: "rgba(26,80,160,0.12)", backdropFilter: "blur(16px)",
      border: "1px solid rgba(46,108,200,0.28)", borderRadius: 10,
      padding: "10px 14px", display: "flex", alignItems: "center", gap: 10,
      boxShadow: "0 6px 24px rgba(0,0,0,0.18)",
    }}>
      <div style={{ width: 32, height: 32, borderRadius: 8, background: "linear-gradient(135deg, #1A50A0, #2E6CC8)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
        <svg width="18" height="13" viewBox="0 0 18 13" fill="none">
          <rect x="0.8" y="1.5" width="16.4" height="9.5" rx="3" stroke="white" strokeWidth="1.3"/>
          <circle cx="6" cy="6.25" r="2" stroke="white" strokeWidth="1.2"/>
          <circle cx="12" cy="6.25" r="2" stroke="white" strokeWidth="1.2"/>
          <path d="M8.1 6.25h1.8" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
        </svg>
      </div>
      <div>
        <div style={{ fontFamily: "'Inter',sans-serif", fontSize: 9.5, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: 1 }}>360° Experience</div>
        <div style={{ fontFamily: "'Inter',sans-serif", fontSize: 12, fontWeight: 500, color: "#5B8FE0" }}>Immersive Tours</div>
      </div>
    </div>
  );
}

function AvatarStack() {
  const avatars = [{ bg: "#1A50A0", t: "AM" }, { bg: "#0D3878", t: "PS" }, { bg: "#2E6CC8", t: "RN" }];
  return (
    <div style={{ display: "flex" }}>
      {avatars.map((a, i) => (
        <div key={i} style={{ width: 30, height: 30, borderRadius: "50%", background: a.bg, border: "2px solid rgba(255,255,255,0.15)", marginLeft: i === 0 ? 0 : -9, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Inter',sans-serif", fontSize: 9, fontWeight: 700, color: "#fff" }}>{a.t}</div>
      ))}
    </div>
  );
}
