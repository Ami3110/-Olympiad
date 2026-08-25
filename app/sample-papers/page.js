import ageGroups from "../../data/ageGroups.json";
import AccordionItem from "../../components/AccordionItem";
import ModalController from "../../components/ModalController";
import { loadPaperContent } from "../../lib/content";
import { buildSubjectMatrix } from "../../lib/subjectMatrix";
import { DivisionIllustration } from "../../components/Visuals";

export const metadata = {
  title: "Sample Papers — India Genius Olympiad",
  description:
    "Sample papers for every Olympiad subject, organized by age group. Explore preparation resources for India Genius Olympiad.",
};

const divisionTypes = {
  foundation: "foundation",
  junior: "junior",
  primary: "primary",
  middle: "middle",
  secondary: "secondary",
  "senior-secondary": "senior",
};

export default function SamplePapersPage() {
  const allModals = [];

  const groupItems = ageGroups.map((group) => {
    const { blocks, modals } = buildSubjectMatrix({
      group,
      kind: "paper",
      loadContent: loadPaperContent,
    });
    allModals.push(...modals);
    return (
      <AccordionItem
        key={group.slug}
        id={`acc-${group.slug}`}
        title={group.name}
        subtitle={group.classes}
      >
        {blocks}
      </AccordionItem>
    );
  });

  return (
    <ModalController>
      {/* Page hero */}
      <section style={{ padding: 0, borderTop: "none" }}>
        <div
          style={{
            position: "relative",
            minHeight: 340,
            background: "linear-gradient(135deg, #14172A 0%, #1E284A 60%, #153E37 100%)",
            display: "flex",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <div className="wrap" style={{ position: "relative", zIndex: 2, padding: "72px 32px" }}>
            <a className="page-back-btn" href="/" aria-label="Back to Home">
              <svg className="back-arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
              <span>Back to Home</span>
            </a>

            <div style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--saffron)", marginBottom: 14, display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ display: "inline-block", width: 20, height: 1.5, background: "var(--saffron)", borderRadius: 2 }}></span>
              Academic Resource Library
            </div>

            <h1
              className="page-title"
              style={{ color: "#FFFFFF", marginBottom: 16, maxWidth: 640 }}
            >
              Sample Papers
            </h1>

            <p style={{ color: "rgba(255,255,255,0.72)", fontSize: 16.5, lineHeight: 1.75, maxWidth: 560, marginBottom: 32 }}>
              Explore sample papers for every Olympiad subject, organized by age group. Select a group below, then pick a subject to preview the paper.
            </p>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a
                className="btn btn-primary"
                href="https://forms.gle/KvAiXYv1CRr5E1Y17"
                target="_blank"
                rel="noopener noreferrer"
              >
                Register Now ↗
              </a>
              <a className="btn btn-white" href="/syllabus/">
                View Syllabus
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Group cards row */}
      <section style={{ padding: "48px 0 0" }}>
        <div className="wrap">
          <div style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--ink-faint)", marginBottom: 20 }}>
            Jump to an age group:
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
              gap: 14,
              marginBottom: 4,
            }}
          >
            {ageGroups.map((group) => (
              <a
                key={group.slug}
                href={`#acc-${group.slug}`}
                style={{
                  display: "block",
                  borderRadius: "var(--r-card)",
                  overflow: "hidden",
                  border: "1px solid var(--line)",
                  textDecoration: "none",
                  transition: "transform 0.18s, box-shadow 0.18s",
                  background: "var(--bg-card)",
                }}
                className="age-card"
              >
                <div style={{ height: "90px", display: "flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(135deg, rgba(20,23,42,0.06), rgba(193,101,12,0.06))" }}>
                  <DivisionIllustration type={divisionTypes[group.slug] || "primary"} />
                </div>
                <div style={{ padding: "14px 16px" }}>
                  <div style={{ fontFamily: "var(--mono)", fontSize: 10, textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--flame)", marginBottom: 4 }}>{group.classes}</div>
                  <div style={{ fontFamily: "var(--display)", fontSize: 14, fontWeight: 700, color: "var(--ink)", letterSpacing: "-0.01em" }}>{group.name}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Accordion section */}
      <section style={{ paddingTop: 40 }}>
        <div className="wrap">
          <div className="accordion" id="sp-accordion">
            {groupItems}
          </div>
        </div>
      </section>

      {allModals}
    </ModalController>
  );
}
