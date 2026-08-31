import Link from "next/link";

export const metadata = {
  title: "Associated Institutes & Institutional Network | India Genius Olympiad",
  description:
    "Explore the nationwide network of affiliated schools, academic councils, ISRO/STEM hubs, and institutional examination centers associated with India Genius Olympiad.",
};

const MARQUEE_ITEMS = [
  { img: "/assets/images/aipa-logo.png", title: "India Genius Foundation", sub: "National Patron" },
  { img: "/assets/images/indian-students-classroom.jpg", title: "School Exam Centers", sub: "500+ Affiliated Schools" },
  { img: "/assets/images/robotics-stem-kids.jpg", title: "Space & STEM Hubs", sub: "ISRO / STEM Alliances" },
  { img: "/assets/images/student-champions.jpg", title: "National Rankers", sub: "Grand Finale Qualifiers" },
  { img: "/assets/images/kids-coding-stem.jpg", title: "AI & Coding Labs", sub: "Emerging Tech Arena" },
  { img: "/assets/images/school-assembly-awards.jpg", title: "District Merit Awards", sub: "Inter-School Rounds" },
  { img: "/assets/images/young-genius.jpg", title: "Diagnostic Evaluations", sub: "Young Genius Network" },
  { img: "/assets/images/kids-science-collab.jpg", title: "Pedagogy Board", sub: "NEP 2020 Frameworks" },
  { img: "/assets/images/student-achievement.jpg", title: "National Felicitations", sub: "State & National Merit" },
  { img: "/assets/images/girl-studying-laptop.jpg", title: "Digital Test Portal", sub: "Pan-India Access" },
  { img: "/assets/images/aipa-logo.png", title: "India Genius Foundation", sub: "National Patron" },
  { img: "/assets/images/indian-students-classroom.jpg", title: "School Exam Centers", sub: "500+ Affiliated Schools" },
  { img: "/assets/images/robotics-stem-kids.jpg", title: "Space & STEM Hubs", sub: "ISRO / STEM Alliances" },
  { img: "/assets/images/student-champions.jpg", title: "National Rankers", sub: "Grand Finale Qualifiers" },
  { img: "/assets/images/kids-coding-stem.jpg", title: "AI & Coding Labs", sub: "Emerging Tech Arena" },
  { img: "/assets/images/school-assembly-awards.jpg", title: "District Merit Awards", sub: "Inter-School Rounds" },
  { img: "/assets/images/young-genius.jpg", title: "Diagnostic Evaluations", sub: "Young Genius Network" },
  { img: "/assets/images/kids-science-collab.jpg", title: "Pedagogy Board", sub: "NEP 2020 Frameworks" },
  { img: "/assets/images/student-achievement.jpg", title: "National Felicitations", sub: "State & National Merit" },
  { img: "/assets/images/girl-studying-laptop.jpg", title: "Digital Test Portal", sub: "Pan-India Access" },
];

