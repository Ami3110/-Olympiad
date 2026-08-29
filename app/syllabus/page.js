import SyllabusInteractive from "../../components/SyllabusInteractive";

export const metadata = {
  title: "Syllabus by Age Group — India Genius Olympiad",
  description:
    "Explore the comprehensive India Genius Olympiad syllabus organized across 6 age divisions — from Foundation (PG–UKG) to Senior Secondary (Classes XI–XII). AI, Space Science, Cyber Safety, Financial Literacy, and STEM.",
};

export default function SyllabusIndexPage() {
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

          <div style={{ textAlign: "left", maxWidth: 1300, margin: 0 }}>
            <div className="section-eyebrow" style={{ justifyContent: "flex-start", marginBottom: 12 }}>
              National Academic Blueprint &middot; Session 2026–27
            </div>
            <h1 style={{ fontFamily: "var(--display)", fontSize: "clamp(30px, 4.2vw, 46px)", fontWeight: 850, color: "var(--ink)", letterSpacing: "-0.025em", marginBottom: 16 }}>
              Syllabus by Age Group
            </h1>
            <p style={{ fontSize: 16, color: "var(--ink-dim)", lineHeight: 1.7, maxWidth: "100%", margin: 0 }}>
              Discover our structured, future-ready curriculum spanning 6 age divisions and 25+ specialized Olympiads. 
              Designed in alignment with NEP 2020 to build conceptual mastery, computational thinking, and scientific inquiry.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Toolbar, Filterable Cards & Subject Drawer */}
      <SyllabusInteractive />
    </>
  );
}
