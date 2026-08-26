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
              Academic Resource Library · Session 2026–27
            </div>

            <h1 className="syl-hero-title">
              Sample Question Papers
            </h1>

            <p className="syl-hero-desc">
              Explore official sample papers and examination blueprints for every Olympiad subject across all 6 age divisions. 
              Designed to help students familiarize themselves with question patterns, analytical depth, and scoring rubrics.
            </p>

            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a
                className="btn btn-primary"
                href="https://forms.gle/KvAiXYv1CRr5E1Y17"
                target="_blank"
                rel="noopener noreferrer"
              >
                Register as Student ↗
              </a>
              <a className="btn btn-ghost" href="/syllabus/">
                View Full Syllabus →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Accordion section */}
      <section style={{ paddingTop: 36, paddingBottom: 64 }}>
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
