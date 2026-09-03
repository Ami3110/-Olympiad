import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Award & Recognition Structure — India Genius Olympiad | Session 2026",
  description:
    "Discover the inspiring 4-stage award structure of India Genius Olympiad. Celebrating participation, effort, and excellence from school-level qualifiers to the grand national podium.",
};

const AWARD_LEVELS = [
  {
    level: "School Level",
    icon: "🏫",
    stage: "Stage 01",
    subtitle: "The Foundation of Confidence",
    color: "#0D7A67",
    bg: "rgba(13, 122, 103, 0.08)",
    border: "rgba(13, 122, 103, 0.25)",
    badgeText: "Foundation Stage",
    tableRecognition:
      "Participation Certificate / School Qualifier Certificate and verified e-Certificate for 100% of participants",
    rewards: "Participation Certificate + School Qualifier Certificate + e-Certificate",
    desc: "Every young learner receives official recognition for testing their intellect. Eligible students meeting the benchmark criteria receive a School Qualifier Certificate and proudly advance to District Stage.",
    takeaway: "Courage to participate is the first victory in learning.",
  },
  {
    level: "District Level",
    icon: "🏅",
    stage: "Stage 02",
    subtitle: "Regional Intellectual Excellence",
    color: "#C1650C",
    bg: "rgba(193, 101, 12, 0.08)",
    border: "rgba(193, 101, 12, 0.25)",
    badgeText: "District Round",
    tableRecognition:
      "District Winners, Runner-ups and Merit Certificate along with Gold, Silver and Bronze Medals, as applicable",
    rewards: "District Winner & Runner-up Credentials + Gold, Silver & Bronze Medals",
    desc: "Outstanding analytical thinkers are honoured as District Winners, Runner-ups, and Merit Achievers. Awardees receive prestigious medals and official merit credentials.",
    takeaway: "Recognising top academic thinkers across regional schools.",
  },
  {
    level: "State Level",
    icon: "🏆",
    stage: "Stage 03",
    subtitle: "The Arena of State Champions",
    color: "#1E5F8A",
    bg: "rgba(30, 95, 138, 0.08)",
    border: "rgba(30, 95, 138, 0.25)",
    badgeText: "State Championship",
    tableRecognition:
      "State Winners, Runner-ups and Merit Certificate along with Gold, Silver and Bronze Medals and/or Trophies, as applicable",
    rewards: "State Championship Trophies + Gold, Silver & Bronze Medals + Merit Certificates",
    desc: "Students demonstrating state-level mastery compete among the finest minds in their state. Winners receive commemorative trophies, medals, and state merit honors.",
    takeaway: "Elevating state toppers into regional academic ambassadors.",
  },
  {
    level: "National Level",
    icon: "🥇",
    stage: "Stage 04",
    subtitle: "The Pinnacle of National Glory",
    color: "#DE5300",
    bg: "rgba(222, 83, 0, 0.08)",
    border: "rgba(222, 83, 0, 0.3)",
    badgeText: "Grand National Podium",
    tableRecognition:
      "National Champion, National Runner-ups and Merit Recognition along with Trophy and/or Medal and an Official National-Level Certificate",
    rewards: "National Champion Trophies + Prestigious Gold Medals + Official National Honor Credentials",
    desc: "The highest youth academic honor in India celebrates the top geniuses of the nation. Champions and Runner-ups are feted at a grand national ceremony.",
    takeaway: "Honouring India's brightest young minds on the grandest stage.",
  },
];

const MOMENTS = [
  {
    src: "/assets/images/parents-mentoring-child.jpg",
    tag: "Parent-Child Journey",
    title: "Nurturing Curiosity & Problem Solving at Home",
  },
  {
    src: "/assets/images/proud-parents-award.jpg",
    tag: "Family Pride",
    title: "Unforgettable Milestone with Gold Medal & Certificate",
  },
  {
    src: "/assets/images/school-assembly-awards.jpg",
    tag: "School Assembly",
    title: "Honoured in Morning Assembly Before Peers",
  },
  {
    src: "/assets/images/award-celebration-hero.jpg",
    tag: "National Podium",
    title: "India's Youngest Geniuses Feted on the Grand Stage",
  },
];

