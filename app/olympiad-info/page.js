import Link from "next/link";
import AccordionItem from "../../components/AccordionItem";
import ageGroupsData from "../../data/ageGroups.json";

export const metadata = {
  title: "Olympiad Info | India Genius Olympiad — Structure, Subjects & Awards",
  description:
    "Complete guide to India Genius Olympiad: About the olympiad, subject categories by class, age groups, competition structure (4 rounds), and award framework. Registration at ₹80 per subject.",
};

// One accent color across every subject/age-group card — kept minimal,
// per redesign feedback (no per-division rainbow of border colors).
const CARD_ACCENT = "var(--saffron)";

const totalSubjectEntries = ageGroupsData.reduce((sum, g) => sum + g.subjects.length, 0);

const subjectCategories = [
  {
    classes: "PG – UKG",
    label: "Foundation",
    icon: "🌱",
    subjects: [
      "Little Genius Mental Ability Olympiad",
      "Language & Communication Olympiad",
      "Number & Logical Thinking Olympiad",
      "My World & General Awareness Olympiad",
      "Creativity & Imagination Olympiad",
      "Nature & Environment Awareness Olympiad",
      "Good Habits & Life Skills Olympiad",
    ],
  },
  {
    classes: "Classes I – II",
    label: "Junior",
    icon: "🧩",
    subjects: [
      "Junior Mental Ability & Reasoning Olympiad",
      "Mathematics & Logical Thinking Olympiad",
      "English Language & Communication Olympiad",
      "General Knowledge & My India Olympiad",
      "Young Science Explorer Olympiad",
      "Digital & Computer Awareness Olympiad",
    ],
  },
  {
    classes: "Classes III – V",
    label: "Primary",
    icon: "🎨",
    subjects: [
      "Mental Ability & Reasoning Olympiad",
      "Computer & Coding Genius Olympiad",
      "Space Science & Astronomy Olympiad",
      "Innovation & Young Entrepreneur Olympiad",
      "India Genius GK & Heritage Olympiad",
    ],
  },
  {
    classes: "Classes VI – VIII",
    label: "Middle",
    icon: "🤖",
    subjects: [
      "Artificial Intelligence & Emerging Technology Olympiad",
      "Cybersecurity & Digital Safety Olympiad",
      "Financial Literacy Olympiad",
      "Space Science & Astronomy Olympiad",
      "Climate & Sustainability Olympiad",
      "Kaushal Bodh Olympiad",
      "Digital Citizenship Olympiad",
      "Indian Heritage Olympiad",
    ],
  },
  {
    classes: "Classes IX – X",
    label: "Secondary",
    icon: "💡",
    subjects: [
      "Artificial Intelligence & Machine Learning Olympiad",
      "Cybersecurity & Ethical Hacking Olympiad",
      "Financial Markets Olympiad",
      "Behavioural Science & Psychology Olympiad",
      "Climate & Sustainability Olympiad",
      "Entrepreneurship & Innovation Olympiad",
    ],
  },
  {
    classes: "Classes XI – XII",
    label: "Senior Secondary",
    icon: "🎯",
    subjects: [
      "Cybersecurity & Digital Safety Olympiad",
      "Financial Literacy Olympiad",
      "Entrepreneurship & Innovation Olympiad",
      "Climate & Sustainability Olympiad",
      "Leadership & Life Skills Olympiad",
      "Critical Thinking & Problem-Solving Olympiad",
      "Communication & Public Speaking Olympiad",
      "Career & Future Skills Olympiad",
    ],
  },
];

const ageGroups = [
  { class: "PG – UKG", category: "Foundation" },
  { class: "Classes I – II", category: "Junior" },
  { class: "Classes III – V", category: "Primary" },
  { class: "Classes VI – VIII", category: "Middle" },
  { class: "Classes IX – X", category: "Secondary" },
  { class: "Classes XI – XII", category: "Senior Secondary" },
];

