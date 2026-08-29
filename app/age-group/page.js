import Link from "next/link";
import ageGroupsData from "../../data/ageGroups.json";

export const metadata = {
  title: "Age Groups & Divisions — India Genius Olympiad | Session 2026–27",
  description:
    "Explore the 6 age groups and divisions in India Genius Olympiad: Foundation (PG–UKG), Junior (I–II), Primary (III–V), Middle (VI–VIII), Secondary (IX–X), and Senior Secondary (XI–XII).",
};

const ageGroupNarratives = [
  {
    icon: "🌱",
    classes: "PG – UKG",
    name: "Foundation",
    level: "Foundation Level",
    slug: "foundation",
    color: "#0D7A67",
    desc: "Specially designed for young learners from Playgroup to UKG. At this early stage, children learn best through curiosity, observation, exploration, and enjoyable activities. Assessments nurture mental ability, basic language, numerical agility, and creative expression.",
    subjectsCount: 7,
  },
  {
    icon: "⭐",
    classes: "Classes I – II",
    name: "Junior",
    level: "Junior Level",
    slug: "junior",
    color: "#C1650C",
    desc: "Designed for students of Classes I and II, when children begin developing stronger academic foundations and greater curiosity about the world. Fosters logical thinking, early scientific exploration, and fundamental digital awareness.",
    subjectsCount: 6,
  },
  {
    icon: "📘",
    classes: "Classes III – V",
    name: "Primary",
    level: "Explore Level",
    slug: "primary",
    color: "#1E5F8A",
    desc: "Strengthens fundamental knowledge and encourages students to explore subjects beyond the classroom. Assessments and activities focus on conceptual understanding, reasoning, analytical thinking, creativity, space science, and practical problem solving.",
    subjectsCount: 5,
  },
  {
    icon: "🚀",
    classes: "Classes VI – VIII",
    name: "Middle",
    level: "Develop Level",
    slug: "middle",
    color: "#7C3AED",
    desc: "Provides students with greater academic and intellectual challenges. Focuses on deeper understanding, AI fundamentals, cybersecurity, financial literacy, climate sustainability, and 21st-century future skills.",
    subjectsCount: 8,
  },
  {
    icon: "🏆",
    classes: "Classes IX – X",
    name: "Secondary",
    level: "Master Level",
    slug: "secondary",
    color: "#059669",
    desc: "Designed for students preparing for higher academic challenges and important career decisions. Encourages subject mastery, artificial intelligence & machine learning, ethical hacking, financial markets, and behavioural psychology.",
    subjectsCount: 6,
  },
  {
    icon: "🎓",
    classes: "Classes XI – XII",
    name: "Senior Secondary",
    level: "Lead Level",
    slug: "senior-secondary",
    color: "#E65100",
    desc: "Provides advanced opportunities for students to demonstrate specialized domain expertise and future readiness. Focuses on higher-order thinking, leadership, public speaking, career skills, and competitive academic excellence.",
    subjectsCount: 8,
  },
];

const ageGroupTable = [
  { class: "Playgroup – UKG", category: "Foundation", level: "Foundation Level", focus: "Observation, Mental Ability, Rhymes & Creative Expression" },
  { class: "Classes I – II", category: "Junior", level: "Junior Level", focus: "Language, Basic Logic, Young Science & Digital Awareness" },
  { class: "Classes III – V", category: "Primary", level: "Explore Level", focus: "Reasoning, Coding Fundamentals, Space Science & Heritage" },
  { class: "Classes VI – VIII", category: "Middle", level: "Develop Level", focus: "AI Basics, Cyber Safety, Financial Literacy & Sustainability" },
  { class: "Classes IX – X", category: "Secondary", level: "Master Level", focus: "Applied AI, Ethical Hacking, Financial Markets & Psychology" },
  { class: "Classes XI – XII", category: "Senior Secondary", level: "Lead Level", focus: "Leadership, Public Speaking, Future Skills & Advanced Sciences" },
];

