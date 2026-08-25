export const metadata = {
  title: "Contact Us",
  description: "Get in touch with the India Genius Olympiad team. Contact Dr. Amit Sehgal and Mr. Rishi Kant Upadhyaya for school registration, partnerships, and Olympiad information.",
};

export default function ContactUsPage() {
  return (
    <>
      {/* Page hero */}
      <section style={{ paddingBottom: 0 }}>
        <div className="wrap">
          <a className="page-back-link" href="/">&#8592; Back to Home</a>

          <div style={{
            background: "linear-gradient(135deg, rgba(13,122,103,0.06), rgba(193,101,12,0.04))",
            border: "1px solid var(--line)",
            borderRadius: "var(--r-xl)",
            padding: "48px 40px",
            marginBottom: 56,
          }}>
            <div style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--teal)", marginBottom: 12, display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ display: "inline-block", width: 16, height: 1.5, background: "var(--teal)", borderRadius: 2 }}></span>
              Contact Us
            </div>
            <h1 className="page-title">Let&apos;s Discover the Next<br />Genius of India</h1>
            <p style={{ color: "var(--ink-dim)", fontSize: 16.5, lineHeight: 1.7, marginTop: 14, maxWidth: 600 }}>
              For school registration, partnerships, Olympiad information and general enquiries, please contact our leadership team directly.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership cards */}
      <section>
        <div className="wrap">
          <div className="section-head">
            <div className="section-eyebrow">Leadership</div>
            <h2 className="section-title">Reach Our Team</h2>
            <p className="section-desc">Our leadership team is directly reachable for school registrations, partnership queries, and Olympiad information.</p>
          </div>

          <div className="founder-grid">
            {/* Dr. Amit Sehgal */}
            <div className="founder-card">
              <img
                className="founder-photo"
                src="/assets/images/amit-sehgal.jpg"
                alt="Dr. Amit Sehgal"
              />
              <h4>Dr. Amit Sehgal</h4>
              <p className="founder-role">Founder &ndash; India Genius Olympiad</p>
              <p className="founder-role">Educationist &amp; Uttarakhand State President &ndash; AIPA</p>
              <a href="tel:+918077074761">
                📞 8077074761
              </a>
            </div>

            {/* Mr. Rishi Kant Upadhyaya */}
            <div className="founder-card">
              <img
                className="founder-photo"
                src="/assets/images/rishi-kant-upadhyaya.jpg"
                alt="Mr. Rishi Kant Upadhyaya"
              />
              <h4>Mr. Rishi Kant Upadhyaya</h4>
              <p className="founder-role">Co-Founder &ndash; India Genius Olympiad</p>
              <p className="founder-role">Founder, Deep Connection Innovation Pvt Ltd</p>
              <a href="tel:+919540944490">
                📞 9540944490
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact channels */}
      <section>
        <div className="wrap">
          <div className="section-head">
            <div className="section-eyebrow">How To Reach Us</div>
            <h2 className="section-title">Contact Channels</h2>
          </div>
          <div className="initiative-grid" style={{ gridTemplateColumns: "repeat(3,1fr)" }}>
            {[
              {
                icon: "🏫",
                title: "School Registration",
                desc: "Register your school and coordinate student participation through Google Forms.",
                cta: "Register School ↗",
                href: "https://forms.gle/ZLuKVuR8XXWMrToW8",
                accent: "var(--flame)",
              },
              {
                icon: "🧑‍🎓",
                title: "Student Registration",
                desc: "Students and parents can register directly through our student registration form.",
                cta: "Register Student ↗",
                href: "https://forms.gle/KvAiXYv1CRr5E1Y17",
                accent: "var(--teal)",
              },
              {
                icon: "🤝",
                title: "School Connect",
                desc: "Connect your school with India Genius Foundation for upcoming programmes and opportunities.",
                cta: "Connect School ↗",
                href: "https://forms.gle/tt83cHHLN2n4B7YR6",
                accent: "var(--gold)",
              },
            ].map(({ icon, title, desc, cta, href, accent }) => (
              <div key={title} className="division-card" style={{ borderTop: `3px solid ${accent}` }}>
                <div style={{ fontSize: 32, marginBottom: 14 }}>{icon}</div>
                <h4>{title}</h4>
                <p style={{ marginBottom: 18 }}>{desc}</p>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 6,
                    fontFamily: "var(--mono)", fontSize: 12, letterSpacing: "0.06em",
                    textTransform: "uppercase", color: accent, textDecoration: "none",
                    fontWeight: 600
                  }}
                >
                  {cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Organized by */}
      <section style={{ paddingBottom: 80 }}>
        <div className="wrap">
          <div style={{
            background: "var(--bg-elev)",
            border: "1px solid var(--line)",
            borderRadius: "var(--r-xl)",
            padding: "36px 40px",
            display: "flex",
            alignItems: "center",
            gap: 28,
            flexWrap: "wrap",
          }}>
            <img
              src="/assets/images/aipa-logo.png"
              alt="AIPA Logo"
              style={{ height: 72, width: "auto", flexShrink: 0 }}
            />
            <div>
              <div style={{ fontFamily: "var(--mono)", fontSize: 10.5, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--ink-faint)", marginBottom: 8 }}>
                Organized By
              </div>
              <div style={{ fontFamily: "var(--display)", fontSize: 19, fontWeight: 700, color: "var(--ink)", marginBottom: 6, letterSpacing: "-0.01em" }}>
                All India Principals Association (AIPA)
              </div>
              <div style={{ fontSize: 15, color: "var(--ink-dim)", lineHeight: 1.6 }}>
                Under the India Genius Olympiad Initiative &middot; Nationwide &middot; PG – Class XII &middot; ₹100 per subject
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