export default function AssociatedInstitutesPage() {
  return (
    <>
      {/* Minimal Header */}
      <section style={{ paddingTop: 36, paddingBottom: 28 }}>
        <div className="wrap">
          <div style={{ marginBottom: 20 }}>
            <Link className="page-back-btn light-variant" href="/" aria-label="Back to Home" style={{ margin: 0 }}>
              <svg className="back-arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
              <span>Back to Home</span>
            </Link>
          </div>

          <div style={{ textAlign: "left", maxWidth: 1300, margin: 0 }}>
            <div className="section-eyebrow" style={{ justifyContent: "flex-start", marginBottom: 12 }}>
              Academic Backbone &middot; Pan-India Network
            </div>
            <h1 style={{ fontFamily: "var(--display)", fontSize: "clamp(30px, 4.2vw, 46px)", fontWeight: 850, color: "var(--ink)", letterSpacing: "-0.025em", marginBottom: 16 }}>
              Associated Institutes &amp; Institutional Network
            </h1>
            <p style={{ fontSize: 16, color: "var(--ink-dim)", lineHeight: 1.7, maxWidth: "100%", margin: 0 }}>
              Organized under the apex patronship of the <strong>India Genius Foundation</strong> and supported by distinguished academic councils, premier school networks, and teacher development bodies across India.
            </p>
          </div>
        </div>
      </section>

      {/* ── INFINITE MARQUEE SHOWCASE ─────────────────────── */}
      <section style={{ background: "var(--bg-elev)", padding: "54px 0", borderBottom: "1px solid var(--line)" }}>
        <div className="wrap" style={{ marginBottom: 28 }}>
          <div className="section-head" style={{ textAlign: "center", margin: "0 auto", maxWidth: 680 }}>
            <div className="section-eyebrow" style={{ justifyContent: "center" }}>Institutional Presence</div>
            <h2 className="section-title">Pan-India Educational Footprint</h2>
            <p className="section-desc">
              Connecting premier learning hubs, certified test centers, and merit rankers across the country.
            </p>
          </div>
        </div>

        <div className="inst-marquee-wrap">
          <div className="inst-marquee-track">
            {MARQUEE_ITEMS.map((item, idx) => (
              <div key={idx} className="inst-float-item">
                <div className="inst-float-avatar">
                  <img src={item.img} alt={item.title} loading="lazy" />
                </div>
                <div className="inst-float-info">
                  <span className="inst-float-title">{item.title}</span>
                  <span className="inst-float-sub">{item.sub}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW SCHOOLS AFFILIATE ─────────────────────────── */}
      <section style={{ background: "var(--bg-elev)", padding: "72px 0", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
        <div className="wrap">
          <div className="section-head" style={{ textAlign: "center", margin: "0 auto 48px", maxWidth: 720 }}>
            <div className="section-eyebrow" style={{ justifyContent: "center" }}>Institutional Onboarding</div>
            <h2 className="section-title">How Your School Can Join the Network</h2>
            <p className="section-desc">
              A streamlined, zero-hassle affiliation process for school principals, headmasters, and exam coordinators.
            </p>
          </div>

          <div className="inst-steps-grid">
            {[
              {
                step: "01",
                title: "Register Your Institution",
                desc: "Complete the online School Registration Form with school details and designated teacher coordinator contact.",
              },
              {
                step: "02",
                title: "Receive Exam Kits & Materials",
                desc: "India Genius Foundation ships official syllabus guides, sample papers, and candidate registration sheets.",
              },
              {
                step: "03",
                title: "Conduct School Round (Round 1)",
                desc: "Host the objective MCQ examination comfortably within your school premises during the designated testing window.",
              },
              {
                step: "04",
                title: "Diagnostic Reports & Awards",
                desc: "Receive comprehensive student diagnostic reports, school merit ranking, certificates, medals, and district qualifier lists.",
              },
            ].map(({ step, title, desc }) => (
              <div key={step} className="inst-step-card">
                <div className="inst-step-num">{step}</div>
                <h4 className="inst-step-title">{title}</h4>
                <p className="inst-step-desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INSTITUTIONAL AFFILIATION CTA ─────────────────── */}
      <section style={{ padding: "72px 0" }}>
        <div className="wrap">
          <div className="inst-cta-card">
            <div className="inst-cta-inner">
              <span className="inst-cta-badge">Institutional Affiliation &middot; Session 2026&ndash;27</span>
              <h2 className="inst-cta-title">Affiliate Your School or Academic Institute Today</h2>
              <p className="inst-cta-desc">
                Give your students a prestigious national platform to discover their academic genius. Join 500+ partner schools and learning centers across India.
              </p>
              <div className="inst-cta-btn-group">
                <a
                  className="btn btn-primary"
                  href="/registration/?tab=school"
                >
                  Register Institution ➔
                </a>
                <Link className="btn btn-ghost" href="/contact-us/" style={{ color: "#FFFFFF", borderColor: "rgba(255,255,255,0.35)" }}>
                  Contact School Coordinator Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
