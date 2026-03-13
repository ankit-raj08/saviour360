import { useState, useRef, useCallback, useEffect } from "react";
import { VR_TOURS } from "../../constants";

export default function VRToursSection() {
  const [activeTour, setActiveTour] = useState(0);
  const [activeRoom, setActiveRoom] = useState(0);

  const handleTourChange = (i) => { setActiveTour(i); setActiveRoom(0); };

  const tour = VR_TOURS[activeTour];

  return (
    <section id="360-tours" style={{ background: "linear-gradient(160deg, #080F1A 0%, #0A1628 100%)", padding: "100px 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 2.5rem" }}>

        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 48, flexWrap: "wrap", gap: 20 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
              <div style={{ width: 32, height: 1, background: "#2E6CC8" }} />
              <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: 3.5, textTransform: "uppercase", color: "rgba(91,143,224,0.9)" }}>Live 360° Tours</span>
            </div>
            <h2 style={{ fontFamily: "'Cormorant',serif", fontWeight: 700, fontSize: "clamp(2.8rem,5vw,5rem)", color: "#FFFFFF", lineHeight: 0.95, letterSpacing: -0.5 }}>
              Step Inside<br /><em style={{ color: "#5B8FE0", fontStyle: "italic" }}>Any Property</em>
            </h2>
          </div>
          <a href="#" style={{ fontFamily: "'Inter',sans-serif", fontSize: 12, fontWeight: 500, color: "rgba(91,143,224,0.7)", textDecoration: "none", letterSpacing: 0.5, transition: "color 0.2s" }}
            onMouseEnter={e => e.target.style.color = "#5B8FE0"} onMouseLeave={e => e.target.style.color = "rgba(91,143,224,0.7)"}>
            Browse all tours →
          </a>
        </div>

        {/* Property tabs */}
        <div style={{ display: "flex", gap: 2, marginBottom: 24, borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          {VR_TOURS.map((t, i) => (
            <TourTab key={t.id} name={t.name} active={activeTour === i} onClick={() => handleTourChange(i)} />
          ))}
        </div>

        {/* Main layout */}
        <div className="vr-layout" style={{ display: "grid", gridTemplateColumns: "1fr 300px", gap: 16, minHeight: 520 }}>
          <Room3D tour={tour} activeRoom={activeRoom} />
          <TourPanel tour={tour} activeRoom={activeRoom} setActiveRoom={setActiveRoom} />
        </div>

        <DragHint />
      </div>
    </section>
  );
}

/* ── Tab button ──────────────────────────────────── */
function TourTab({ name, active, onClick }) {
  return (
    <button onClick={onClick}
      style={{ padding: "10px 20px", background: "none", border: "none", cursor: "pointer", fontFamily: "'Inter',sans-serif", fontSize: 13, fontWeight: active ? 600 : 400, color: active ? "#FFFFFF" : "rgba(255,255,255,0.38)", borderBottom: active ? "2px solid #2E6CC8" : "2px solid transparent", marginBottom: -1, transition: "all 0.2s", whiteSpace: "nowrap" }}>
      {name}
    </button>
  );
}

