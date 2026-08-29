import Link from "next/link";

export const metadata = {
  title: "Competition Structure — India Genius Olympiad | 4-Stage National Pathway",
  description:
    "Explore the 4-tier competition structure of India Genius Olympiad: School Selection, District Level, State Championship, and National Grand Finale at a nominal fee of ₹80 per subject.",
};

const competitionRounds = [
  {
    round: "Round 1",
    level: "School Selection Round",
    mode: "Offline · Within School",
    tag: "Stage 01",
    color: "#E65A00",
    summary: "The foundational assessment round conducted directly within participating school premises.",
    points: [
      "Conducted at individual participating schools under certified teacher invigilation",
      "Students participate in their respective class, age group, and subject category",
      "Objective and MCQ-based examination, calibrated to the official prescribed syllabus",
      "Comprehensive performance evaluation with individual diagnostic scorecards",
      "Schools identify, recognize, and felicitate their top-performing learners",
      "Top qualifiers automatically secure eligibility for the District Level Championship",
    ],
  },
  {
    round: "Round 2",
    level: "District Level Championship",
    mode: "Offline · Inter-School",
    tag: "Stage 02",
    color: "#0A6EBD",
    summary: "Inter-school regional arena bringing together top talent from all district schools.",
    points: [
      "Conducted district-wise at designated nodal venues and partner institutions",
      "Qualified school champions compete with peers across their district",
      "Subject-specific examination with advanced conceptual application problems",
      "Standardized district-wide merit ranking and percentile calculation",
      "District Winners, Runner-ups & Merit Achievers awarded official medals and certificates",
      "Top district medalists qualify to represent their district at the State Level",
    ],
  },
  {
    round: "Round 3",
    level: "State Level Championship",
    mode: "Offline · District Qualifiers",
    tag: "Stage 03",
    color: "#22863A",
    summary: "High-stakes state championship pitting regional medalists in a battle of wits.",
    points: [
      "Open exclusively to eligible top qualifiers and medalists from the District Level",
      "Students proudly represent their respective institutions and home districts",
      "Conducted across prescribed subjects, divisions, and specialised categories",
      "Rigorous evaluation assessing analytical deduction, creativity, and problem-solving",
      "Outstanding performers awarded State Championship Trophies, Medals & State Merit Honours",
      "Eligible State Winners qualify directly for the Grand National Finale",
    ],
  },
  {
    round: "Round 4",
    level: "National Grand Finale",
    mode: "Offline · All-India Stage",
    tag: "Stage 04",
    color: "#8B1A1A",
    summary: "The ultimate national stage honouring the finest young minds across India.",
    points: [
      "Open exclusively to eligible State Winners, Rank 1 achievers, and national qualifiers",
      "Students represent their state in the grand national championship",
      "Highest-order competitive challenges testing real-world problem solving and innovation",
      "Grand National Champion Trophies, Gold Medals, and National Merit Honours presented",
      "Scholarships, educational grants, and permanent induction into the India Genius Hall of Fame",
      "Prestigious national media felicitation backed by India Genius Foundation",
    ],
  },
];

const features = [
  {
    icon: "📋",
    title: "MCQ & Problem Solving",
    desc: "Age-calibrated question formats testing conceptual clarity, analytical agility, and application.",
  },
  {
    icon: "⏱️",
    title: "Standardized Duration",
    desc: "Clearly defined time boundaries designed to assess speed, precision, and time-management skills.",
  },
  {
    icon: "🔒",
    title: "Strict Academic Integrity",
    desc: "Rigorous invigilation protocols and transparent evaluation ensure total fairness for every child.",
  },
  {
    icon: "📊",
    title: "Diagnostic Feedback",
    desc: "Detailed report cards highlighting strong areas, weak topics, and national percentile standing.",
  },
];

