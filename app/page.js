import { Suspense } from "react";
import AccordionItem from "../components/AccordionItem";
import TestimonialsSection from "../components/TestimonialsSection";
import HomeStatsSection from "../components/HomeStatsSection";
import RegistrationUnified from "../components/RegistrationUnified";
import {
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
              <span className="hero-head-orange">Becomes Genius</span>
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
              <button
                type="button"
                className="hero-pill-btn hero-pill-btn-student"
                data-reg-modal="student"
                aria-label="Open Student Registration Form"
                style={{ cursor: "pointer" }}
              >
                <span className="hero-pill-icon-wrap">
                  <svg className="hero-btn-svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                  </svg>
                </span>
                <span className="hero-pill-text">Student Register</span>
                <span className="hero-pill-arrow">➔</span>
              </button>
              <button
                type="button"
                className="hero-pill-btn hero-pill-btn-school"
                data-reg-modal="school"
                aria-label="Open School Registration Form"
                style={{ cursor: "pointer" }}
              >
                <span className="hero-pill-icon-wrap">
                  <svg className="hero-btn-svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3" />
                  </svg>
                </span>
                <span className="hero-pill-text">School Register</span>
                <span className="hero-pill-arrow">➔</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================
          SECTION 1: NATIONAL SCALE & STATS IMPACT (MARKETING)
          Placed just after Hero section
          ==================================================== */}
      <HomeStatsSection />

      {/* ====================================================
          SECTION 2: VISION & MISSION — short preview of both.
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
          SECTION 3: FIND YOUR DIVISION — the primary discovery
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
          SECTION 4: TESTIMONIALS (MOVING CARDS)
          ==================================================== */}
      <TestimonialsSection />

      {/* ====================================================
          SECTION 5: REGISTRATION DESK (ON-PAGE EMBEDDED)
          ==================================================== */}
      <section id="registration" style={{ padding: "60px 0 80px", width: "100%", background: "var(--bg)", borderTop: "1px solid var(--line)" }}>
        <div style={{ width: "100%", maxWidth: "100%", padding: "0 clamp(12px, 2.5vw, 40px)" }}>
          <div
            className="section-eyebrow"
            style={{
              color: "var(--saffron)",
              justifyContent: "center",
              marginBottom: 8,
            }}
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
            Registration Open &middot; Session 2026
          </div>

          <h2
            className="section-title"
            style={{
              color: "var(--ink)",
              fontSize: "clamp(22px, 3vw, 36px)",
              fontWeight: 800,
              maxWidth: 960,
              margin: "0 auto 12px",
              textAlign: "center",
              letterSpacing: "-0.02em",
            }}
          >
            Ready to Begin Your Genius Journey?
          </h2>

          <p
            style={{
              color: "var(--ink-dim)",
              fontSize: "15px",
              maxWidth: 540,
              margin: "0 auto 32px",
              textAlign: "center",
              lineHeight: 1.6,
            }}
          >
            Join thousands of students and schools across India. Register now for the 2026 Academic Session at just ₹80 per subject.
          </p>

          <Suspense
            fallback={
              <div style={{ padding: "48px 24px", textAlign: "center", color: "var(--ink-faint)" }}>
                Loading registration desk...
              </div>
            }
          >
            <RegistrationUnified />
          </Suspense>
        </div>
      </section>

      {/* ====================================================
          SECTION 6: FAQ — 2-Column Responsive Layout
          ==================================================== */}
      <section id="faq" style={{ padding: "80px 0", background: "var(--bg-elev)", borderTop: "1px solid var(--line)" }}>
        <div className="wrap">
          <SHead
            eyebrow="Frequently Asked Questions"
            title="Everything You Need to Know."
            desc="Clear answers to the questions we hear most."
            center
            maxWidth={760}
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
              gap: 20,
              maxWidth: 1200,
              margin: "0 auto",
              alignItems: "start",
            }}
          >
            {/* Column 1 */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <AccordionItem id="faq-1" title="What is the India Genius Olympiad?">
                <p>
                  India Genius Olympiad is a national-level multi-subject competitive examination for school students from Pre-Primary (PG) to Class XII, assessing core concepts alongside emerging competencies such as AI, Cyber Security, Financial Literacy, Space Science, and Critical Thinking.
                </p>
              </AccordionItem>

              <AccordionItem id="faq-2" title="Who is eligible to participate?">
                <p>
                  Any school student from Pre-Primary (PG) through Class XII studying in CBSE, ICSE, Cambridge, or State Board affiliated institutions across India is eligible to participate — either directly through their school or via individual registration.
                </p>
              </AccordionItem>

              <AccordionItem id="faq-3" title="Which subjects are available for my child's class?">
                <p>
                  Subjects are tailored by age division, ranging from 5–8 Olympiads for young learners up to 8 specialized streams for senior classes. Visit the{" "}
                  <a href="/subjects/" style={{ color: "var(--saffron)", fontWeight: 600 }}>
                    Subjects
                  </a>{" "}
                  page for the complete division-wise list.
                </p>
              </AccordionItem>

              <AccordionItem id="faq-4" title="What is the examination format and question pattern?">
                <p>
                  The assessment features objective Multiple Choice Questions (MCQs) designed to test conceptual understanding, practical application, and logical analysis rather than simple recall.
                </p>
              </AccordionItem>
            </div>

            {/* Column 2 */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <AccordionItem id="faq-5" title="What is the registration fee per student?">
                <p>
                  The registration fee is a nominal and standardized ₹80 per subject, per student. Students are welcome and encouraged to participate in multiple Olympiad subjects within their class group.
                </p>
              </AccordionItem>

              <AccordionItem id="faq-6" title="Can the exam be taken online or offline?">
                <p>
                  Round 1 (School Selection) is conducted offline in participating schools. Subsequent rounds (District, State, National) are conducted at designated partner centers and authorized institutional examination hubs.
                </p>
              </AccordionItem>

              <AccordionItem id="faq-7" title="How can our school register?">
                <p>
                  Schools can register directly using the official School Registration Google Form or contact the coordinator team directly via the{" "}
                  <a href="/contact-us/" style={{ color: "var(--saffron)", fontWeight: 600 }}>
                    Contact Us
                  </a>{" "}
                  page.
                </p>
              </AccordionItem>

              <AccordionItem id="faq-8" title="What awards and recognitions do students receive?">
                <p>
                  Every participant receives a Certificate of Participation and Diagnostic Scorecard. Top performers earn School Qualifier Certificates, District Medals (Gold, Silver, Bronze), State Trophies, and National Merit Honours with scholarships.
                </p>
              </AccordionItem>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
