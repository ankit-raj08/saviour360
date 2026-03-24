/**
 * ProjectThumbnail
 * A rich, unique visual placeholder for each property.
 * Used in Hero, Explore, EmbedDemo overlays, and VR Tours overlays.
 */

/* Per-property visual identity */
const THEMES = {
  /* Hero properties */
  "The Nest": {
    grad: "radial-gradient(ellipse 80% 80% at 30% 50%, rgba(46,108,200,0.55) 0%, rgba(6,14,28,0.0) 70%)",
    accent: "#2E6CC8",
    pattern: "concentric",
  },
  "The Linea": {
    grad: "radial-gradient(ellipse 80% 80% at 70% 40%, rgba(59,127,212,0.5) 0%, rgba(6,14,28,0.0) 70%)",
    accent: "#3B7FD4",
    pattern: "lines",
  },
  "The Verity": {
    grad: "radial-gradient(ellipse 80% 80% at 50% 60%, rgba(26,78,160,0.6) 0%, rgba(6,14,28,0.0) 70%)",
    accent: "#1A4EA0",
    pattern: "diamond",
  },
  /* Demo / Explore */
  "Maple Vivanta": {
    grad: "radial-gradient(ellipse 80% 80% at 60% 30%, rgba(22,107,90,0.5) 0%, rgba(6,14,28,0.0) 70%)",
    accent: "#166B5A",
    pattern: "grid",
  },
  "Reva 80": {
    grad: "radial-gradient(ellipse 80% 80% at 35% 65%, rgba(90,60,180,0.5) 0%, rgba(6,14,28,0.0) 70%)",
    accent: "#5A3CB4",
    pattern: "hex",
  },
  "Urbanest": {
    grad: "radial-gradient(ellipse 80% 80% at 65% 50%, rgba(28,78,130,0.55) 0%, rgba(6,14,28,0.0) 70%)",
    accent: "#1C4E82",
    pattern: "urban",
  },
  /* VR Tours */
  "Reva by Kaavyaratna": {
    grad: "radial-gradient(ellipse 80% 80% at 40% 40%, rgba(160,90,30,0.5) 0%, rgba(6,14,28,0.0) 70%)",
    accent: "#A05A1E",
    pattern: "lines",
  },
  "Eminence 96": {
    grad: "radial-gradient(ellipse 80% 80% at 55% 55%, rgba(22,107,107,0.5) 0%, rgba(6,14,28,0.0) 70%)",
    accent: "#166B6B",
    pattern: "concentric",
  },
  /* Explore extras */
  "The Verity Aerial": {
    grad: "radial-gradient(ellipse 80% 80% at 45% 35%, rgba(100,50,180,0.5) 0%, rgba(6,14,28,0.0) 70%)",
    accent: "#6432B4",
    pattern: "diamond",
  },
  "The Nest Aerial": {
    grad: "radial-gradient(ellipse 80% 80% at 55% 65%, rgba(160,50,50,0.5) 0%, rgba(6,14,28,0.0) 70%)",
    accent: "#A03232",
    pattern: "grid",
  },
};

const DEFAULT_THEME = {
  grad: "radial-gradient(ellipse 80% 80% at 50% 50%, rgba(46,108,200,0.4) 0%, rgba(6,14,28,0.0) 70%)",
  accent: "#2E6CC8",
  pattern: "grid",
};