/* ── 3D Draggable Room ───────────────────────────── */
function Room3D({ tour, activeRoom }) {
  const [rotX, setRotX] = useState(-8);
  const [rotY, setRotY] = useState(0);
  const dragging = useRef(false);
  const lastPos = useRef({ x: 0, y: 0 });
  const velRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);

  // Inertia / momentum after release
  const applyInertia = useCallback(() => {
    velRef.current.x *= 0.92;
    velRef.current.y *= 0.92;
    if (Math.abs(velRef.current.x) > 0.05 || Math.abs(velRef.current.y) > 0.05) {
      setRotY(p => p + velRef.current.x);
      setRotX(p => Math.max(-30, Math.min(30, p + velRef.current.y)));
      rafRef.current = requestAnimationFrame(applyInertia);
    }
  }, []);

  const onMouseDown = useCallback((e) => {
    dragging.current = true;
    lastPos.current = { x: e.clientX, y: e.clientY };
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
  }, []);

  const onMouseMove = useCallback((e) => {
    if (!dragging.current) return;
    const dx = e.clientX - lastPos.current.x;
    const dy = e.clientY - lastPos.current.y;
    velRef.current = { x: dx * 0.18, y: dy * 0.1 };
    setRotY(p => p + dx * 0.35);
    setRotX(p => Math.max(-30, Math.min(30, p + dy * 0.2)));
    lastPos.current = { x: e.clientX, y: e.clientY };
  }, []);

  const onMouseUp = useCallback(() => {
    dragging.current = false;
    rafRef.current = requestAnimationFrame(applyInertia);
  }, [applyInertia]);

  // Touch support
  const onTouchStart = useCallback((e) => {
    dragging.current = true;
    lastPos.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
  }, []);

  const onTouchMove = useCallback((e) => {
    if (!dragging.current) return;
    e.preventDefault();
    const dx = e.touches[0].clientX - lastPos.current.x;
    const dy = e.touches[0].clientY - lastPos.current.y;
    setRotY(p => p + dx * 0.35);
    setRotX(p => Math.max(-30, Math.min(30, p + dy * 0.2)));
    lastPos.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  }, []);

  useEffect(() => {
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("mousemove", onMouseMove);
    return () => {
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("mousemove", onMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [onMouseMove, onMouseUp]);

  const roomNames = tour.rooms;

  return (
    <div
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onMouseUp}
      style={{ position: "relative", borderRadius: 14, overflow: "hidden", cursor: dragging.current ? "grabbing" : "grab", background: "#060D18", border: "1px solid rgba(46,108,200,0.15)", userSelect: "none", WebkitUserSelect: "none" }}>

      {/* 3D scene container */}
      <div style={{ width: "100%", height: 520, perspective: "700px", perspectiveOrigin: "50% 45%" }}>
        <div style={{ width: "100%", height: "100%", transformStyle: "preserve-3d", transform: `rotateX(${rotX}deg) rotateY(${rotY}deg)`, transition: dragging.current ? "none" : "transform 0.08s ease-out", willChange: "transform" }}>
          <RoomBox room={activeRoom} />
        </div>
      </div>

      {/* HUD top bar */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, padding: "16px 20px", display: "flex", justifyContent: "space-between", alignItems: "center", background: "linear-gradient(to bottom, rgba(6,13,24,0.75), transparent)", pointerEvents: "none" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#22c55e", display: "inline-block", animation: "pulseDot 2s ease infinite" }} />
          <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 12, fontWeight: 500, color: "#FFFFFF" }}>360° Live — {roomNames[activeRoom]}</span>
        </div>
        <div style={{ display: "flex", gap: 6 }}>
          <HUDPill label="360° READY" />
          <HUDPill label="HOTSPOTS ON" />
        </div>
      </div>

      {/* Bottom info */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "16px 20px", background: "linear-gradient(to top, rgba(6,13,24,0.9), transparent)", display: "flex", justifyContent: "space-between", alignItems: "flex-end", pointerEvents: "none" }}>
        <div>
          <div style={{ fontFamily: "'Cormorant',serif", fontWeight: 600, fontSize: 20, color: "#FFFFFF", lineHeight: 1.1 }}>{tour.name}</div>
          <div style={{ fontFamily: "'Inter',sans-serif", fontSize: 11, color: "rgba(255,255,255,0.42)", marginTop: 2 }}>{tour.location}</div>
        </div>
        <div style={{ textAlign: "right" }}>
          <div style={{ fontFamily: "'Inter',sans-serif", fontSize: 11, color: "rgba(255,255,255,0.38)", marginTop: 2 }}>{tour.size}</div>
        </div>
      </div>

      {/* Hotspot dots */}
      <HotDot x="34%" y="38%" label="Window" />
      <HotDot x="62%" y="52%" label="Detail" />
      <HotDot x="50%" y="28%" label="Ceiling" />
    </div>
  );
}

