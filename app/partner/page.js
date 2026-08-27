export const metadata = {
  title: "Institutional Partners | India Genius Olympiad",
  description:
    "Explore the strategic, academic, and technology partners powering India Genius Olympiad across emerging technologies, pedagogy, and student assessment.",
};

const PARTNERS_LIST = [
  {
    img: "/assets/images/rishi-kant-upadhyaya.jpg",
    name: "Deep Connection Innovation",
    designation: "Co-Founding Technology Partner",
    role: "Architects of the next-generation digital Olympiad engine, high-capacity student portals, automated result processing, and AI-enabled diagnostic assessment rubrics.",
    tag: "Technology Lead",
    focus: "AI Infrastructure & Digital Testing",
  },
  {
    img: "/assets/images/robotics-stem-kids.jpg",
    name: "AI & Robotics Learning Ecosystem",
    designation: "Emerging Technologies Partner",
    role: "Curriculum advisors structuring age-appropriate algorithms, machine learning basics, computer vision logic, and experiential robotics problem sets for junior and senior divisions.",
    tag: "AI Curriculum Lead",
    focus: "Robotics, Algorithms & AI",
  },
  {
    img: "/assets/images/girl-studying-laptop.jpg",
    name: "Digital Safety & Ethics Alliance",
    designation: "Cyber Safety & Wellbeing Partner",
    role: "Advancing digital literacy, cyber hygiene, network ethics, and responsible AI usage benchmarks for modern school students in an increasingly interconnected world.",
    tag: "Cyber Security Lead",
    focus: "Cyber Ethics & Digital Hygiene",
  },
  {
    img: "/assets/images/young-genius.jpg",
    name: "Youth Financial Education Network",
    designation: "Financial Literacy & Economics Partner",
    role: "Crafting real-world financial decision-making tests, budgeting simulations, investment fundamentals, and practical commerce problems for young students.",
    tag: "Financial Literacy Lead",
    focus: "Applied Finance & Commerce",
  },
  {
    img: "/assets/images/kids-coding-stem.jpg",
    name: "Space Science & STEM Council",
    designation: "Scientific Outreach Partner",
    role: "Inspiring scientific discovery through space exploration heritage, astronomy fundamentals, satellite physics, and aerospace thinking designed in the spirit of ISRO achievements.",
    tag: "STEM Innovation",
    focus: "Space Science & Astronomy",
  },
  {
    img: "/assets/images/kids-science-collab.jpg",
    name: "Cognitive Pedagogy Board",
    designation: "Academic Advisory Partner",
    role: "Ensuring question papers adhere strictly to NEP 2020 pedagogical norms, Bloom's Revised Taxonomy, and diagnostic understanding rather than rote memorization.",
    tag: "Quality Benchmarks",
    focus: "Pedagogy & NEP 2020 Norms",
  },
];

const COLLAB_PILLARS = [
  {
    icon: "🔬",
    title: "Curriculum & Question Design",
    desc: "Domain experts develop experiential question banks rooted in real-world applications, cognitive reasoning, and NEP 2020 guidelines.",
  },
  {
    icon: "💻",
    title: "Secure Technology Infrastructure",
    desc: "Robust cloud architecture and proctored assessment modules providing seamless access for hundreds of thousands of candidates.",
  },
  {
    icon: "🏫",
    title: "Pan-India School Outreach",
    desc: "India Genius Foundation connects school principals, academic leaders, and educators for national-scale impact.",
  },
];

export default function PartnerPage() {
  return (
    <>
      {/* Top Header Section with Back Button */}
      <section style={{ paddingTop: 32, paddingBottom: 32 }}>
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

          <div style={{ textAlign: "center", maxWidth: 840, margin: "0 auto 16px" }}>
            <div className="section-eyebrow" style={{ justifyContent: "center", marginBottom: 12 }}>
              Strategic Alliances &middot; Session 2026&ndash;27
            </div>
            <h1 style={{ fontFamily: "var(--display)", fontSize: "clamp(30px, 4vw, 46px)", fontWeight: 800, color: "var(--ink)", letterSpacing: "-0.02em", marginBottom: 14 }}>
              Our Institutional &amp; Knowledge Partners
            </h1>
            <p style={{ fontSize: 16, color: "var(--ink-dim)", lineHeight: 1.65, maxWidth: 740, margin: "0 auto" }}>
              Collaborating with visionary organizations across deep technology, digital safety, applied finance, and experiential education to empower school students across India.
            </p>
          </div>
        </div>
      </section>

      {/* Main Partners Grid */}
      <section style={{ paddingTop: 16, paddingBottom: 64 }}>
        <div className="wrap">
          <div className="partner-page-grid">
            {PARTNERS_LIST.map(({ img, name, designation, role, tag, focus }) => (
              <div key={name} className="partner-full-card">
                <div className="partner-full-img-wrap">
                  <img src={img} alt={name} className="partner-full-img" />
                  <div className="partner-full-img-overlay" />
                  <div className="partner-full-badge">{tag}</div>
                </div>
                <div className="partner-full-body">
                  <div className="partner-full-focus">{focus}</div>
                  <h3 className="partner-full-name">{name}</h3>
                  <div className="partner-full-desig">{designation}</div>
                  <p className="partner-full-role">{role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration Pillars */}
      <section style={{ background: "var(--bg-elev)", paddingTop: 54, paddingBottom: 54 }}>
        <div className="wrap">
          <div className="section-head" style={{ textAlign: "center", margin: "0 auto 40px", maxWidth: 720 }}>
            <div className="section-eyebrow" style={{ justifyContent: "center" }}>Co-Creation Framework</div>
            <h2 className="section-title">How We Partner for Educational Impact</h2>
            <p className="section-desc">
              Every partnership is structured to enrich student learning outcomes and equip schools with modern cognitive assessment tools.
            </p>
          </div>

          <div className="partner-pillars-grid">
            {COLLAB_PILLARS.map(({ icon, title, desc }) => (
              <div key={title} className="partner-pillar-card">
                <div className="partner-pillar-icon">{icon}</div>
                <h4 className="partner-pillar-title">{title}</h4>
                <p className="partner-pillar-desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner with Us CTA Banner */}
      <section style={{ paddingTop: 54, paddingBottom: 72 }}>
        <div className="wrap">
          <div className="partner-cta-card">
            <div className="partner-cta-content">
              <span className="partner-cta-eyebrow">Institutional Alliances</span>
              <h2 className="partner-cta-title">Become an Official Partner</h2>
              <p className="partner-cta-desc">
                Are you an educational institution, industry leader, STEM organization, or pedagogical council? Partner with India Genius Olympiad to co-create futuristic learning pathways for Indian students.
              </p>
              <div className="partner-cta-actions">
                <a
                  className="btn btn-primary"
                  href="https://forms.gle/tt83cHHLN2n4B7YR6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apply for Partnership ↗
                </a>
                <a className="btn btn-ghost" href="/contact-us/">
                  Contact Secretariat
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
