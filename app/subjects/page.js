import Link from "next/link";
import ageGroups from "../../data/ageGroups.json";
import DivisionSubjectCard from "../../components/DivisionSubjectCard";

export const metadata = {
  title: "Subjects by Division — India Genius Olympiad",
  description:
    "The complete India Genius Olympiad subject list for every age division — Foundation, Junior, Primary, Middle, Secondary, and Senior Secondary.",
};

const CARD_ACCENT = "var(--saffron)";

const divisionIcons = {
  foundation: "🌱",
  junior: "🧩",
  primary: "🎨",
  middle: "🤖",
  secondary: "💡",
  "senior-secondary": "🎯",
};

export default function SubjectsPage() {
  return (
    <>
      {/* Minimal Left-Aligned Header */}
      <section style={{ paddingTop: 36, paddingBottom: 28 }}>
        <div className="wrap">
          <div style={{ marginBottom: 20 }}>
            <Link className="page-back-btn light-variant" href="/" aria-label="Back to Home" style={{ margin: 0 }}>
              <svg className="back-arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
              <span>Back to Home</span>
            </Link>
          </div>

          <div style={{ textAlign: "left", maxWidth: 1300, margin: 0 }}>
            <div className="section-eyebrow" style={{ justifyContent: "flex-start", marginBottom: 12 }}>
              Complete Subject Directory &middot; Session 2026
            </div>
            <h1 style={{ fontFamily: "var(--display)", fontSize: "clamp(30px, 4.2vw, 46px)", fontWeight: 850, color: "var(--ink)", letterSpacing: "-0.025em", marginBottom: 16 }}>
              Subjects by Division
            </h1>
            <p style={{ fontSize: 16, color: "var(--ink-dim)", lineHeight: 1.7, maxWidth: "100%", margin: 0 }}>
              The full India Genius Olympiad subject list for every age division, from Foundation (PG–UKG) to Senior Secondary (Classes XI–XII). Select a subject&rsquo;s division to view its syllabus or practice a sample paper.
            </p>
          </div>
        </div>
      </section>

      {/* 3-Column Division Cards Grid */}
      <section className="oi-section" style={{ paddingTop: 10, paddingBottom: 80 }}>
        <div className="wrap">
          <div className="subjects-three-grid">
            {ageGroups.map((group) => {
              const icon = divisionIcons[group.slug] || "📘";
              return (
                <DivisionSubjectCard
                  key={group.slug}
                  group={group}
                  icon={icon}
                  accent={CARD_ACCENT}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