/* ── 3D Box (6 faces = a room cube) ─────────────── */
function RoomBox({ room }) {
  const SIZE = 520;
  const HALF = SIZE / 2;

  const faceStyle = (transform, bg) => ({
    position: "absolute",
    width: SIZE,
    height: SIZE,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    transform,
    backfaceVisibility: "visible",
    background: bg,
  });

  const roomPalettes = [
    { floor: "#3D2E1A", wall: "#1E3A5C", ceiling: "#152A42", side: "#1A3050", content: <LivingRoomContent /> },
    { floor: "#2A2018", wall: "#1A2E4A", ceiling: "#121E30", side: "#162640", content: <BedroomContent /> },
    { floor: "#282C1E", wall: "#1C3440", ceiling: "#141E28", side: "#182838", content: <KitchenContent /> },
    { floor: "#1E2818", wall: "linear-gradient(to bottom, #0F1A2E, #1A2A3E)", ceiling: "#0A1018", side: "#162030", content: <TerraceContent /> },
  ];
  const p = roomPalettes[room % roomPalettes.length];

  return (
    <div style={{ position: "absolute", top: "50%", left: "50%", width: SIZE, height: SIZE, transformStyle: "preserve-3d", transform: `translate(-50%, -50%)` }}>
      {/* Front face */}
      <div style={{ ...faceStyle(`translateZ(${HALF}px)`, p.wall), border: "1px solid rgba(46,108,200,0.08)" }}>
        {p.content}
      </div>
      {/* Back */}
      <div style={{ ...faceStyle(`rotateY(180deg) translateZ(${HALF}px)`, p.wall) }}>
        <BackWallContent />
      </div>
      {/* Left */}
      <div style={{ ...faceStyle(`rotateY(-90deg) translateZ(${HALF}px)`, p.side) }}>
        <SideWallContent />
      </div>
      {/* Right */}
      <div style={{ ...faceStyle(`rotateY(90deg) translateZ(${HALF}px)`, p.side) }}>
        <SideWallContent flip />
      </div>
      {/* Floor */}
      <div style={{ ...faceStyle(`rotateX(-90deg) translateZ(${HALF}px)`, p.floor) }}>
        <FloorContent />
      </div>
      {/* Ceiling */}
      <div style={{ ...faceStyle(`rotateX(90deg) translateZ(${HALF}px)`, p.ceiling) }}>
        <CeilingContent />
      </div>
    </div>
  );
}

/* ── Room face contents ──────────────────────────── */
function LivingRoomContent() {
  return (
    <svg width="520" height="520" viewBox="0 0 520 520" fill="none">
      <rect width="520" height="520" fill="#1E3A5C"/>
      {/* Baseboard */}
      <rect x="0" y="480" width="520" height="40" fill="rgba(0,0,0,0.3)"/>
      <rect x="0" y="476" width="520" height="4" fill="rgba(255,255,255,0.06)"/>
      {/* Large window */}
      <rect x="140" y="60" width="240" height="280" rx="2" fill="rgba(85,140,220,0.25)" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5"/>
      <rect x="140" y="60" width="240" height="4" fill="rgba(255,255,255,0.08)"/>
      <line x1="260" y1="60" x2="260" y2="340" stroke="rgba(255,255,255,0.06)" strokeWidth="2"/>
      <line x1="140" y1="200" x2="380" y2="200" stroke="rgba(255,255,255,0.06)" strokeWidth="2"/>
      {/* Light glow from window */}
      <radialGradient id="wg" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="rgba(180,210,255,0.15)"/>
        <stop offset="100%" stopColor="transparent"/>
      </radialGradient>
      <ellipse cx="260" cy="200" rx="180" ry="160" fill="url(#wg)"/>
      {/* Sofa shape */}
      <rect x="80" y="380" width="360" height="80" rx="4" fill="rgba(26,50,90,0.8)" stroke="rgba(46,108,200,0.2)" strokeWidth="1"/>
      <rect x="88" y="370" width="344" height="20" rx="3" fill="rgba(30,58,100,0.8)"/>
      <rect x="88" y="380" width="36" height="68" rx="3" fill="rgba(34,62,104,0.8)"/>
      <rect x="396" y="380" width="36" height="68" rx="3" fill="rgba(34,62,104,0.8)"/>
      {/* Wall art */}
      <rect x="200" y="140" width="120" height="80" rx="2" fill="rgba(0,0,0,0.3)" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
      <line x1="208" y1="148" x2="312" y2="212" stroke="rgba(46,108,200,0.25)" strokeWidth="1"/>
      <line x1="312" y1="148" x2="208" y2="212" stroke="rgba(46,108,200,0.25)" strokeWidth="1"/>
    </svg>
  );
}

