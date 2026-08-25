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
          <a className="page-back-link" href="/syllabus/">&#8592; Back to all age groups</a>

          {/* Group hero */}
          <div style={{
            background: "linear-gradient(135deg, rgba(13,122,103,0.06), rgba(193,101,12,0.03))",
            border: "1px solid var(--line)",
            borderRadius: "var(--r-xl)",
            padding: "40px 36px",
            marginBottom: 48,
          }}>
            <div style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--teal)", marginBottom: 10, display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ display: "inline-block", width: 16, height: 1.5, background: "var(--teal)", borderRadius: 2 }}></span>
              {group.classes}
            </div>
            <h1 className="page-title">{group.name} Syllabus</h1>
            <p style={{ color: "var(--ink-dim)", fontSize: 16.5, lineHeight: 1.7, marginTop: 10 }}>
              {subjectCount > 0
                ? `Explore ${subjectCount} subject${subjectCount === 1 ? "" : "s"} available for the ${group.name} division. Click any subject to view the full syllabus.`
                : `The subject list for the ${group.name} division hasn't been finalized yet. Check back soon.`
              }
            </p>
          </div>

          {/* Subject matrix */}
          {blocks}

          {/* Back link */}
          <div style={{ marginTop: 40, paddingTop: 28, borderTop: "1px solid var(--line)", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
            <a className="page-back-link" href="/syllabus/" style={{ marginBottom: 0 }}>
              &#8592; Back to all age groups
            </a>
            <a className="btn btn-ghost" href="/sample-papers/">
              View Sample Papers ↗
            </a>
          </div>
        </div>
      </section>

      {modals}
    </ModalController>
  );
}
