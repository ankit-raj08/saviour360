import { useState } from "react";
import { Link } from "react-router-dom";

/* ─── Demo Tours Data ─────────────────────────────────────────────────── */
/*
 * PANORAMA NOTES:
 * All "embedSrc" values use the Pannellum CDN viewer — confirmed embeddable.
 * When you publish tours on TeliportMe, replace embedSrc with your actual
 * embed URL from the TeliportMe dashboard (Share → Get Embed Code → copy src).
 * Format: https://app.teliportme.com/vr/YOUR_USER_ID/YOUR_TOUR_ID
 */

const BASE = "https://cdn.pannellum.org/2.5/pannellum.htm#autoLoad=true";

const TOURS = [
  {
    id: 1,
    category: "Real Estate",
    label: "Residential Interior",
    title: "Sunset Villa — 3BHK",
    location: "Ahmedabad, Gujarat",
    thumbnail: "https://cdn.storage.teliportme.com/360-content-thumbnail/4778762/1808871/800_300.jpg",
    tag: "360° Interior",
    rooms: "5 rooms · Fully furnished",
    embedSrc: `${BASE}&panorama=https://pannellum.org/images/alma.jpg&title=Sunset%20Villa%20360%C2%B0`,
    badge: "Featured",
    badgeColor: "#1A50A0",
  },
  {
    id: 2,
    category: "Real Estate",
    label: "Luxury Apartment",
    title: "Sky Penthouse",
    location: "Surat, Gujarat",
    thumbnail: "https://cdn.storage.teliportme.com/360-content-thumbnail/6330499/1939183/800_300.jpg",
    tag: "360° Interior",
    rooms: "3 rooms · High-rise",
    embedSrc: `${BASE}&panorama=https://pannellum.org/images/alma.jpg&title=Sky%20Penthouse%20360%C2%B0`,
    badge: "New",
    badgeColor: "#16a34a",
  },
  {
    id: 3,
    category: "Real Estate",
    label: "Urban Loft",
    title: "Urban Studio — Loft",
    location: "Mumbai, Maharashtra",
    thumbnail: "https://cdn.storage.teliportme.com/360-content-thumbnail/6330499/1825549/800_300.jpg",
    tag: "360° Interior",
    rooms: "2 rooms · Industrial",
    embedSrc: `${BASE}&panorama=https://pannellum.org/images/alma.jpg&title=Urban%20Studio%20360%C2%B0`,
    badge: null,
  },
  {
    id: 4,
    category: "Hospitality",
    label: "Resort Property",
    title: "Oceanview Resort Lobby",
    location: "Goa",
    thumbnail: "https://cdn.storage.teliportme.com/360-content-thumbnail/6395615/1984723/800_300.jpg",
    tag: "360° Venue",
    rooms: "Reception + lounge",
    embedSrc: `${BASE}&panorama=https://pannellum.org/images/alma.jpg&title=Oceanview%20Resort%20360%C2%B0`,
    badge: null,
  },
  {
    id: 5,
    category: "Commercial",
    label: "Showroom",
    title: "Premium Car Showroom",
    location: "Delhi NCR",
    thumbnail: "https://cdn.storage.teliportme.com/360-content-thumbnail/5/1946858/800_300.jpg",
    tag: "360° Commercial",
    rooms: "Full floor · 4200 sq ft",
    embedSrc: `${BASE}&panorama=https://pannellum.org/images/alma.jpg&title=Car%20Showroom%20360%C2%B0`,
    badge: null,
  },
  {
    id: 6,
    category: "Aerial",
    label: "Site Overview",
    title: "Residential Township — Aerial",
    location: "Hyderabad, Telangana",
    thumbnail: "https://cdn.storage.teliportme.com/360-content-thumbnail/5283908/1805964/800_300.jpg",
    tag: "Aerial 360°",
    rooms: "Site overview · DGCA certified",
    embedSrc: `${BASE}&panorama=https://pannellum.org/images/alma.jpg&title=Township%20Aerial%20360%C2%B0`,
    badge: "Aerial",
    badgeColor: "#7c3aed",
  },
];

const CATEGORIES = ["All", "Real Estate", "Hospitality", "Commercial", "Aerial"];