export default function AgeGroupPage() {
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
              Eligibility &middot; Developmental Framework &middot; Session 2026–27
            </div>
            <h1 style={{ fontFamily: "var(--display)", fontSize: "clamp(30px, 4.2vw, 46px)", fontWeight: 850, color: "var(--ink)", letterSpacing: "-0.025em", marginBottom: 16 }}>
              Age Groups &amp; Divisions
            </h1>
            <p style={{ fontSize: 16, color: "var(--ink-dim)", lineHeight: 1.7, maxWidth: "100%", margin: 0 }}>
              India Genius Olympiad programmes are structured according to the cognitive developmental stage 
              of learners from Playgroup through Class XII, ensuring age-appropriate challenges and joyful discovery.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Table */}
      <section style={{ paddingTop: 64, paddingBottom: 64 }}>
        <div className="wrap">
          <div style={{ textAlign: "center", maxWidth: 780, margin: "0 auto 40px" }}>
            <div className="section-eyebrow" style={{ justifyContent: "center" }}>Eligibility Matrix</div>
            <h2 style={{ fontFamily: "var(--display)", fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 800, color: "var(--ink)", letterSpacing: "-0.02em", marginBottom: 12 }}>
              Classification by Class &amp; Level
            </h2>
            <p style={{ fontSize: 16, color: "var(--ink-dim)", lineHeight: 1.65 }}>
              Find your child&apos;s or student&apos;s division below. Every division is customized with age-appropriate syllabi and question patterns.
            </p>
          </div>

          <div className="oi-age-table-wrap" style={{ maxWidth: 1000, margin: "0 auto 60px" }}>
            <table className="oi-age-table">
              <thead>
                <tr>
                  <th style={{ width: "22%" }}>Class / Stage</th>
                  <th style={{ width: "20%" }}>Category</th>
                  <th style={{ width: "22%" }}>Learning Level</th>
                  <th style={{ width: "36%" }}>Core Focus</th>
                </tr>
              </thead>
              <tbody>
                {ageGroupTable.map((row) => (
                  <tr key={row.category}>
                    <td style={{ fontWeight: 700, color: "var(--ink)" }}>{row.class}</td>
                    <td>
                      <span className="oi-age-badge">{row.category}</span>
                    </td>
                    <td style={{ color: "var(--ink-dim)" }}>{row.level}</td>
                    <td style={{ fontSize: 13.5 }}>{row.focus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Division Detailed Cards */}
          <div style={{ textAlign: "center", maxWidth: 780, margin: "0 auto 36px" }}>
            <div className="section-eyebrow" style={{ justifyContent: "center" }}>Division Deep Dive</div>
            <h3 style={{ fontFamily: "var(--display)", fontSize: 28, fontWeight: 800, color: "var(--ink)" }}>
              Explore Each Division in Detail
            </h3>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 24, maxWidth: 1100, margin: "0 auto" }}>
            {ageGroupNarratives.map((g) => (
              <div
                key={g.name}
                style={{
                  background: "#FFFFFF",
                  border: "1px solid var(--line)",
                  borderRadius: 16,
                  padding: "24px 22px",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.03)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
                    <span style={{ fontSize: 20 }}>{g.icon}</span>
                    <span
                      style={{
                        fontSize: 11.5,
                        fontWeight: 700,
                        fontFamily: "var(--mono)",
                        textTransform: "uppercase",
                        color: g.color,
                        background: "var(--bg-elev)",
                        padding: "3px 8px",
                        borderRadius: 5,
                        border: "1px solid var(--line)",
                      }}
                    >
                      {g.classes}
                    </span>
                  </div>

                  <h4 style={{ fontFamily: "var(--display)", fontSize: 19, fontWeight: 800, color: "var(--ink)", marginBottom: 4 }}>
                    {g.name} Division
                  </h4>

                  <div style={{ fontSize: 12.5, fontWeight: 600, color: "var(--muted)", marginBottom: 12 }}>
                    {g.level} &middot; {g.subjectsCount} Subjects Available
                  </div>

                  <p style={{ fontSize: 13.5, color: "var(--ink-dim)", lineHeight: 1.6, marginBottom: 18 }}>
                    {g.desc}
                  </p>
                </div>

                <div style={{ paddingTop: 14, borderTop: "1px solid var(--line)", display: "flex", gap: 10 }}>
                  <Link
                    href={`/syllabus/${g.slug}/`}
                    className="btn btn-ghost"
                    style={{ flex: 1, justifyContent: "center", fontSize: 13 }}
                  >
                    View Syllabus →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