export default function CompetitionStructurePage() {
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
              National Academic Blueprint &middot; Session 2026–27
            </div>
            <h1 style={{ fontFamily: "var(--display)", fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 800, color: "var(--ink)", letterSpacing: "-0.02em", marginBottom: 12 }}>
              Four-Level Competition Structure
            </h1>
            <p style={{ fontSize: 16, color: "var(--ink-dim)", lineHeight: 1.65, maxWidth: 720, margin: "0 auto" }}>
              A transparent, progressive 4-stage journey taking students from their school classroom 
              to district honours, state glory, and the national championship.
            </p>
          </div>
        </div>
      </section>

      {/* Fee & Structure Note */}
      <section style={{ paddingTop: 64, paddingBottom: 64 }}>
        <div className="wrap">
          <div style={{ maxWidth: 840, margin: "0 auto 48px", textAlign: "center" }}>
            <div className="section-eyebrow" style={{ justifyContent: "center" }}>Transparent Pathway</div>
            <h2 style={{ fontFamily: "var(--display)", fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 800, color: "var(--ink)", letterSpacing: "-0.02em", marginBottom: 16 }}>
              How The 4-Tier Progression Works
            </h2>
            <p style={{ fontSize: 16.5, color: "var(--ink-dim)", lineHeight: 1.7 }}>
              The registration fee is fixed at <strong>₹80 per subject per student</strong>. Every participant begins at Round 1 
              in their school, and top achievers earn their way through District, State, and National stages.
            </p>
          </div>

          {/* 4 Rounds Grid */}
          <div className="oi-rounds-grid" style={{ maxWidth: 1100, margin: "0 auto 48px" }}>
            {competitionRounds.map((r) => (
              <div key={r.round} className="oi-round-card">
                <div className="oi-round-header" style={{ borderColor: r.color }}>
                  <div className="oi-round-tag" style={{ background: r.color }}>{r.round}</div>
                  <div className="oi-round-level">{r.level}</div>
                  <div className="oi-round-mode">{r.mode}</div>
                </div>
                <p style={{ fontSize: 13.5, color: "var(--muted)", marginBottom: 14, fontStyle: "italic" }}>
                  {r.summary}
                </p>
                <ul className="oi-round-points">
                  {r.points.map((pt, i) => (
                    <li key={i}>{pt}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Key Features Grid */}
          <div style={{ textAlign: "center", maxWidth: 780, margin: "0 auto 36px" }}>
            <div className="section-eyebrow" style={{ justifyContent: "center" }}>Examination Standards</div>
            <h3 style={{ fontFamily: "var(--display)", fontSize: 28, fontWeight: 800, color: "var(--ink)" }}>
              Examination Design &amp; Guidelines
            </h3>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20, maxWidth: 1040, margin: "0 auto 56px" }}>
            {features.map((f, i) => (
              <div
                key={i}
                style={{
                  background: "#FFFFFF",
                  border: "1px solid var(--line)",
                  borderRadius: 16,
                  padding: "24px 20px",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.03)",
                }}
              >
                <div style={{ fontSize: 32, marginBottom: 10 }}>{f.icon}</div>
                <h4 style={{ fontSize: 17, fontWeight: 800, color: "var(--ink)", marginBottom: 8 }}>{f.title}</h4>
                <p style={{ fontSize: 13.5, color: "var(--ink-dim)", lineHeight: 1.55, margin: 0 }}>{f.desc}</p>
              </div>
            ))}
          </div>

          <p style={{ textAlign: "center", color: "var(--ink-dim)", fontSize: 15, fontStyle: "italic", maxWidth: 720, margin: "0 auto" }}>
            School Level → District Level → State Level → National Level.<br />
            Begin at Your School. Rise Through Your District and State. Compete for National Glory.
          </p>

          {/* Action CTAs */}
          <div style={{ textAlign: "center", marginTop: 40, display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap" }}>
            <Link href="/award-structure/" className="btn btn-secondary">
              View Award Structure &amp; Medals
            </Link>
            <Link href="/how-to-prepare/" className="btn btn-secondary">
              How to Prepare
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