/* ─── Tour Card ──────────────────────────────────────────────────────────── */
function TourCard({ tour, onClick }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onClick={() => onClick(tour)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#FFFFFF",
        borderRadius: 12,
        overflow: "hidden",
        border: "1px solid rgba(13,21,32,0.07)",
        boxShadow: hovered ? "0 16px 48px rgba(13,21,32,0.12)" : "0 2px 16px rgba(13,21,32,0.05)",
        cursor: "pointer",
        transition: "box-shadow 0.25s, transform 0.25s",
        transform: hovered ? "translateY(-4px)" : "none",
      }}
    >
      {/* Thumbnail */}
      <div style={{ position: "relative", paddingBottom: "56%", overflow: "hidden", background: "#0A1628" }}>
        <img
          src={tour.thumbnail}
          alt={tour.title}
          style={{
            position: "absolute", inset: 0, width: "100%", height: "100%",
            objectFit: "cover",
            transform: hovered ? "scale(1.04)" : "scale(1)",
            transition: "transform 0.4s ease",
          }}
          onError={(e) => { e.currentTarget.style.display = "none"; }}
        />
        {/* Dark overlay on hover */}
        <div style={{ position: "absolute", inset: 0, background: "rgba(10,22,40,0.35)", opacity: hovered ? 1 : 0, transition: "opacity 0.25s", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ width: 52, height: 52, borderRadius: "50%", background: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.25)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
        {/* Tag badge */}
        <div style={{ position: "absolute", top: 12, left: 12 }}>
          <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 10, fontWeight: 600, letterSpacing: 1.5, textTransform: "uppercase", color: "#FFFFFF", background: "rgba(10,22,40,0.72)", backdropFilter: "blur(8px)", padding: "4px 10px", borderRadius: 100 }}>{tour.tag}</span>
        </div>
        {/* Featured/New badge */}
        {tour.badge && (
          <div style={{ position: "absolute", top: 12, right: 12 }}>
            <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 10, fontWeight: 600, color: "#FFFFFF", background: tour.badgeColor, padding: "4px 10px", borderRadius: 100 }}>{tour.badge}</span>
          </div>
        )}
        {/* 360 icon */}
        <div style={{ position: "absolute", bottom: 12, right: 12, width: 28, height: 28, borderRadius: "50%", background: "rgba(26,80,160,0.85)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 8, fontWeight: 700, color: "#FFFFFF", letterSpacing: 0.5 }}>360°</span>
        </div>
      </div>

      {/* Info */}
      <div style={{ padding: "18px 20px 20px" }}>
        <div style={{ fontFamily: "'Inter',sans-serif", fontSize: 10, fontWeight: 500, letterSpacing: 2, textTransform: "uppercase", color: "rgba(26,80,160,0.7)", marginBottom: 6 }}>{tour.label}</div>
        <div style={{ fontFamily: "'Cormorant',serif", fontWeight: 700, fontSize: 20, color: "#0D1520", letterSpacing: -0.3, marginBottom: 6, lineHeight: 1.15 }}>{tour.title}</div>
        <div style={{ display: "flex", alignItems: "center", gap: 5, marginBottom: 10 }}>
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="rgba(13,21,32,0.35)"/></svg>
          <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 12, color: "rgba(13,21,32,0.4)" }}>{tour.location}</span>
        </div>
        <div style={{ fontFamily: "'Inter',sans-serif", fontSize: 12, color: "rgba(13,21,32,0.4)", borderTop: "1px solid rgba(13,21,32,0.06)", paddingTop: 10, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span>{tour.rooms}</span>
          <span style={{ color: "#1A50A0", fontWeight: 500 }}>View tour →</span>
        </div>
      </div>
    </div>
  );
}

