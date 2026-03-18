import { Link } from "react-router-dom";

/* ─── Section helpers ─────────────────────────────────────────────── */
function Eyebrow({ children, light }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
      <div style={{ width: 28, height: 1, background: light ? "rgba(46,108,200,0.6)" : "#1A50A0" }} />
      <span style={{
        fontFamily: "'Inter',sans-serif", fontSize: 11, fontWeight: 500,
        letterSpacing: 3.5, textTransform: "uppercase",
        color: light ? "rgba(91,143,224,0.85)" : "#1A50A0",
      }}>
        {children}
      </span>
    </div>
  );
}

function StatPill({ value, label }) {
  return (
    <div style={{
      display: "flex", flexDirection: "column", alignItems: "center",
      padding: "20px 28px",
      background: "rgba(255,255,255,0.04)",
      border: "1px solid rgba(255,255,255,0.08)",
      borderRadius: 12, textAlign: "center",
    }}>
      <span style={{
        fontFamily: "'Cormorant',serif", fontWeight: 700, fontSize: 36,
        color: "#5B8FE0", letterSpacing: -1, lineHeight: 1,
      }}>{value}</span>
      <span style={{
        fontFamily: "'Inter',sans-serif", fontSize: 10, fontWeight: 500,
        letterSpacing: 2, textTransform: "uppercase",
        color: "rgba(255,255,255,0.28)", marginTop: 6,
      }}>{label}</span>
    </div>
  );
}

