import Link from "next/link";

export const metadata = {
  title: "What is India Genius Olympiad (IGO)? — India Genius Foundation",
  description:
    "Learn all about India Genius Olympiad: India's premier multi-subject national competition for school students from Pre-Primary (PG) to Class XII organized by India Genius Foundation.",
};

const pillars = [
  {
    icon: "🌟",
    title: "Competency-Driven Assessment",
    desc: "Moves beyond rote memorization to assess conceptual understanding, critical thinking, and practical application.",
  },
  {
    icon: "🚀",
    title: "Future-Ready Disciplines",
    desc: "Covers emerging 21st-century fields including AI, Cybersecurity, Space Science, Financial Literacy, and Entrepreneurship.",
  },
  {
    icon: "🏛️",
    title: "4-Level National Pathway",
    desc: "A progressive competition pathway from School Selection and District Rounds to State and National Championships.",
  },
  {
    icon: "📜",
    title: "NEP 2020 Aligned",
    desc: "100% compliant with the National Education Policy guidelines for holistic, experiential, and skill-based learning.",
  },
  {
    icon: "🎖️",
    title: "National Certification & Awards",
    desc: "Diagnostic scorecards, qualifier certificates, district medals, state trophies, and national honours for deserving learners.",
  },
  {
    icon: "🤝",
    title: "Affordable & Inclusive Access",
    desc: "Standardized nominal fee of just ₹80 per subject ensures every student across India has equal access to participate.",
  },
];

const highlights = [
  { label: "Divisions", value: "6", sub: "PG to Class XII" },
  { label: "Disciplines", value: "25+", sub: "Modern & Core Subjects" },
  { label: "Stages", value: "4", sub: "School to National" },
  { label: "Entry Fee", value: "₹80", sub: "Per Subject / Student" },
];

