import Link from "next/link";
import AwardsInteractive from "../../components/AwardsInteractive";

export const metadata = {
  title: "Award Structure & Recognition — India Genius Olympiad | Session 2026–27",
  description:
    "Comprehensive award structure for India Genius Olympiad: School Qualifier Certificates, District Medals, State Trophies, and National Championship Honours with cash rewards & scholarships.",
};

const awardTiersDetailed = [
  {
    level: "School Level",
    stage: "Stage 01",
    icon: "🏫",
    tag: "School Selection Round",
    badge: "Foundation Step",
    color: "#0D7A67",
    accentBg: "rgba(13, 122, 103, 0.08)",
    borderColor: "rgba(13, 122, 103, 0.25)",
    summary: "Every participant is recognized for courage, curiosity, and effort.",
    rewards: [
      "Official Digital & Physical Participation Certificate for every registered student",
      "School Qualifier Certificate for top performers in each class and subject",
      "Detailed Diagnostic Performance Scorecard highlighting strengths and improvement areas",
      "Eligibility to advance to the District Level Championship",
    ],
    criteria: "Conducted within the school premises. All students taking part receive formal recognition.",
  },
  {
    level: "District Level",
    stage: "Stage 02",
    icon: "🥉",
    tag: "District Championship Round",
    badge: "Regional Merit",
    color: "#C1650C",
    accentBg: "rgba(193, 101, 12, 0.08)",
    borderColor: "rgba(193, 101, 12, 0.25)",
    summary: "Recognizing outstanding inter-school achievers across each district.",
    rewards: [
      "Gold, Silver, and Bronze Medals for Top 3 District Rank Holders in each subject/class",
      "Official District Merit Certificate with verified seal and percentile score",
      "District Top 10 Rank Commendation Letters for exceptional academic consistency",
      "Automatic Qualification to the prestigious State Level Round",
    ],
    criteria: "Inter-school competition among school-level qualifiers across the district.",
  },
  {
    level: "State Level",
    stage: "Stage 03",
    icon: "🥈",
    tag: "State Championship Round",
    badge: "State Laurels",
    color: "#1E5F8A",
    accentBg: "rgba(30, 95, 138, 0.08)",
    borderColor: "rgba(30, 95, 138, 0.25)",
    summary: "Honouring elite academic champions representing their states.",
    rewards: [
      "Prestigious State Championship Trophies and Gold/Silver/Bronze Medals for top state rankers",
      "Official State Merit Certificate recognizing regional academic brilliance",
      "Special Recognition mementos presented during regional felicitation ceremonies",
      "Direct Entry into the Grand National Final with premier mentoring resources",
    ],
    criteria: "High-rigour competitive round among top district medalists across each State/UT.",
  },
  {
    level: "National Level",
    stage: "Stage 04",
    icon: "🥇",
    tag: "National Grand Finale",
    badge: "Highest Honour",
    color: "#E65100",
    accentBg: "rgba(230, 81, 0, 0.08)",
    borderColor: "rgba(230, 81, 0, 0.35)",
    summary: "The pinnacle of academic achievement in India Genius Olympiad.",
    rewards: [
      "National Champion Grand Trophy & Gold Medal of National Honour",
      "National 1st & 2nd Runner-Up Trophies & Silver/Bronze Medals",
      "Prestigious Official National Certificate of Excellence backed by India Genius Foundation",
      "Academic Grants, Educational Scholarships, and Tech Gadgets (as per category guidelines)",
      "Permanent induction into the India Genius Hall of Fame & National Media Spotlight",
    ],
    criteria: "National grand final testing deep conceptual application and innovative problem-solving.",
  },
];

const institutionalAwards = [
  {
    title: "Best Principal Award",
    icon: "👑",
    desc: "Conferred to visionary school heads and principals who champion student participation, progressive pedagogy, and excellence in modern competencies.",
    perks: "Citation Plaque, National Certificate of Leadership & Honour Memento.",
  },
  {
    title: "Best Olympiad Coordinator Award",
    icon: "🎖️",
    desc: "Recognizing dedicated teacher coordinators who guide, inspire, and manage school participation smoothly.",
    perks: "Special Coordinator Medal, Certificate of Appreciation & Gift Token.",
  },
  {
    title: "Star School of the Year",
    icon: "🏛️",
    desc: "Awarded to schools with exceptional aggregate student performance and the highest number of state/national qualifiers.",
    perks: "Prestigious Institutional Rolling Trophy & National Accreditation Banner.",
  },
];

