import ageGroups from "../../data/ageGroups.json";
import { DivisionIllustration } from "../../components/Visuals";

export const metadata = {
  title: "Syllabus by Age Group — India Genius Olympiad",
  description:
    "Explore the India Genius Olympiad syllabus organized by age group — from Foundation (PG–UKG) to Senior Secondary (Classes XI–XII).",
};

const groupMeta = {
  foundation: {
    type: "foundation",
    color: "var(--gold)",
    bg: "rgba(147,101,10,0.08)",
    border: "rgba(147,101,10,0.22)",
    desc: "Playful exploration and early cognitive development.",
  },
  junior: {
    type: "junior",
    color: "var(--teal)",
    bg: "rgba(13,122,103,0.08)",
    border: "rgba(13,122,103,0.22)",
    desc: "Building curiosity through simple science and mathematics.",
  },
  primary: {
    type: "primary",
    color: "var(--saffron)",
    bg: "rgba(193,101,12,0.08)",
    border: "rgba(193,101,12,0.22)",
    desc: "Space, mathematics, and digital literacy in accessible terms.",
  },
  middle: {
    type: "middle",
    color: "var(--flame)",
    bg: "rgba(201,70,39,0.08)",
    border: "rgba(201,70,39,0.22)",
    desc: "Robotics, AI foundations, cybersecurity basics, and more.",
  },
  secondary: {
    type: "secondary",
    color: "var(--teal)",
    bg: "rgba(13,122,103,0.08)",
    border: "rgba(13,122,103,0.22)",
    desc: "Applied science, AI, cybersecurity, and space communication.",
  },
  "senior-secondary": {
    type: "senior",
    color: "var(--gold)",
    bg: "rgba(147,101,10,0.08)",
    border: "rgba(147,101,10,0.22)",
    desc: "Astrophysics, AI in society, space economy, and leadership.",
  },
};

export default function SyllabusIndexPage() {
  return (
    <>
      {/* Hero banner */}
      <section style={{ padding: 0, borderTop: "none" }}>
        <div
          style={{
            position: "relative",
            minHeight: 340,
            background: "linear-gradient(135deg, #14172A 0%, #17323A 60%, #153E37 100%)",
            display: "flex",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <div className="wrap" style={{ position: "relative", zIndex: 2, padding: "72px 32px" }}>
            <a className="page-back-link" href="/" style={{ color: "rgba(255,255,255,0.45)", marginBottom: 20 }}>← Back to Home</a>
            <div style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--teal)", marginBottom: 14, display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ display: "inline-block", width: 20, height: 1.5, background: "var(--teal)", borderRadius: 2 }}></span>
              Learning Roadmap
            </div>
            <h1 className="page-title" style={{ color: "#FFFFFF", marginBottom: 14, maxWidth: 640 }}>
              Syllabus by Age Group
            </h1>
            <p style={{ color: "rgba(255,255,255,0.72)", fontSize: 16.5, lineHeight: 1.75, maxWidth: 540 }}>
              Select your division to explore subjects, topics, and learning objectives.
            </p>
          </div>
        </div>
      </section>

      {/* Age group cards */}
      <section style={{ paddingTop: 64, paddingBottom: 96 }}>
        <div className="wrap">
          <div className="age-grid">
            {ageGroups.map((group) => {
              const meta = groupMeta[group.slug] || groupMeta.primary;
              const subjectCount = group.subjects.length;
              return (
                <a
                  key={group.slug}
                  href={`/syllabus/${group.slug}/`}
                  className="age-card"
                  style={{ textDecoration: "none", background: "var(--bg-card)" }}
                >
                  <div className="age-card-image" style={{ height: "130px", display: "flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(135deg, rgba(20,23,42,0.05), rgba(193,101,12,0.05))" }}>
                    <DivisionIllustration type={meta.type} />
                    <div
                      className="age-card-badge"
                      style={{ background: meta.bg, color: meta.color, border: `1px solid ${meta.border}` }}
                    >
                      {group.classes}
                    </div>
                  </div>
                  <div className="age-card-body">
                    <div className="age-card-div" style={{ color: meta.color }}>{group.name}</div>
                    <h3 className="age-card-title" style={{ fontSize: 18 }}>{group.name} Division</h3>
                    <p className="age-card-desc">{meta.desc}</p>
                    <div style={{ marginBottom: 14 }}>
                      <span
                        style={{
                          display: "inline-block",
                          padding: "3px 10px",
                          borderRadius: 6,
                          background: meta.bg,
                          border: `1px solid ${meta.border}`,
                          fontFamily: "var(--mono)",
                          fontSize: 11,
                          color: meta.color,
                          letterSpacing: "0.06em",
                        }}
                      >
                        {subjectCount > 0
                          ? `${subjectCount} Subject${subjectCount === 1 ? "" : "s"}`
                          : "Coming Soon"}
                      </span>
                    </div>
                    <span className="age-card-cta">
                      View Syllabus <span>→</span>
                    </span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
