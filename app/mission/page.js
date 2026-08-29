export const metadata = {
  title: "Our Mission & Commitments — India Genius Olympiad | India Genius Foundation",
  description:
    "India Genius Foundation's mission: creating meaningful and accessible educational opportunities that inspire learners to learn, think, explore, discover and excel.",
};

const commitments = [
  { num: "01", tag: "Competitions", desc: "Conducting Olympiads, Live Quizzes, Academic Competitions and Talent Assessments across diverse subjects and emerging fields." },
  { num: "02", tag: "Assessments", desc: "Organising Psychometric Tests and Assessments to help learners understand their interests, strengths, abilities and potential." },
  { num: "03", tag: "Guidance", desc: "Providing Career Guidance, Counselling and Career Awareness Seminars to support informed educational and career choices." },
  { num: "04", tag: "Events", desc: "Organising Education Fairs, Workshops, Seminars, Conferences and Interactive Learning Programmes for students, educators, parents and institutions." },
  { num: "05", tag: "Critical Thinking", desc: "Encouraging curiosity, creativity, critical thinking, analytical ability, problem-solving and innovation among learners." },
  { num: "06", tag: "National Awareness", desc: "Promoting awareness and learning in areas of national importance, contemporary developments and future-ready skills." },
  { num: "07", tag: "Recognition", desc: "Recognising and celebrating academic excellence, talent, innovation, leadership and outstanding achievement." },
  { num: "08", tag: "Collaboration", desc: "Creating opportunities for schools, educators, experts, institutions and learners to collaborate for the advancement of education." },
  { num: "09", tag: "Character", desc: "Supporting the development of confident, ethical, responsible and future-ready citizens who can contribute positively to society and the nation." },
];

export default function MissionPage() {
  return (
    <>
      {/* Mission Commitments Section */}
      <section style={{ paddingTop: 36, paddingBottom: 72 }}>
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

          <div style={{ maxWidth: 820, margin: "0 auto", textAlign: "center", marginBottom: 40 }}>
            <div className="section-eyebrow" style={{ justifyContent: "center", marginBottom: 10 }}>
              Our Foundation &middot; Ethos
            </div>
            <h1 style={{ fontFamily: "var(--display)", fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 800, color: "var(--ink)", letterSpacing: "-0.02em", marginBottom: 16 }}>
              Our Mission &amp; Commitments
            </h1>
            <p style={{ fontSize: 16.5, color: "var(--ink-dim)", lineHeight: 1.7 }}>
              Our mission is to create meaningful and accessible educational opportunities that
              inspire learners to learn, think, explore, discover and excel across India. We are dedicated to:
            </p>
          </div>

          <div className="objectives-list" style={{ maxWidth: 820, margin: "0 auto" }}>
            {commitments.map(({ num, tag, desc }) => (
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

          <div style={{ textAlign: "center", marginTop: 40, display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap" }}>
            <a className="btn btn-ghost" href="/vision/">
              ← Read Our Vision &amp; Beliefs
            </a>
            <a className="btn btn-primary" href="/about/">
              Learn About The Foundation →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
