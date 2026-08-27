import fs from "fs";
import path from "path";

// Real sample-paper content lives in src/partials/papers/<subjectSlug>--<groupSlug>.html,
// syllabus content in src/partials/syllabus/<subjectSlug>--<groupSlug>.html — both as bare
// fragments. A subject with no matching file just renders "coming soon". This is how a new
// subject gets real content: drop a file in the right folder, nothing else to touch.
// Ported as-is from build.js's makeContentLoader().
//
// Sample papers additionally support a second variant — pass "2" as `variant`
// to look up <subjectSlug>--<groupSlug>--2.html (Sample Paper 2). Omitted/
// undefined variant looks up the original un-suffixed filename (Sample Paper 1).
function makeContentLoader(dirName) {
  const dir = path.join(process.cwd(), "src/partials", dirName);
  return function loadContent(groupSlug, subjectSlug, variant) {
    const suffix = variant ? `--${variant}` : "";
    const p = path.join(dir, `${subjectSlug}--${groupSlug}${suffix}.html`);
    return fs.existsSync(p) ? fs.readFileSync(p, "utf8") : null;
  };
}

export const loadPaperContent = makeContentLoader("papers");
export const loadSyllabusContent = makeContentLoader("syllabus");