/* ─── Modal Viewer ───────────────────────────────────────────────────────── */
function TourModal({ tour, onClose }) {
  const [loaded, setLoaded] = useState(false);

  if (!tour) return null;

  return (
    <div
      onClick={onClose}
      style={{ position: "fixed", inset: 0, zIndex: 9000, background: "rgba(5,10,20,0.88)", backdropFilter: "blur(12px)", display: "flex", alignItems: "center", justifyContent: "center", padding: "20px" }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{ width: "100%", maxWidth: 1100, background: "#0A1628", borderRadius: 16, overflow: "hidden", border: "1px solid rgba(255,255,255,0.07)", boxShadow: "0 40px 120px rgba(0,0,0,0.6)" }}
      >
        {/* Modal header */}
        <div style={{ padding: "16px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <div>
            <div style={{ fontFamily: "'Cormorant',serif", fontWeight: 700, fontSize: 22, color: "#FFFFFF", letterSpacing: -0.3 }}>{tour.title}</div>
            <div style={{ fontFamily: "'Inter',sans-serif", fontSize: 11, color: "rgba(255,255,255,0.35)", marginTop: 2 }}>{tour.location} · {tour.tag}</div>
          </div>
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <Link
              to="/contact"
              onClick={onClose}
              style={{ padding: "8px 18px", borderRadius: 7, background: "linear-gradient(135deg,#1A50A0,#2E6CC8)", fontFamily: "'Inter',sans-serif", fontSize: 12, fontWeight: 600, color: "#FFFFFF", textDecoration: "none" }}
            >
              Get This for My Property
            </Link>
            <button
              onClick={onClose}
              style={{ width: 34, height: 34, borderRadius: "50%", background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.6)", fontSize: 16 }}
            >✕</button>
          </div>
        </div>

        {/* Tour iframe */}
        <div style={{ position: "relative", paddingBottom: "52%", background: "#060D18" }}>
          {!loaded && (
            <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", zIndex: 2 }}>
              <div style={{ width: 40, height: 40, borderRadius: "50%", border: "2px solid rgba(46,108,200,0.3)", borderTop: "2px solid #2E6CC8", animation: "spin360 0.8s linear infinite", marginBottom: 12 }} />
              <div style={{ fontFamily: "'Inter',sans-serif", fontSize: 12, color: "rgba(255,255,255,0.35)" }}>Loading 360° experience…</div>
            </div>
          )}
          <iframe
            src={tour.embedSrc}
            title={`${tour.title} — 360° Tour`}
            allowFullScreen
            allow="fullscreen"
            onLoad={() => setLoaded(true)}
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none" }}
          />
        </div>

        {/* Modal footer */}
        <div style={{ padding: "12px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 11, color: "rgba(255,255,255,0.25)" }}>Powered by Saviour360 · Drag to explore · Use fullscreen for VR</span>
          <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#22c55e", display: "inline-block" }} />
            <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 11, color: "rgba(255,255,255,0.3)" }}>Live</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Main Page ──────────────────────────────────────────────────────────── */
export default function Explore() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeTour, setActiveTour] = useState(null);

  const filtered = activeCategory === "All" ? TOURS : TOURS.filter(t => t.category === activeCategory);

  return (
    <div style={{ background: "#F5F0E8", minHeight: "100vh", paddingTop: 68 }}>

      {/* Hero band */}
      <div style={{ background: "linear-gradient(160deg, #080F1A 0%, #0A1628 60%, #0C1E38 100%)", padding: "80px 2.5rem 72px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(26,80,160,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(26,80,160,0.07) 1px, transparent 1px)", backgroundSize: "70px 70px", pointerEvents: "none" }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, justifyContent: "center", marginBottom: 18 }}>
            <div style={{ width: 28, height: 1, background: "rgba(46,108,200,0.5)" }} />
            <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: 3.5, textTransform: "uppercase", color: "rgba(91,143,224,0.8)" }}>Explore Tours</span>
            <div style={{ width: 28, height: 1, background: "rgba(46,108,200,0.5)" }} />
          </div>
          <h1 style={{ fontFamily: "'Cormorant',serif", fontWeight: 700, fontSize: "clamp(3.2rem,6vw,5.8rem)", letterSpacing: -1.5, color: "#FFFFFF", lineHeight: 0.92, marginBottom: 20 }}>
            See the experience<br />
            <em style={{ color: "#5B8FE0", fontStyle: "italic" }}>before you commit</em>
          </h1>
          <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 14, color: "rgba(255,255,255,0.38)", maxWidth: 480, margin: "0 auto", fontWeight: 300, lineHeight: 1.8 }}>
            These are real 360° tours — the same format we deliver to every client. Click any property to explore it live.
          </p>

          {/* Stats */}
          <div style={{ display: "flex", gap: 48, justifyContent: "center", marginTop: 40, flexWrap: "wrap" }}>
            {[["6+", "Live Demos"], ["360°", "Interactive"], ["48hr", "Delivery"]].map(([n, l]) => (
              <div key={l} style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "'Cormorant',serif", fontWeight: 700, fontSize: 32, color: "#5B8FE0", letterSpacing: -0.5 }}>{n}</div>
                <div style={{ fontFamily: "'Inter',sans-serif", fontSize: 10, fontWeight: 500, letterSpacing: 2, textTransform: "uppercase", color: "rgba(255,255,255,0.25)", marginTop: 3 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Category filter */}
      <div style={{ background: "#FFFFFF", borderBottom: "1px solid rgba(13,21,32,0.06)", position: "sticky", top: 68, zIndex: 100 }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 2.5rem", display: "flex", gap: 4, overflowX: "auto", scrollbarWidth: "none" }}>
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: "16px 20px",
                background: "none",
                border: "none",
                borderBottom: activeCategory === cat ? "2px solid #1A50A0" : "2px solid transparent",
                fontFamily: "'Inter',sans-serif",
                fontSize: 13,
                fontWeight: activeCategory === cat ? 600 : 400,
                color: activeCategory === cat ? "#0D1520" : "rgba(13,21,32,0.45)",
                cursor: "pointer",
                whiteSpace: "nowrap",
                transition: "color 0.2s",
                marginBottom: -1,
              }}
            >
              {cat}
              {cat !== "All" && (
                <span style={{ marginLeft: 6, fontSize: 10, color: activeCategory === cat ? "#1A50A0" : "rgba(13,21,32,0.3)", background: activeCategory === cat ? "rgba(26,80,160,0.08)" : "rgba(13,21,32,0.05)", padding: "1px 6px", borderRadius: 100 }}>
                  {TOURS.filter(t => t.category === cat).length}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Tour grid */}
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "60px 2.5rem 80px" }}>
        <div style={{ marginBottom: 32, display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
          <div>
            <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 12, color: "rgba(13,21,32,0.4)" }}>
              Showing {filtered.length} tour{filtered.length !== 1 ? "s" : ""}
              {activeCategory !== "All" ? ` in ${activeCategory}` : ""}
            </span>
          </div>
          <Link to="/contact" style={{ fontFamily: "'Inter',sans-serif", fontSize: 13, fontWeight: 500, color: "#1A50A0", textDecoration: "none" }}>
            Want your property here? →
          </Link>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }} className="explore-grid">
          {filtered.map(tour => (
            <TourCard key={tour.id} tour={tour} onClick={setActiveTour} />
          ))}
        </div>

        {/* CTA Banner */}
        <div style={{ marginTop: 72, background: "linear-gradient(135deg, #0A1628 0%, #0E2040 100%)", borderRadius: 16, padding: "52px 48px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 32, flexWrap: "wrap", border: "1px solid rgba(255,255,255,0.05)" }}>
          <div>
            <div style={{ fontFamily: "'Inter',sans-serif", fontSize: 10, fontWeight: 600, letterSpacing: 3, textTransform: "uppercase", color: "rgba(91,143,224,0.6)", marginBottom: 10 }}>Your Property</div>
            <h3 style={{ fontFamily: "'Cormorant',serif", fontWeight: 700, fontSize: "clamp(2rem,3.5vw,3rem)", color: "#FFFFFF", letterSpacing: -0.5, lineHeight: 1.1, marginBottom: 12 }}>
              Ready to add your<br />
              <em style={{ color: "#5B8FE0" }}>listing to this page?</em>
            </h3>
            <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 13, color: "rgba(255,255,255,0.4)", fontWeight: 300 }}>
              We deliver in 48 hours from booking.
            </p>
          </div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link
              to="/contact"
              style={{ padding: "14px 32px", borderRadius: 8, background: "linear-gradient(135deg,#1A50A0,#2E6CC8)", fontFamily: "'Inter',sans-serif", fontSize: 14, fontWeight: 600, color: "#FFFFFF", textDecoration: "none", boxShadow: "0 4px 20px rgba(26,80,160,0.35)" }}
            >
              Request a Tour →
            </Link>
            <Link
              to="/contact"
              style={{ padding: "14px 32px", borderRadius: 8, border: "1px solid rgba(255,255,255,0.12)", fontFamily: "'Inter',sans-serif", fontSize: 14, fontWeight: 500, color: "rgba(255,255,255,0.65)", textDecoration: "none" }}
            >
              Talk to Sales
            </Link>
          </div>
        </div>
      </div>

      {/* Modal */}
      <TourModal tour={activeTour} onClose={() => setActiveTour(null)} />

      <style>{`
        @media(max-width:900px){
          .explore-grid{ grid-template-columns: repeat(2,1fr) !important; }
        }
        @media(max-width:560px){
          .explore-grid{ grid-template-columns: 1fr !important; }
        }
        @keyframes spin360 {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
