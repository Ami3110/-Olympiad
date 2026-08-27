export const metadata = {
  title: "About Us & Leadership — India Genius Olympiad | India Genius Foundation",
  description:
    "Discover the mission, philosophy, academic pillars, and leadership behind India Genius Olympiad — an educational movement by the India Genius Foundation empowering school students across India.",
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
              Organized by the India Genius Foundation to champion competency-based learning and conceptual excellence.
            </p>

            {/* Quick Hero Highlights Pills */}
            <div className="syl-hero-pills">
              <div className="syl-hero-pill">
                <span className="syl-hero-pill-icon">🏛️</span>
                <span><strong>India Genius Foundation</strong> Backed</span>
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

      {/* About Us — India Genius Foundation, org-level framing (new content
          pass, Aug 2026). Reuses the Mission section's centered-prose
          pattern for a multi-paragraph body. */}
      <section id="about" style={{ paddingTop: 64, paddingBottom: 56 }}>
        <div className="wrap">
          <div style={{ maxWidth: 820, margin: "0 auto" }}>
            <div className="section-eyebrow" style={{ justifyContent: "center" }}>Who We Are</div>
            <h2 style={{ fontFamily: "var(--display)", fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 800, color: "var(--ink)", letterSpacing: "-0.02em", marginBottom: 20, textAlign: "center" }}>
              About India Genius Foundation
            </h2>
            <div style={{ fontSize: 15.5, color: "var(--ink-dim)", lineHeight: 1.75, display: "flex", flexDirection: "column", gap: 16 }}>
              <p>
                India Genius Foundation is an education-focused organisation committed to discovering, nurturing and celebrating the unique talents, abilities and potential of learners across India. Through meaningful academic, intellectual and career-oriented initiatives, the Foundation provides platforms that encourage students to learn beyond textbooks, explore new areas of knowledge and develop the skills needed for the future.
              </p>
              <p>
                The Foundation conducts a wide range of programmes and activities, including Olympiads, Live Quizzes, Psychometric Tests for different age groups and levels, Education Fairs, Career Guidance and Counselling Seminars, Talent Assessments, Academic Competitions, Workshops and other initiatives related to education and matters of national importance.
              </p>
              <p>
                Through its flagship India Genius Olympiad and other educational programmes, the Foundation aims to make learning more engaging, challenging, inclusive and relevant. Our initiatives encourage students to strengthen their knowledge, analytical thinking, creativity, problem-solving ability, communication skills, decision-making and real-world understanding.
              </p>
              <p>
                Our programmes cover diverse academic and future-focused areas, including Science, Mathematics, Artificial Intelligence, Technology, Financial Literacy, Space Science, Environmental Studies, Cybersecurity, Entrepreneurship, Psychology, Reasoning, General Knowledge, Indian Knowledge Systems, Leadership, Life Skills and other emerging fields.
              </p>
              <p>
                India Genius Foundation also recognises the importance of helping students understand themselves and make informed choices about their future. Through psychometric assessments, career guidance programmes, counselling sessions and education fairs, we seek to help learners identify their interests, strengths, abilities and potential career pathways.
              </p>
              <p>
                Through age-appropriate competitions, assessments, learning resources, interactive events, expert sessions and recognition programmes, India Genius Foundation strives to identify the potential of every learner and inspire them to pursue excellence with confidence.
              </p>
            </div>
            <p style={{ textAlign: "center", color: "var(--ink-dim)", fontSize: 15, marginTop: 20, fontStyle: "italic" }}>
              Our vision is to contribute towards the development of knowledgeable, skilled, creative, responsible and future-ready citizens who can positively contribute to society and the progress of the nation.
            </p>
          </div>
        </div>
      </section>

      {/* Vision — new Foundation-level statement (replaces the earlier
          space-science-specific framing). Reuses the vision-card pattern. */}
      <section id="vision" style={{ background: "var(--bg-elev)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)", paddingTop: 64, paddingBottom: 64 }}>
        <div className="wrap">
          <div style={{ maxWidth: 720, margin: "0 auto" }}>
            <div className="vision-col-header" style={{ textAlign: "center" }}>
              <div className="section-eyebrow" style={{ justifyContent: "center" }}>Why India Genius Foundation</div>
              <h2 className="vision-col-title">Vision.</h2>
            </div>

            <div className="vision-card">
              <div className="vision-badge">
                <span className="vision-badge-dot" />
                Guiding Purpose
              </div>

              <p className="vision-statement">
                To become a leading national platform for discovering, nurturing and empowering the intellectual, academic, creative and professional potential of learners across India. We envision an education ecosystem where every learner is provided meaningful opportunities to discover their strengths, explore their interests, develop future-ready skills and pursue excellence with confidence.
              </p>

              <div className="vision-pillar-tags">
                <div className="vision-tag-item">
                  <span className="vision-tag-icon">🏛️</span>
                  <span>A Leading National Learner-Discovery Platform</span>
                </div>
                <div className="vision-tag-item">
                  <span className="vision-tag-icon">🇮🇳</span>
                  <span>Nationwide Reach spanning Pre-Primary (PG) to Class XII</span>
                </div>
                <div className="vision-tag-item">
                  <span className="vision-tag-icon">🚀</span>
                  <span>Innovative Assessments, Guidance &amp; Events of National Importance</span>
                </div>
              </div>

              <a className="btn btn-ghost" href="/syllabus/" style={{ width: "100%", justifyContent: "center" }}>
                Explore Learning Roadmap →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Mission — 9 commitments, reusing the numbered objectives-list
          pattern (previously "Strategic Objectives"). */}
      <section id="mission" style={{ paddingTop: 64, paddingBottom: 64 }}>
        <div className="wrap">
          <div style={{ maxWidth: 820, margin: "0 auto", textAlign: "center", marginBottom: 40 }}>
            <div className="section-eyebrow" style={{ justifyContent: "center" }}>
              Our Foundation &amp; Ethos
            </div>
            <h2 style={{ fontFamily: "var(--display)", fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 800, color: "var(--ink)", letterSpacing: "-0.02em", marginBottom: 16 }}>
              Mission.
            </h2>
            <p style={{ fontSize: 16.5, color: "var(--ink-dim)", lineHeight: 1.7 }}>
              Our mission is to create meaningful and accessible educational opportunities that inspire learners to learn, think, explore, discover and excel. We are committed to:
            </p>
          </div>

          <div className="objectives-list" style={{ maxWidth: 820, margin: "0 auto" }}>
            {[
              { num: "01", tag: "Competitions", desc: "Conducting Olympiads, Live Quizzes, Academic Competitions and Talent Assessments across diverse subjects and emerging fields." },
              { num: "02", tag: "Assessments", desc: "Organising Psychometric Tests and Assessments to help learners understand their interests, strengths, abilities and potential." },
              { num: "03", tag: "Guidance", desc: "Providing Career Guidance, Counselling and Career Awareness Seminars to support informed educational and career choices." },
              { num: "04", tag: "Events", desc: "Organising Education Fairs, Workshops, Seminars, Conferences and Interactive Learning Programmes for students, educators, parents and institutions." },
              { num: "05", tag: "Critical Thinking", desc: "Encouraging curiosity, creativity, critical thinking, analytical ability, problem-solving and innovation among learners." },
              { num: "06", tag: "National Awareness", desc: "Promoting awareness and learning in areas of national importance, contemporary developments and future-ready skills." },
              { num: "07", tag: "Recognition", desc: "Recognising and celebrating academic excellence, talent, innovation, leadership and outstanding achievement." },
              { num: "08", tag: "Collaboration", desc: "Creating opportunities for schools, educators, experts, institutions and learners to collaborate for the advancement of education." },
              { num: "09", tag: "Character", desc: "Supporting the development of confident, ethical, responsible and future-ready citizens who can contribute positively to society and the nation." },
            ].map(({ num, tag, desc }) => (
              <div key={num} className="objective-card">
                <div className="objective-step-badge">{num}</div>
                <div className="objective-body">
                  <div className="objective-title">
                    <span className="objective-title-tag">{tag}:</span>
                  </div>
                  <div className="objective-desc">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Belief — new section, same numbered-list pattern as Mission. */}
      <section id="belief" style={{ background: "var(--bg-elev)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)", paddingTop: 64, paddingBottom: 64 }}>
        <div className="wrap">
          <div style={{ maxWidth: 820, margin: "0 auto", textAlign: "center", marginBottom: 40 }}>
            <div className="section-eyebrow" style={{ justifyContent: "center" }}>
              What Drives Us
            </div>
            <h2 style={{ fontFamily: "var(--display)", fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 800, color: "var(--ink)", letterSpacing: "-0.02em", marginBottom: 16 }}>
              Our Belief.
            </h2>
            <p style={{ fontSize: 16.5, color: "var(--ink-dim)", lineHeight: 1.7 }}>
              At India Genius Foundation, we believe that every learner has the potential to excel when given the right opportunity, encouragement and guidance. True learning should develop knowledge, curiosity, creativity, confidence, character, critical thinking and the ability to apply learning in real-life situations. We believe that:
            </p>
          </div>

          <div className="objectives-list" style={{ maxWidth: 820, margin: "0 auto" }}>
            {[
              { num: "01", tag: "Uniqueness", desc: "Every child is unique and possesses special strengths and abilities." },
              { num: "02", tag: "Nurture", desc: "Talent can be discovered, nurtured and developed through the right opportunities." },
              { num: "03", tag: "Real-World Learning", desc: "Learning should be engaging, meaningful, challenging and connected to the real world." },
              { num: "04", tag: "Beyond Marks", desc: "Assessment should help identify potential, not merely measure marks." },
              { num: "05", tag: "Healthy Competition", desc: "Competition, when healthy and purposeful, inspires students to challenge themselves and strive for excellence." },
              { num: "06", tag: "Self-Awareness", desc: "Career guidance and self-awareness are essential for helping young people make informed choices about their future." },
              { num: "07", tag: "Responsible Tech", desc: "Technology and Artificial Intelligence should be used responsibly to strengthen learning and prepare students for the future." },
              { num: "08", tag: "Values & Excellence", desc: "Education must promote both excellence and values, creating responsible citizens along with successful individuals." },
              { num: "09", tag: "Opportunity", desc: "Every learner deserves the opportunity to dream big, discover their potential and achieve their best." },
              { num: "10", tag: "Nation's Future", desc: "The progress of a nation depends on the quality, knowledge, skills, character and vision of its young generation." },
            ].map(({ num, tag, desc }) => (
              <div key={num} className="objective-card">
                <div className="objective-step-badge">{num}</div>
                <div className="objective-body">
                  <div className="objective-title">
                    <span className="objective-title-tag">{tag}:</span>
                  </div>
                  <div className="objective-desc">{desc}</div>
                </div>
              </div>
            ))}
          </div>

          <p style={{ textAlign: "center", color: "var(--ink-dim)", fontSize: 15, marginTop: 32, fontStyle: "italic" }}>
            We believe in discovering potential, inspiring excellence and empowering the future.
          </p>
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
      <section id="leadership" style={{ paddingTop: 64, paddingBottom: 72 }}>
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
                  <div className="organizer-initial-tag">Uttarakhand State President, India Genius Foundation</div>
                </div>

                {/* Half-Cover Glass Details Overlay */}
                <div className="organizer-glass-drawer">
                  <div className="organizer-drawer-inner">
                    <div className="drawer-role-tag">Founder &middot; Educationist</div>
                    <h3 className="drawer-organizer-name">Dr. Amit Sehgal</h3>
                    <p className="drawer-organizer-desc">
                      Uttarakhand State President, India Genius Foundation. Leading pioneer in school academic assessments and student empowerment.
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
          <div id="foundation" className="about-impact-banner">
            <div style={{ maxWidth: 640 }}>
              <div style={{ fontFamily: "var(--mono)", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--saffron)", marginBottom: 8 }}>
                Institutional Backbone
              </div>
              <h3 style={{ fontFamily: "var(--display)", fontSize: 24, fontWeight: 800, color: "#FFFFFF", marginBottom: 8 }}>
                India Genius Foundation
              </h3>
              <p style={{ fontSize: 14.5, color: "rgba(255, 255, 255, 0.8)", lineHeight: 1.65 }}>
                India Genius Foundation brings together school principals, academic coordinators, and visionary educators across India to maintain uncompromised examination integrity and benchmark educational quality.
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

      {/* Associated Institutes & Academic Alliances — relocated from the Home
          page as part of the content-architecture pass. Markup/classes
          reused verbatim. */}
      <section id="network" style={{ background: "var(--bg-elev)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
        <div className="wrap">
          <div className="section-head">
            <div className="section-eyebrow">Academic Backbone &amp; Alliances</div>
            <h2 className="section-title">Associated Institutes &amp; Institutional Network.</h2>
            <div className="section-desc">
              Organized under the apex patronship of the India Genius Foundation and supported by distinguished academic councils, premier school networks, and teacher development bodies across India.
            </div>
          </div>

          <div className="inst-marquee-wrap">
            <div className="inst-marquee-track">
              {[
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
              ].map((item, idx) => (
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
        </div>
      </section>
    </>
  );
}