export default function AwardStructurePage() {
  return (
    <>
      {/* ====================================================
          HERO SECTION: INSPIRATIONAL & MOTIVATING SPLIT BANNER
          ==================================================== */}
      <section className="award-hero-section">
        <div className="wrap">
          {/* Breadcrumb / Back Button */}
          <div style={{ marginBottom: 20 }}>
            <Link className="page-back-btn light-variant" href="/" aria-label="Back to Home" style={{ margin: 0 }}>
              <svg className="back-arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
              <span>Back to Home</span>
            </Link>
          </div>

          <div className="award-hero-grid">
            {/* Left Content */}
            <div className="award-hero-content">
              <h1 className="award-hero-title">
                Where Effort Meets Honour. <span className="highlight-orange">Celebrating Every Genius.</span>
              </h1>
              
              <p className="award-hero-desc">
                At India Genius Foundation, we believe that true brilliance is not merely a test score—it is curiosity, perseverance, and the courage to challenge oneself. Our multi-tier award structure inspires learners and proud parents at every milestone, from classroom qualifiers to the grand national podium.
              </p>

              {/* 4 Impact Stat Cards */}
              <div className="award-hero-metrics">
                <div className="award-metric-card">
                  <span className="award-metric-val" style={{ color: "#0D7A67" }}>4 Stages</span>
                  <span className="award-metric-lbl">Progressive Pathway</span>
                </div>
                <div className="award-metric-card">
                  <span className="award-metric-val" style={{ color: "#C1650C" }}>100%</span>
                  <span className="award-metric-lbl">Participation Verified</span>
                </div>
                <div className="award-metric-card">
                  <span className="award-metric-val" style={{ color: "#1E5F8A" }}>Gold/Silver</span>
                  <span className="award-metric-lbl">Medals &amp; Trophies</span>
                </div>
                <div className="award-metric-card">
                  <span className="award-metric-val" style={{ color: "#DE5300" }}>National</span>
                  <span className="award-metric-lbl">Podium Recognition</span>
                </div>
              </div>
            </div>

            {/* Right Hero Image Showcase */}
            <div className="award-hero-media-box">
              <img
                src="/assets/images/award-celebration-hero.jpg"
                alt="Triumphant Indian Olympiad Champions on Stage with Gold Medals and Trophies"
                className="award-hero-img"
                loading="eager"
              />
              <div className="award-hero-floating-badge">
                <span className="award-hero-badge-icon">🌟</span>
                <div>
                  <div className="award-hero-badge-title">Celebrating Young Minds of India</div>
                  <div className="award-hero-badge-sub">Inspiring future scientists, mathematicians &amp; leaders</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================
          MAIN CONTENT CONTAINER
          ==================================================== */}
      <div style={{ background: "#FFFFFF", padding: "64px 0 88px" }}>
        <div className="wrap">

          {/* ====================================================
              SPECIAL PARENT MOTIVATION SECTION: WHY PARENTS ENROLL
              ==================================================== */}
          <div className="award-parents-section">
            <div className="award-parents-grid">
              {/* Left Photo: Proud Parents embracing child with Medal & Certificate */}
              <div className="award-parents-media-box">
                <img
                  src="/assets/images/proud-parents-award.jpg"
                  alt="Proud Indian Parents celebrating their child with an Olympiad Gold Medal and Merit Certificate"
                  className="award-parents-img"
                  loading="lazy"
                />
                <div className="award-parents-floating-tag">
                  <span className="award-parents-badge-icon">💝</span>
                  <div className="award-parents-badge-text">
                    A Parent&rsquo;s Greatest Pride: Seeing Their Child Shine
                  </div>
                </div>
              </div>

              {/* Right: Persuasive Parent Message */}
              <div className="award-parents-content">
                <h2 className="award-parents-title">
                  Give Your Child the Gift of Confidence &amp; Recognition
                </h2>

                <p className="award-parents-desc">
                  As parents, our deepest wish is to see our children grow with self-belief, curiosity, and a love for learning. The India Genius Olympiad is thoughtfully designed not to create stress, but to ignite a child&rsquo;s innate potential through encouraging, competency-based challenges.
                </p>

                <div className="award-parents-pillars">
                  <div className="award-parent-pillar-item">
                    <div className="award-parent-pillar-header">
                      <span>✨</span>
                      <span>Builds Self-Belief</span>
                    </div>
                    <p className="award-parent-pillar-text">
                      Earning authentic medals and certificates instills lifelong academic confidence and pride.
                    </p>
                  </div>

                  <div className="award-parent-pillar-item">
                    <div className="award-parent-pillar-header">
                      <span>📊</span>
                      <span>Diagnostic Insight</span>
                    </div>
                    <p className="award-parent-pillar-text">
                      Parents receive a clear developmental analysis of their child&rsquo;s logical and analytical strengths.
                    </p>
                  </div>

                  <div className="award-parent-pillar-item">
                    <div className="award-parent-pillar-header">
                      <span>📜</span>
                      <span>100% Recognition</span>
                    </div>
                    <p className="award-parent-pillar-text">
                      Every participant is honoured with a verified certificate—celebrating effort and courage.
                    </p>
                  </div>

                  <div className="award-parent-pillar-item">
                    <div className="award-parent-pillar-header">
                      <span>🚀</span>
                      <span>Future Readiness</span>
                    </div>
                    <p className="award-parent-pillar-text">
                      Early Olympiad experience prepares students for future national entrance exams and scholarships.
                    </p>
                  </div>
                </div>

                {/* Parent Action Row */}
                <div style={{ display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center" }}>
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-reg-modal="student"
                    style={{ cursor: "pointer" }}
                  >
                    Register Your Child &rarr;
                  </button>
                  <span style={{ fontSize: 13, color: "#64748B", fontWeight: 600 }}>
                    Open for Pre-Primary to Class XII
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          {/* ====================================================
              SECTION 1: THE 4-STAGE PROGRESSIVE RECOGNITION PATHWAY
              ==================================================== */}
          <div style={{ marginBottom: 72 }}>
            <div style={{ textAlign: "center", maxWidth: 780, margin: "0 auto 44px" }}>
              <h2 style={{ fontFamily: "var(--display)", fontSize: "clamp(26px, 3.4vw, 38px)", fontWeight: 850, color: "#0A193B", letterSpacing: "-0.025em", margin: "0 0 12px" }}>
                Recognition at Every Level
              </h2>
              <p style={{ fontSize: 16, color: "#475569", fontWeight: 500, lineHeight: 1.65, margin: 0 }}>
                Every stage brings distinct honours, motivating students to push their boundaries and unlock their highest potential.
              </p>
            </div>

            <div className="award-stages-container">
              {AWARD_LEVELS.map((item) => (
                <div
                  key={item.level}
                  className="award-stage-card-v2"
                  style={{ borderColor: item.border }}
                >
                  <div className="award-stage-top-strip" style={{ background: item.color }} />
                  
                  <span className="award-stage-pill" style={{ color: item.color, background: item.bg, border: `1px solid ${item.border}` }}>
                    {item.badgeText}
                  </span>

                  <div className="award-stage-icon-circle" style={{ background: item.bg, color: item.color, border: `1px solid ${item.border}` }}>
                    {item.icon}
                  </div>

                  <h3 className="award-stage-card-title">{item.level}</h3>

                  <div className="award-stage-card-rewards">
                    <span className="award-stage-rewards-title">Awards &amp; Honours</span>
                    <p className="award-stage-rewards-desc">{item.rewards}</p>
                  </div>

                  <p className="award-stage-card-body">
                    {item.desc}
                  </p>

                  <div style={{ marginTop: 16, paddingTop: 14, borderTop: "1px dashed rgba(20,23,42,0.1)", fontSize: 13, fontWeight: 700, color: item.color, fontStyle: "italic" }}>
                    &ldquo;{item.takeaway}&rdquo;
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ====================================================
              SECTION 2: FEATURE SHOWCASE — THE ANATOMY OF RECOGNITION
              ==================================================== */}
          <div style={{ marginBottom: 72 }}>
            <div className="award-showcase-wrap">
              <div className="award-showcase-grid">
                {/* Left: Medals Showcase Image */}
                <div className="award-showcase-img-box">
                  <img
                    src="/assets/images/award-medals-showcase.jpg"
                    alt="Prestigious Olympiad Gold Medals, Championship Trophy, and Certificate"
                    className="award-showcase-img"
                    loading="lazy"
                  />
                </div>

                {/* Right: Feature Highlights */}
                <div>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(230,90,0,0.22)", border: "1px solid rgba(230,90,0,0.45)", borderRadius: 100, padding: "5px 14px", color: "#FF8C42", fontSize: 12, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 14 }}>
                    <span>✨</span>
                    <span>Symbols of Merit &amp; Excellence</span>
                  </div>
                  
                  <h3 style={{ fontFamily: "var(--display)", fontSize: "clamp(24px, 2.8vw, 34px)", fontWeight: 850, color: "#FFFFFF", letterSpacing: "-0.02em", marginBottom: 14 }}>
                    Crafted to Inspire Lifelong Ambition
                  </h3>
                  
                  <p style={{ fontSize: 15.5, color: "rgba(255,255,255,0.85)", lineHeight: 1.65, fontWeight: 450, marginBottom: 24 }}>
                    Every medal, trophy, and certificate awarded by India Genius Foundation is designed with the highest standards of distinction to serve as a lasting testament to a student’s hard work.
                  </p>

                  <div className="award-showcase-features">
                    <div className="award-feature-item">
                      <span className="award-feature-icon">🥇</span>
                      <h4 className="award-feature-heading">Medals of Distinction</h4>
                      <p className="award-feature-text">High-density Gold, Silver, and Bronze medals recognizing district, state, and national rank holders.</p>
                    </div>

                    <div className="award-feature-item">
                      <span className="award-feature-icon">📜</span>
                      <h4 className="award-feature-heading">Authenticated Certificates</h4>
                      <p className="award-feature-text">QR-verifiable official certificates of participation, merit, and school qualification.</p>
                    </div>

                    <div className="award-feature-item">
                      <span className="award-feature-icon">🏆</span>
                      <h4 className="award-feature-heading">Championship Trophies</h4>
                      <p className="award-feature-text">Grand sculpted trophies presented to state champions, national toppers, and exemplary partner schools.</p>
                    </div>

                    <div className="award-feature-item">
                      <span className="award-feature-icon">📊</span>
                      <h4 className="award-feature-heading">Diagnostic Analytics</h4>
                      <p className="award-feature-text">Comprehensive skill-wise percentile reports identifying individual strengths and growth areas.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ====================================================
              SECTION 3: CLEAN BLUEPRINT TABLE
              ==================================================== */}
          <div style={{ maxWidth: 1200, margin: "0 auto 72px" }}>
            <div style={{ textAlign: "center", maxWidth: 700, margin: "0 auto 32px" }}>
              <h3 style={{ fontFamily: "var(--display)", fontSize: "clamp(22px, 2.6vw, 30px)", fontWeight: 800, color: "#0A193B", letterSpacing: "-0.015em" }}>
                Stage-Wise Recognition Summary
              </h3>
            </div>

            <div className="award-clean-table-card">
              <div className="award-clean-table-header">
                <span className="col-level">Level</span>
                <span className="col-recog">Recognition &amp; Entitlement</span>
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

          {/* ====================================================
              SECTION 4: PHOTO GALLERY — INSPIRING MOMENTS OF LEARNING & CELEBRATION
              ==================================================== */}
          <div style={{ marginBottom: 72 }}>
            <div style={{ textAlign: "center", maxWidth: 740, margin: "0 auto 36px" }}>
              <h3 style={{ fontFamily: "var(--display)", fontSize: "clamp(24px, 2.8vw, 34px)", fontWeight: 850, color: "#0A193B", letterSpacing: "-0.02em" }}>
                Inspiring Journey: From Home Practice to National Honor
              </h3>
              <p style={{ fontSize: 15.5, color: "#475569", fontWeight: 500, lineHeight: 1.6, margin: "8px 0 0" }}>
                Witness how parental support and student dedication turn into cherished milestones across India.
              </p>
            </div>

            <div className="award-gallery-grid">
              {MOMENTS.map((m, idx) => (
                <div key={idx} className="award-gallery-card">
                  <div className="award-gallery-img-wrap">
                    <img
                      src={m.src}
                      alt={m.title}
                      className="award-gallery-img"
                      loading="lazy"
                    />
                  </div>
                  <div className="award-gallery-meta">
                    <span className="award-gallery-tag">{m.tag}</span>
                    <h4 className="award-gallery-caption">{m.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ====================================================
              SECTION 5: PHILOSOPHICAL COMMITMENT & CALL TO ACTION
              ==================================================== */}
          <div style={{ maxWidth: 1120, margin: "0 auto" }}>
            <div className="award-commitment-box">
              <h3 className="award-commitment-title">
                Our Commitment to Every Learner &amp; Parent
              </h3>
              
              <p className="award-commitment-text">
                Our award structure is intended not only to honour winners but also to inspire every student and family to continue questioning, learning, improving, and striving for excellence in life.
              </p>
              
              <div className="award-quote-badge">
                <p className="award-quote-text">
                  &ldquo;Every Participation Matters. Every Achievement Deserves Recognition. Every Talent Has the Potential to Shine.&rdquo;
                </p>
              </div>

              {/* Instant Action Triggers */}
              <div className="award-action-btns-row">
                <button
                  type="button"
                  className="btn btn-primary"
                  data-reg-modal="student"
                  style={{ cursor: "pointer" }}
                >
                  Student Registration &rarr;
                </button>
                <button
                  type="button"
                  className="btn btn-teal"
                  data-reg-modal="school"
                  style={{ cursor: "pointer" }}
                >
                  School Registration &rarr;
                </button>
                <Link
                  href="/what-is-igo/"
                  className="btn btn-ghost"
                >
                  Explore Olympiad Subjects &rarr;
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
