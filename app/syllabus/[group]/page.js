import { notFound } from "next/navigation";
import ageGroups from "../../../data/ageGroups.json";
import ModalController from "../../../components/ModalController";
import { loadSyllabusContent } from "../../../lib/content";
import { buildSubjectMatrix } from "../../../lib/subjectMatrix";

export function generateStaticParams() {
  return ageGroups.map((g) => ({ group: g.slug }));
}

export async function generateMetadata({ params }) {
  const { group: groupSlug } = await params;
  const group = ageGroups.find((g) => g.slug === groupSlug);
  if (!group) return {};
  return {
    title: `${group.name} Syllabus`,
    description: `Explore the India Genius Olympiad syllabus for ${group.name} (${group.classes}). Subjects, topics and learning objectives.`,
  };
}

export default async function SyllabusGroupPage({ params }) {
  const { group: groupSlug } = await params;
  const group = ageGroups.find((g) => g.slug === groupSlug);
  if (!group) notFound();

  const { blocks, modals } = buildSubjectMatrix({ group, kind: "syllabus", loadContent: loadSyllabusContent });
  const subjectCount = group.subjects.length;

  return (
    <ModalController>
      <section style={{ paddingBottom: 96 }}>
        <div className="wrap">
          {/* Breadcrumb */}
          <a className="page-back-link light-variant" href="/syllabus/">
            &#8592; Back to all age groups
          </a>

          {/* Group hero */}
          <div style={{
            background: "#FFFFFF",
            border: "1.5px solid var(--line)",
            borderTop: "4px solid var(--teal)",
            borderRadius: "var(--r-xl)",
            padding: "32px 36px",
            marginBottom: 40,
            boxShadow: "0 6px 24px rgba(20, 23, 42, 0.05)",
          }}>
            <div style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--teal)", marginBottom: 8, display: "flex", alignItems: "center", gap: 10, fontWeight: 700 }}>
              <span style={{ display: "inline-block", width: 16, height: 2, background: "var(--teal)", borderRadius: 2 }}></span>
              CLASSES {group.classes.replace("Classes ", "").replace("Class ", "")}
            </div>
            <h1 className="page-title" style={{ fontSize: "clamp(26px, 3.5vw, 36px)", fontWeight: 800, color: "var(--ink)", letterSpacing: "-0.02em" }}>
              {group.name} Syllabus
            </h1>
            <p style={{ color: "var(--ink-dim)", fontSize: 15.5, lineHeight: 1.65, marginTop: 8 }}>
              {subjectCount > 0
                ? `Explore ${subjectCount} subject${subjectCount === 1 ? "" : "s"} available for the ${group.name} division. Click any subject to view the full syllabus.`
                : `The subject list for the ${group.name} division hasn't been finalized yet. Check back soon.`
              }
            </p>
          </div>

          {/* Subject matrix */}
          {blocks}

          {/* Bottom Action */}
          <div style={{ marginTop: 40, paddingTop: 28, borderTop: "1px solid var(--line)", display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
            <a className="btn btn-ghost" href={`/sample-papers/?group=${group.slug}#acc-${group.slug}`}>
              View {group.name} Sample Papers ↗
            </a>
          </div>
        </div>
      </section>

      {modals}
    </ModalController>
  );
}
