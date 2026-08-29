import React from "react";

export const metadata = {
  title: "Award Structure — India Genius Olympiad | Session 2026–27",
  description:
    "At India Genius Foundation, our award structure is designed to motivate students at every stage of their journey, from school-level participation to national-level achievement.",
};

const AWARD_LEVELS = [
  {
    level: "School Level",
    icon: "🏫",
    stage: "Stage 01",
    color: "#0D7A67",
    bg: "rgba(13, 122, 103, 0.05)",
    border: "rgba(13, 122, 103, 0.2)",
    tableRecognition:
      "Participation Certificate / School Qualifier Certificate and e-Certificate for all participants",
    desc: "Every participant receives recognition for taking part in the programme. Eligible students who meet the required performance criteria may receive a School Qualifier Certificate and advance to the next stage, wherever applicable.",
  },
  {
    level: "District Level",
    icon: "🏅",
    stage: "Stage 02",
    color: "#C1650C",
    bg: "rgba(193, 101, 12, 0.05)",
    border: "rgba(193, 101, 12, 0.2)",
    tableRecognition:
      "District Winners, Runner-ups and Merit Certificate along with Gold, Silver and Bronze Medals, as applicable",
    desc: "Outstanding performers are recognised as District Winners, Runner-ups and Merit Achievers. Eligible awardees receive certificates and Gold, Silver or Bronze Medals, according to their performance and ranking.",
  },
  {
    level: "State Level",
    icon: "🏆",
    stage: "Stage 03",
    color: "#1E5F8A",
    bg: "rgba(30, 95, 138, 0.05)",
    border: "rgba(30, 95, 138, 0.2)",
    tableRecognition:
      "State Winners, Runner-ups and Merit Certificate along with Gold, Silver and Bronze Medals and/or Trophies, as applicable",
    desc: "Students demonstrating exceptional performance at the state stage are recognised as State Winners, Runner-ups and Merit Achievers. Awardees may receive certificates along with Gold, Silver or Bronze Medals and/or Trophies.",
  },
  {
    level: "National Level",
    icon: "🥇",
    stage: "Stage 04",
    color: "#DE5300",
    bg: "rgba(222, 83, 0, 0.05)",
    border: "rgba(222, 83, 0, 0.25)",
    tableRecognition:
      "National Champion, National Runner-ups and Merit Recognition along with Trophy and/or Medal and an Official National-Level Certificate",
    desc: "The highest level of recognition celebrates India's outstanding young achievers. Top performers are honoured as National Champions, National Runner-ups and Merit Achievers and receive prestigious National-Level Certificates, Trophies and/or Medals.",
  },
];

export default function AwardStructurePage() {
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
              National Academic Blueprint &middot; Session 2026–27
            </div>
            <h1 style={{ fontFamily: "var(--display)", fontSize: "clamp(30px, 4.2vw, 46px)", fontWeight: 850, color: "var(--ink)", letterSpacing: "-0.025em", marginBottom: 16 }}>
              Award Structure
            </h1>
            <p style={{ fontSize: 16, color: "#1E293B", fontWeight: 550, lineHeight: 1.7, maxWidth: "100%", margin: "0 0 14px" }}>
              At India Genius Foundation, we believe that every learner deserves recognition for participation, effort, achievement and excellence. Our award structure is designed to motivate students at every stage of their journey, from school-level participation to national-level achievement.
            </p>
            <p style={{ fontSize: 15.5, color: "#1E293B", fontWeight: 650, lineHeight: 1.6, maxWidth: "100%", margin: 0 }}>
              Recognition is provided across different levels to celebrate knowledge, talent, dedication and outstanding performance.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section style={{ padding: "64px 0 80px", background: "#FFFFFF" }}>
        <div className="wrap">
          
          {/* Level & Recognition Table */}
          <div style={{ maxWidth: 1200, margin: "0 auto 64px" }}>
            <div className="award-clean-table-card">
              <div className="award-clean-table-header">
                <span className="col-level">Level</span>
                <span className="col-recog">Recognition</span>
              </div>
              <div className="award-clean-table-body">
                {AWARD_LEVELS.map((item) => (
                  <div key={item.level} className="award-clean-table-row">
                    <div className="col-level">
                      <span className="row-icon" aria-hidden="true">{item.icon}</span>
                      <div>
                        <strong className="row-level-name">{item.level}</strong>
                        <span className="row-stage-tag" style={{ color: item.color, borderColor: item.border, background: item.bg }}>
                          {item.stage}
                        </span>
                      </div>
                    </div>
                    <div className="col-recog">
                      <p className="row-recog-text">{item.tableRecognition}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Section: Recognition at Every Level */}
          <div style={{ maxWidth: 1240, margin: "0 auto 64px" }}>
            <div style={{ textAlign: "center", marginBottom: 36 }}>
              <h2 style={{ fontFamily: "var(--display)", fontSize: "clamp(24px, 3.2vw, 36px)", fontWeight: 800, color: "var(--ink)", letterSpacing: "-0.02em" }}>
                Recognition at Every Level
              </h2>
            </div>

            <div className="award-levels-grid">
              {AWARD_LEVELS.map((item) => (
                <div
                  key={item.level}
                  className="award-level-card"
                  style={{
                    borderLeft: `4px solid ${item.color}`,
                  }}
                >
                  <div className="award-level-card-top">
                    <div className="award-level-icon-badge" style={{ background: item.bg, border: `1px solid ${item.border}` }}>
                      <span style={{ fontSize: 24 }}>{item.icon}</span>
                    </div>
                    <div>
                      <h3 className="award-level-card-title">{item.level}</h3>
                      <span className="award-level-card-stage" style={{ color: item.color }}>{item.stage}</span>
                    </div>
                  </div>
                  <p className="award-level-card-desc">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Our Commitment to Recognition */}
          <div style={{ maxWidth: 1120, margin: "0 auto" }}>
            <div className="award-commitment-box">
              <h3 className="award-commitment-title">
                Our Commitment to Recognition
              </h3>
              <p className="award-commitment-text">
                Our award structure is intended not only to honour winners but also to encourage every participant to continue learning, improving and striving for excellence.
              </p>
              
              <div className="award-quote-badge">
                <p className="award-quote-text">
                  &ldquo;Every Participation Matters. Every Achievement Deserves Recognition. Every Talent Has the Potential to Shine.&rdquo;
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
