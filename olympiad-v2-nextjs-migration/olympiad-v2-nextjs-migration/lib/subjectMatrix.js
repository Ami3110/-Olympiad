// Builds the subject-block grid + modal markup for one age group, for both
// the sample-papers and syllabus pages. Ported from build.js's per-group
// loop (kept as a plain function returning JSX, not a component, so a page
// can collect every group's modals into one flat list rendered after the
// whole accordion — see the comment in build.js: modals stay out of the
// accordion's max-height-animated body so a tall paper is never clipped).
export function buildSubjectMatrix({ group, kind, loadContent }) {
  if (!group.subjects.length) {
    return {
      blocks: <p className="sp-group-empty">Subject list for this age group hasn&rsquo;t been finalized yet.</p>,
      modals: [],
    };
  }

  const blocks = [];
  const modals = [];

  for (const s of group.subjects) {
    const content = loadContent(group.slug, s.slug);

    if (!content) {
      blocks.push(
        <div className="subject-block subject-block-disabled" aria-disabled="true" key={s.slug}>
          <span className="subject-block-name">{s.name}</span>
          <span className="subject-block-status">Coming soon</span>
        </div>
      );
      continue;
    }

    const isSyllabus = kind === "syllabus";
    const modalId = isSyllabus ? `modal-syllabus-${s.slug}` : `modal-${group.slug}-${s.slug}`;
    const modalTitle = isSyllabus ? `${s.name} syllabus` : s.name;
    const modalAriaLabel = isSyllabus ? `${s.name} syllabus` : `${s.name} sample paper`;

    blocks.push(
      <button className="subject-block" type="button" data-modal-target={modalId} key={s.slug}>
        <span className="subject-block-name">{s.name}</span>
        <span className="subject-block-status">{isSyllabus ? "View syllabus" : "View sample paper"}</span>
      </button>
    );

    modals.push(
      <div className="sp-modal" id={modalId} aria-hidden="true" key={modalId}>
        <div className="sp-modal-backdrop" data-modal-close="true"></div>
        <div className="sp-modal-panel" role="dialog" aria-modal="true" aria-label={modalAriaLabel}>
          <button className="sp-modal-close" type="button" data-modal-close="true" aria-label="Close">&#10005;</button>
          <div className="sp-modal-scroll">
            <p className="eyebrow">{group.name} &middot; {group.classes}</p>
            <h2 style={{ fontFamily: "var(--display)", fontSize: 26, marginBottom: 20 }}>{modalTitle}</h2>
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </div>
        </div>
      </div>
    );
  }

  return { blocks: <div className="subject-matrix">{blocks}</div>, modals };
}
