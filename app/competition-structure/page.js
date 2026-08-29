import React from "react";

export const metadata = {
  title: "Competition Structure — India Genius Olympiad | Session 2026",
  description:
    "The India Genius Foundation follows a structured, progressive four-level competition system designed to identify and recognise talented students at the School, District, State and National Levels.",
};

const ROUNDS_DATA = [
  {
    roundNum: "ROUND 1",
    title: "SCHOOL SELECTION ROUND",
    mode: "Offline | Within School",
    icon: "🏫",
    color: "#E65A00",
    bg: "rgba(230, 90, 0, 0.04)",
    border: "rgba(230, 90, 0, 0.2)",
    summary:
      "The competition begins at the participating school, where students compete within their respective classes or prescribed age categories.",
    features: [
      "Conducted at individual participating schools.",
      "Students participate in their respective class, age group and category.",
      "Objective and MCQ-based examination or assessment.",
      "Questions are designed according to the prescribed syllabus, subject and competition category.",
      "Performance is evaluated according to the applicable marking and ranking criteria.",
      "Schools identify and select their top-performing students.",
      "Eligible top performers qualify to advance to the District Level.",
    ],
  },
  {
    roundNum: "ROUND 2",
    title: "DISTRICT LEVEL",
    mode: "Offline | Inter-School Competition",
    icon: "🥇",
    color: "#0A6EBD",
    bg: "rgba(10, 110, 189, 0.04)",
    border: "rgba(10, 110, 189, 0.2)",
    summary:
      "Qualified students from participating schools compete with students from other schools within their respective districts.",
    features: [
      "Conducted district-wise at designated venues or participating institutions.",
      "Students compete with qualified participants from different schools.",
      "Competition is conducted within the same subject and prescribed age or class category.",
      "Performance is evaluated through district-level ranking.",
      "Outstanding performers are recognised as District Winners, Runner-ups and Merit Achievers, as applicable.",
      "Eligible District Winners qualify to advance to the State Level.",
    ],
  },
  {
    roundNum: "ROUND 3",
    title: "STATE LEVEL",
    mode: "Offline | District Winners",
    icon: "🏆",
    color: "#0D7A67",
    bg: "rgba(13, 122, 103, 0.04)",
    border: "rgba(13, 122, 103, 0.2)",
    summary:
      "District-level winners progress to represent their respective schools and districts at the State Level.",
    features: [
      "Participation is open to eligible qualifiers from the District Level.",
      "District Winners represent their respective schools and districts.",
      "Competitions are conducted according to prescribed subjects, groups and age or class categories.",
      "Performance is evaluated through state-level ranking.",
      "Outstanding performers are recognised as State Winners, Runner-ups and Merit Achievers, as applicable.",
      "Eligible State Winners qualify to advance to the National Level.",
    ],
  },
  {
    roundNum: "ROUND 4",
    title: "NATIONAL LEVEL",
    mode: "Offline | State Winners",
    icon: "👑",
    color: "#8B1A1A",
    bg: "rgba(139, 26, 26, 0.04)",
    border: "rgba(139, 26, 26, 0.2)",
    summary:
      "The National Level brings together the finest performers from different states of India for the final stage of the competition.",
    features: [
      "Participation is open to eligible State Winners and qualifiers.",
      "Students represent their respective states at the national competition.",
      "Competition is conducted across prescribed subjects and age or class categories.",
      "Participants compete for national rankings and prestigious recognition.",
      "Top performers are recognised as National Champion, National Runner-up and National Merit Achievers.",
      "Awardees receive National-Level Certificates, Medals and/or Trophies, along with other recognition as applicable.",
    ],
  },
];

export default function CompetitionStructurePage() {
  return (
    <>
      {/* Top Header */}
      <section style={{ paddingTop: 36, paddingBottom: 24, background: "var(--bg-elev)", borderBottom: "1px solid var(--line)" }}>
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
              National Academic Blueprint &middot; Session 2026
            </div>
            <h1 style={{ fontFamily: "var(--display)", fontSize: "clamp(30px, 4.2vw, 46px)", fontWeight: 850, color: "var(--ink)", letterSpacing: "-0.025em", marginBottom: 16 }}>
              Competition Structure
            </h1>
            <p style={{ fontSize: 16, color: "#1E293B", fontWeight: 550, lineHeight: 1.7, maxWidth: "100%", margin: "0 0 14px" }}>
              The India Genius Foundation follows a structured, progressive four-level competition system designed to identify and recognise talented students at the School, District, State and National Levels.
            </p>
            <p style={{ fontSize: 15.5, color: "#1E293B", fontWeight: 650, lineHeight: 1.6, maxWidth: "100%", margin: 0 }}>
              Students progress through successive stages based on their performance, giving them the opportunity to compete with learners from their own school, district, state and eventually from across India.
            </p>
          </div>
        </div>
      </section>

      {/* 4 Progressive Rounds Section */}
      <section style={{ padding: "64px 0 80px", background: "#FFFFFF" }}>
        <div className="wrap">
          
          <div className="comp-rounds-grid">
            {ROUNDS_DATA.map((r) => (
              <div
                key={r.roundNum}
                className="comp-round-card"
                style={{ borderTop: `4px solid ${r.color}` }}
              >
                <div className="comp-round-card-header">
                  <div className="comp-round-badge-row">
                    <span className="comp-round-pill" style={{ background: r.color }}>
                      {r.roundNum}
                    </span>
                    <span className="comp-round-mode-tag" style={{ color: r.color, borderColor: r.border, background: r.bg }}>
                      {r.icon} {r.mode}
                    </span>
                  </div>
                  <h2 className="comp-round-card-title">{r.title}</h2>
                  <p className="comp-round-summary">{r.summary}</p>
                </div>

                <div className="comp-features-box">
                  <h3 className="comp-features-heading">Key Features:</h3>
                  <ul className="comp-features-list">
                    {r.features.map((feat, i) => (
                      <li key={i}>
                        <span className="comp-feature-bullet" style={{ color: r.color }}>&bull;</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* The Journey of Excellence Box */}
          <div style={{ maxWidth: 1120, margin: "64px auto 0" }}>
            <div className="comp-journey-box">
              <h2 className="comp-journey-title">
                The Journey of Excellence
              </h2>
              
              {/* Stepper Breadcrumb */}
              <div className="comp-stepper-row">
                <span className="comp-step-item">School Level</span>
                <span className="comp-step-arrow">&rarr;</span>
                <span className="comp-step-item">District Level</span>
                <span className="comp-step-arrow">&rarr;</span>
                <span className="comp-step-item">State Level</span>
                <span className="comp-step-arrow">&rarr;</span>
                <span className="comp-step-item comp-step-highlight">National Level</span>
              </div>

              <p className="comp-journey-text">
                Every round provides students with a new opportunity to challenge themselves, demonstrate their knowledge and skills, and progress towards higher levels of achievement.
              </p>

              <div className="comp-quote-badge">
                <p className="comp-quote-text">
                  &ldquo;Begin at Your School. Rise Through Your District and State. Compete for National Glory.&rdquo;
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