function BedroomContent() {
  return (
    <svg width="520" height="520" viewBox="0 0 520 520" fill="none">
      <rect width="520" height="520" fill="#1A2E4A"/>
      <rect x="0" y="480" width="520" height="40" fill="rgba(0,0,0,0.3)"/>
      <rect x="0" y="476" width="520" height="4" fill="rgba(255,255,255,0.06)"/>
      {/* Bed */}
      <rect x="100" y="350" width="320" height="120" rx="4" fill="rgba(22,46,80,0.9)" stroke="rgba(46,108,200,0.15)" strokeWidth="1"/>
      <rect x="100" y="338" width="320" height="22" rx="4" fill="rgba(28,52,88,0.9)"/>
      {/* Pillows */}
      <rect x="116" y="340" width="90" height="20" rx="4" fill="rgba(200,210,230,0.15)"/>
      <rect x="314" y="340" width="90" height="20" rx="4" fill="rgba(200,210,230,0.15)"/>
      {/* Nightstand lamps */}
      <rect x="56" y="368" width="38" height="48" rx="3" fill="rgba(14,24,40,0.8)"/>
      <circle cx="75" cy="360" r="10" fill="rgba(200,160,60,0.25)"/>
      <rect x="426" y="368" width="38" height="48" rx="3" fill="rgba(14,24,40,0.8)"/>
      <circle cx="445" cy="360" r="10" fill="rgba(200,160,60,0.25)"/>
      {/* Window */}
      <rect x="190" y="60" width="140" height="200" rx="2" fill="rgba(80,130,210,0.22)" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5"/>
      <line x1="260" y1="60" x2="260" y2="260" stroke="rgba(255,255,255,0.05)" strokeWidth="2"/>
      <line x1="190" y1="160" x2="330" y2="160" stroke="rgba(255,255,255,0.05)" strokeWidth="2"/>
    </svg>
  );
}

function KitchenContent() {
  return (
    <svg width="520" height="520" viewBox="0 0 520 520" fill="none">
      <rect width="520" height="520" fill="#1C3440"/>
      <rect x="0" y="480" width="520" height="40" fill="rgba(0,0,0,0.3)"/>
      {/* Upper cabinets */}
      <rect x="40" y="60" width="440" height="110" rx="3" fill="rgba(20,52,72,0.9)" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
      {[58,152,246,340,434].map((x,i)=>(
        <rect key={i} x={x} y={70} width={80} height={90} rx="2" fill="rgba(16,42,62,0.9)" stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>
      ))}
      {/* Counter */}
      <rect x="40" y="350" width="440" height="60" rx="3" fill="rgba(18,46,66,0.9)" stroke="rgba(46,108,200,0.12)" strokeWidth="1"/>
      <rect x="40" y="344" width="440" height="10" rx="2" fill="rgba(28,56,76,0.9)"/>
      {[58,152,246,340,434].map((x,i)=>(
        <rect key={i} x={x} y={360} width={80} height={42} rx="2" fill="rgba(14,36,56,0.9)" stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>
      ))}
      {/* Sink detail */}
      <rect x="206" y="342" width="108" height="6" rx="1" fill="rgba(80,140,220,0.4)"/>
      {/* Stove burners */}
      {[318,348,378,408].map((x,i)=>(
        <circle key={i} cx={x} cy={347} r={8} fill="rgba(60,70,80,0.7)" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
      ))}
      {/* Window above sink */}
      <rect x="180" y="180" width="160" height="120" rx="2" fill="rgba(80,130,210,0.2)" stroke="rgba(255,255,255,0.07)" strokeWidth="1.5"/>
    </svg>
  );
}

