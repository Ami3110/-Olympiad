import AccordionItem from "../components/AccordionItem";
import AwardsInteractive from "../components/AwardsInteractive";
import {
  WhyCollabScene,
  DivisionIllustration,
  JourneyIllustration,
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
          HERO — FULL-WIDTH PANORAMIC STUDENTS HERO
          LOCKED: do not change layout, height, typography, colors,
          imagery, CTAs, or spacing. See redesign brief — Hero is
          the site's visual identity and stays exactly as-is.
          ==================================================== */}
      <section className="hero-panoramic-section">
        <div className="hero-panoramic-container">
          {/* Centered Main Headline */}
          <div className="hero-panoramic-header">
            <h1 className="hero-panoramic-heading">
              <span className="hero-head-navy">Where Curiosity</span>
              <span className="hero-head-orange">Becomes Genius.</span>
            </h1>
            {/* Decorative swoosh — a plain sibling of the heading (not
                absolutely positioned over the image), so it always stays
                anchored directly under the text at any screen size instead
                of drifting independently. */}
            <svg
              className="hero-heading-swoosh"
              viewBox="0 0 420 30"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path d="M6 21 Q 210 3 414 15" fill="none" stroke="#E65A00" strokeWidth="5" strokeLinecap="round" />
            </svg>
          </div>

          {/* Central Visual: Home.svg */}
          <div className="hero-panoramic-visual-wrap">
            <img
              src="/assets/images/Home.svg"
              alt="Where Curiosity Becomes Genius — Students exploring science, technology, and learning"
              className="hero-panoramic-img"
              loading="eager"
              fetchPriority="high"
            />

            {/* Standalone Action Buttons positioned directly on the same background canvas */}
            <div className="hero-panoramic-actions hero-actions-on-bg">
              <a
                className="hero-pill-btn hero-pill-btn-student"
                href="https://forms.gle/KvAiXYv1CRr5E1Y17"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Student Registration Form"
              >
                <span className="hero-pill-icon-wrap">
                  <svg className="hero-btn-svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                  </svg>
                </span>
                <span className="hero-pill-text">Student Register</span>
                <span className="hero-pill-arrow">➔</span>
              </a>
              <a
                className="hero-pill-btn hero-pill-btn-school"
                href="https://forms.gle/ZLuKVuR8XXWMrToW8"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="School Registration Form"
              >
                <span className="hero-pill-icon-wrap">
                  <svg className="hero-btn-svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3" />
                  </svg>
                </span>
                <span className="hero-pill-text">School Register</span>
                <span className="hero-pill-arrow">➔</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================
          SECTION 1: VISION & MISSION — short preview of both.
          Full detail (Strategic pillars, Mission's 9 commitments,
          Our Belief) lives on /about/#vision and /about/#mission.
          ==================================================== */}
      <section id="vision-mission" style={{ background: "var(--bg-elev)", borderBottom: "1px solid var(--line)" }}>
        <div className="wrap">
          <SHead
            eyebrow="India Genius Foundation"
            title="Our Vision & Mission."
            desc="What we're building, and why."
            center
            maxWidth={720}
          />

          <div className="vision-obj-grid">
            <div className="vision-card">
              <div className="vision-badge">
                <span className="vision-badge-dot" />
                Vision
              </div>
              <p className="vision-statement">
                To become a leading national platform for discovering, nurturing and empowering the intellectual, academic, creative and professional potential of learners across India.
              </p>
              <a className="btn btn-ghost" href="/vision/" style={{ width: "100%", justifyContent: "center" }}>
                Read Our Vision →
              </a>
            </div>

            <div className="vision-card">
              <div className="vision-badge">
                <span className="vision-badge-dot" />
                Mission
              </div>
              <p className="vision-statement">
                To create meaningful and accessible educational opportunities that inspire learners to learn, think, explore, discover and excel — through Olympiads, assessments, career guidance and national-level recognition.
              </p>
              <a className="btn btn-ghost" href="/mission/" style={{ width: "100%", justifyContent: "center" }}>
                Read Our Mission →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================
          SECTION 2: FIND YOUR DIVISION — the primary discovery
          section. 6 divisions, no subject lists here — those live
          on /subjects/ and the per-division syllabus pages.
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
              title="Find Your Olympiad."
              desc="Six structured age-appropriate divisions, from Pre-Primary all the way to Class XII. Every grade level has a tailored academic challenge."
            />
            <a
              className="btn btn-ghost"
              href="/subjects/"
              style={{ flexShrink: 0, marginBottom: 4 }}
            >
              View All Subjects ↗
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
          SECTION 3: COMPETITION JOURNEY — 4 stages, one line each.
          Full round-by-round detail lives on /olympiad-info/#structure.
          ==================================================== */}
      <section id="stages">
        <div className="wrap">
          <SHead
            eyebrow="Examination Structure"
            title="Four-Level National Progression."
            desc="A structured competitive journey from the school level all the way to the national stage."
          />

          <div className="journey-grid journey-grid-four">
            {[
              { level: 1, levelTag: "Stage 1", title: "School Selection", desc: "Offline, within school — top performers advance." },
              { level: 2, levelTag: "Stage 2", title: "District Round", desc: "Inter-school competition across registered centers." },
              { level: 3, levelTag: "Stage 3", title: "Regional / State", desc: "Top district achievers compete regionally." },
              { level: 4, levelTag: "Stage 4", title: "National Grand Finale", desc: "The nation's top scorers compete for the title." },
            ].map(({ level, levelTag, title, desc }) => (
              <div key={title} className="journey-card">
                <div className="journey-card-image">
                  <JourneyIllustration level={level} />
                </div>
                <div className="journey-card-body">
                  <div className="journey-level-tag">{levelTag}</div>
                  <h4>{title}</h4>
                  <p>{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: 36 }}>
            <a className="btn btn-ghost" href="/olympiad-info/#structure">
              View Competition Structure →
            </a>
          </div>
        </div>
      </section>

      {/* ====================================================
          SECTION 4: WHY INDIA GENIUS OLYMPIAD? — compact preview
          of the 4 core principles. Full Vision & Strategic
          Objectives now live on /about/#vision.
          ==================================================== */}
      <section id="philosophy">
        <div className="wrap">
          <div className="feature-split">
            {/* Visual column */}
            <div className="feature-image-wrap">
              <WhyCollabScene />
              <div className="feature-float-card">
                <div className="ffc-num">6</div>
                <div className="ffc-label">Age Divisions</div>
              </div>
            </div>

            {/* Content column */}
            <div>
              <SHead
                eyebrow="Why India Genius Olympiad?"
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

              <div style={{ marginTop: 36 }}>
                <a className="btn btn-ghost" href="/about/#vision">
                  Explore Our Philosophy →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================
          SECTION 5: AWARDS PREVIEW — 4 tiers, short form. Full
          award framework lives on /olympiad-info/#awards.
          ==================================================== */}
      <section id="awards-preview">
        <div className="wrap">
          <SHead
            eyebrow="Recognition &amp; Honours"
            title="Olympiad Awards Framework."
            desc="Merit recognition at every stage of the national competition."
          />
          <AwardsInteractive />
          <div style={{ textAlign: "center", marginTop: 36 }}>
            <a className="btn btn-ghost" href="/award-structure/">
              View Full Award Structure →
            </a>
          </div>
        </div>
      </section>

      {/* ====================================================
          SECTION 6: REGISTRATION CTA
          ==================================================== */}
      <section className="register-hero" id="register" style={{ background: "linear-gradient(135deg, #14172A 0%, #202945 50%, #173830 100%)" }}>
        <div className="register-hero-content">
          <div className="wrap">
            <div
              className="section-eyebrow"
              style={{ color: "var(--saffron)", justifyContent: "center", marginBottom: 10 }}
            >
              <span
                style={{
                  display: "inline-block",
                  width: 16,
                  height: 1.5,
                  background: "var(--saffron)",
                  borderRadius: 2,
                  marginRight: 8,
                }}
              ></span>
              Registration Open &middot; Session 2026&ndash;27
            </div>

            <h2
              className="section-title"
              style={{
                color: "#FFFFFF",
                fontSize: "clamp(20px, 2.8vw, 34px)",
                maxWidth: 960,
                margin: "0 auto 10px",
                textAlign: "center",
                letterSpacing: "-0.015em",
              }}
            >
              Ready to Begin Your Genius Journey?
            </h2>

            <p
              style={{
                color: "rgba(255,255,255,0.78)",
                fontSize: 14.5,
                maxWidth: 520,
                margin: "0 auto 28px",
                textAlign: "center",
                lineHeight: 1.6,
              }}
            >
              Join thousands of students and schools across India. Register now for the 2026–27 Academic Session at just ₹80 per subject.
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
          SECTION 7: FAQ — Clean, simple centered layout
          ==================================================== */}
      <section id="faq" style={{ padding: "80px 0" }}>
        <div className="wrap">
          <SHead
            eyebrow="Frequently Asked Questions"
            title="Everything You Need to Know."
            desc="Clear answers to the questions we hear most."
            center
            maxWidth={760}
          />

          <div style={{ maxWidth: 840, margin: "0 auto" }}>
            <AccordionItem id="faq-1" title="What is the India Genius Olympiad?">
              <p>
                India Genius Olympiad is a national-level multi-subject competitive examination for school students from Pre-Primary (PG) to Class XII, assessing emerging competencies such as AI, Cyber Security, Financial Literacy, Mathematics, Sciences, and Critical Thinking.
              </p>
            </AccordionItem>
            <AccordionItem id="faq-2" title="Who can participate?">
              <p>
                Any student from Pre-Primary (PG) through Class XII, at any CBSE, ICSE, or State Board school across India, can participate — either through their school or by registering individually.
              </p>
            </AccordionItem>
            <AccordionItem id="faq-3" title="Which subjects are available for my child's class?">
              <p>
                Subjects are tailored by age division. Visit the{" "}
                <a href="/subjects/" style={{ color: "var(--saffron)", fontWeight: 600 }}>
                  Subjects
                </a>{" "}
                page for the complete division-wise list.
              </p>
            </AccordionItem>
            <AccordionItem id="faq-4" title="What is the fee per student?">
              <p>
                The registration fee is ₹80 per subject, per student. Students are encouraged to participate in multiple Olympiad subjects within their class group.
              </p>
            </AccordionItem>
            <AccordionItem id="faq-5" title="How can our school register?">
              <p>
                Schools can register directly using the School Registration Google Form linked in the header or contact the coordinator team directly.
              </p>
            </AccordionItem>

            <div style={{ marginTop: 32, textAlign: "center" }}>
              <a className="btn btn-ghost" href="/olympiad-info/#faq">
                Explore More FAQs →
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