const ageGroupNarratives = [
  {
    icon: "🌱",
    classes: "PG – UKG",
    name: "Foundation",
    level: "Foundation Level",
    desc: "Specially designed for young learners from Playgroup to UKG. At this early stage, children learn best through curiosity, observation, exploration and enjoyable activities.",
  },
  {
    icon: "⭐",
    classes: "Classes I – II",
    name: "Junior",
    level: "Junior Level",
    desc: "Designed for students of Classes I and II, when children begin developing stronger academic foundations and greater curiosity about the world.",
  },
  {
    icon: "📘",
    classes: "Classes III – V",
    name: "Primary",
    level: "Explore Level",
    desc: "Strengthens fundamental knowledge and encourages students to explore subjects beyond the classroom. Assessments and activities focus on conceptual understanding, reasoning, analytical thinking, creativity, general awareness and practical application.",
  },
  {
    icon: "🚀",
    classes: "Classes VI – VIII",
    name: "Middle",
    level: "Develop Level",
    desc: "Provides students with greater academic and intellectual challenges. Programmes focus on deeper understanding, logical and analytical reasoning, problem-solving, scientific temperament, creativity, technology awareness and future-ready skills.",
  },
  {
    icon: "🏆",
    classes: "Classes IX – X",
    name: "Secondary",
    level: "Master Level",
    desc: "Designed for students preparing for higher academic challenges and important career decisions. Activities and assessments encourage subject proficiency, critical thinking, analytical ability, real-world application, innovation and leadership.",
  },
  {
    icon: "🎓",
    classes: "Classes XI – XII",
    name: "Senior Secondary",
    level: "Lead Level",
    desc: "Provides advanced opportunities for students to demonstrate academic knowledge, specialised interests, analytical ability and future readiness. Programmes focus on higher-order thinking, career awareness, leadership and preparation for higher education.",
  },
];

const awardStructure = [
  {
    level: "School Level",
    icon: "🏫",
    recognition: "Participation Certificate / School Qualifier Certificate and e-Certificate for all participants",
    desc: "Every participant receives recognition for taking part. Eligible students who meet the required performance criteria may receive a School Qualifier Certificate and advance, wherever applicable.",
  },
  {
    level: "District Level",
    icon: "🏅",
    recognition: "District Winners, Runner-ups and Merit Certificate along with Gold, Silver and Bronze Medals, as applicable",
    desc: "Outstanding performers are recognised as District Winners, Runner-ups and Merit Achievers, with certificates and medals according to their ranking.",
  },
  {
    level: "State Level",
    icon: "🏆",
    recognition: "State Winners, Runner-ups and Merit Certificate along with Gold, Silver and Bronze Medals and/or Trophies, as applicable",
    desc: "Students demonstrating exceptional performance at the state stage are recognised as State Winners, Runner-ups and Merit Achievers.",
  },
  {
    level: "National Level",
    icon: "🇮🇳",
    recognition: "National Champion, National Runner-ups and Merit Recognition along with Trophy and/or Medal and an Official National-Level Certificate",
    desc: "The highest level of recognition, honouring India's outstanding young achievers as National Champions, Runner-ups and Merit Achievers.",
  },
];

const competitionRounds = [
  {
    round: "Round 1",
    level: "School Selection Round",
    mode: "Offline | Within School",
    color: "#E65A00",
    points: [
      "Conducted at individual participating schools",
      "Students participate in their respective class, age group and category",
      "Objective and MCQ-based examination, designed to the prescribed syllabus",
      "Performance evaluated according to applicable marking and ranking criteria",
      "Schools identify and select their top-performing students",
      "Eligible top performers qualify to advance to the District Level",
    ],
  },
  {
    round: "Round 2",
    level: "District Level",
    mode: "Offline | Inter-School",
    color: "#0A6EBD",
    points: [
      "Conducted district-wise at designated venues or participating institutions",
      "Qualified students compete with participants from other schools",
      "Same subject and prescribed age / class category",
      "Performance evaluated through district-level ranking",
      "Outstanding performers recognised as District Winners, Runner-ups & Merit Achievers",
      "Eligible District Winners qualify to advance to the State Level",
    ],
  },
  {
    round: "Round 3",
    level: "State Level",
    mode: "Offline | District Winners",
    color: "#22863A",
    points: [
      "Open to eligible qualifiers from the District Level",
      "District Winners represent their respective schools and districts",
      "Conducted according to prescribed subjects, groups and categories",
      "Performance evaluated through state-level ranking",
      "Outstanding performers recognised as State Winners, Runner-ups & Merit Achievers",
      "Eligible State Winners qualify to advance to the National Level",
    ],
  },
  {
    round: "Round 4",
    level: "National Level",
    mode: "Offline | State Winners",
    color: "#8B1A1A",
    points: [
      "Open to eligible State Winners and qualifiers",
      "Students represent their respective states at the national competition",
      "Conducted across prescribed subjects and age / class categories",
      "Participants compete for national rankings and prestigious recognition",
      "Top performers recognised as National Champion, Runner-up & Merit Achievers",
      "Awardees receive National-Level Certificates, Medals and/or Trophies",
    ],
  },
];

