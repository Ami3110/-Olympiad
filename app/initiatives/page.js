export const metadata = {
  title: "Annual Initiatives — India Genius Olympiad | India Genius Foundation",
  description:
    "Explore India Genius Foundation's 6 flagship annual initiatives: Olympiad examinations, career guidance, university fairs, national quizzes, educational leadership summits, and Teachers' Education Conclave.",
};

const initiatives = [
  {
    num: "01",
    icon: "🏆",
    audience: "PG – Class XII · All Streams",
    title: "India Genius Olympiad Examination",
    desc: "A series of age-appropriate Olympiads designed to promote knowledge, logical thinking, creativity, general awareness, subject excellence and competitive skills among students.",
    accent: "#E65A00",
    bgTint: "rgba(230, 90, 0, 0.05)",
  },
  {
    num: "02",
    icon: "🧭",
    audience: "Senior Classes",
    title: "Annual Career Guidance Programme",
    desc: "A structured annual initiative covering career options, emerging professions, higher education pathways, entrance examinations, scholarships and future skills.",
    accent: "#0D7A67",
    bgTint: "rgba(13, 122, 103, 0.05)",
  },
  {
    num: "03",
    icon: "🏛️",
    audience: "Students & Parents",
    title: "Annual Admission & University Fair",
    desc: "Direct interaction with representatives of leading universities and higher education institutions from Dehradun, Delhi, Meerut, Haridwar and nationwide academic hubs.",
    accent: "#C1650C",
    bgTint: "rgba(193, 101, 12, 0.05)",
  },
  {
    num: "04",
    icon: "⚡",
    audience: "Class XII",
    title: "National Level Quizzes for Class XII",
    desc: "National-level quiz competitions exclusively for Class XII students, organised in collaboration with reputed institutions including DBS Global University.",
    accent: "#7C3AED",
    bgTint: "rgba(124, 58, 237, 0.05)",
  },
  {
    num: "05",
    icon: "👥",
    audience: "Chairpersons & Principals",
    title: "Annual Educational Leadership Event",
    desc: "A national-level platform for Chairpersons, Principals and senior school leaders of CBSE, ICSE and State Board schools to discuss education innovation, AI, and school transformation.",
    accent: "#0D7A67",
    bgTint: "rgba(13, 122, 103, 0.05)",
  },
  {
    num: "06",
    icon: "🎖️",
    audience: "Coordinators & PGTs · 4 September",
    title: "Teachers' Education Conclave & Award Ceremony",
    desc: "An annual professional development and felicitation platform for Coordinators and PGTs, featuring expert pedagogic sessions, curriculum innovation, and educator awards.",
    accent: "#E65A00",
    bgTint: "rgba(230, 90, 0, 0.05)",
  },
];

export default function InitiativesPage() {
  return (
    <>
      {/* Minimal Left-Aligned Header */}
      <section style={{ paddingTop: 36, paddingBottom: 28 }}>
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

          <div style={{ textAlign: "left", maxWidth: 1300, margin: 0 }}>
            <div className="section-eyebrow" style={{ justifyContent: "flex-start", marginBottom: 12 }}>
              National Academic Initiative &middot; Session 2026–27
            </div>
            <h1 style={{ fontFamily: "var(--display)", fontSize: "clamp(30px, 4.2vw, 46px)", fontWeight: 850, color: "var(--ink)", letterSpacing: "-0.025em", marginBottom: 16 }}>
              Our Annual Initiatives
            </h1>
            <p style={{ fontSize: 16, color: "#1E293B", fontWeight: 550, lineHeight: 1.7, maxWidth: "100%", margin: "0 0 14px" }}>
              India Genius Foundation is an educational initiative dedicated to creating meaningful opportunities for students, teachers, school leaders and educational institutions through academic competitions, career guidance, university interaction, quizzes, and professional educator development.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 10, marginTop: 14 }}>
              <span style={{ fontSize: 13, fontWeight: 800, color: "#64748B", textTransform: "uppercase", letterSpacing: "0.06em", marginRight: 4 }}>
                Connecting:
              </span>
              {[
                { label: "Schools", icon: "🏫" },
                { label: "Students", icon: "🧑‍🎓" },
                { label: "Teachers", icon: "👩‍🏫" },
                { label: "Universities", icon: "🏛️" },
                { label: "Education Leaders", icon: "👥" },
              ].map(({ label, icon }) => (
                <span
                  key={label}
                  style={{
                    fontSize: 14,
                    fontWeight: 700,
                    color: "#0D7A67",
                    background: "rgba(13, 122, 103, 0.07)",
                    border: "1px solid rgba(13, 122, 103, 0.24)",
                    padding: "6px 14px",
                    borderRadius: 8,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    boxShadow: "0 1px 3px rgba(13, 122, 103, 0.05)",
                  }}
                >
                  <span>{icon}</span>
                  <span>{label}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Six Initiatives — 2-Column Responsive Card Grid */}
      <section style={{ paddingTop: 40, paddingBottom: 80, background: "#FFFFFF", borderTop: "1px solid var(--line)" }}>
        <div className="wrap">
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
            gap: 24,
          }}>
            {initiatives.map(({ num, icon, audience, title, desc, accent, bgTint }) => (
              <div
                key={num}
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #E2E8F0",
                  borderRadius: 16,
                  padding: "32px 28px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  boxShadow: "0 4px 16px rgba(15, 23, 42, 0.04)",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                  borderTop: `4px solid ${accent}`,
                  position: "relative",
                }}
              >
                <div>
                  {/* Top Bar: Icon, Number & Audience Badge */}
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
                    <div style={{
                      width: 46,
                      height: 46,
                      borderRadius: 12,
                      background: bgTint,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 22,
                    }}>
                      {icon}
                    </div>

                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <span style={{
                        fontFamily: "var(--mono)",
                        fontSize: 11,
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        color: accent,
                        background: bgTint,
                        border: `1px solid ${accent}33`,
                        borderRadius: 6,
                        padding: "4px 10px",
                      }}>
                        {audience}
                      </span>
                      <span style={{
                        fontFamily: "var(--mono)",
                        fontSize: 13,
                        fontWeight: 800,
                        color: "#94A3B8",
                      }}>
                        #{num}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 style={{
                    fontFamily: "var(--display)",
                    fontSize: 20,
                    fontWeight: 750,
                    color: "var(--ink)",
                    lineHeight: 1.35,
                    marginBottom: 12,
                    letterSpacing: "-0.015em",
                  }}>
                    {title}
                  </h3>

                  {/* Description */}
                  <p style={{
                    fontSize: 15,
                    color: "#475569",
                    lineHeight: 1.68,
                    margin: 0,
                  }}>
                    {desc}
                  </p>
                </div>

                {/* Bottom Highlight Indicator */}
                <div style={{
                  marginTop: 24,
                  paddingTop: 16,
                  borderTop: "1px solid #F1F5F9",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}>
                  <span style={{ fontSize: 13, fontWeight: 650, color: "#64748B" }}>
                    National Programme
                  </span>
                  <span style={{ fontSize: 13, fontWeight: 700, color: accent, display: "flex", alignItems: "center", gap: 4 }}>
                    Session 2026–27
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
