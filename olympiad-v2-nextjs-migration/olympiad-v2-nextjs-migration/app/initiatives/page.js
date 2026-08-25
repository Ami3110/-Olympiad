export const metadata = {
  title: "Annual Initiatives",
  description:
    "India Genius Foundation's annual initiatives: the Olympiad examination, career guidance, university fairs, national quizzes, educational leadership events, and the Teachers' Education Conclave.",
};

const initiatives = [
  {
    num: "01",
    audience: "PG – Class XII · All Streams",
    title: "India Genius Olympiad Examination",
    desc: "A series of age-appropriate Olympiads designed to promote knowledge, logical thinking, creativity, general awareness, subject excellence and competitive skills among students.",
    accent: "var(--flame)",
    accentBg: "rgba(201,70,39,0.07)",
  },
  {
    num: "02",
    audience: "Senior Classes",
    title: "Annual Career Guidance Programme",
    desc: "A structured annual initiative covering career options, emerging professions, higher education pathways, entrance examinations, scholarships and future skills.",
    accent: "var(--teal)",
    accentBg: "rgba(13,122,103,0.07)",
  },
  {
    num: "03",
    audience: "Students & Parents",
    title: "Annual Admission & University Fair",
    desc: "Direct interaction with representatives of leading universities and higher education institutions from Dehradun and other major education destinations such as Delhi, Meerut, and Haridwar.",
    accent: "var(--saffron)",
    accentBg: "rgba(193,101,12,0.07)",
  },
  {
    num: "04",
    audience: "Class XII",
    title: "National Level Quizzes for Class XII",
    desc: "National-level quiz competitions exclusively for Class XII students, organised in collaboration with reputed institutions including DBS Global University.",
    accent: "var(--gold)",
    accentBg: "rgba(147,101,10,0.07)",
  },
  {
    num: "05",
    audience: "Chairpersons & Principals",
    title: "Annual Educational Leadership Event",
    desc: "A national-level platform for Chairpersons, Principals and senior school leaders of CBSE, ICSE and State Board schools to discuss education leadership, innovation, AI in education, school transformation, future skills and academic excellence.",
    accent: "var(--teal)",
    accentBg: "rgba(13,122,103,0.07)",
  },
  {
    num: "06",
    audience: "Coordinators & PGTs · 4 September",
    title: "Teachers' Education Conclave & Award Ceremony",
    desc: "An annual professional development and recognition platform for Coordinators and PGTs, featuring expert sessions, educational innovation, networking and recognition of outstanding educators.",
    accent: "var(--flame)",
    accentBg: "rgba(201,70,39,0.07)",
  },
];