export default function OlympiadInfoPage() {
  return (
    <>
      {/* Minimal Header */}
      <section style={{ paddingTop: 36, paddingBottom: 24 }}>
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

          <div style={{ textAlign: "center", maxWidth: 820, margin: "0 auto" }}>
            <div className="section-eyebrow" style={{ justifyContent: "center", marginBottom: 10 }}>
              India Genius Foundation &middot; National Olympiad
            </div>
            <h1 style={{ fontFamily: "var(--display)", fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 800, color: "var(--ink)", letterSpacing: "-0.02em", marginBottom: 12 }}>
              India Genius Olympiads
            </h1>
            <p style={{ fontSize: 16, color: "var(--ink-dim)", lineHeight: 1.65, maxWidth: 720, margin: "0 auto" }}>
              A national-level Olympiad examination for students from Pre-Primary (PG) to Class XII assessing future-ready skills, conceptual understanding, and critical problem solving.
            </p>
          </div>
        </div>
      </section>

      {/* ── ABOUT THE OLYMPIAD ────────────────────────────── */}
      <section id="about" className="oi-section" style={{ background: "var(--bg-elev)" }}>
        <div className="wrap">
          <div className="oi-about-grid">
            <div>
              <div className="section-eyebrow">About The Olympiad</div>
              <h2 className="oi-section-title">What is India Genius Olympiad?</h2>
              <p className="oi-about-desc">
                The India Genius Olympiad is a national-level assessment and recognition programme designed to identify, nurture
                and reward academic excellence and future-ready skills among students from PG to Class XII. Spanning <strong>six age
                categories</strong> and covering subjects ranging from Artificial Intelligence and Cybersecurity to Financial
                Literacy, Space Science, Entrepreneurship and Leadership, the Olympiad gives every student — from the youngest
                learners to senior secondary students — a structured, <strong>four-tier platform</strong> to test their knowledge
                and compete from the school level up to the national stage.
              </p>
              <div className="oi-stat-row">
                <div className="oi-stat-card">
                  <div className="oi-stat-num">6</div>
                  <div className="oi-stat-label">Age Categories</div>
                </div>
                <div className="oi-stat-card">
                  <div className="oi-stat-num">{totalSubjectEntries}+</div>
                  <div className="oi-stat-label">Olympiad Subjects</div>
                </div>
                <div className="oi-stat-card">
                  <div className="oi-stat-num">4</div>
                  <div className="oi-stat-label">Competition Levels</div>
                </div>
                <div className="oi-stat-card">
                  <div className="oi-stat-num">₹80</div>
                  <div className="oi-stat-label">Per Subject Fee</div>
                </div>
              </div>
            </div>
            <div className="oi-about-organizer">
              <div className="oi-organizer-card">
                <div className="oi-organizer-label">Organised By</div>
                <div className="oi-organizer-name">India Genius Foundation (IGF)</div>
                <div className="oi-founder-row">
                  <div className="oi-founder">
                    <div className="oi-founder-name">Dr. Amit Sehgal</div>
                    <div className="oi-founder-role">Founder</div>
                    <a href="tel:7906326611" className="oi-founder-phone">📞 7906326611</a>
                  </div>
                  <div className="oi-founder">
                    <div className="oi-founder-name">Mr. Rishi Kant Upadhaya</div>
                    <div className="oi-founder-role">Co-Founder</div>
                    <a href="tel:9540944490" className="oi-founder-phone">📞 9540944490</a>
                  </div>
                </div>
                <div className="oi-organizer-cta-row">
                  <a className="btn btn-primary" href="/registration/?tab=student" data-reg-modal="student" style={{ fontSize: 13 }}>
                    Register Now ➔
                  </a>
                  <Link className="btn btn-ghost" href="/contact-us" style={{ fontSize: 13 }}>
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SUBJECT CATEGORIES ────────────────────────────── */}
      <section className="oi-section">
        <div className="wrap">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div className="section-eyebrow" style={{ justifyContent: "center" }}>Academics</div>
            <h2 className="oi-section-title" style={{ textAlign: "center" }}>Subject Categories</h2>
            <p style={{ color: "var(--muted)", maxWidth: 600, margin: "0 auto" }}>
              Each age group has a curated set of future-ready subjects. Choose one or multiple Olympiads per session.
            </p>
          </div>
          <div className="oi-subjects-grid">
            {subjectCategories.map((cat) => (
              <div key={cat.label} className="oi-subject-card">
                <div className="oi-subject-header" style={{ background: CARD_ACCENT }}>
                  <span className="oi-subject-icon">{cat.icon}</span>
                  <div>
                    <div className="oi-subject-classes">{cat.classes}</div>
                    <div className="oi-subject-label">{cat.label}</div>
                  </div>
                </div>
                <ol className="oi-subject-list">
                  {cat.subjects.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AGE GROUPS ────────────────────────────────────── */}
      <section id="age-group" className="oi-section" style={{ background: "var(--bg-elev)" }}>
        <div className="wrap">
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <div className="section-eyebrow" style={{ justifyContent: "center" }}>Eligibility</div>
            <h2 className="oi-section-title" style={{ textAlign: "center" }}>Age Groups</h2>
            <p style={{ color: "var(--muted)", maxWidth: 640, margin: "0 auto" }}>
              Our Olympiads, quizzes, assessments and educational programmes are designed according to
              the age, learning level and developmental stage of students — every participant gets an
              appropriate level of challenge.
            </p>
          </div>
          <div className="oi-age-table-wrap">
            <table className="oi-age-table">
              <thead>
                <tr>
                  <th>🎒 Class / Stage</th>
                  <th>📋 Category</th>
                </tr>
              </thead>
              <tbody>
                {ageGroups.map((row) => (
                  <tr key={row.category}>
                    <td>{row.class}</td>
                    <td><span className="oi-age-badge">{row.category}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="oi-subjects-grid" style={{ marginTop: 40 }}>
            {ageGroupNarratives.map((g) => (
              <div key={g.name} className="oi-subject-card">
                <div className="oi-subject-header" style={{ background: "var(--teal)" }}>
                  <span className="oi-subject-icon">{g.icon}</span>
                  <div>
                    <div className="oi-subject-classes">{g.classes}</div>
                    <div className="oi-subject-label">
                      {g.name}{g.level ? ` · ${g.level}` : ""}
                    </div>
                  </div>
                </div>
                <p style={{ padding: "18px 24px", color: "var(--ink-dim)", fontSize: 14, lineHeight: 1.7 }}>
                  {g.desc}
                </p>
              </div>
            ))}
          </div>

          <p style={{ textAlign: "center", color: "var(--ink-dim)", fontSize: 14.5, marginTop: 32, fontStyle: "italic" }}>
            From Foundation to Future Success, Every Learner Has the Opportunity to Discover Their Genius.
          </p>
        </div>
      </section>

      {/* ── COMPETITION STRUCTURE ─────────────────────────── */}
      <section id="structure" className="oi-section">
        <div className="wrap">
          <div style={{ textAlign: "center", marginBottom: 16 }}>
            <div className="section-eyebrow" style={{ justifyContent: "center" }}>Competition Structure</div>
            <h2 className="oi-section-title" style={{ textAlign: "center" }}>Four-Level National Competition</h2>
            <p style={{ color: "var(--muted)", maxWidth: 560, margin: "0 auto 48px", textAlign: "center" }}>
              The Olympiad fee is <strong>₹80 per subject per student</strong>, applicable uniformly across all four stages.
            </p>
          </div>
          <div className="oi-rounds-grid">
            {competitionRounds.map((r) => (
              <div key={r.round} className="oi-round-card">
                <div className="oi-round-header" style={{ borderColor: r.color }}>
                  <div className="oi-round-tag" style={{ background: r.color }}>{r.round}</div>
                  <div className="oi-round-level">{r.level}</div>
                  <div className="oi-round-mode">{r.mode}</div>
                </div>
                <ul className="oi-round-points">
                  {r.points.map((pt, i) => (
                    <li key={i}>{pt}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p style={{ textAlign: "center", color: "var(--ink-dim)", fontSize: 14.5, marginTop: 40, fontStyle: "italic" }}>
            School Level → District Level → State Level → National Level.<br />
            Begin at Your School. Rise Through Your District and State. Compete for National Glory.
          </p>
        </div>
      </section>

      {/* ── AWARD STRUCTURE ───────────────────────────────── */}
      <section id="awards" className="oi-section" style={{ background: "var(--bg-elev)" }}>
        <div className="wrap">
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <div className="section-eyebrow" style={{ justifyContent: "center" }}>Recognition</div>
            <h2 className="oi-section-title" style={{ textAlign: "center" }}>Award Structure</h2>
            <p style={{ color: "var(--muted)", maxWidth: 640, margin: "0 auto" }}>
              Every learner deserves recognition for participation, effort, achievement and excellence —
              our award structure motivates students at every stage, from school-level participation to
              national-level achievement.
            </p>
          </div>

          <div className="oi-age-table-wrap" style={{ marginBottom: 48 }}>
            <table className="oi-age-table">
              <thead>
                <tr>
                  <th>🎖️ Level</th>
                  <th>🏅 Recognition</th>
                </tr>
              </thead>
              <tbody>
                {awardStructure.map((a) => (
                  <tr key={a.level}>
                    <td>{a.level}</td>
                    <td>{a.recognition}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="oi-award-grid">
            {awardStructure.map((a) => (
              <div key={a.level} className="oi-award-card">
                <div className="oi-award-icon">{a.icon}</div>
                <div className="oi-award-level">{a.level}</div>
                <div className="oi-award-recognition">{a.recognition}</div>
                <p style={{ color: "var(--ink-dim)", fontSize: 13.5, lineHeight: 1.6, marginTop: 10 }}>
                  {a.desc}
                </p>
              </div>
            ))}
          </div>

          <p style={{ textAlign: "center", color: "var(--ink-dim)", fontSize: 14.5, marginTop: 40, fontStyle: "italic" }}>
            Every Participation Matters. Every Achievement Deserves Recognition. Every Talent Has the Potential to Shine.
          </p>

          <div style={{ textAlign: "center", marginTop: 28 }}>
            <Link className="btn btn-ghost" href="/award-structure/">
              Explore Detailed Award Structure &amp; Honours →
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ — full list; Home only carries the 5 essentials ─────── */}
      <section id="faq" className="oi-section">
        <div className="wrap">
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <div className="section-eyebrow" style={{ justifyContent: "center" }}>Frequently Asked Questions</div>
            <h2 className="oi-section-title" style={{ textAlign: "center" }}>Everything You Need to Know</h2>
          </div>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <AccordionItem id="oi-faq-1" title="What is the India Genius Olympiad?">
              <p>
                India Genius Olympiad is a national-level multi-subject competitive examination for school students from Pre-Primary (PG) to Class XII, assessing emerging competencies such as AI, Cyber Security, Financial Literacy, Mathematics, Sciences, and Critical Thinking.
              </p>
            </AccordionItem>
            <AccordionItem id="oi-faq-2" title="Which subjects are available for my child's class?">
              <p>
                Subjects are tailored by age division, from 5–8 Olympiads at the earliest levels up to 8 specialized subjects for senior classes. Visit the{" "}
                <Link href="/subjects/" style={{ color: "var(--saffron)", fontWeight: 600 }}>
                  Subjects
                </Link>{" "}
                page for the complete division-wise list.
              </p>
            </AccordionItem>
            <AccordionItem id="oi-faq-3" title="What is the examination format?">
              <p>
                The assessment features objective multiple-choice questions (MCQs) designed to test conceptual understanding, practical application, and logical analysis rather than simple recall.
              </p>
            </AccordionItem>
            <AccordionItem id="oi-faq-4" title="Can the exam be taken online or offline?">
              <p>
                District Round examinations can be conducted through school exam halls or secure online assessment portals as designated by the participating institution.
              </p>
            </AccordionItem>
            <AccordionItem id="oi-faq-5" title="What is the fee per student?">
              <p>
                The registration fee is ₹80 per subject, per student. Students are encouraged to participate in multiple Olympiad subjects within their class group.
              </p>
            </AccordionItem>
            <AccordionItem id="oi-faq-6" title="How can our school register?">
              <p>
                Schools can register directly using the School Registration Google Form linked in the header, or contact the coordinator team directly via the{" "}
                <Link href="/contact-us/" style={{ color: "var(--saffron)", fontWeight: 600 }}>
                  Contact Us
                </Link>{" "}
                page.
              </p>
            </AccordionItem>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────── */}
      <section className="oi-section oi-cta-section">
        <div className="wrap" style={{ textAlign: "center" }}>
          <h2 className="oi-section-title" style={{ color: "#fff", textAlign: "center" }}>
            Ready to Register?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.78)", maxWidth: 520, margin: "0 auto 32px" }}>
            Join thousands of students across India. Just ₹80 per subject. Register for Session 2026 now.
          </p>
          <div className="oi-hero-actions">
            <a className="btn btn-primary" href="/registration/?tab=student" data-reg-modal="student">
              Student Registration ➔
            </a>
            <a className="btn" href="/registration/?tab=school" data-reg-modal="school"
              style={{ background: "rgba(255,255,255,0.15)", color: "#fff", border: "1.5px solid rgba(255,255,255,0.3)" }}>
              School Registration ➔
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
