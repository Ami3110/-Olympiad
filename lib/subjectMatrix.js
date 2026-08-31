import SamplePaperInteractiveQuiz from "../components/SamplePaperInteractiveQuiz";

// Builds the subject-block grid + modal markup for one age group, for both
// the sample-papers and syllabus pages. Ported from build.js's per-group
// loop (kept as a plain function returning JSX, not a component, so a page
// can collect every group's modals into one flat list rendered after the
// whole accordion — see the comment in build.js: modals stay out of the
// accordion's max-height-animated body so a tall paper is never clipped).
//
// Syllabus blocks additionally carry a "Date: To be announced" placeholder
// (no real exam-schedule data exists yet — content brief, Aug 2026 pass).
// Sample-paper blocks now offer two independent slots, Sample Paper 1 and
// Sample Paper 2 (loadContent's `variant` param — see lib/content.js);
// each slot is its own pill, greyed "Coming soon" if that file doesn't
// exist yet. Today only Paper 1 exists for any subject.
export function buildSubjectMatrix({ group, kind, loadContent }) {
  if (!group.subjects.length) {
    return {
      blocks: <p className="sp-group-empty">Subject list for this age group hasn&rsquo;t been finalized yet.</p>,
      modals: [],
    };
  }

  const blocks = [];
  const modals = [];
  const isSyllabus = kind === "syllabus";

  for (const s of group.subjects) {
    if (isSyllabus) {
      const content = loadContent(group.slug, s.slug);

      if (!content) {
        blocks.push(
          <div className="subject-block subject-block-disabled" aria-disabled="true" key={s.slug}>
            <span className="subject-block-name">{s.name}</span>
            <span className="subject-block-date">Date: To be announced</span>
            <span className="subject-block-status">Coming soon</span>
          </div>
        );
        continue;
      }

      const modalId = `modal-syllabus-${group.slug}-${s.slug}`;
      blocks.push(
        <button className="subject-block" type="button" data-modal-target={modalId} key={`${group.slug}-${s.slug}`}>
          <span className="subject-block-name">{s.name}</span>
          <span className="subject-block-date">Date: To be announced</span>
          <span className="subject-block-status">View syllabus</span>
        </button>
      );

      modals.push(
        <div className="sp-modal" id={modalId} aria-hidden="true" key={modalId}>
          <div className="sp-modal-backdrop" data-modal-close="true"></div>
          <div className="sp-modal-panel" role="dialog" aria-modal="true" aria-label={`${s.name} syllabus`}>
            <button className="sp-modal-close" type="button" data-modal-close="true" aria-label="Close">&#10005;</button>
            <div className="sp-modal-scroll">
              <p className="eyebrow">{group.name} &middot; {group.classes}</p>
              <h2 style={{ fontFamily: "var(--display)", fontSize: 26, marginBottom: 20 }}>{s.name} syllabus</h2>
              <div dangerouslySetInnerHTML={{ __html: content }} />
            </div>
          </div>
        </div>
      );
      continue;
    }

    // kind === "paper" — two independent sample-paper slots per subject.
    const paper1 = loadContent(group.slug, s.slug);
    const paper2 = loadContent(group.slug, s.slug, "2");

    if (!paper1 && !paper2) {
      blocks.push(
        <div className="subject-block subject-block-disabled" aria-disabled="true" key={s.slug}>
          <span className="subject-block-name">{s.name}</span>
          <span className="subject-block-status">Coming soon</span>
        </div>
      );
      continue;
    }

    const slots = [
      { label: "Sample Paper 1", content: paper1, suffix: "" },
      { label: "Sample Paper 2", content: paper2, suffix: "-2" },
    ];

    blocks.push(
      <div className="subject-block subject-block-papers" key={s.slug}>
        <span className="subject-block-name">{s.name}</span>
        <div className="subject-block-paper-row">
          {slots.map((slot) => {
            if (!slot.content) {
              return (
                <span className="subject-paper-pill subject-paper-pill-disabled" key={slot.label}>
                  {slot.label} &middot; Coming soon
                </span>
              );
            }

            const modalId = `modal-${group.slug}-${s.slug}${slot.suffix}`;
            modals.push(
              <div className="sp-modal" id={modalId} aria-hidden="true" key={modalId}>
                <div className="sp-modal-backdrop" data-modal-close="true"></div>
                <div className="sp-modal-panel" role="dialog" aria-modal="true" aria-label={`${s.name} ${slot.label}`}>
                  <button className="sp-modal-close" type="button" data-modal-close="true" aria-label="Close">&#10005;</button>
                  <div className="sp-modal-scroll">
                    <SamplePaperInteractiveQuiz
                      contentHtml={slot.content}
                      groupName={group.name}
                      groupClasses={group.classes}
                      subjectName={`${s.name} — ${slot.label}`}
                    />
                  </div>
                </div>
              </div>
            );

            return (
              <button className="subject-paper-pill" type="button" data-modal-target={modalId} key={slot.label}>
                {slot.label}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  return { blocks: <div className="subject-matrix">{blocks}</div>, modals };
}