const summaryTable = [
  {
    level: "School Level",
    scope: "Within Participating School",
    eligibility: "All Registered Students (PG – XII)",
    awards: "Participation Certificate & School Qualifier e-Certificate + Diagnostic Report",
  },
  {
    level: "District Level",
    scope: "Inter-School District Arena",
    eligibility: "Top School Round Qualifiers",
    awards: "District Gold, Silver, Bronze Medals & District Merit Certificates",
  },
  {
    level: "State Level",
    scope: "State / UT Championship",
    eligibility: "District Winners & Top Scorers",
    awards: "State Championship Trophies, Medals & State Merit Certificates",
  },
  {
    level: "National Level",
    scope: "All-India Grand Finale",
    eligibility: "State Winners & National Qualifiers",
    awards: "Grand National Trophy, Gold/Silver/Bronze Medals, Scholarships & Hall of Fame",
  },
];

export default function AwardStructurePage() {
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

          <div style={{ textAlign: "center", maxWidth: 820, margin: "0 auto" }}>
            <div className="section-eyebrow" style={{ justifyContent: "center", marginBottom: 10 }}>
              Recognition &middot; Excellence Framework &middot; Session 2026–27
            </div>
            <h1 style={{ fontFamily: "var(--display)", fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 800, color: "var(--ink)", letterSpacing: "-0.02em", marginBottom: 12 }}>
              Olympiad Award Structure
            </h1>
            <p style={{ fontSize: 16, color: "var(--ink-dim)", lineHeight: 1.65, maxWidth: 720, margin: "0 auto" }}>
              Every learner deserves recognition for participation, effort, achievement, and excellence. 
              Our 4-tier award system inspires and rewards students from school classrooms to the national stage.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Progression Overview */}
      <section style={{ paddingTop: 64, paddingBottom: 64, background: "var(--bg-elev)", borderBottom: "1px solid var(--line)" }}>
        <div className="wrap">
          <div style={{ textAlign: "center", maxWidth: 780, margin: "0 auto 40px" }}>
            <div className="section-eyebrow" style={{ justifyContent: "center" }}>Multi-Tier Pathway</div>
            <h2 style={{ fontFamily: "var(--display)", fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 800, color: "var(--ink)", letterSpacing: "-0.02em", marginBottom: 12 }}>
              4-Stage Recognition Journey
            </h2>
            <p style={{ fontSize: 16, color: "var(--ink-dim)", lineHeight: 1.65 }}>
              Hover over each stage to preview the progression track from school-level assessments to national glory.
            </p>
          </div>

          <AwardsInteractive />
        </div>
      </section>

      {/* Detailed Tier-by-Tier Breakdown */}
      <section style={{ paddingTop: 64, paddingBottom: 72 }}>
        <div className="wrap">
          <div style={{ textAlign: "center", maxWidth: 780, margin: "0 auto 48px" }}>
            <div className="section-eyebrow" style={{ justifyContent: "center" }}>Detailed Criteria &amp; Rewards</div>
            <h2 style={{ fontFamily: "var(--display)", fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 800, color: "var(--ink)", letterSpacing: "-0.02em", marginBottom: 12 }}>
              Level-by-Level Award Breakdown
            </h2>
            <p style={{ fontSize: 16, color: "var(--ink-dim)", lineHeight: 1.65 }}>
              Transparent criteria and prestigious rewards designed to nurture confidence and celebrate talent.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 24, maxWidth: 1140, margin: "0 auto" }}>
            {awardTiersDetailed.map((tier) => (
              <div
                key={tier.level}
                style={{
                  background: "#FFFFFF",
                  border: `1px solid ${tier.borderColor}`,
                  borderRadius: 20,
                  padding: "32px 28px",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 4,
                    background: tier.color,
                  }}
                />

                <div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
                    <span
                      style={{
                        fontSize: 12,
                        fontWeight: 700,
                        fontFamily: "var(--mono)",
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        color: tier.color,
                        background: tier.accentBg,
                        padding: "4px 10px",
                        borderRadius: 6,
                      }}
                    >
                      {tier.stage} · {tier.badge}
                    </span>
                    <span style={{ fontSize: 32 }}>{tier.icon}</span>
                  </div>

                  <h3 style={{ fontFamily: "var(--display)", fontSize: 22, fontWeight: 800, color: "var(--ink)", marginBottom: 8 }}>
                    {tier.level}
                  </h3>

                  <p style={{ fontSize: 14, color: "var(--ink-dim)", lineHeight: 1.55, marginBottom: 20 }}>
                    {tier.summary}
                  </p>

                  <div style={{ marginBottom: 20 }}>
                    <div style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--muted)", marginBottom: 10 }}>
                      What Qualifiers Receive:
                    </div>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                      {tier.rewards.map((reward, rIdx) => (
                        <li key={rIdx} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 13.5, color: "var(--ink)", lineHeight: 1.5 }}>
                          <span style={{ color: tier.color, fontWeight: 800, flexShrink: 0 }}>✓</span>
                          <span>{reward}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div
                  style={{
                    marginTop: 16,
                    paddingTop: 16,
                    borderTop: "1px dashed var(--line)",
                    fontSize: 12.5,
                    color: "var(--muted)",
                    lineHeight: 1.5,
                  }}
                >
                  <strong>Eligibility:</strong> {tier.criteria}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Summary Matrix Table */}
      <section style={{ background: "var(--bg-elev)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)", paddingTop: 64, paddingBottom: 64 }}>
        <div className="wrap">
          <div style={{ textAlign: "center", maxWidth: 760, margin: "0 auto 40px" }}>
            <div className="section-eyebrow" style={{ justifyContent: "center" }}>Quick Matrix</div>
            <h2 style={{ fontFamily: "var(--display)", fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 800, color: "var(--ink)", letterSpacing: "-0.02em", marginBottom: 12 }}>
              Awards Summary Table
            </h2>
          </div>

          <div className="oi-age-table-wrap" style={{ maxWidth: 1000, margin: "0 auto" }}>
            <table className="oi-age-table">
              <thead>
                <tr>
                  <th style={{ width: "20%" }}>🎖️ Level</th>
                  <th style={{ width: "22%" }}>📍 Scope</th>
                  <th style={{ width: "25%" }}>👥 Eligibility</th>
                  <th style={{ width: "33%" }}>🏅 Awards &amp; Honours</th>
                </tr>
              </thead>
              <tbody>
                {summaryTable.map((row) => (
                  <tr key={row.level}>
                    <td style={{ fontWeight: 700, color: "var(--ink)" }}>{row.level}</td>
                    <td>{row.scope}</td>
                    <td>{row.eligibility}</td>
                    <td>{row.awards}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Institutional & Mentor Recognition */}
      <section style={{ paddingTop: 64, paddingBottom: 72 }}>
        <div className="wrap">
          <div style={{ textAlign: "center", maxWidth: 780, margin: "0 auto 44px" }}>
            <div className="section-eyebrow" style={{ justifyContent: "center" }}>Honouring Educators</div>
            <h2 style={{ fontFamily: "var(--display)", fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 800, color: "var(--ink)", letterSpacing: "-0.02em", marginBottom: 12 }}>
              Special Institutional &amp; Teacher Accolades
            </h2>
            <p style={{ fontSize: 16, color: "var(--ink-dim)", lineHeight: 1.65 }}>
              India Genius Foundation honours the pivotal role of school leaders, principals, and Olympiad coordinators in shaping tomorrow&apos;s thinkers.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24, maxWidth: 1060, margin: "0 auto" }}>
            {institutionalAwards.map((inst, idx) => (
              <div
                key={idx}
                style={{
                  background: "#FFFFFF",
                  border: "1px solid var(--line)",
                  borderRadius: 18,
                  padding: "28px 24px",
                  boxShadow: "0 2px 14px rgba(0,0,0,0.04)",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: 42, marginBottom: 14 }}>{inst.icon}</div>
                <h3 style={{ fontFamily: "var(--display)", fontSize: 20, fontWeight: 800, color: "var(--ink)", marginBottom: 10 }}>
                  {inst.title}
                </h3>
                <p style={{ fontSize: 14, color: "var(--ink-dim)", lineHeight: 1.6, marginBottom: 16 }}>
                  {inst.desc}
                </p>
                <div
                  style={{
                    background: "rgba(230, 81, 0, 0.06)",
                    border: "1px solid rgba(230, 81, 0, 0.15)",
                    borderRadius: 10,
                    padding: "10px 14px",
                    fontSize: 13,
                    fontWeight: 600,
                    color: "var(--saffron)",
                  }}
                >
                  🏅 {inst.perks}
                </div>
              </div>
            ))}
          </div>

          {/* Inspirational Tagline */}
          <div
            style={{
              textAlign: "center",
              marginTop: 48,
              padding: "20px 24px",
              background: "var(--bg-elev)",
              borderRadius: 14,
              border: "1px solid var(--line)",
              maxWidth: 820,
              margin: "48px auto 0",
            }}
          >
            <p style={{ color: "var(--ink)", fontSize: 15.5, fontWeight: 600, margin: 0, fontStyle: "italic" }}>
              &ldquo;Every Participation Matters. Every Achievement Deserves Recognition. Every Talent Has the Potential to Shine.&rdquo;
            </p>
          </div>

          {/* CTA Buttons */}
          <div style={{ textAlign: "center", marginTop: 40, display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap" }}>
            <Link href="/olympiad-info/" className="btn btn-secondary">
              Olympiad Overview
            </Link>
            <Link href="/syllabus/" className="btn btn-secondary">
              View Syllabus
            </Link>
            <a
              href="https://forms.gle/KvAiXYv1CRr5E1Y17"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Register for Olympiad ↗
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