export default function InitiativesPage() {
  return (
    <>
      {/* Page hero */}
      <section style={{ paddingBottom: 0 }}>
        <div className="wrap">
          <a className="page-back-link" href="/">&#8592; Back to Home</a>

          <div style={{
            background: "linear-gradient(135deg, rgba(193,101,12,0.06), rgba(13,122,103,0.04))",
            border: "1px solid var(--line)",
            borderRadius: "var(--r-xl)",
            padding: "48px 40px",
            marginBottom: 56,
          }}>
            <div style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--teal)", marginBottom: 12, display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ display: "inline-block", width: 16, height: 1.5, background: "var(--teal)", borderRadius: 2 }}></span>
              India Genius Foundation
            </div>
            <h1 className="page-title">Our Annual Initiatives</h1>
            <p style={{ color: "var(--ink-dim)", fontSize: 16.5, lineHeight: 1.7, marginTop: 14, maxWidth: 680 }}>
              Connecting Schools &middot; Students &middot; Teachers &middot; Universities &middot; Education Leaders
            </p>
            <p style={{ color: "var(--ink-dim)", fontSize: 16, lineHeight: 1.7, marginTop: 10, maxWidth: 680 }}>
              India Genius Foundation is an educational initiative dedicated to creating meaningful opportunities for students, teachers, school leaders and educational institutions, through academic competitions, career guidance, university interaction, quizzes, professional development and national-level educational events.
            </p>
          </div>
        </div>
      </section>

      {/* Six initiatives — editorial numbered cards */}
      <section>
        <div className="wrap">
          <div className="section-head" style={{ marginBottom: 40 }}>
            <div className="section-eyebrow">Major Programmes</div>
            <h2 className="section-title">Six annual initiatives, one platform</h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {initiatives.map(({ num, audience, title, desc, accent, accentBg }) => (
              <div
                key={num}
                className="initiative-numbered-card"
                style={{
                  display: "grid",
                  gridTemplateColumns: "80px 1fr",
                  gap: "0 32px",
                  background: "var(--bg-card)",
                  border: "1px solid var(--line)",
                  borderLeft: `4px solid ${accent}`,
                  borderRadius: "var(--r-card)",
                  padding: "28px 32px",
                }}
              >
                {/* Number */}
                <div style={{ paddingTop: 4 }}>
                  <div style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--ink-faint)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 4 }}>
                    Initiative
                  </div>
                  <div style={{ fontFamily: "var(--display)", fontSize: 40, fontWeight: 800, color: accent, lineHeight: 1, letterSpacing: "-0.03em", opacity: 0.7 }}>
                    {num}
                  </div>
                </div>

                {/* Content */}
                <div>
                  <div style={{
                    display: "inline-block",
                    fontFamily: "var(--mono)", fontSize: 10.5, textTransform: "uppercase", letterSpacing: "0.12em",
                    color: accent, background: accentBg,
                    border: `1px solid ${accent}33`,
                    borderRadius: 6, padding: "3px 10px", marginBottom: 12
                  }}>
                    {audience}
                  </div>
                  <h3 style={{ fontFamily: "var(--display)", fontSize: 20, fontWeight: 700, color: "var(--ink)", marginBottom: 10, letterSpacing: "-0.01em" }}>
                    {title}
                  </h3>
                  <p style={{ fontSize: 15.5, color: "var(--ink-dim)", lineHeight: 1.7 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why connect */}
      <section>
        <div className="wrap">
          <div className="section-head">
            <div className="section-eyebrow">For Schools</div>
            <h2 className="section-title">Why connect with India Genius Foundation</h2>
          </div>
          <div className="chip-grid">
            {[
              "Academic competitions and Olympiads",
              "Career awareness and counselling",
              "University and higher-education interaction",
              "National-level quizzes",
              "Teacher professional development",
              "Educational leadership programmes",
              "Recognition and awards",
              "Networking with leading schools and universities",
              "Exposure to emerging trends and innovations in education",
            ].map((item) => (
              <div key={item} className="chip">{item}</div>
            ))}
          </div>
          <p className="placeholder-note" style={{ marginTop: 20 }}>
            Detailed information regarding eligibility, schedules, participation, registration, guidelines, and awards for each initiative is shared separately with participating schools.
          </p>
        </div>
      </section>

      {/* School Connect CTA */}
      <section id="school-connect">
        <div className="wrap">
          <div style={{ maxWidth: 560, margin: "0 auto" }}>
            <div className="register-cta-card">
              <span className="register-cta-icon">🤝</span>
              <h3>School Connect Form</h3>
              <p>Share your school&apos;s basic details so our team can stay connected with your institution and share information about upcoming programmes and opportunities.</p>
              <a className="btn btn-primary" href="https://forms.gle/tt83cHHLN2n4B7YR6" target="_blank" rel="noopener noreferrer">
                Connect Your School ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Slogan banner */}
      <div className="slogan-banner">
        <div className="tag">India Genius Foundation</div>
        <h3>&ldquo;Empowering Students &middot; Inspiring Teachers &middot; Connecting Institutions &middot; Transforming Education&rdquo;</h3>
      </div>
    </>
  );
}
