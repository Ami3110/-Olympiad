import Link from "next/link";
import { WhyCollabScene } from "../../components/Visuals";

export const metadata = {
  title: "What is India Genius Olympiad (IGO)? — India Genius Foundation",
  description:
    "Learn all about India Genius Olympiad: India's premier multi-subject national competition for school students from Pre-Primary (PG) to Class XII organized by India Genius Foundation.",
};

const principles = [
  {
    num: "01",
    title: "Conceptual Rigour",
    desc: "Move beyond rote learning. Strengthen fundamental reasoning, logic, and analytical problem-solving skills.",
  },
  {
    num: "02",
    title: "Future-Ready Disciplines",
    desc: "Assessments in Artificial Intelligence, Cyber Security, Financial Literacy, Environmental Sciences, and Modern Mathematics.",
  },
  {
    num: "03",
    title: "Applied Problem Solving",
    desc: "Real-world scenarios designed by leading educators and academicians to test practical problem-solving.",
  },
  {
    num: "04",
    title: "National Benchmarking",
    desc: "Students receive detailed diagnostic reports, state and national rankings, and recognized merit credentials.",
  },
];

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

export default function WhatIsIGOPage() {
  return (
    <>
      {/* Header & Main Narrative */}
      <section style={{ paddingTop: 36, paddingBottom: 48 }}>
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

          <div style={{ maxWidth: 1300, margin: 0, textAlign: "left" }}>
            <div className="section-eyebrow" style={{ justifyContent: "flex-start", marginBottom: 12 }}>
              National Academic Initiative &middot; Session 2026
            </div>
            <h1 style={{ fontFamily: "var(--display)", fontSize: "clamp(30px, 4.2vw, 46px)", fontWeight: 850, color: "var(--ink)", letterSpacing: "-0.025em", marginBottom: 16 }}>
              What is India Genius Olympiad?
            </h1>
            <p style={{ fontSize: 16, color: "var(--ink-dim)", lineHeight: 1.7, maxWidth: "100%", margin: 0 }}>
              The India Genius Olympiad is organised by the <strong>India Genius Foundation</strong> to provide a transparent, 
              benchmarked, and enriching platform for students from Playgroup to Class XII. Spanning six distinct age categories, 
              the Olympiad bridges traditional academic excellence with future-oriented domains like Artificial Intelligence, 
              Cybersecurity, Financial Literacy, Space Science, Entrepreneurship, and Critical Problem-Solving.
            </p>
          </div>
        </div>
      </section>

      {/* More Than an Olympiad — Philosophy & Principles */}
      <section id="philosophy" style={{ background: "#FFFFFF", padding: "64px 0 72px", borderTop: "1px solid var(--line)" }}>
        <div className="wrap">
          <div className="feature-split">
            {/* Visual column */}
            <div className="feature-image-wrap">
              <WhyCollabScene />
              <div className="feature-float-card">
                <div className="ffc-num">6</div>
                <div className="ffc-label">Age Divisions</div>
              </div>
            </div>

            {/* Content column */}
            <div>
              <div className="section-head" style={{ marginBottom: 28 }}>
                <div className="section-eyebrow" style={{ justifyContent: "flex-start" }}>
                  Why India Genius Olympiad?
                </div>
                <h2 className="section-title" style={{ fontSize: "clamp(26px, 3.2vw, 38px)" }}>
                  More Than an Olympiad.
                </h2>
                <div className="section-desc" style={{ maxWidth: 640 }}>
                  A competition structured to evaluate how students think, analyze, deduce, and innovate — benchmarking real understanding beyond textbook memorisation.
                </div>
              </div>

              <div className="principles-list">
                {principles.map(({ num, title, desc }) => (
                  <div key={num} className="principle-item">
                    <div className="principle-num">{num}</div>
                    <div>
                      <div className="principle-title">{title}</div>
                      <div className="principle-desc">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Grid — Core Features */}
      <section style={{ paddingTop: 64, paddingBottom: 72, background: "var(--bg-elev)", borderTop: "1px solid var(--line)" }}>
        <div className="wrap">
          <div style={{ textAlign: "center", maxWidth: 780, margin: "0 auto 40px" }}>
            <div className="section-eyebrow" style={{ justifyContent: "center" }}>Core Features</div>
            <h3 style={{ fontFamily: "var(--display)", fontSize: "clamp(24px, 3vw, 32px)", fontWeight: 850, color: "var(--ink)" }}>
              Why Participate in India Genius Olympiad?
            </h3>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24, maxWidth: 1140, margin: "0 auto" }}>
            {pillars.map((p, idx) => (
              <div
                key={idx}
                style={{
                  background: "#FFFFFF",
                  border: "1px solid var(--line)",
                  borderRadius: 18,
                  padding: "28px 24px",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.03)",
                }}
              >
                <div style={{ fontSize: 32, marginBottom: 12 }}>{p.icon}</div>
                <h4 style={{ fontFamily: "var(--display)", fontSize: 18, fontWeight: 800, color: "var(--ink)", marginBottom: 8 }}>
                  {p.title}
                </h4>
                <p style={{ fontSize: 14.5, color: "var(--ink-dim)", lineHeight: 1.65, margin: 0 }}>
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

          <div className="explore-four-grid">
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
              href="/registration/?tab=student"
              className="btn btn-primary"
            >
              Register Student ➔
            </a>
            <a
              href="/registration/?tab=school"
              className="btn btn-secondary"
            >
              Register School ➔
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