function CheckRow({ children, dark }) {
  return (
    <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
      <div style={{
        width: 20, height: 20, borderRadius: "50%", flexShrink: 0, marginTop: 1,
        background: dark ? "rgba(91,143,224,0.12)" : "rgba(26,80,160,0.08)",
        border: dark ? "1px solid rgba(91,143,224,0.2)" : "1px solid rgba(26,80,160,0.15)",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <svg width="9" height="9" viewBox="0 0 12 12" fill="none">
          <path d="M2 6l3 3 5-5" stroke={dark ? "#5B8FE0" : "#1A50A0"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <span style={{
        fontFamily: "'Inter',sans-serif", fontSize: 14,
        color: dark ? "rgba(255,255,255,0.55)" : "rgba(13,21,32,0.6)",
        lineHeight: 1.7, fontWeight: 300,
      }}>
        {children}
      </span>
    </div>
  );
}

/* ─── Main page ───────────────────────────────────────────────────── */
export default function About() {
  return (
    <div style={{ background: "#F5F0E8", minHeight: "100vh", paddingTop: 68 }}>

      {/* ── Hero band ──────────────────────────────────────────────── */}
      <div style={{
        background: "linear-gradient(160deg, #080F1A 0%, #0A1628 60%, #0C1E38 100%)",
        padding: "96px 2.5rem 88px", textAlign: "center",
        position: "relative", overflow: "hidden",
      }}>
        {/* Grid overlay */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: "linear-gradient(rgba(26,80,160,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(26,80,160,0.07) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }} />
        {/* Orb */}
        <div style={{ position: "absolute", top: "20%", left: "50%", transform: "translateX(-50%)", width: 600, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(46,108,200,0.1) 0%, transparent 65%)", pointerEvents: "none" }} />

        <div style={{ position: "relative", zIndex: 1 }}>
          <Eyebrow light>Who We Are</Eyebrow>
          <h1 style={{
            fontFamily: "'Cormorant',serif", fontWeight: 700,
            fontSize: "clamp(3rem,5.5vw,5.5rem)", letterSpacing: -2,
            color: "#FFFFFF", lineHeight: 0.9, marginBottom: 24,
          }}>
            Saviour<em style={{ color: "#5B8FE0", fontStyle: "italic" }}>360</em>
          </h1>
          <p style={{
            fontFamily: "'Inter',sans-serif", fontSize: 15, fontWeight: 300,
            color: "rgba(255,255,255,0.42)", lineHeight: 1.9,
            maxWidth: 520, margin: "0 auto",
          }}>
            India's dedicated 360° virtual tour company for real estate —
            built around one belief: every buyer deserves to walk a property
            before they visit in person.
          </p>

          {/* Stats row */}
          <div style={{
            display: "flex", gap: 12, justifyContent: "center",
            marginTop: 56, flexWrap: "wrap",
          }}>
            <StatPill value="48hrs"   label="Tour Delivery" />
            <StatPill value="360°"    label="Full Coverage" />
            <StatPill value="DGCA"    label="Certified" />
            <StatPill value="100%"    label="In-House Team" />
          </div>
        </div>
      </div>

      {/* ── Section 1: We are Saviour360 ───────────────────────────── */}
      <section style={{ background: "#FFFFFF", padding: "96px 0" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 2.5rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }} className="about-grid">

            {/* Left */}
            <div>
              <Eyebrow>Our Story</Eyebrow>
              <h2 style={{
                fontFamily: "'Cormorant',serif", fontWeight: 700,
                fontSize: "clamp(1.8rem,2.8vw,2.8rem)", color: "#0D1520",
                letterSpacing: -0.8, lineHeight: 1, marginBottom: 18,
              }}>
                We capture properties<br />
                <em style={{ color: "#1A50A0", fontStyle: "italic" }}>the way buyers see them</em>
              </h2>
              <p style={{
                fontFamily: "'Inter',sans-serif", fontSize: 14, fontWeight: 300,
                color: "rgba(13,21,32,0.55)", lineHeight: 1.9, marginBottom: 18,
              }}>
                Saviour360 was built to solve a real problem in Indian real estate: buyers
                waste time on physical visits, and sellers lose qualified leads to poor-quality
                listings. We exist to close that gap with immersive 360° technology.
              </p>
              <p style={{
                fontFamily: "'Inter',sans-serif", fontSize: 14, fontWeight: 300,
                color: "rgba(13,21,32,0.55)", lineHeight: 1.9, marginBottom: 36,
              }}>
                Our in-house team handles everything — from on-site capture to delivery of the
                final shareable tour link — within 48 hours of booking. No freelancers,
                no outsourcing, no delays.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <CheckRow>In-house capture and editing team — zero outsourcing</CheckRow>
                <CheckRow>Full 360° interior walkthroughs delivered in 48 hours</CheckRow>
                <CheckRow>DGCA-certified aerial and drone operations</CheckRow>
                <CheckRow>Google Street View trusted publisher</CheckRow>
                <CheckRow>Tours embeddable on any website or MLS portal</CheckRow>
              </div>
            </div>

            {/* Right: visual card */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{
                width: "100%", maxWidth: 380,
                background: "linear-gradient(160deg, #080F1A 0%, #0A1628 100%)",
                borderRadius: 20, padding: "52px 44px",
                border: "1px solid rgba(255,255,255,0.06)",
                position: "relative", overflow: "hidden",
              }}>
                <div style={{ position: "absolute", top: -40, right: -40, width: 220, height: 220, borderRadius: "50%", background: "radial-gradient(circle, rgba(46,108,200,0.18) 0%, transparent 70%)", pointerEvents: "none" }} />
                <div style={{ position: "relative", zIndex: 1 }}>
                  <div style={{
                    width: 56, height: 56, borderRadius: 14,
                    background: "linear-gradient(135deg,#1A50A0,#2E6CC8)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    marginBottom: 28, boxShadow: "0 8px 24px rgba(26,80,160,0.4)",
                  }}>
                    <svg width="26" height="26" viewBox="0 0 20 20" fill="none">
                      <circle cx="10" cy="10" r="4.5" stroke="white" strokeWidth="1.4"/>
                      <circle cx="10" cy="10" r="8.5" stroke="rgba(255,255,255,0.35)" strokeWidth="1"/>
                      <line x1="10" y1="1" x2="10" y2="19" stroke="rgba(255,255,255,0.45)" strokeWidth="1"/>
                      <line x1="1" y1="10" x2="19" y2="10" stroke="rgba(255,255,255,0.45)" strokeWidth="1"/>
                    </svg>
                  </div>
                  <div style={{ fontFamily: "'Cormorant',serif", fontWeight: 700, fontSize: 42, color: "#5B8FE0", letterSpacing: -1, lineHeight: 1 }}>48hrs</div>
                  <div style={{ fontFamily: "'Inter',sans-serif", fontSize: 13, color: "rgba(255,255,255,0.38)", marginTop: 8, fontWeight: 300, lineHeight: 1.6 }}>
                    From booking confirmation<br />to your tour going live.
                  </div>
                  <div style={{ width: 36, height: 1, background: "rgba(91,143,224,0.3)", margin: "24px 0" }} />
                  <div style={{ fontFamily: "'Inter',sans-serif", fontSize: 10, letterSpacing: 2.5, textTransform: "uppercase", color: "rgba(255,255,255,0.18)" }}>Saviour360 Guarantee</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: European connection ─────────────────────────── */}
      <section style={{ background: "#0A1628", padding: "96px 0" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 2.5rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }} className="about-grid">

            {/* Left: visual */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{
                width: "100%", maxWidth: 380,
                background: "rgba(255,255,255,0.03)",
                borderRadius: 20, padding: "48px 44px",
                border: "1px solid rgba(255,255,255,0.07)",
              }}>
                {/* Globe-style visual */}
                <div style={{ textAlign: "center", marginBottom: 28 }}>
                  <div style={{
                    width: 72, height: 72, borderRadius: "50%",
                    border: "1.5px solid rgba(91,143,224,0.3)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    margin: "0 auto", position: "relative",
                  }}>
                    <div style={{ position: "absolute", inset: 8, borderRadius: "50%", border: "1px solid rgba(91,143,224,0.15)" }} />
                    <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 10, fontWeight: 600, color: "#5B8FE0", letterSpacing: 1 }}>EU</span>
                  </div>
                </div>

                {/* Connection lines */}
                {[["Europe", "Global HQ"], ["India", "Saviour360"]].map(([region, role]) => (
                  <div key={region} style={{
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    padding: "10px 0",
                    borderBottom: "1px solid rgba(255,255,255,0.05)",
                  }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <div style={{ width: 6, height: 6, borderRadius: "50%", background: region === "India" ? "#22c55e" : "rgba(91,143,224,0.4)" }} />
                      <span style={{ fontFamily: "'Cormorant',serif", fontWeight: 700, fontSize: 18, color: "#FFFFFF", letterSpacing: -0.2 }}>{region}</span>
                    </div>
                    <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 10, color: "rgba(255,255,255,0.25)", letterSpacing: 1.5, textTransform: "uppercase" }}>{role}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right */}
            <div>
              <Eyebrow light>Our Roots</Eyebrow>
              <h2 style={{
                fontFamily: "'Cormorant',serif", fontWeight: 700,
                fontSize: "clamp(1.8rem,2.8vw,2.8rem)", color: "#FFFFFF",
                letterSpacing: -0.8, lineHeight: 1, marginBottom: 18,
              }}>
                Part of an international<br />
                <em style={{ color: "#5B8FE0", fontStyle: "italic" }}>immersive technology network</em>
              </h2>
              <p style={{
                fontFamily: "'Inter',sans-serif", fontSize: 14, fontWeight: 300,
                color: "rgba(255,255,255,0.45)", lineHeight: 1.9, marginBottom: 18,
              }}>
                Saviour360 is the India arm of an international network of immersive
                technology companies headquartered in Europe. Our parent group has been
                delivering 360° and XR solutions to property markets across Europe
                for over a decade.
              </p>
              <p style={{
                fontFamily: "'Inter',sans-serif", fontSize: 14, fontWeight: 300,
                color: "rgba(255,255,255,0.45)", lineHeight: 1.9, marginBottom: 36,
              }}>
                We bring that same international-grade technology and production process
                to India — combined with a deep understanding of the local real estate market,
                regulations, and buyer behaviour.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <CheckRow dark>European-standard 360° production pipeline</CheckRow>
                <CheckRow dark>Local team, global technology and quality benchmarks</CheckRow>
                <CheckRow dark>Serving India and expanding across South Asia</CheckRow>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 3: Savitar Realty partnership ──────────────────── */}
      <section style={{ background: "#FFFFFF", padding: "96px 0" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 2.5rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }} className="about-grid">

            {/* Left */}
            <div>
              <Eyebrow>Our Flagship Partner</Eyebrow>
              <h2 style={{
                fontFamily: "'Cormorant',serif", fontWeight: 700,
                fontSize: "clamp(1.8rem,2.8vw,2.8rem)", color: "#0D1520",
                letterSpacing: -0.8, lineHeight: 1, marginBottom: 18,
              }}>
                In India, we work with<br />
                <em style={{ color: "#1A50A0", fontStyle: "italic" }}>Savitar Realty</em>
              </h2>
              <p style={{
                fontFamily: "'Inter',sans-serif", fontSize: 14, fontWeight: 300,
                color: "rgba(13,21,32,0.55)", lineHeight: 1.9, marginBottom: 18,
              }}>
                Savitar Realty is our flagship real estate partner in India. Every 360° tour
                showcased on this website is a live Savitar Realty project — captured, edited,
                and delivered by Saviour360's in-house team.
              </p>
              <p style={{
                fontFamily: "'Inter',sans-serif", fontSize: 14, fontWeight: 300,
                color: "rgba(13,21,32,0.55)", lineHeight: 1.9, marginBottom: 36,
              }}>
                Savitar Realty develops residential and commercial properties across
                Ahmedabad, Gujarat. Their portfolio spans apartments, plotted developments,
                and premium residential communities — all now available for virtual walkthroughs.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 36 }}>
                <CheckRow>Exclusive 360° tour provider for all Savitar Realty projects</CheckRow>
                <CheckRow>10+ live properties available on this site</CheckRow>
                <CheckRow>Interior, aerial, and drone views captured in-house</CheckRow>
              </div>

              <a
                href="https://savitarrealty.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  padding: "13px 28px", borderRadius: 8, background: "#0A1628",
                  fontFamily: "'Inter',sans-serif", fontSize: 13, fontWeight: 600,
                  color: "#FFFFFF", textDecoration: "none",
                  transition: "background 0.25s, transform 0.2s",
                }}
                onMouseEnter={e => { e.currentTarget.style.background = "#1A50A0"; e.currentTarget.style.transform = "translateY(-1px)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "#0A1628"; e.currentTarget.style.transform = "none"; }}
              >
                Visit Savitar Realty
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 10L10 2M10 2H5M10 2V7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>

            {/* Right: project showcase card */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{
                width: "100%", maxWidth: 380,
                background: "linear-gradient(160deg, #080F1A 0%, #0A1628 100%)",
                borderRadius: 20, overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.07)",
              }}>
                {/* Header */}
                <div style={{ padding: "24px 28px 20px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                  <div style={{ fontFamily: "'Inter',sans-serif", fontSize: 9, fontWeight: 600, letterSpacing: 3, textTransform: "uppercase", color: "rgba(91,143,224,0.55)", marginBottom: 6 }}>Live Portfolio</div>
                  <div style={{ fontFamily: "'Cormorant',serif", fontWeight: 700, fontSize: 22, color: "#FFFFFF", letterSpacing: -0.3 }}>Savitar Realty</div>
                </div>

                {/* Project list */}
                {["The Nest", "The Linea", "Maple Vivanta", "Reva 80", "The Verity", "Urbanest"].map((name, i) => (
                  <a
                    key={name}
                    href={`/explore`}
                    style={{
                      display: "flex", alignItems: "center", justifyContent: "space-between",
                      padding: "13px 28px",
                      borderBottom: i < 5 ? "1px solid rgba(255,255,255,0.04)" : "none",
                      textDecoration: "none",
                      transition: "background 0.15s",
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = "rgba(26,80,160,0.08)"}
                    onMouseLeave={e => e.currentTarget.style.background = "transparent"}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#22c55e" }} />
                      <span style={{ fontFamily: "'Cormorant',serif", fontWeight: 600, fontSize: 16, color: "rgba(255,255,255,0.75)", letterSpacing: -0.2 }}>{name}</span>
                    </div>
                    <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 9, fontWeight: 600, letterSpacing: 1.5, textTransform: "uppercase", color: "rgba(91,143,224,0.5)" }}>360°</span>
                  </a>
                ))}

                {/* Footer */}
                <div style={{ padding: "16px 28px", background: "rgba(26,80,160,0.1)", borderTop: "1px solid rgba(91,143,224,0.1)" }}>
                  <a href="/explore" style={{ fontFamily: "'Inter',sans-serif", fontSize: 12, fontWeight: 500, color: "#5B8FE0", textDecoration: "none" }}>
                    Explore all tours →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values strip ───────────────────────────────────────────── */}
      <section style={{ background: "#F5F0E8", padding: "80px 0", borderTop: "1px solid rgba(13,21,32,0.06)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 2.5rem" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <Eyebrow>How We Work</Eyebrow>
            <h2 style={{ fontFamily: "'Cormorant',serif", fontWeight: 700, fontSize: "clamp(2rem,3.5vw,3.2rem)", color: "#0D1520", letterSpacing: -0.5 }}>
              Principles behind every tour
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }} className="values-grid">
            {[
              {
                icon: "⊙",
                title: "In-house, always",
                desc: "Every capture, edit, and delivery is handled by our own team. No freelancers, no third-party studios, no compromises on quality or timelines.",
              },
              {
                icon: "◈",
                title: "48-hour delivery",
                desc: "We commit to a 48-hour turnaround from booking to live tour. It's not a target — it's a guarantee built into our production process.",
              },
              {
                icon: "◉",
                title: "Technology-first",
                desc: "We use the same production pipeline as our European parent network. International-grade equipment, software, and quality benchmarks for every project in India.",
              },
            ].map(({ icon, title, desc }) => (
              <div key={title} style={{
                background: "#FFFFFF", borderRadius: 14, padding: "36px 32px",
                border: "1px solid rgba(13,21,32,0.06)",
                boxShadow: "0 2px 12px rgba(13,21,32,0.04)",
              }}>
                <div style={{ fontFamily: "'Cormorant',serif", fontSize: 32, color: "#1A50A0", marginBottom: 16, lineHeight: 1 }}>{icon}</div>
                <h3 style={{ fontFamily: "'Cormorant',serif", fontWeight: 700, fontSize: 22, color: "#0D1520", letterSpacing: -0.3, marginBottom: 12 }}>{title}</h3>
                <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 13, color: "rgba(13,21,32,0.5)", lineHeight: 1.8, fontWeight: 300 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────────── */}
      <section style={{ background: "#0A1628", padding: "88px 2.5rem", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 700, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(46,108,200,0.1) 0%, transparent 65%)", pointerEvents: "none" }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 600, margin: "0 auto" }}>
          <Eyebrow light>Start Here</Eyebrow>
          <h2 style={{
            fontFamily: "'Cormorant',serif", fontWeight: 700,
            fontSize: "clamp(1.8rem,2.8vw,2.8rem)", color: "#FFFFFF",
            letterSpacing: -0.8, lineHeight: 1, marginBottom: 18,
          }}>
            Ready to give your<br />
            <em style={{ color: "#5B8FE0", fontStyle: "italic" }}>property a 360° tour?</em>
          </h2>
          <p style={{
            fontFamily: "'Inter',sans-serif", fontSize: 14, fontWeight: 300,
            color: "rgba(255,255,255,0.38)", lineHeight: 1.9, marginBottom: 36,
          }}>
            Tell us about your property and we'll have a tour live within 48 hours.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              to="/contact"
              style={{
                padding: "14px 36px", borderRadius: 8,
                background: "linear-gradient(135deg,#1A50A0,#2E6CC8)",
                fontFamily: "'Inter',sans-serif", fontSize: 14, fontWeight: 600,
                color: "#FFFFFF", textDecoration: "none",
                boxShadow: "0 4px 20px rgba(26,80,160,0.4)",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 28px rgba(26,80,160,0.5)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(26,80,160,0.4)"; }}
            >
              Get in Touch →
            </Link>
            <Link
              to="/explore"
              style={{
                padding: "14px 32px", borderRadius: 8,
                border: "1px solid rgba(255,255,255,0.12)",
                fontFamily: "'Inter',sans-serif", fontSize: 14, fontWeight: 500,
                color: "rgba(255,255,255,0.65)", textDecoration: "none",
                transition: "border-color 0.2s, color 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(91,143,224,0.4)"; e.currentTarget.style.color = "#5B8FE0"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; e.currentTarget.style.color = "rgba(255,255,255,0.65)"; }}
            >
              Explore Tours
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @media(max-width:860px){
          .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .values-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
