export const metadata = {
  title: "About Us & Leadership — India Genius Olympiad | India Genius Foundation",
  description:
    "Discover the mission, philosophy, academic pillars, and leadership behind India Genius Olympiad — an educational movement by the India Genius Foundation empowering school students across India.",
};

export default function AboutPage() {
  return (
    <>
      {/* About Us — India Genius Foundation */}
      <section id="about" style={{ paddingTop: 36, paddingBottom: 64 }}>
        <div className="wrap">
          <div style={{ marginBottom: 24 }}>
            <a className="page-back-btn light-variant" href="/" aria-label="Back to Home" style={{ margin: 0 }}>
              <svg className="back-arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
              <span>Back to Home</span>
            </a>
          </div>

          <div style={{ maxWidth: 820, margin: "0 auto" }}>
            <div className="section-eyebrow" style={{ justifyContent: "center", marginBottom: 10 }}>Who We Are</div>
            <h1 style={{ fontFamily: "var(--display)", fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 800, color: "var(--ink)", letterSpacing: "-0.02em", marginBottom: 20, textAlign: "center" }}>
              About India Genius Foundation
            </h1>
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
    </>
  );
}
