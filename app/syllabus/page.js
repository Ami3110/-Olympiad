import SyllabusInteractive from "../../components/SyllabusInteractive";

export const metadata = {
  title: "Syllabus by Age Group — India Genius Olympiad",
  description:
    "Explore the comprehensive India Genius Olympiad syllabus organized across 6 age divisions — from Foundation (PG–UKG) to Senior Secondary (Classes XI–XII). AI, Space Science, Cyber Safety, Financial Literacy, and STEM.",
};

export default function SyllabusIndexPage() {
  return (
    <>
      {/* Immersive Dark Hero Banner */}
      <section style={{ padding: 0, borderTop: "none" }}>
        <div className="syl-hero-wrap">
          <div className="wrap syl-hero-content">
            <a className="page-back-btn" href="/" aria-label="Back to Home">
              <svg className="back-arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
              <span>Back to Home</span>
            </a>

            <div className="syl-hero-eyebrow">
              <span className="syl-hero-eyebrow-line" />
              National Academic Blueprint · Session 2026–27
            </div>

            <h1 className="syl-hero-title">
              Syllabus by Age Group
            </h1>

            <p className="syl-hero-desc">
              Discover our structured, future-ready curriculum spanning 6 age divisions and 25+ specialized Olympiads. 
              Designed in alignment with NEP 2020 to build conceptual mastery, computational thinking, and scientific inquiry.
            </p>

            {/* Quick Hero Highlights Pills */}
            <div className="syl-hero-pills">
              <div className="syl-hero-pill">
                <span className="syl-hero-pill-icon">🎓</span>
                <span><strong>6</strong> Divisions (PG–XII)</span>
              </div>
              <div className="syl-hero-pill">
                <span className="syl-hero-pill-icon">🚀</span>
                <span><strong>25+</strong> Olympiad Disciplines</span>
              </div>
              <div className="syl-hero-pill">
                <span className="syl-hero-pill-icon">📜</span>
                <span><strong>100%</strong> NEP 2020 Aligned</span>
              </div>
              <div className="syl-hero-pill">
                <span className="syl-hero-pill-icon">🏆</span>
                <span><strong>₹80</strong> Nominal Entry Fee</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Toolbar, Filterable Cards & Subject Drawer */}
      <SyllabusInteractive />
    </>
  );
}