function TerraceContent() {
  return (
    <svg width="520" height="520" viewBox="0 0 520 520" fill="none">
      <rect width="520" height="520" fill="url(#sky)"/>
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
          <stop offset="0%" stopColor="#0F1A2E"/>
          <stop offset="100%" stopColor="#1A2A3E"/>
        </linearGradient>
      </defs>
      {/* City skyline */}
      {[30,80,150,210,280,340,400,450,490].map((x,i)=>{
        const h=50+(i*23)%90;
        return <rect key={i} x={x} y={260-h} width={40} height={h} fill="rgba(16,28,48,0.8)"/>;
      })}
      {/* Horizon glow */}
      <rect x="0" y="255" width="520" height="12" fill="rgba(46,108,200,0.08)"/>
      {/* Floor */}
      <rect x="0" y="430" width="520" height="90" fill="rgba(28,36,28,0.9)"/>
      {/* Railing */}
      <rect x="30" y="400" width="460" height="10" rx="2" fill="rgba(255,255,255,0.1)"/>
      {[50,110,170,230,290,350,410,470].map((x,i)=>(
        <rect key={i} x={x} y={400} width={3} height={30} fill="rgba(255,255,255,0.08)"/>
      ))}
      {/* Lounge chairs */}
      <rect x="120" y="432" width="120" height="60" rx="5" fill="rgba(20,40,70,0.7)" stroke="rgba(46,108,200,0.15)" strokeWidth="1"/>
      <rect x="280" y="432" width="120" height="60" rx="5" fill="rgba(20,40,70,0.7)" stroke="rgba(46,108,200,0.15)" strokeWidth="1"/>
      {/* Stars */}
      {[40,120,200,320,420,480,60,140,260,380].map((x,i)=>(
        <circle key={i} cx={x} cy={20+(i*17)%100} r={1} fill="rgba(255,255,255,0.5)"/>
      ))}
    </svg>
  );
}

function BackWallContent() {
  return (
    <svg width="520" height="520" viewBox="0 0 520 520" fill="none">
      <rect width="520" height="520" fill="#152438"/>
      <rect x="0" y="476" width="520" height="44" fill="rgba(0,0,0,0.3)"/>
      {/* Fireplace */}
      <rect x="180" y="280" width="160" height="180" rx="4" fill="rgba(10,18,30,0.8)" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
      <rect x="200" y="300" width="120" height="120" rx="2" fill="rgba(6,10,18,0.9)"/>
      {/* Ember glow */}
      <ellipse cx="260" cy="420" rx="50" ry="12" fill="rgba(200,80,20,0.15)"/>
      {/* Mantle */}
      <rect x="164" y="274" width="192" height="10" rx="2" fill="rgba(30,50,70,0.9)"/>
      {/* Picture frames */}
      <rect x="70" y="100" width="100" height="140" rx="2" fill="rgba(0,0,0,0.3)" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
      <rect x="350" y="100" width="100" height="140" rx="2" fill="rgba(0,0,0,0.3)" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
      <rect x="200" y="100" width="120" height="80" rx="2" fill="rgba(0,0,0,0.25)" stroke="rgba(46,108,200,0.15)" strokeWidth="1"/>
    </svg>
  );
}

function SideWallContent({ flip }) {
  return (
    <svg width="520" height="520" viewBox="0 0 520 520" fill="none" style={{ transform: flip ? "scaleX(-1)" : "none" }}>
      <rect width="520" height="520" fill="#1A3050"/>
      <rect x="0" y="476" width="520" height="44" fill="rgba(0,0,0,0.3)"/>
      {/* Window/door */}
      <rect x="160" y="80" width="160" height="360" rx="3" fill="rgba(70,120,200,0.2)" stroke="rgba(255,255,255,0.06)" strokeWidth="1.5"/>
      <line x1="240" y1="80" x2="240" y2="440" stroke="rgba(255,255,255,0.05)" strokeWidth="2"/>
      <line x1="160" y1="260" x2="320" y2="260" stroke="rgba(255,255,255,0.05)" strokeWidth="2"/>
      {/* Door handle */}
      <circle cx="300" cy="265" r="5" fill="rgba(200,180,100,0.4)"/>
      {/* Skirting */}
      <rect x="0" y="460" width="520" height="16" fill="rgba(255,255,255,0.04)"/>
    </svg>
  );
}

