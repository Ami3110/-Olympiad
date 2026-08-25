import AccordionItem from "../components/AccordionItem";
import HeroCollage from "../components/HeroCollage";
import HeroWaves from "../components/HeroWaves";
import AwardsInteractive from "../components/AwardsInteractive";
import {
  WhyCollabScene,
  TrophyScene,
  DivisionIllustration,
  JourneyIllustration,
  FAQIllustration,
} from "../components/Visuals";

export const metadata = {
  title: "India Genius Olympiad | Where Curiosity Becomes Genius",
  description:
    "India Genius Olympiad is a premier national-level multi-subject competition designed to discover, encourage, and recognize the academic talent of students from Pre-Primary (PG) to Class XII.",
};

function SHead({ eyebrow, title, desc, center = false, maxWidth = 1120, light = false }) {
  return (
    <div
      className="section-head"
      style={{
        maxWidth,
        textAlign: center ? "center" : undefined,
        margin: center ? "0 auto 48px" : undefined,
      }}
    >
      {eyebrow && (
        <div
          className="section-eyebrow"
          style={light ? { color: "var(--saffron)", justifyContent: center ? "center" : undefined } : { justifyContent: center ? "center" : undefined }}
        >
          {eyebrow}
        </div>
      )}
      <h2 className="section-title" style={light ? { color: "#FFFFFF" } : {}}>
        {title}
      </h2>
      {desc && (
        <div className="section-desc" style={light ? { color: "rgba(255,255,255,0.78)" } : {}}>
          {desc}
        </div>
      )}
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      {/* ====================================================
          HERO — FULL-WIDTH FLOWING WAVES & INTERACTIVE COLLAGE
          ==================================================== */}
      <section className="hero-mockup-exact">
        {/* Full-Width Flowing Minimal Waves Animation */}
        <HeroWaves />

        <div className="wrap">
          {/* 2-Column Hero Grid */}
          <div className="hero-main-grid">
            {/* Left Content Column */}
            <div className="hero-content-col">
              <h1 className="hero-heading-exact">
                <span className="heading-line-1">Where Curiosity</span>
                <span className="heading-line-2">
                  Becomes Genius.
                  <svg className="brush-underline" viewBox="0 0 320 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 14 C60 5, 180 3, 316 12 C240 7, 120 7, 10 16" stroke="#F5A623" strokeWidth="4.5" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>

              <p className="hero-lead-text">
                India Genius Olympiad is a premier national-level multi-subject competition designed to discover, encourage, and recognize the academic talent of students from Pre-Primary (PG) to Class XII.
              </p>

              <div className="hero-tagline-bar">
                <span className="orange-pipe">|</span> Think. Learn. Compete. Grow.
              </div>

              {/* CTAs */}
              <div className="hero-action-buttons">
                <a
                  className="btn-exact-student"
                  href="https://forms.gle/KvAiXYv1CRr5E1Y17"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Register as Student ➔
                </a>
                <a
                  className="btn-exact-school"
                  href="https://forms.gle/ZLuKVuR8XXWMrToW8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Register School ↗
                </a>
              </div>

              {/* 3 Bottom Feature Cards */}
              <div className="hero-feature-pills">
                <div className="feature-pill-item">
                  <span className="pill-icon">💡</span>
                  <div className="pill-text-wrap">
                    <div className="pill-title">Build</div>
                    <div className="pill-sub">Future Skills</div>
                  </div>
                </div>

                <div className="feature-pill-item">
                  <span className="pill-icon">🏆</span>
                  <div className="pill-text-wrap">
                    <div className="pill-title">National</div>
                    <div className="pill-sub">Recognition</div>
                  </div>
                </div>

                <div className="feature-pill-item">
                  <span className="pill-icon">🎓</span>
                  <div className="pill-text-wrap">
                    <div className="pill-title">Pathway to</div>
                    <div className="pill-sub">Greater Opportunities</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Visual Column: Interactive 3D Multi-Card Collage */}
            <div className="hero-collage-col">
              <HeroCollage />
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================
          SECTION 1: VISION & STRATEGIC OBJECTIVES
          ==================================================== */}
      <section id="vision" style={{ background: "var(--bg-elev)", borderBottom: "1px solid var(--line)" }}>
        <div className="wrap">
          <div className="vision-obj-grid">
            {/* Left Column: Vision & Guiding Purpose */}
            <div>
              <div className="vision-col-header">
                <div className="section-eyebrow">Why This Olympiad</div>
                <h2 className="vision-col-title">Vision.</h2>
              </div>

              <div className="vision-card">
                <div className="vision-badge">
                  <span className="vision-badge-dot" />
                  Guiding Purpose
                </div>

                <p className="vision-statement">
                  To ignite curiosity, scientific thinking, and innovation among students while nurturing the next generation of Indian space scientists, engineers, astronauts, AI researchers, and multidisciplinary innovators.
                </p>

                <div className="vision-pillar-tags">
                  <div className="vision-tag-item">
                    <span className="vision-tag-icon">🏛️</span>
                    <span>Organized under the Aegis of All India Principals Association (AIPA)</span>
                  </div>
                  <div className="vision-tag-item">
                    <span className="vision-tag-icon">🇮🇳</span>
                    <span>Nationwide Reach spanning Pre-Primary (PG) to Class XII</span>
                  </div>
                  <div className="vision-tag-item">
                    <span className="vision-tag-icon">🚀</span>
                    <span>Aligned with NEP 2020 Experiential Learning Frameworks</span>
                  </div>
                </div>

                <a className="btn btn-ghost" href="/syllabus/" style={{ width: "100%", justifyContent: "center" }}>
                  Explore Learning Roadmap →
                </a>
              </div>
            </div>

            {/* Right Column: Strategic Objectives */}
            <div>
              <div className="vision-col-header">
                <div className="section-eyebrow">What We&apos;re Building Toward</div>
                <h2 className="vision-col-title">Strategic Objectives.</h2>
              </div>

              <div className="objectives-list">
                {[
                  {
                    num: "01",
                    tag: "Awareness",
                    desc: "Promote national awareness about India's monumental achievements in space science, astronomy, AI, and futuristic technologies.",
                  },
                  {
                    num: "02",
                    tag: "Curiosity",
                    desc: "Encourage active interest and inquiry in Astronomy, Astrophysics, Robotics, Space Technology, and Satellite Applications.",
                  },
                  {
                    num: "03",
                    tag: "Skill-Building",
                    desc: "Develop scientific temperament, algorithmic thinking, logical reasoning, and practical problem-solving skills from school years.",
                  },
                  {
                    num: "04",
                    tag: "Career Pathways",
                    desc: "Inspire and mentor students towards pioneering careers in ISRO, DRDO, IN-SPACe, deep-tech research, and global innovation industries.",
                  },
                  {
                    num: "05",
                    tag: "Celebration",
                    desc: "Celebrate National Space Day and student academic brilliance through a prestigious nationwide competition and merit recognition.",
                  },
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
          </div>
        </div>
      </section>

      {/* ====================================================
          SECTION 2: ACADEMIC PHILOSOPHY — MORE THAN AN OLYMPIAD
          ==================================================== */}
      <section id="philosophy">
        <div className="wrap">
          <div className="feature-split">
            {/* Visual column */}
            <div className="feature-image-wrap">
              <WhyCollabScene />
              <div className="feature-float-card">
                <div className="ffc-num">15+</div>
                <div className="ffc-label">Olympiad Subjects</div>
              </div>
            </div>

            {/* Content column */}
            <div>
              <SHead
                eyebrow="Academic Philosophy"
                title="More Than an Olympiad."
                desc="A competition structured to evaluate how students think, analyze, deduce, and innovate — benchmarking real understanding beyond textbook memorisation."
              />

              <div className="principles-list">
                {[
                  {
                    num: "01",
                    title: "Conceptual Rigour",
                    desc: "Move beyond rote learning. Strengthen fundamental reasoning, logic, and analytical problem-solving skills.",
                  },
                  {
                    num: "02",
                    title: "Future-Ready Disciplines",
                    desc: "Assessments in Artificial Intelligence, Cyber Security, Financial Literacy, Environmental Sciences, and Modern Mathematics.",
                  },
                  {
                    num: "03",
                    title: "Applied Problem Solving",
                    desc: "Real-world scenarios designed by leading educators and academicians to test practical problem-solving.",
                  },
                  {
                    num: "04",
                    title: "National Benchmarking",
                    desc: "Students receive detailed diagnostic reports, state and national rankings, and recognized merit credentials.",
                  },
                ].map(({ num, title, desc }) => (
                  <div key={num} className="principle-item">
                    <div className="principle-num">{num}</div>
                    <div>
                      <div className="principle-title">{title}</div>
                      <div className="principle-desc">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: 36, display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a
                  className="btn btn-primary"
                  href="https://forms.gle/KvAiXYv1CRr5E1Y17"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Register as Student ↗
                </a>
                <a className="btn btn-ghost" href="#olympiad">
                  View Age Groups
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================
          AGE GROUPS — 6 DIVISIONS (CLASSES PG TO XII)
          ==================================================== */}
      <section id="olympiad">
        <div className="wrap">
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 20,
              marginBottom: 48,
            }}
          >
            <SHead
              eyebrow="Divisions"
              title="Find Your Division."
              desc="Six structured age-appropriate divisions, from Pre-Primary all the way to Class XII. Every grade level has a tailored academic challenge."
            />
            <a
              className="btn btn-ghost"
              href="/syllabus/"
              style={{ flexShrink: 0, marginBottom: 4 }}
            >
              View Syllabus ↗
            </a>
          </div>

          <div className="age-grid">
            {[
              {
                badge: "PG – UKG",
                div: "Foundation Division",
                type: "foundation",
                title: "Early Cognitive Skills",
                desc: "Playful exploration, visual patterns, basic reasoning, and observational awareness through gentle challenges.",
                href: "/syllabus/foundation/",
              },
              {
                badge: "Classes I – II",
                div: "Junior Division",
                type: "junior",
                title: "Foundational Reasoning",
                desc: "Building logical thinking, numerical concepts, everyday science questions, and general awareness.",
                href: "/syllabus/junior/",
              },
              {
                badge: "Classes III – V",
                div: "Primary Division",
                type: "primary",
                title: "Applied STEM & Logic",
                desc: "Natural sciences, mathematical problem solving, digital awareness, and critical thinking fundamentals.",
                href: "/syllabus/primary/",
              },
              {
                badge: "Classes VI – VIII",
                div: "Middle Division",
                type: "middle",
                title: "Technology & Analytical Science",
                desc: "Introductory AI concepts, cyber security fundamentals, financial basics, robotics logic, and advanced science.",
                href: "/syllabus/middle/",
              },
              {
                badge: "Classes IX – X",
                div: "Secondary Division",
                type: "secondary",
                title: "Advanced Applied Knowledge",
                desc: "Algorithmic thinking, AI applications, personal finance & budgeting, cybersecurity ethics, and integrated science.",
                href: "/syllabus/secondary/",
              },
              {
                badge: "Classes XI – XII",
                div: "Senior Secondary Division",
                type: "senior",
                title: "Pre-College & Leadership",
                desc: "Advanced AI in society, fintech & economics, digital security governance, entrepreneurship, and specialized disciplines.",
                href: "/syllabus/senior-secondary/",
              },
            ].map(({ badge, div, type, title, desc, href }) => (
              <div key={title} className="age-card">
                <div className="age-card-image" style={{ display: "flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(135deg, rgba(20,23,42,0.06), rgba(193,101,12,0.06))" }}>
                  <DivisionIllustration type={type} />
                  <div className="age-card-badge">{badge}</div>
                </div>
                <div className="age-card-body">
                  <div className="age-card-div">{div}</div>
                  <h3 className="age-card-title">{title}</h3>
                  <p className="age-card-desc">{desc}</p>
                  <a className="age-card-cta" href={href}>
                    Explore Division <span>→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================
          COMPETITION JOURNEY — 4 LEVELS
          ==================================================== */}
      <section id="stages">
        <div className="wrap">
          <SHead
            eyebrow="Examination Structure"
            title="Four-Level National Progression."
            desc="A structured competitive journey designed to challenge students at their school, district, regional, and national levels."
          />

          <div className="journey-grid journey-grid-four">
            {[
              {
                level: 1,
                levelNum: "01",
                levelTag: "Stage 1",
                title: "School Selection Round",
                desc: "Offline, within school. Students compete in their respective class/category with an objective/MCQ-based exam. Each school selects its top performers to advance.",
                awards: ["School Participation Certificate", "School Level Merit Rank", "Qualification for District Round"],
              },
              {
                level: 2,
                levelNum: "02",
                levelTag: "Stage 2",
                title: "District Round",
                desc: "Conducted through registered school test centers and authenticated online portals across India.",
                awards: ["District Merit Certificate", "Diagnostic Performance Scorecard", "Qualification for State Round"],
              },
              {
                level: 3,
                levelNum: "03",
                levelTag: "Stage 3",
                title: "Regional / State Round",
                desc: "Top percentile achievers from the district round compete against regional merit rankers.",
                awards: ["State Merit Certificate", "Medals for Top Rankers", "Grand Finale Qualification"],
              },
              {
                level: 4,
                levelNum: "04",
                levelTag: "Stage 4",
                title: "National Grand Finale",
                desc: "The nation's highest-scoring students gather for the decisive national championship.",
                awards: ["Gold, Silver & Bronze Trophies", "India Genius of the Year Title", "National Felicitation"],
              },
            ].map(({ level, levelTag, title, desc, awards }) => (
              <div key={title} className="journey-card">
                <div className="journey-card-image">
                  <JourneyIllustration level={level} />
                </div>
                <div className="journey-card-body">
                  <div className="journey-level-tag">{levelTag}</div>
                  <h4>{title}</h4>
                  <p>{desc}</p>
                  <ul>
                    {awards.map((a) => (
                      <li key={a}>{a}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================
          AWARDS & RECOGNITION — 4 TIER FRAMEWORK
          ==================================================== */}
      <section id="awards">
        <div className="wrap">
          <SHead
            eyebrow="Recognition &amp; Honours"
            title="Olympiad Awards Framework."
            desc="Comprehensive recognition and merit honors across all four tiers of the national competition."
          />
          <AwardsInteractive />
        </div>
      </section>

      {/* ====================================================
          SLOGAN BANNER
          ==================================================== */}
      <div className="slogan-banner">
        <div className="tag">Empowering India&apos;s Academic Potential</div>
        <h3>
          Think Critically. Compete Fairly.<br />
          Achieve Nationally.
        </h3>
      </div>

      {/* ====================================================
          INSPIRING VOICES
          ==================================================== */}
      <section id="voices">
        <div className="wrap">
          <SHead
            eyebrow="Inspiration"
            title="Voices of Indian Excellence."
            desc="Drawing inspiration from great thinkers and educators whose dedication to learning transformed our nation."
          />
          <div className="quote-grid">
            {[
              {
                text: "&ldquo;Learning gives creativity, creativity leads to thinking, thinking provides knowledge, and knowledge makes you great.&rdquo;",
                name: "Dr. A.P.J. Abdul Kalam",
                role: "Scientist & Former President of India",
              },
              {
                text: "&ldquo;An equation for me has no meaning unless it expresses a thought of God.&rdquo;",
                name: "Srinivasa Ramanujan",
                role: "Legendary Indian Mathematician",
              },
              {
                text: "&ldquo;Arise, awake, and stop not until the goal is reached.&rdquo;",
                name: "Swami Vivekananda",
                role: "Philosopher & Educationist",
              },
              {
                text: "&ldquo;We must be second to none in the application of advanced knowledge to the real problems of society.&rdquo;",
                name: "Dr. Vikram Sarabhai",
                role: "Visionary Scientist & Institution Builder",
              },
            ].map(({ text, name, role }) => (
              <div key={name} className="quote-card">
                <span className="mark">&quot;</span>
                <p className="qtext" dangerouslySetInnerHTML={{ __html: text }} />
                <div className="qwho">
                  <b>{name}</b>, {role}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================
          ABOUT US & ORGANIZERS — SQUARE GLASS WITH 50% HOVER DETAILS
          ==================================================== */}
      <section id="about">
        <div className="wrap">
          <SHead
            eyebrow="About the Initiative"
            title="India Genius Olympiad."
            desc="An educational movement dedicated to discovering, nurturing, and recognizing young academic talent across Indian schools. Organized by the All India Principals Association (AIPA)."
            maxWidth="100%"
          />

          <div className="chip-grid" style={{ marginBottom: 32 }}>
            {[
              "Academic Rigour",
              "Logical Reasoning",
              "Artificial Intelligence",
              "Financial Literacy",
              "Cyber Security",
              "Environmental Awareness",
              "Mathematics & Logic",
              "Leadership Skills",
              "National Certification",
            ].map((chip) => (
              <div key={chip} className="chip">
                {chip}
              </div>
            ))}
          </div>

          <h3
            style={{
              fontFamily: "var(--display)",
              fontSize: 22,
              fontWeight: 700,
              marginTop: 52,
              marginBottom: 24,
              letterSpacing: "-0.01em",
            }}
          >
            Leadership &amp; Organization
          </h3>

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
                  <h4 className="organizer-initial-name">Dr. Amit Sehgal</h4>
                  <div className="organizer-initial-tag">Uttarakhand State President, AIPA</div>
                </div>

                {/* Half-Cover Glass Details Overlay (Slides up 50% on hover) */}
                <div className="organizer-glass-drawer">
                  <div className="organizer-drawer-inner">
                    <div className="drawer-role-tag">Founder &middot; Educationist</div>
                    <h4 className="drawer-organizer-name">Dr. Amit Sehgal</h4>
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
                  <h4 className="organizer-initial-name">Mr. Rishi Kant Upadhyaya</h4>
                  <div className="organizer-initial-tag">Founder, Deep Connection Innovation</div>
                </div>

                {/* Half-Cover Glass Details Overlay (Slides up 50% on hover) */}
                <div className="organizer-glass-drawer">
                  <div className="organizer-drawer-inner">
                    <div className="drawer-role-tag">Co-Founder &middot; Innovator</div>
                    <h4 className="drawer-organizer-name">Mr. Rishi Kant Upadhyaya</h4>
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
        </div>
      </section>

      {/* ====================================================
          ASSOCIATED INSTITUTES & ACADEMIC ALLIANCES
          ==================================================== */}
      <section id="institutes" style={{ background: "var(--bg-elev)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
        <div className="wrap">
          <SHead
            eyebrow="Academic Backbone &amp; Alliances"
            title="Associated Institutes &amp; Institutional Network."
            desc="Organized under the apex patronship of the All India Principals Association (AIPA) and supported by distinguished academic councils, premier school networks, and teacher development bodies across India."
          />

          {/* Continuous Floating Rounded Images Marquee */}
          <div className="inst-marquee-wrap">
            <div className="inst-marquee-track">
              {[
                { img: "/assets/images/aipa-logo.png", title: "AIPA Apex Forum", sub: "National Patron" },
                { img: "/assets/images/indian-students-classroom.jpg", title: "School Exam Centers", sub: "500+ Affiliated Schools" },
                { img: "/assets/images/robotics-stem-kids.jpg", title: "Space & STEM Hubs", sub: "ISRO / STEM Alliances" },
                { img: "/assets/images/student-champions.jpg", title: "National Rankers", sub: "Grand Finale Qualifiers" },
                { img: "/assets/images/kids-coding-stem.jpg", title: "AI & Coding Labs", sub: "Emerging Tech Arena" },
                { img: "/assets/images/school-assembly-awards.jpg", title: "District Merit Awards", sub: "Inter-School Rounds" },
                { img: "/assets/images/young-genius.jpg", title: "Diagnostic Evaluations", sub: "Young Genius Network" },
                { img: "/assets/images/kids-science-collab.jpg", title: "Pedagogy Board", sub: "NEP 2020 Frameworks" },
                { img: "/assets/images/student-achievement.jpg", title: "National Felicitations", sub: "State & National Merit" },
                { img: "/assets/images/girl-studying-laptop.jpg", title: "Digital Test Portal", sub: "Pan-India Access" },
                { img: "/assets/images/aipa-logo.png", title: "AIPA Apex Forum", sub: "National Patron" },
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

      {/* ====================================================
          STRATEGIC & KNOWLEDGE PARTNERS
          ==================================================== */}
      <section id="partners">
        <div className="wrap">
          <SHead
            eyebrow="Strategic Alliances"
            title="Knowledge &amp; Technology Partners."
            desc="Collaborating with visionary organizations across deep technology, digital safety, applied finance, and experiential education to empower school students."
          />

          <div className="partner-ecosystem-grid">
            {/* Partner 1 */}
            <div className="partner-eco-card">
              <div className="partner-eco-icon">💡</div>
              <div className="partner-eco-tag">Co-Founding Technology Partner</div>
              <h4 className="partner-eco-title">Deep Connection Innovation</h4>
              <p className="partner-eco-desc">
                Leading the digital Olympiad architecture, experiential learning tools, and modern problem-solving methodologies for schools nationwide.
              </p>
              <div className="partner-eco-pill">
                <span>✦ EdTech &amp; Innovation Lead</span>
              </div>
            </div>

            {/* Partner 2 */}
            <div className="partner-eco-card">
              <div className="partner-eco-icon">🤖</div>
              <div className="partner-eco-tag">Emerging Tech Partner</div>
              <h4 className="partner-eco-title">AI &amp; Robotics Learning Ecosystem</h4>
              <p className="partner-eco-desc">
                Bridging foundational artificial intelligence, algorithmic logic, computer vision, and robotics concepts tailored for young minds from Class III upwards.
              </p>
              <div className="partner-eco-pill">
                <span>✦ AI Curriculum Design</span>
              </div>
            </div>

            {/* Partner 3 */}
            <div className="partner-eco-card">
              <div className="partner-eco-icon">🔐</div>
              <div className="partner-eco-tag">Cyber Safety Forum</div>
              <h4 className="partner-eco-title">Digital Safety &amp; Ethics Alliance</h4>
              <p className="partner-eco-desc">
                Empowering children and educators with responsible cyber hygiene, digital privacy awareness, ethical computing, and online safety standards.
              </p>
              <div className="partner-eco-pill">
                <span>✦ Cyber Awareness</span>
              </div>
            </div>

            {/* Partner 4 */}
            <div className="partner-eco-card">
              <div className="partner-eco-icon">📈</div>
              <div className="partner-eco-tag">Financial Literacy Initiative</div>
              <h4 className="partner-eco-title">Youth Financial Education Network</h4>
              <p className="partner-eco-desc">
                Promoting smart money habits, budgeting fundamentals, economic concepts, and financial intelligence from middle school to senior secondary years.
              </p>
              <div className="partner-eco-pill">
                <span>✦ Life Skills &amp; Economics</span>
              </div>
            </div>
          </div>

          {/* Partner Call to Action Banner */}
          <div className="partner-cta-card">
            <div className="partner-cta-content">
              <h3>Partner with India Genius Olympiad</h3>
              <p>
                Are you an educational institution, technology organization, or foundation looking to foster young genius across India? Join our growing national ecosystem.
              </p>
            </div>
            <div className="partner-cta-actions">
              <a
                className="btn btn-primary"
                href="https://forms.gle/tt83cHHLN2n4B7YR6"
                target="_blank"
                rel="noopener noreferrer"
              >
                Connect Your Institution ↗
              </a>
              <a className="btn btn-ghost" href="/contact-us/" style={{ color: "#FFFFFF", borderColor: "rgba(255,255,255,0.3)" }}>
                Contact Leadership →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================
          ANNUAL INITIATIVES
          ==================================================== */}
      <section id="initiatives">
        <div className="wrap">
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 20,
              marginBottom: 40,
            }}
          >
            <SHead
              eyebrow="India Genius Foundation"
              title="Annual Educational Initiatives."
              desc="Beyond examinations — career guidance conclaves, university admissions fairs, national quizzes, and educator award ceremonies."
            />
            <a className="btn btn-ghost" href="/initiatives/" style={{ flexShrink: 0 }}>
              View All Initiatives ↗
            </a>
          </div>
          <div className="chip-grid">
            {[
              "India Genius Olympiad Examination",
              "Annual Career Guidance Programme",
              "Annual Admission & University Fair",
              "National Quiz for Class XII",
              "Educational Leadership Conclave",
              "Teachers' Education Conclave & Awards",
            ].map((item) => (
              <div key={item} className="chip">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================
          REGISTRATION — HIGH CONVERSION CTA
          ==================================================== */}
      <section className="register-hero" id="register" style={{ background: "linear-gradient(135deg, #14172A 0%, #202945 50%, #173830 100%)" }}>
        <div className="register-hero-content">
          <div className="wrap">
            <div
              className="section-eyebrow"
              style={{ color: "var(--saffron)", justifyContent: "center", marginBottom: 16 }}
            >
              <span
                style={{
                  display: "inline-block",
                  width: 20,
                  height: 1.5,
                  background: "var(--saffron)",
                  borderRadius: 2,
                  marginRight: 10,
                }}
              ></span>
              Registration Open &middot; Session 2026&ndash;27
            </div>

            <h2
              className="section-title"
              style={{
                color: "#FFFFFF",
                fontSize: "clamp(32px, 4vw, 52px)",
                maxWidth: 760,
                margin: "0 auto 16px",
                textAlign: "center",
              }}
            >
              Ready to Compete on the National Stage?
            </h2>

            <p
              style={{
                color: "rgba(255,255,255,0.78)",
                fontSize: 17,
                maxWidth: 560,
                margin: "0 auto 48px",
                textAlign: "center",
                lineHeight: 1.75,
              }}
            >
              Join thousands of students and schools across India. Register now for the 2026–27 Academic Session at just ₹100 per subject.
            </p>

            <div className="register-cards">
              <div className="register-card">
                <span className="register-card-icon">🏫</span>
                <h3>For Schools &amp; Principals</h3>
                <p>
                  School coordinators and administrators can register their institution to facilitate smooth student participation.
                </p>
                <a
                  className="btn btn-primary"
                  href="https://forms.gle/ZLuKVuR8XXWMrToW8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Register Your School ↗
                </a>
              </div>

              <div className="register-card">
                <span className="register-card-icon">🧑‍🎓</span>
                <h3>For Individual Students</h3>
                <p>
                  Students from Classes PG to XII can register individually for one or more multi-subject Olympiads.
                </p>
                <a
                  className="btn btn-primary"
                  href="https://forms.gle/KvAiXYv1CRr5E1Y17"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Register as Student ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================
          FAQ — TWO COLUMN
          ==================================================== */}
      <section id="faq">
        <div className="wrap">
          <div className="faq-grid">
            {/* Left: visual */}
            <div className="faq-left-image">
              <FAQIllustration />
            </div>

            {/* Right: accordion */}
            <div>
              <SHead
                eyebrow="Frequently Asked Questions"
                title="Everything You Need to Know."
                desc="Clear details regarding eligibility, subjects, examination format, and registration."
              />

              <AccordionItem id="faq-1" title="What is the India Genius Olympiad?">
                <p>
                  India Genius Olympiad is a national-level multi-subject competitive examination for school students from Pre-Primary (PG) to Class XII, assessing emerging competencies such as AI, Cyber Security, Financial Literacy, Mathematics, Sciences, and Critical Thinking.
                </p>
              </AccordionItem>
              <AccordionItem id="faq-2" title="Which subjects are available for my child's class?">
                <p>
                  Subjects are tailored by age division: 3 foundation subjects for Classes III–V, up to 9 specialized Olympiads for Classes XI–XII. Visit the{" "}
                  <a href="/syllabus/" style={{ color: "var(--saffron)", fontWeight: 600 }}>
                    Syllabus by Age Group
                  </a>{" "}
                  page for complete division curriculum.
                </p>
              </AccordionItem>
              <AccordionItem id="faq-3" title="What is the examination format?">
                <p>
                  The assessment features objective multiple-choice questions (MCQs) designed to test conceptual understanding, practical application, and logical analysis rather than simple recall.
                </p>
              </AccordionItem>
              <AccordionItem id="faq-4" title="Can the exam be taken online or offline?">
                <p>
                  District Round examinations can be conducted through school exam halls or secure online assessment portals as designated by the participating institution.
                </p>
              </AccordionItem>
              <AccordionItem id="faq-5" title="What is the fee per student?">
                <p>
                  The registration fee is ₹100 per subject, per student. Students are encouraged to participate in multiple Olympiad subjects within their class group.
                </p>
              </AccordionItem>
              <AccordionItem id="faq-6" title="How can our school register?">
                <p>
                  Schools can register directly using the School Registration Google Form linked in the header or contact the coordinator team directly.
                </p>
              </AccordionItem>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================
          TESTIMONIALS PLACEHOLDER
          ==================================================== */}
      <section id="testimonials">
        <div className="wrap">
          <SHead
            eyebrow="Testimonials"
            title="Voices from Schools &amp; Parents."
          />
          <div className="testimonial-grid">
            {[1, 2, 3].map((i) => (
              <div key={i} className="testimonial-card">
                <p className="placeholder-note">School &amp; parent testimonials coming soon for Session 2026&ndash;27.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
