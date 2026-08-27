import Link from "next/link";

export const metadata = {
  title: "Associated Institutes & Institutional Network | India Genius Olympiad",
  description:
    "Explore the nationwide network of affiliated schools, academic councils, ISRO/STEM hubs, and institutional examination centers associated with India Genius Olympiad.",
};

const INSTITUTES_CATEGORIES = [
  {
    icon: "🏫",
    title: "School Exam Centers & Affiliated Institutions",
    badge: "500+ Institutions",
    desc: "Premier CBSE, ICSE, and State Board schools across India serving as designated Round-1 School Selection and Round-2 District assessment centers.",
    features: [
      "Dedicated school coordinator portals",
      "Offline / Paper-based MCQ test kits delivered directly",
      "Institutional diagnostic scorecards for comparative school benchmarking",
      "Annual School Academic Excellence trophies & coordinator recognitions",
    ],
  },
  {
    icon: "🚀",
    title: "ISRO & Space Science STEM Alliances",
    badge: "Space & Tech Hubs",
    desc: "Collaborative research and outreach centers fostering space science curiosity, astronomy fundamentals, and rocketry basics aligned with national achievements.",
    features: [
      "Specialized Space Science & Astronomy curriculum modules",
      "Guidance on national space science career pathways (ISRO / IN-SPACe)",
      "Astronomy club support & hands-on observation worksheets",
      "Interactive questions inspired by Chandrayaan & Aditya-L1 missions",
    ],
  },
  {
    icon: "🤖",
    title: "AI, Coding & Robotics Laboratories",
    badge: "Emerging Tech Hubs",
    desc: "Deep-tech academic laboratories curating futuristic skill rubrics in Artificial Intelligence, Machine Learning, Cyber Security, and Automation.",
    features: [
      "Algorithmic thinking and ethical hacking case studies",
      "Modern programming logic assessments for middle & senior students",
      "Practical problem-solving scenarios for real-world tech challenges",
      "Future Skills certifications endorsed by leading technology partners",
    ],
  },
  {
    icon: "🏛️",
    title: "National Pedagogy & Academic Councils",
    badge: "NEP 2020 Frameworks",
    desc: "Eminent educator committees and curriculum bodies ensuring every Olympiad assessment adheres to NEP 2020 experiential learning benchmarks.",
    features: [
      "Bloom's Revised Taxonomy alignment across all 6 age divisions",
      "Competency-based evaluation rather than rote memorization",
      "Continuous teacher development webinars & evaluation masterclasses",
      "Holistic report cards highlighting cognitive growth areas",
    ],
  },
];

const NETWORK_STATS = [
  { num: "500+", label: "Affiliated Schools" },
  { num: "28+", label: "States & UTs Covered" },
  { num: "100,000+", label: "Students Assessed" },
  { num: "6", label: "Age Divisions (PG–XII)" },
];

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
      {/* ── TOP HEADER / HERO ──────────────────────────────── */}
      <section className="inst-page-hero">
        <div className="wrap">
          <div style={{ marginBottom: 24 }}>
            <Link className="page-back-btn light-variant" href="/" aria-label="Back to Home" style={{ margin: 0 }}>
              <svg className="back-arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
              <span>Back to Home</span>
            </Link>
          </div>

          <div style={{ textAlign: "center", maxWidth: 860, margin: "0 auto" }}>
            <div className="section-eyebrow" style={{ justifyContent: "center", color: "var(--saffron)", marginBottom: 12 }}>
              Academic Backbone &middot; Pan-India Network
            </div>
            <h1 className="inst-page-title">
              Associated Institutes &amp; Institutional Network
            </h1>
            <p className="inst-page-desc">
              Organized under the apex patronship of the <strong>India Genius Foundation</strong> and supported by distinguished academic councils, premier school networks, and teacher development bodies across India.
            </p>

            {/* Quick Action Buttons */}
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", marginTop: 28 }}>
              <a
                className="btn btn-primary"
                href="https://forms.gle/ZLuKVuR8XXWMrToW8"
                target="_blank"
                rel="noopener noreferrer"
              >
                Register Your School ↗
              </a>
              <Link className="btn btn-ghost" href="/partner/" style={{ color: "#FFFFFF", borderColor: "rgba(255,255,255,0.3)" }}>
                View Associated Partners →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ROW ─────────────────────────────────────── */}
      <section style={{ background: "#FFFFFF", padding: "36px 0", borderBottom: "1px solid var(--line)" }}>
        <div className="wrap">
          <div className="inst-stats-grid">
            {NETWORK_STATS.map(({ num, label }) => (
              <div key={label} className="inst-stat-item">
                <div className="inst-stat-number">{num}</div>
                <div className="inst-stat-label">{label}</div>
              </div>
            ))}
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

      {/* ── INSTITUTES CATEGORIES GRID ────────────────────── */}
      <section style={{ padding: "72px 0", background: "#FFFFFF" }}>
        <div className="wrap">
          <div className="section-head" style={{ textAlign: "center", margin: "0 auto 52px", maxWidth: 760 }}>
            <div className="section-eyebrow" style={{ justifyContent: "center" }}>Network Architecture</div>
            <h2 className="section-title">The Four Pillars of Our Institutional Network</h2>
            <p className="section-desc">
              How our associated institutes, schools, and academic bodies collaborate to deliver world-class Olympiad assessments.
            </p>
          </div>

          <div className="inst-cards-grid">
            {INSTITUTES_CATEGORIES.map(({ icon, title, badge, desc, features }) => (
              <div key={title} className="inst-network-card">
                <div className="inst-card-top">
                  <div className="inst-card-icon">{icon}</div>
                  <span className="inst-card-badge">{badge}</span>
                </div>
                <h3 className="inst-card-title">{title}</h3>
                <p className="inst-card-desc">{desc}</p>
                <div className="inst-card-divider" />
                <ul className="inst-card-features">
                  {features.map((f, i) => (
                    <li key={i}>
                      <span className="inst-check-icon">✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
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
                  href="https://forms.gle/ZLuKVuR8XXWMrToW8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Register Institution (Form) ↗
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