function FloorContent() {
  return (
    <svg width="520" height="520" viewBox="0 0 520 520" fill="none">
      <rect width="520" height="520" fill="#2A1E10"/>
      {/* Hardwood plank pattern */}
      {Array.from({ length: 9 }).map((_, row) =>
        Array.from({ length: 4 }).map((_, col) => {
          const x = col * 130 + (row % 2) * 65;
          const y = row * 58;
          return <rect key={`${row}-${col}`} x={x} y={y} width={124} height={52} rx="1" fill="rgba(0,0,0,0.08)" stroke="rgba(0,0,0,0.2)" strokeWidth="0.5"/>;
        })
      )}
      {/* Rug */}
      <rect x="120" y="160" width="280" height="200" rx="4" fill="rgba(26,50,90,0.35)" stroke="rgba(46,108,200,0.2)" strokeWidth="1"/>
      <rect x="132" y="172" width="256" height="176" rx="3" fill="rgba(0,0,0,0)" stroke="rgba(91,143,224,0.15)" strokeWidth="1"/>
    </svg>
  );
}

function CeilingContent() {
  return (
    <svg width="520" height="520" viewBox="0 0 520 520" fill="none">
      <rect width="520" height="520" fill="#101E30"/>
      {/* Coving detail */}
      <rect x="0" y="0" width="520" height="16" fill="rgba(255,255,255,0.03)"/>
      <rect x="0" y="504" width="520" height="16" fill="rgba(255,255,255,0.03)"/>
      {/* Ceiling rose */}
      <circle cx="260" cy="260" r="60" fill="rgba(0,0,0,0.2)" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
      <circle cx="260" cy="260" r="40" fill="rgba(0,0,0,0.15)" stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>
      {/* Pendant light */}
      <line x1="260" y1="260" x2="260" y2="340" stroke="rgba(255,255,255,0.1)" strokeWidth="2"/>
      <ellipse cx="260" cy="345" rx="18" ry="8" fill="rgba(200,180,100,0.3)"/>
      {/* Light glow on ceiling */}
      <radialGradient id="cg" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="rgba(200,180,100,0.08)"/>
        <stop offset="100%" stopColor="transparent"/>
      </radialGradient>
      <circle cx="260" cy="260" r="200" fill="url(#cg)"/>
    </svg>
  );
}

/* ── Hotspot dot ─────────────────────────────────── */
function HotDot({ x, y, label }) {
  const [h, setH] = useState(false);
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: "translate(-50%,-50%)", zIndex: 5 }}
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}>
      <div style={{ width: 20, height: 20, borderRadius: "50%", background: "rgba(46,108,200,0.25)", border: "1.5px solid rgba(46,108,200,0.7)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", animation: "pulseDot 2.5s ease infinite", boxShadow: "0 0 10px rgba(46,108,200,0.4)" }}>
        <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#2E6CC8" }} />
      </div>
      {h && (
        <div style={{ position: "absolute", bottom: "calc(100% + 5px)", left: "50%", transform: "translateX(-50%)", background: "rgba(8,15,26,0.95)", border: "1px solid rgba(46,108,200,0.3)", borderRadius: 5, padding: "3px 9px", whiteSpace: "nowrap", fontFamily: "'Inter',sans-serif", fontSize: 11, fontWeight: 500, color: "#5B8FE0", animation: "fadeIn 0.15s ease both" }}>
          {label}
        </div>
      )}
    </div>
  );
}