/* Pattern SVGs — each returns an SVG string for the subtle background texture */
function PatternSVG({ type, accent }) {
  const c = accent + "18"; /* very low opacity */
  switch (type) {
    case "concentric":
      return (
        <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.4 }} viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
          {[40, 80, 120, 160, 200].map((r, i) => (
            <circle key={i} cx="200" cy="150" r={r} fill="none" stroke={accent} strokeWidth="0.5" opacity={0.3 - i * 0.04} />
          ))}
        </svg>
      );
    case "lines":
      return (
        <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.3 }} viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(i => (
            <line key={i} x1="0" y1={i * 37 + 5} x2="400" y2={i * 37 + 5} stroke={accent} strokeWidth="0.5" opacity={0.4} />
          ))}
        </svg>
      );
    case "diamond":
      return (
        <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.3 }} viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
          <line x1="0" y1="150" x2="400" y2="150" stroke={accent} strokeWidth="0.5" opacity={0.4} />
          <line x1="200" y1="0" x2="200" y2="300" stroke={accent} strokeWidth="0.5" opacity={0.4} />
          {[60, 120, 180].map(r => (
            <rect key={r} x={200 - r * 0.67} y={150 - r * 0.5} width={r * 1.34} height={r} fill="none" stroke={accent} strokeWidth="0.5" opacity={0.25} transform={`rotate(45 200 150)`} />
          ))}
        </svg>
      );
    case "urban":
      return (
        <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.25 }} viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
          {[0,1,2,3,4,5,6].map(i => <line key={`v${i}`} x1={i*60+10} y1="0" x2={i*60+10} y2="300" stroke={accent} strokeWidth="0.4" opacity={0.4} />)}
          {[0,1,2,3,4,5].map(i => <line key={`h${i}`} x1="0" y1={i*55+10} x2="400" y2={i*55+10} stroke={accent} strokeWidth="0.4" opacity={0.4} />)}
        </svg>
      );
    case "hex":
      return (
        <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.3 }} viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
          {[[200,150],[100,80],[300,80],[100,220],[300,220],[200,10],[200,290]].map(([cx,cy],i) => (
            <polygon key={i} points={[0,1,2,3,4,5].map(j => {
              const a = (j*60 - 90) * Math.PI / 180;
              return `${cx + 35*Math.cos(a)},${cy + 35*Math.sin(a)}`;
            }).join(" ")} fill="none" stroke={accent} strokeWidth="0.5" opacity={0.35} />
          ))}
        </svg>
      );
    default: /* grid */
      return (
        <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.25 }} viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
          {[0,1,2,3,4,5,6,7,8,9].map(i => <line key={`v${i}`} x1={i*44} y1="0" x2={i*44} y2="300" stroke={accent} strokeWidth="0.4" opacity={0.35} />)}
          {[0,1,2,3,4,5,6,7,8].map(i => <line key={`h${i}`} x1="0" y1={i*37} x2="400" y2={i*37} stroke={accent} strokeWidth="0.4" opacity={0.35} />)}
        </svg>
      );
  }
}

export default function ProjectThumbnail({ name, location, tag, badge, badgeColor, style = {} }) {
  const theme = THEMES[name] || DEFAULT_THEME;

  return (
    <div style={{
      position: "absolute", inset: 0,
      background: "#070E1A",
      overflow: "hidden",
      ...style,
    }}>
      {/* Gradient orb */}
      <div style={{
        position: "absolute", inset: 0,
        background: theme.grad,
        pointerEvents: "none",
      }} />

      {/* Pattern */}
      <PatternSVG type={theme.pattern} accent={theme.accent} />

      {/* Centre: 360° sphere graphic */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <div style={{ position: "relative" }}>
          {/* Outer ring */}
          <div style={{
            width: 72, height: 72, borderRadius: "50%",
            border: `1px solid ${theme.accent}50`,
            display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: `0 0 28px ${theme.accent}30`,
          }}>
            {/* Equator */}
            <div style={{ position: "absolute", left: 0, right: 0, height: 1, background: `${theme.accent}40` }} />
            {/* Meridian */}
            <div style={{ position: "absolute", top: 0, bottom: 0, width: 1, background: `${theme.accent}40` }} />
            {/* Inner ring */}
            <div style={{
              width: 42, height: 42, borderRadius: "50%",
              border: `1px solid ${theme.accent}70`,
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <span style={{
                fontFamily: "'Inter',sans-serif", fontSize: 9,
                fontWeight: 700, color: theme.accent,
                letterSpacing: 0.5,
              }}>360°</span>
            </div>
          </div>
        </div>
      </div>

      {/* Top badges */}
      {tag && (
        <div style={{ position: "absolute", top: 12, left: 12 }}>
          <span style={{
            fontFamily: "'Inter',sans-serif", fontSize: 9, fontWeight: 600,
            letterSpacing: 1.5, textTransform: "uppercase", color: "#FFFFFF",
            background: "rgba(6,14,28,0.75)", backdropFilter: "blur(8px)",
            padding: "3px 9px", borderRadius: 100,
            border: "1px solid rgba(255,255,255,0.1)",
          }}>{tag}</span>
        </div>
      )}
      {badge && (
        <div style={{ position: "absolute", top: 12, right: 12 }}>
          <span style={{
            fontFamily: "'Inter',sans-serif", fontSize: 9, fontWeight: 600,
            color: "#FFFFFF", background: badgeColor || theme.accent,
            padding: "3px 9px", borderRadius: 100,
          }}>{badge}</span>
        </div>
      )}

      {/* Bottom: property info */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0,
        padding: "28px 16px 14px",
        background: "linear-gradient(to top, rgba(6,14,28,0.92) 0%, transparent 100%)",
      }}>
        <div style={{
          fontFamily: "'Cormorant',serif", fontWeight: 700,
          fontSize: 18, color: "#FFFFFF", letterSpacing: -0.2,
          lineHeight: 1.1, marginBottom: 3,
        }}>{name}</div>
        <div style={{
          fontFamily: "'Inter',sans-serif", fontSize: 10,
          color: "rgba(255,255,255,0.38)", fontWeight: 300,
        }}>{location}</div>
      </div>
    </div>
  );
}