export default function WhatIsIGOPage() {
  return (
    <>
      {/* Minimal Header */}
      <section style={{ paddingTop: 36, paddingBottom: 24 }}>
        <div className="wrap">
          <div style={{ marginBottom: 20 }}>
            <a className="page-back-btn light-variant" href="/" aria-label="Back to Home" style={{ margin: 0 }}>
              <svg className="back-arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
              <span>Back to Home</span>
            </a>
          </div>

          <div style={{ textAlign: "center", maxWidth: 820, margin: "0 auto" }}>
            <div className="section-eyebrow" style={{ justifyContent: "center", marginBottom: 10 }}>
              National Academic Initiative &middot; Session 2026–27
            </div>
            <h1 style={{ fontFamily: "var(--display)", fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 800, color: "var(--ink)", letterSpacing: "-0.02em", marginBottom: 12 }}>
              What is India Genius Olympiad?
            </h1>
            <p style={{ fontSize: 16, color: "var(--ink-dim)", lineHeight: 1.65, maxWidth: 720, margin: "0 auto" }}>
              India Genius Olympiad (IGO) is a premier national-level assessment and talent-recognition programme 
              designed to discover, nurture, and reward academic brilliance and 21st-century competencies in learners across India.
            </p>
          </div>
        </div>
      </section>

      {/* Main Narrative & Key Stats */}
      <section style={{ paddingTop: 64, paddingBottom: 64 }}>
        <div className="wrap">
          <div style={{ maxWidth: 840, margin: "0 auto", textAlign: "center", marginBottom: 44 }}>
            <div className="section-eyebrow" style={{ justifyContent: "center" }}>Empowering Future Minds</div>
            <h2 style={{ fontFamily: "var(--display)", fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 800, color: "var(--ink)", letterSpacing: "-0.02em", marginBottom: 18 }}>
              Transforming How Indian Students Learn &amp; Compete
            </h2>
            <p style={{ fontSize: 16.5, color: "var(--ink-dim)", lineHeight: 1.75 }}>
              The India Genius Olympiad is organised by the <strong>India Genius Foundation</strong> to provide a transparent, 
              benchmarked, and enriching platform for students from Playgroup to Class XII. Spanning six distinct age categories, 
              the Olympiad bridges traditional academic excellence with future-oriented domains like Artificial Intelligence, 
              Cybersecurity, Financial Literacy, Space Science, Entrepreneurship, and Critical Problem-Solving.
            </p>
          </div>

          {/* Highlights Row */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20, maxWidth: 960, margin: "0 auto 56px" }}>
            {highlights.map((h, i) => (
              <div
                key={i}
                style={{
                  background: "#FFFFFF",
                  border: "1px solid var(--line)",
                  borderRadius: 18,
                  padding: "24px 20px",
                  textAlign: "center",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                }}
              >
                <div style={{ fontFamily: "var(--display)", fontSize: 36, fontWeight: 800, color: "var(--saffron)", marginBottom: 4 }}>
                  {h.value}
                </div>
                <div style={{ fontSize: 15, fontWeight: 700, color: "var(--ink)", marginBottom: 4 }}>
                  {h.label}
                </div>
                <div style={{ fontSize: 13, color: "var(--muted)" }}>
                  {h.sub}
                </div>
              </div>
            ))}
          </div>

          {/* Pillars Grid */}
          <div style={{ textAlign: "center", maxWidth: 780, margin: "0 auto 36px" }}>
            <div className="section-eyebrow" style={{ justifyContent: "center" }}>Core Features</div>
            <h3 style={{ fontFamily: "var(--display)", fontSize: 28, fontWeight: 800, color: "var(--ink)" }}>
              Why Participate in India Genius Olympiad?
            </h3>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24, maxWidth: 1040, margin: "0 auto" }}>
            {pillars.map((p, idx) => (
              <div
                key={idx}
                style={{
                  background: "var(--bg-elev)",
                  border: "1px solid var(--line)",
                  borderRadius: 18,
                  padding: "26px 24px",
                }}
              >
                <div style={{ fontSize: 32, marginBottom: 12 }}>{p.icon}</div>
                <h4 style={{ fontFamily: "var(--display)", fontSize: 18, fontWeight: 800, color: "var(--ink)", marginBottom: 8 }}>
                  {p.title}
                </h4>
                <p style={{ fontSize: 14, color: "var(--ink-dim)", lineHeight: 1.6, margin: 0 }}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-Navigation Cards */}
      <section style={{ background: "var(--bg-elev)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)", paddingTop: 60, paddingBottom: 64 }}>
        <div className="wrap">
          <div style={{ textAlign: "center", maxWidth: 720, margin: "0 auto 36px" }}>
            <div className="section-eyebrow" style={{ justifyContent: "center" }}>Explore Further</div>
            <h2 style={{ fontFamily: "var(--display)", fontSize: 28, fontWeight: 800, color: "var(--ink)" }}>
              Continue Exploring India Genius Olympiad
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20, maxWidth: 960, margin: "0 auto" }}>
            <Link
              href="/age-group/"
              style={{
                background: "#FFFFFF",
                border: "1px solid var(--line)",
                borderRadius: 16,
                padding: "24px 20px",
                textDecoration: "none",
                color: "inherit",
                display: "block",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
            >
              <div style={{ fontSize: 28, marginBottom: 8 }}>🎒</div>
              <h3 style={{ fontSize: 17, fontWeight: 800, color: "var(--ink)", marginBottom: 6 }}>Age Groups</h3>
              <p style={{ fontSize: 13.5, color: "var(--ink-dim)", lineHeight: 1.5, margin: 0 }}>
                Explore class divisions from Playgroup to Class XII.
              </p>
            </Link>

            <Link
              href="/subjects/"
              style={{
                background: "#FFFFFF",
                border: "1px solid var(--line)",
                borderRadius: 16,
                padding: "24px 20px",
                textDecoration: "none",
                color: "inherit",
                display: "block",
              }}
            >
              <div style={{ fontSize: 28, marginBottom: 8 }}>📚</div>
              <h3 style={{ fontSize: 17, fontWeight: 800, color: "var(--ink)", marginBottom: 6 }}>Subjects &amp; Divisions</h3>
              <p style={{ fontSize: 13.5, color: "var(--ink-dim)", lineHeight: 1.5, margin: 0 }}>
                Browse all 25+ emerging and foundational Olympiad disciplines.
              </p>
            </Link>

            <Link
              href="/competition-structure/"
              style={{
                background: "#FFFFFF",
                border: "1px solid var(--line)",
                borderRadius: 16,
                padding: "24px 20px",
                textDecoration: "none",
                color: "inherit",
                display: "block",
              }}
            >
              <div style={{ fontSize: 28, marginBottom: 8 }}>🏆</div>
              <h3 style={{ fontSize: 17, fontWeight: 800, color: "var(--ink)", marginBottom: 6 }}>Competition Structure</h3>
              <p style={{ fontSize: 13.5, color: "var(--ink-dim)", lineHeight: 1.5, margin: 0 }}>
                Understand the 4 rounds from School Selection to National Finale.
              </p>
            </Link>

            <Link
              href="/award-structure/"
              style={{
                background: "#FFFFFF",
                border: "1px solid var(--line)",
                borderRadius: 16,
                padding: "24px 20px",
                textDecoration: "none",
                color: "inherit",
                display: "block",
              }}
            >
              <div style={{ fontSize: 28, marginBottom: 8 }}>🏅</div>
              <h3 style={{ fontSize: 17, fontWeight: 800, color: "var(--ink)", marginBottom: 6 }}>Award Structure</h3>
              <p style={{ fontSize: 13.5, color: "var(--ink-dim)", lineHeight: 1.5, margin: 0 }}>
                Discover medals, certificates, trophies, and scholarships.
              </p>
            </Link>
          </div>

          {/* Action CTAs */}
          <div style={{ textAlign: "center", marginTop: 44, display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap" }}>
            <a
              href="https://forms.gle/KvAiXYv1CRr5E1Y17"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Register Student ↗
            </a>
            <a
              href="https://forms.gle/ZLuKVuR8XXWMrToW8"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              Register School ↗
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