/* ── Tour sidebar ────────────────────────────────── */
function TourPanel({ tour, activeRoom, setActiveRoom }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      {/* Info card */}
      <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 12, padding: "18px" }}>
        <div style={{ display: "inline-flex", padding: "2px 10px", borderRadius: 100, background: "rgba(26,80,160,0.18)", border: "1px solid rgba(46,108,200,0.25)", fontFamily: "'Inter',sans-serif", fontSize: 9.5, fontWeight: 600, letterSpacing: 2.5, textTransform: "uppercase", color: "#5B8FE0", marginBottom: 12 }}>{tour.tag}</div>
        <div style={{ fontFamily: "'Cormorant',serif", fontWeight: 600, fontSize: 18, color: "#FFFFFF", marginBottom: 2 }}>{tour.name}</div>
        <div style={{ fontFamily: "'Inter',sans-serif", fontSize: 11, color: "rgba(255,255,255,0.38)", marginBottom: 14 }}>{tour.location}</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
          {[{ l: "Size", v: tour.size }, { l: "Type", v: tour.tag }].map(i => (
            <div key={i.l} style={{ background: "rgba(255,255,255,0.04)", borderRadius: 7, padding: "9px 11px" }}>
              <div style={{ fontFamily: "'Inter',sans-serif", fontSize: 9, color: "rgba(255,255,255,0.3)", letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 3 }}>{i.l}</div>
              <div style={{ fontFamily: "'Inter',sans-serif", fontSize: 13, fontWeight: 600, color: "#FFFFFF" }}>{i.v}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Room nav */}
      <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 12, padding: "14px", flex: 1 }}>
        <div style={{ fontFamily: "'Inter',sans-serif", fontSize: 9.5, fontWeight: 600, letterSpacing: 2.5, textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: 12 }}>Navigate Rooms</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          {tour.rooms.map((room, i) => (
            <RoomBtn key={room} room={room} index={i} active={activeRoom === i} onClick={() => setActiveRoom(i)} />
          ))}
        </div>
      </div>

      {/* Enquire CTA */}
      <a href="/contact" style={{ display: "block", padding: "13px", borderRadius: 8, border: "none", cursor: "pointer", background: "linear-gradient(135deg, #1A50A0, #2E6CC8)", fontFamily: "'Inter',sans-serif", fontSize: 13, fontWeight: 600, color: "#FFFFFF", transition: "opacity 0.2s, transform 0.2s", boxShadow: "0 4px 16px rgba(26,80,160,0.35)", textDecoration: "none", textAlign: "center" }}
        onMouseEnter={e => { e.currentTarget.style.opacity = "0.88"; e.currentTarget.style.transform = "translateY(-1px)"; }}
        onMouseLeave={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "none"; }}>
        Enquire About This Property
      </a>
    </div>
  );
}

function RoomBtn({ room, index, active, onClick }) {
  const [h, setH] = useState(false);
  return (
    <button onClick={onClick} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ width: "100%", padding: "10px 12px", borderRadius: 7, border: `1px solid ${active ? "rgba(46,108,200,0.35)" : "transparent"}`, cursor: "pointer", background: active ? "rgba(26,80,160,0.15)" : h ? "rgba(255,255,255,0.03)" : "transparent", display: "flex", alignItems: "center", gap: 9, textAlign: "left", transition: "all 0.18s" }}>
      <div style={{ width: 26, height: 26, borderRadius: 6, background: active ? "rgba(46,108,200,0.22)" : "rgba(255,255,255,0.04)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Inter',sans-serif", fontSize: 10, fontWeight: 600, color: active ? "#5B8FE0" : "rgba(255,255,255,0.28)", flexShrink: 0, transition: "all 0.18s" }}>
        {String(index + 1).padStart(2, "0")}
      </div>
      <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 12, fontWeight: active ? 600 : 400, color: active ? "#FFFFFF" : "rgba(255,255,255,0.45)", transition: "color 0.18s" }}>{room}</span>
      {active && <span style={{ marginLeft: "auto", color: "#2E6CC8", fontSize: 10 }}>▶</span>}
    </button>
  );
}

function HUDPill({ label }) {
  return (
    <div style={{ padding: "4px 9px", background: "rgba(0,0,0,0.45)", backdropFilter: "blur(8px)", borderRadius: 5, border: "1px solid rgba(255,255,255,0.08)" }}>
      <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 9.5, fontWeight: 600, color: "rgba(255,255,255,0.55)", letterSpacing: 1 }}>{label}</span>
    </div>
  );
}

function DragHint() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8, justifyContent: "center", marginTop: 16 }}>
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" opacity={0.4}>
        <path d="M9 1L5 5M9 1L13 5M1 9L5 5M17 9L13 5M9 17L5 13M9 17L13 13M1 9L5 13M17 9L13 13" stroke="white" strokeWidth="1.4" strokeLinecap="round"/>
        <circle cx="9" cy="9" r="2.5" fill="white"/>
      </svg>
      <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 11, color: "rgba(255,255,255,0.3)", letterSpacing: 0.5 }}>Drag to rotate the space · Release to coast</span>
    </div>
  );
}
