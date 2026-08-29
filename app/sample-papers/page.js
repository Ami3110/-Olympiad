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
              Academic Resource Library &middot; Session 2026–27
            </div>
            <h1 style={{ fontFamily: "var(--display)", fontSize: "clamp(30px, 4.2vw, 46px)", fontWeight: 850, color: "var(--ink)", letterSpacing: "-0.025em", marginBottom: 16 }}>
              Sample Question Papers
            </h1>
            <p style={{ fontSize: 16, color: "var(--ink-dim)", lineHeight: 1.7, maxWidth: "100%", margin: 0 }}>
              Explore official sample papers and examination blueprints for every Olympiad subject across all 6 age divisions. 
              Designed to help students familiarize themselves with question patterns, analytical depth, and scoring rubrics.
            </p>
          </div>
        </div>
      </section>

      {/* Accordion section & Modals wrapped in ModalController */}
      <ModalController>
        <section style={{ paddingTop: 36, paddingBottom: 64 }}>
          <div className="wrap">
            <div className="accordion" id="sp-accordion">
              {groupItems}
            </div>
          </div>
        </section>

        {allModals}
      </ModalController>
    </>
  );
}
