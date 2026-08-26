export const metadata = {
  title: "About Us & Leadership — India Genius Olympiad | AIPA",
  description:
    "Discover the mission, philosophy, academic pillars, and leadership behind India Genius Olympiad — an educational movement by the All India Principals Association (AIPA) empowering school students across India.",
};

export default function AboutPage() {
  const pillars = [
    {
      icon: "📚",
      title: "Academic Rigour",
      desc: "Deep conceptual mastery in Science, Mathematics, English, and Social Studies, moving far beyond rote textbook memorization.",
    },
    {
      icon: "🧠",
      title: "Logical Reasoning",
      desc: "Cultivating analytical deduction, pattern recognition, spatial awareness, and structured problem-solving from early years.",
    },
    {
      icon: "🤖",
      title: "Artificial Intelligence & Coding",
      desc: "Early exposure to computational thinking, algorithmic logic, AI ethics, and modern digital fundamentals.",
    },
    {
      icon: "💰",
      title: "Financial Literacy",
      desc: "Practical understanding of budgeting, saving, smart spending, and basic economics designed specifically for school students.",
    },
    {
      icon: "🛡️",
      title: "Cyber Security & Safety",
      desc: "Instilling digital vigilance, safe internet practices, identity protection, and ethical online behavior.",
    },
    {
      icon: "🌱",
      title: "Environmental Awareness",
      desc: "Fostering ecological consciousness, sustainability concepts, biodiversity appreciation, and climate mindfulness.",
    },
    {
      icon: "📐",
      title: "Mathematics & Applied Logic",
      desc: "Strengthening quantitative agility, mental math, geometry, and real-world mathematical application.",
    },
    {
      icon: "🌟",
      title: "Leadership & Expression",
      desc: "Building decision-making confidence, effective communication, and visionary problem-solving skills.",
    },
    {
      icon: "🎖️",
      title: "National Certification",
      desc: "Merit-based national recognition, diagnostic performance scorecards, and prestigious awards for outstanding achievers.",
    },
  ];

  return (
    <>
      {/* Immersive Dark Hero Banner */}
      <section style={{ padding: 0, borderTop: "none" }}>
        <div className="syl-hero-wrap">
          <div className="wrap syl-hero-content">
            {/* Top Navigation Row */}
            <div className="syl-hero-top" style={{ marginBottom: "28px" }}>
              <a className="page-back-btn" href="/" aria-label="Back to Home" style={{ margin: 0 }}>
                <svg className="back-arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="19" y1="12" x2="5" y2="12"></line>
                  <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
                <span>Back to Home</span>
              </a>
            </div>

            <div className="syl-hero-eyebrow">
              <span className="syl-hero-eyebrow-line" />
              National Academic Blueprint · Session 2026–27
            </div>

            <h1 className="syl-hero-title">
              About India Genius Olympiad
            </h1>

            <p className="syl-hero-desc">
              An educational movement dedicated to discovering, nurturing, and recognizing young academic talent across Indian schools. 
              Organized by the All India Principals Association (AIPA) to champion competency-based learning and conceptual excellence.
            </p>

            {/* Quick Hero Highlights Pills */}
            <div className="syl-hero-pills">
              <div className="syl-hero-pill">
                <span className="syl-hero-pill-icon">🏛️</span>
                <span><strong>AIPA</strong> Backed</span>
              </div>
              <div className="syl-hero-pill">
                <span className="syl-hero-pill-icon">🎓</span>
                <span><strong>6</strong> Divisions (PG–XII)</span>
              </div>
              <div className="syl-hero-pill">
                <span className="syl-hero-pill-icon">🚀</span>
                <span><strong>25+</strong> Olympiad Disciplines</span>
              </div>
              <div className="syl-hero-pill">
                <span className="syl-hero-pill-icon">📜</span>
                <span><strong>100%</strong> NEP 2020 Aligned</span>
              </div>
              <div className="syl-hero-pill">
                <span className="syl-hero-pill-icon">🏆</span>
                <span><strong>₹80</strong> Entry Fee</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Core Philosophy */}
      <section style={{ paddingTop: 64, paddingBottom: 64 }}>
        <div className="wrap">
          <div style={{ maxWidth: 820, margin: "0 auto", textAlign: "center" }}>
            <div className="section-eyebrow" style={{ justifyContent: "center" }}>
              Our Foundation &amp; Ethos
            </div>
            <h2 style={{ fontFamily: "var(--display)", fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 800, color: "var(--ink)", letterSpacing: "-0.02em", marginBottom: 16 }}>
              Advancing School Education Through Meaningful Assessment
            </h2>
            <p style={{ fontSize: 16.5, color: "var(--ink-dim)", lineHeight: 1.7 }}>
              The National Olympiad Foundation and India Genius Olympiad exist to redefine competitive examinations in India. 
              We replace rote memorization and high-stress competition with an enriching educational journey designed for conceptual understanding, critical thinking, and holistic development.
            </p>
          </div>

          <div className="about-mission-grid">
            <div className="about-mission-card">
              <div className="about-mission-icon">🎯</div>
              <h3 className="about-mission-title">Beyond Ranks &amp; Medals</h3>
              <p className="about-mission-desc">
                We believe true excellence comes from self-discovery and diagnostic feedback. Every student receives detailed analytical reports highlighting cognitive strengths and learning opportunities.
              </p>
            </div>

            <div className="about-mission-card">
              <div className="about-mission-icon">📜</div>
              <h3 className="about-mission-title">100% NEP 2020 Aligned</h3>
              <p className="about-mission-desc">
                Our curriculum and examination frameworks are built strictly around the National Education Policy 2020 guidelines, emphasizing multidisciplinary curiosity and foundational literacy.
              </p>
            </div>

            <div className="about-mission-card">
              <div className="about-mission-icon">🌏</div>
              <h3 className="about-mission-title">Universal Accessibility</h3>
              <p className="about-mission-desc">
                With an affordable ₹80 nominal entry fee, we ensure that every curious child across metro cities, tier-2 towns, and rural schools has an equal stage to shine and be celebrated.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9 Core Academic Pillars */}
      <section style={{ background: "var(--bg-elev)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)", paddingTop: 64, paddingBottom: 64 }}>
        <div className="wrap">
          <div style={{ maxWidth: 760 }}>
            <div className="section-eyebrow">Curriculum Pillars</div>
            <h2 style={{ fontFamily: "var(--display)", fontSize: "clamp(28px, 3.5vw, 38px)", fontWeight: 800, color: "var(--ink)", letterSpacing: "-0.02em", marginBottom: 12 }}>
              9 Core Competency Dimensions
            </h2>
            <p style={{ fontSize: 16, color: "var(--ink-dim)", lineHeight: 1.65 }}>
              Our Olympiads assess traditional academic rigor alongside modern 21st-century domains, preparing children for future academic and career frontiers.
            </p>
          </div>

          <div className="about-pillars-grid">
            {pillars.map((item, idx) => (
              <div key={idx} className="about-pillar-item">
                <div className="about-pillar-icon-box">{item.icon}</div>
                <div>
                  <h3 className="about-pillar-title">{item.title}</h3>
                  <p className="about-pillar-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership & Organization Section */}
      <section style={{ paddingTop: 64, paddingBottom: 72 }}>
        <div className="wrap">
          <div style={{ textAlign: "center", maxWidth: 780, margin: "0 auto 40px" }}>
            <div className="section-eyebrow" style={{ justifyContent: "center" }}>
              Visionary Leadership
            </div>
            <h2 style={{ fontFamily: "var(--display)", fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 800, color: "var(--ink)", letterSpacing: "-0.02em", marginBottom: 12 }}>
              Leadership &amp; Organization
            </h2>
            <p style={{ fontSize: 16, color: "var(--ink-dim)", lineHeight: 1.65 }}>
              Guided by distinguished educators, school leaders, and innovators dedicated to transforming academic assessments nationwide.
            </p>
          </div>

          {/* Organizers Square Glass Cards with 50% Hover Details */}
          <div className="organizers-glass-grid">
            {/* Organizer 1: Dr. Amit Sehgal */}
            <div className="organizer-glass-card">
              <div className="organizer-square-wrap">
                <img
                  src="/assets/images/amit-sehgal.jpg"
                  alt="Dr. Amit Sehgal — Founder, India Genius Olympiad"
                  className="organizer-img"
                />
                
                {/* Glass reflection highlight */}
                <div className="organizer-glass-glare" />

                {/* Permanent subtle tag top-left */}
                <div className="organizer-badge">Founder</div>

                {/* Default Initial Bottom Scrim */}
                <div className="organizer-initial-scrim">
                  <h3 className="organizer-initial-name">Dr. Amit Sehgal</h3>
                  <div className="organizer-initial-tag">Uttarakhand State President, AIPA</div>
                </div>

                {/* Half-Cover Glass Details Overlay */}
                <div className="organizer-glass-drawer">
                  <div className="organizer-drawer-inner">
                    <div className="drawer-role-tag">Founder &middot; Educationist</div>
                    <h3 className="drawer-organizer-name">Dr. Amit Sehgal</h3>
                    <p className="drawer-organizer-desc">
                      Uttarakhand State President, All India Principals Association (AIPA). Leading pioneer in school academic assessments and student empowerment.
                    </p>
                    <a href="tel:+918077074761" className="drawer-contact-btn">
                      <span>📞</span> 8077074761
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Organizer 2: Mr. Rishi Kant Upadhyaya */}
            <div className="organizer-glass-card">
              <div className="organizer-square-wrap">
                <img
                  src="/assets/images/rishi-kant-upadhyaya.jpg"
                  alt="Mr. Rishi Kant Upadhyaya — Co-Founder, India Genius Olympiad"
                  className="organizer-img"
                />

                {/* Glass reflection highlight */}
                <div className="organizer-glass-glare" />

                {/* Permanent subtle tag top-left */}
                <div className="organizer-badge">Co-Founder</div>

                {/* Default Initial Bottom Scrim */}
                <div className="organizer-initial-scrim">
                  <h3 className="organizer-initial-name">Mr. Rishi Kant Upadhyaya</h3>
                  <div className="organizer-initial-tag">Founder, Deep Connection Innovation</div>
                </div>

                {/* Half-Cover Glass Details Overlay */}
                <div className="organizer-glass-drawer">
                  <div className="organizer-drawer-inner">
                    <div className="drawer-role-tag">Co-Founder &middot; Innovator</div>
                    <h3 className="drawer-organizer-name">Mr. Rishi Kant Upadhyaya</h3>
                    <p className="drawer-organizer-desc">
                      Founder, Deep Connection Innovation Pvt Ltd. Innovator driving technological and experiential education across India.
                    </p>
                    <a href="tel:+919540944490" className="drawer-contact-btn">
                      <span>📞</span> 9540944490
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Institutional Backing Box */}
          <div className="about-impact-banner">
            <div style={{ maxWidth: 640 }}>
              <div style={{ fontFamily: "var(--mono)", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--saffron)", marginBottom: 8 }}>
                Institutional Backbone
              </div>
              <h3 style={{ fontFamily: "var(--display)", fontSize: 24, fontWeight: 800, color: "#FFFFFF", marginBottom: 8 }}>
                All India Principals Association (AIPA)
              </h3>
              <p style={{ fontSize: 14.5, color: "rgba(255, 255, 255, 0.8)", lineHeight: 1.65 }}>
                AIPA brings together school principals, academic coordinators, and visionary educators across India to maintain uncompromised examination integrity and benchmark educational quality.
              </p>
            </div>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a
                className="btn btn-primary"
                href="https://forms.gle/ZLuKVuR8XXWMrToW8"
                target="_blank"
                rel="noopener noreferrer"
              >
                Register School ↗
              </a>
              <a
                className="btn btn-secondary"
                href="https://forms.gle/KvAiXYv1CRr5E1Y17"
                target="_blank"
                rel="noopener noreferrer"
                style={{ borderColor: "rgba(255, 255, 255, 0.25)", color: "#FFFFFF" }}
              >
                Register Student ↗
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
