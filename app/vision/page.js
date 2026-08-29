export const metadata = {
  title: "Our Vision & Core Beliefs — India Genius Olympiad | India Genius Foundation",
  description:
    "Discover the vision and core beliefs of India Genius Foundation: empowering learners across India through talent discovery, innovative assessments, and future-ready guidance.",
};

const beliefs = [
  { num: "01", tag: "Uniqueness", desc: "Every child is unique and possesses special strengths and abilities." },
  { num: "02", tag: "Nurture", desc: "Talent can be discovered, nurtured and developed through the right opportunities." },
  { num: "03", tag: "Real-World Learning", desc: "Learning should be engaging, meaningful, challenging and connected to the real world." },
  { num: "04", tag: "Beyond Marks", desc: "Assessment should help identify potential, not merely measure marks." },
  { num: "05", tag: "Healthy Competition", desc: "Competition, when healthy and purposeful, inspires students to challenge themselves and strive for excellence." },
  { num: "06", tag: "Self-Awareness", desc: "Career guidance and self-awareness are essential for helping young people make informed choices about their future." },
  { num: "07", tag: "Responsible Tech", desc: "Technology and Artificial Intelligence should be used responsibly to strengthen learning and prepare students for the future." },
  { num: "08", tag: "Values & Excellence", desc: "Education must promote both excellence and values, creating responsible citizens along with successful individuals." },
  { num: "09", tag: "Opportunity", desc: "Every learner deserves the opportunity to dream big, discover their potential and achieve their best." },
  { num: "10", tag: "Nation's Future", desc: "The progress of a nation depends on the quality, knowledge, skills, character and vision of its young generation." },
];

export default function VisionPage() {
  return (
    <>
      {/* Vision Statement Section */}
      <section style={{ paddingTop: 36, paddingBottom: 64 }}>
        <div className="wrap">
          <div style={{ marginBottom: 24 }}>
            <a className="page-back-btn light-variant" href="/" aria-label="Back to Home" style={{ margin: 0 }}>
              <svg className="back-arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
              <span>Back to Home</span>
            </a>
          </div>

          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 28 }}>
              <div className="section-eyebrow" style={{ justifyContent: "center", marginBottom: 10 }}>Why India Genius Foundation</div>
              <h1 style={{ fontFamily: "var(--display)", fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 800, color: "var(--ink)", letterSpacing: "-0.02em", marginBottom: 12 }}>
                Our Vision
              </h1>
              <p style={{ fontSize: 16, color: "var(--ink-dim)", lineHeight: 1.65, maxWidth: 720, margin: "0 auto" }}>
                What we&rsquo;re building toward, as India Genius Foundation — a national platform for discovering, nurturing and empowering every learner&rsquo;s potential.
              </p>
            </div>

            <div className="vision-card">
              <div className="vision-badge">
                <span className="vision-badge-dot" />
                Strategic Direction
              </div>

              <p className="vision-statement">
                To become a leading national platform for discovering, nurturing and empowering the
                intellectual, academic, creative and professional potential of learners across India.
                India Genius Foundation envisions an education ecosystem where every learner is
                provided meaningful opportunities to discover their strengths, explore their
                interests, develop future-ready skills and pursue excellence with confidence. Through
                innovative assessments, competitions, guidance programmes, educational events and
                initiatives of national importance, we aspire to contribute towards building
                knowledgeable, skilled, responsible and capable citizens for a stronger India.
              </p>

              <div className="vision-pillar-tags">
                <div className="vision-tag-item">
                  <span className="vision-tag-icon">🏛️</span>
                  <span>A Leading National Learner-Discovery Platform</span>
                </div>
                <div className="vision-tag-item">
                  <span className="vision-tag-icon">🇮🇳</span>
                  <span>Nationwide Reach spanning Pre-Primary (PG) to Class XII</span>
                </div>
                <div className="vision-tag-item">
                  <span className="vision-tag-icon">🚀</span>
                  <span>Innovative Assessments, Guidance &amp; Events of National Importance</span>
                </div>
              </div>

              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 8 }}>
                <a className="btn btn-primary" href="/mission/" style={{ flex: 1, justifyContent: "center" }}>
                  Read Our Mission →
                </a>
                <a className="btn btn-ghost" href="/syllabus/" style={{ flex: 1, justifyContent: "center" }}>
                  Explore Learning Roadmap →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Belief Section */}
      <section id="belief" style={{ background: "var(--bg-elev)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)", paddingTop: 64, paddingBottom: 72 }}>
        <div className="wrap">
          <div style={{ maxWidth: 820, margin: "0 auto", textAlign: "center", marginBottom: 40 }}>
            <div className="section-eyebrow" style={{ justifyContent: "center" }}>
              What Drives Us
            </div>
            <h2 style={{ fontFamily: "var(--display)", fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 800, color: "var(--ink)", letterSpacing: "-0.02em", marginBottom: 16 }}>
              Our Belief.
            </h2>
            <p style={{ fontSize: 16.5, color: "var(--ink-dim)", lineHeight: 1.7 }}>
              At India Genius Foundation, we believe that every learner has the potential to excel when given the right opportunity, encouragement and guidance. True learning should develop knowledge, curiosity, creativity, confidence, character, critical thinking and the ability to apply learning in real-life situations. We believe that:
            </p>
          </div>

          <div className="objectives-list" style={{ maxWidth: 820, margin: "0 auto" }}>
            {beliefs.map(({ num, tag, desc }) => (
              <div key={num} className="objective-card">
                <div className="objective-step-badge">{num}</div>
                <div className="objective-body">
                  <div className="objective-title">
                    <span className="objective-title-tag">{tag}:</span>
                  </div>
                  <div className="objective-desc">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
