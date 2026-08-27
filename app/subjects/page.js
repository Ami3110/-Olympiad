import Link from "next/link";
import ageGroups from "../../data/ageGroups.json";

export const metadata = {
  title: "Subjects by Division — India Genius Olympiad",
  description:
    "The complete India Genius Olympiad subject list for every age division — Foundation, Junior, Primary, Middle, Secondary, and Senior Secondary.",
};

// Reuses the color-coded subject-card pattern from the Olympiad Info page
// (oi-subject-card / oi-subject-header / oi-subject-list) — no new CSS.
const divisionMeta = {
  foundation: { color: "#8B1A1A", icon: "🌱" },
  junior: { color: "#93650A", icon: "🧩" },
  primary: { color: "#E65A00", icon: "🎨" },
  middle: { color: "#0A6EBD", icon: "🤖" },
  secondary: { color: "#22863A", icon: "💡" },
  "senior-secondary": { color: "#8B1A1A", icon: "🎯" },
};

export default function SubjectsPage() {
  return (
    <>
      {/* Immersive Dark Hero Banner — same pattern as Syllabus/About */}
      <section style={{ padding: 0, borderTop: "none" }}>
        <div className="syl-hero-wrap">
          <div className="wrap syl-hero-content">
            <div className="syl-hero-top" style={{ marginBottom: "28px" }}>
              <a className="page-back-btn" href="/" aria-label="Back to Home" style={{ margin: 0 }}>
                <svg className="back-arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="19" y1="12" x2="5" y2="12"></line>
                  <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
                <span>Back to Home</span>
              </a>
            </div>

            <div className="syl-hero-eyebrow">
              <span className="syl-hero-eyebrow-line" />
              Complete Subject Directory · Session 2026–27
            </div>

            <h1 className="syl-hero-title">Subjects by Division</h1>

            <p className="syl-hero-desc">
              The full India Genius Olympiad subject list for every age division, from Foundation
              (PG–UKG) to Senior Secondary (Classes XI–XII). Select a subject&rsquo;s division to
              view its syllabus or practice a sample paper.
            </p>

            <div className="syl-hero-pills">
              <div className="syl-hero-pill">
                <span className="syl-hero-pill-icon">🎓</span>
                <span><strong>6</strong> Divisions (PG–XII)</span>
              </div>
              <div className="syl-hero-pill">
                <span className="syl-hero-pill-icon">🗂️</span>
                <span><strong>38</strong> Subject Entries</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* One card per division — full subject list, or the shared
          "not finalized yet" placeholder for Foundation & Junior. */}
      <section className="oi-section">
        <div className="wrap">
          <div className="oi-subjects-grid">
            {ageGroups.map((group) => {
              const meta = divisionMeta[group.slug] || { color: "#0A6EBD", icon: "📘" };
              return (
                <div key={group.slug} id={group.slug} className="oi-subject-card">
                  <div className="oi-subject-header" style={{ background: meta.color }}>
                    <span className="oi-subject-icon">{meta.icon}</span>
                    <div>
                      <div className="oi-subject-classes">{group.classes}</div>
                      <div className="oi-subject-label">{group.name}</div>
                    </div>
                  </div>

                  {group.subjects.length ? (
                    <ol className="oi-subject-list">
                      {group.subjects.map((s) => (
                        <li key={s.slug}>{s.name}</li>
                      ))}
                    </ol>
                  ) : (
                    <p className="sp-group-empty" style={{ padding: "20px 24px" }}>
                      Subject list for this age group hasn&rsquo;t been finalized yet.
                    </p>
                  )}

                  <div style={{ display: "flex", gap: 10, padding: "0 24px 24px", flexWrap: "wrap" }}>
                    <Link className="btn btn-ghost" href={`/syllabus/${group.slug}/`} style={{ fontSize: 13 }}>
                      View Syllabus →
                    </Link>
                    <Link className="btn btn-ghost" href="/sample-papers/" style={{ fontSize: 13 }}>
                      Sample Papers →
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
