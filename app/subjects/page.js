import Link from "next/link";
import ageGroups from "../../data/ageGroups.json";

export const metadata = {
  title: "Subjects by Division — India Genius Olympiad",
  description:
    "The complete India Genius Olympiad subject list for every age division — Foundation, Junior, Primary, Middle, Secondary, and Senior Secondary.",
};

// Reuses the subject-card pattern from the Olympiad Info page (oi-subject-card
// / oi-subject-header / oi-subject-list) — no new CSS. One accent color across
// every card (kept minimal, per redesign feedback — no per-division rainbow).
const CARD_ACCENT = "var(--saffron)";

const divisionIcons = {
  foundation: "🌱",
  junior: "🧩",
  primary: "🎨",
  middle: "🤖",
  secondary: "💡",
  "senior-secondary": "🎯",
};

const totalSubjects = ageGroups.reduce((sum, g) => sum + g.subjects.length, 0);

export default function SubjectsPage() {
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
              Complete Subject Directory &middot; Session 2026–27
            </div>
            <h1 style={{ fontFamily: "var(--display)", fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 800, color: "var(--ink)", letterSpacing: "-0.02em", marginBottom: 12 }}>
              Subjects by Division
            </h1>
            <p style={{ fontSize: 16, color: "var(--ink-dim)", lineHeight: 1.65, maxWidth: 720, margin: "0 auto" }}>
              The full India Genius Olympiad subject list for every age division, from Foundation
              (PG–UKG) to Senior Secondary (Classes XI–XII). Select a subject&rsquo;s division to
              view its syllabus or practice a sample paper.
            </p>
          </div>
        </div>
      </section>

      {/* One card per division — full subject list, or the shared
          "not finalized yet" placeholder for Foundation & Junior. */}
      <section className="oi-section">
        <div className="wrap">
          <div className="oi-subjects-grid">
            {ageGroups.map((group) => {
              const icon = divisionIcons[group.slug] || "📘";
              return (
                <div key={group.slug} id={group.slug} className="oi-subject-card">
                  <div className="oi-subject-header" style={{ background: CARD_ACCENT }}>
                    <span className="oi-subject-icon">{icon}</span>
                    <div>
                      <div className="oi-subject-classes">{group.classes}</div>
                      <div className="oi-subject-label">
                        {group.name}{group.level ? ` · ${group.level}` : ""}
                      </div>
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
