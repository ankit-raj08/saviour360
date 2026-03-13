import { useState } from "react";
import { Link } from "react-router-dom";

/*
 * EmbedDemo — a real TeliportMe apartment tour embedded via iframe.
 * This shows visitors exactly what their buyers will experience.
 */
export default function EmbedDemoSection() {
  const [loaded, setLoaded] = useState(false);
  const [started, setStarted] = useState(false);

  return (
    <section id="live-demo" style={{ background: "#FFFFFF", padding: "100px 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 2.5rem" }}>

        {/* Header */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center", marginBottom: 52 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
              <div style={{ width: 32, height: 1, background: "#1A50A0" }} />
              <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: 3.5, textTransform: "uppercase", color: "#1A50A0" }}>Live Demo</span>
            </div>
            <h2 style={{ fontFamily: "'Cormorant',serif", fontWeight: 700, fontSize: "clamp(2.4rem, 4vw, 4.2rem)", color: "#0D1520", lineHeight: 0.95, letterSpacing: -0.5, marginBottom: 20 }}>
              This is what your<br /><em style={{ color: "#1A50A0", fontStyle: "italic" }}>buyers experience</em>
            </h2>
            <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 14, fontWeight: 300, color: "rgba(13,21,32,0.55)", lineHeight: 1.85, marginBottom: 28 }}>
              Drag to look around. Click hotspots to explore room details. This is a live embedded tour — the same format delivered to every client.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                "Works on any smartphone, tablet or desktop",
                "No app download required — opens from a link",
                "VR headset compatible for full immersion",
              ].map(item => (
                <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                  <div style={{ width: 18, height: 18, borderRadius: "50%", background: "rgba(26,80,160,0.08)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9, color: "#1A50A0", flexShrink: 0, marginTop: 1 }}>✓</div>
                  <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 13, color: "rgba(13,21,32,0.6)", lineHeight: 1.6 }}>{item}</span>
                </div>
              ))}
            </div>
            <Link to="/contact"
              style={{ display: "inline-block", marginTop: 32, padding: "13px 32px", borderRadius: 7, background: "#0A1628", fontFamily: "'Inter',sans-serif", fontSize: 13, fontWeight: 600, color: "#FFFFFF", textDecoration: "none", transition: "background 0.25s, transform 0.25s" }}
              onMouseEnter={e => { e.currentTarget.style.background = "#1A50A0"; e.currentTarget.style.transform = "translateY(-1px)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "#0A1628"; e.currentTarget.style.transform = "none"; }}>
              Get This for Your Property →
            </Link>
          </div>

          {/* Iframe embed */}
          <div style={{ position: "relative" }}>
            {/* Browser chrome mockup */}
            <div style={{ background: "#F5F0E8", borderRadius: "12px 12px 0 0", padding: "10px 16px", display: "flex", alignItems: "center", gap: 8, border: "1px solid rgba(13,21,32,0.08)", borderBottom: "none" }}>
              <div style={{ display: "flex", gap: 5 }}>
                {["#ff5f57", "#ffbd2e", "#28c840"].map(c => (
                  <div key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />
                ))}
              </div>
              <div style={{ flex: 1, background: "#FFFFFF", borderRadius: 5, padding: "4px 12px", fontFamily: "'Inter',sans-serif", fontSize: 10, color: "rgba(13,21,32,0.35)", border: "1px solid rgba(13,21,32,0.08)" }}>
                saviour360.in/tour/sunset-villa
              </div>
            </div>

            {/* Tour container */}
            <div style={{ position: "relative", width: "100%", paddingBottom: "62%", background: "#060D18", borderRadius: "0 0 12px 12px", overflow: "hidden", border: "1px solid rgba(13,21,32,0.08)", borderTop: "none", boxShadow: "0 20px 60px rgba(13,21,32,0.1)" }}>

              {/* Play overlay — click to load iframe */}
              {!started ? (
                <div
                  onClick={() => setStarted(true)}
                  style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", cursor: "pointer", background: "linear-gradient(160deg, #080F1A, #0A1628)", zIndex: 5 }}>
                  {/* Background grid */}
                  <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(42,92,180,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(42,92,180,0.06) 1px, transparent 1px)", backgroundSize: "50px 50px", pointerEvents: "none" }} />
                  <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(46,108,200,0.1) 0%, transparent 70%)", pointerEvents: "none" }} />

                  {/* Room preview illustration */}
                  <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
                    <div style={{ width: 64, height: 64, borderRadius: "50%", background: "rgba(46,108,200,0.15)", border: "2px solid rgba(46,108,200,0.3)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", transition: "transform 0.25s, background 0.25s" }}
                      onMouseEnter={e => { e.currentTarget.style.background = "rgba(46,108,200,0.25)"; e.currentTarget.style.transform = "scale(1.08)"; }}
                      onMouseLeave={e => { e.currentTarget.style.background = "rgba(46,108,200,0.15)"; e.currentTarget.style.transform = "none"; }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="1.2" opacity="0.4"/>
                        <path d="M10 8l6 4-6 4V8z" fill="white"/>
                      </svg>
                    </div>
                    <div style={{ fontFamily: "'Cormorant',serif", fontWeight: 600, fontSize: 22, color: "#FFFFFF", marginBottom: 6, letterSpacing: -0.3 }}>Sunset Villa — Live Tour</div>
                    <div style={{ fontFamily: "'Inter',sans-serif", fontSize: 12, color: "rgba(255,255,255,0.38)", letterSpacing: 0.3 }}>Click to load the interactive 360° experience</div>

                    {/* Tags */}
                    <div style={{ display: "flex", gap: 8, justifyContent: "center", marginTop: 20 }}>
                      {["360° Interactive", "Drag to Explore", "VR Ready"].map(tag => (
                        <div key={tag} style={{ padding: "4px 10px", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 100, fontFamily: "'Inter',sans-serif", fontSize: 10, color: "rgba(255,255,255,0.45)", letterSpacing: 0.5 }}>{tag}</div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  {!loaded && (
                    <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", background: "#060D18", zIndex: 4 }}>
                      <div style={{ textAlign: "center" }}>
                        <div style={{ width: 36, height: 36, borderRadius: "50%", border: "2px solid rgba(46,108,200,0.3)", borderTop: "2px solid #2E6CC8", margin: "0 auto 12px", animation: "spin360 0.8s linear infinite" }} />
                        <div style={{ fontFamily: "'Inter',sans-serif", fontSize: 12, color: "rgba(255,255,255,0.35)" }}>Loading tour…</div>
                      </div>
                    </div>
                  )}
                  {/* Pannellum CDN — confirmed working 360° viewer.
                      When you have your TeliportMe tour published, replace the
                      panorama URL below with your actual embed URL from the
                      TeliportMe dashboard (Share → Embed → copy iframe src).
                  */}
                  <iframe
                    src="https://cdn.pannellum.org/2.5/pannellum.htm#panorama=https://pannellum.org/images/alma.jpg&autoLoad=true&title=Sunset%20Villa%20360°"
                    title="Live 360° Tour Demo"
                    allowFullScreen
                    allow="fullscreen"
                    onLoad={() => setLoaded(true)}
                    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none" }}
                  />
                </>
              )}
            </div>

            {/* Caption bar */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 12, padding: "0 4px" }}>
              <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 11, color: "rgba(13,21,32,0.38)" }}>
                Powered by Saviour360
              </span>
              <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#22c55e", display: "inline-block" }} />
                <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 11, color: "rgba(13,21,32,0.38)" }}>Live</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
