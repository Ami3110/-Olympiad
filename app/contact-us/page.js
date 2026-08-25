export const metadata = {
  title: "Contact Us — India Genius Olympiad",
  description: "Get in touch with the India Genius Olympiad leadership team. Contact Dr. Amit Sehgal and Mr. Rishi Kant Upadhyaya for school registrations, partnerships, and student inquiries.",
};

export default function ContactUsPage() {
  return (
    <>
      {/* Page Hero */}
      <section style={{ padding: 0, borderTop: "none" }}>
        <div className="syl-hero-wrap">
          <div className="wrap syl-hero-content">
            <a className="page-back-btn" href="/" aria-label="Back to Home">
              <svg className="back-arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
              <span>Back to Home</span>
            </a>

            <div className="syl-hero-eyebrow">
              <span className="syl-hero-eyebrow-line" />
              Institutional Support &amp; Coordination Desk
            </div>

            <h1 className="syl-hero-title">
              Let&apos;s Discover the Next Genius of India.
            </h1>

            <p className="syl-hero-desc">
              For school registrations, student batch coordination, state partnerships, and general Olympiad enquiries, reach out directly to the India Genius Olympiad leadership.
            </p>

            <div className="syl-hero-pills">
              <div className="syl-pill">
                <span className="syl-pill-dot" />
                <span><strong>Direct</strong> Leadership Connect</span>
              </div>
              <div className="syl-pill">
                <span className="syl-pill-dot" />
                <span><strong>Pan-India</strong> School Helpdesk</span>
              </div>
              <div className="syl-pill">
                <span className="syl-pill-dot" />
                <span><strong>24-Hour</strong> Query Resolution</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Direct Contacts */}
      <section style={{ paddingTop: 64, paddingBottom: 64 }}>
        <div className="wrap">
          <div className="section-head">
            <div className="section-eyebrow">Direct Connect</div>
            <h2 className="section-title">Reach Our Leadership Team</h2>
            <p className="section-desc">
              Our founders and conveners are directly accessible to school principals, educators, and state coordinators.
            </p>
          </div>

          <div className="founder-grid">
            {/* Dr. Amit Sehgal */}
            <div className="founder-card">
              <div className="founder-profile-row">
                <img
                  className="founder-photo"
                  src="/assets/images/amit-sehgal.jpg"
                  alt="Dr. Amit Sehgal"
                />
                <div>
                  <h3 className="founder-name">Dr. Amit Sehgal</h3>
                  <div className="founder-tag">Founder &amp; Convener</div>
                  <p className="founder-role-text">Founder &ndash; India Genius Olympiad</p>
                  <p className="founder-role-text">Uttarakhand State President &ndash; All India Principals Association (AIPA)</p>
                </div>
              </div>
              <a className="founder-phone-btn" href="tel:+918077074761">
                <span>📞</span>
                <span>+91 80770 74761</span>
              </a>
            </div>

            {/* Mr. Rishi Kant Upadhyaya */}
            <div className="founder-card">
              <div className="founder-profile-row">
                <img
                  className="founder-photo"
                  src="/assets/images/rishi-kant-upadhyaya.jpg"
                  alt="Mr. Rishi Kant Upadhyaya"
                />
                <div>
                  <h3 className="founder-name">Mr. Rishi Kant Upadhyaya</h3>
                  <div className="founder-tag" style={{ color: "var(--teal)", background: "rgba(13, 122, 103, 0.08)" }}>
                    Co-Founder &amp; Innovation Lead
                  </div>
                  <p className="founder-role-text">Co-Founder &ndash; India Genius Olympiad</p>
                  <p className="founder-role-text">Founder &ndash; Deep Connection Innovation Pvt Ltd</p>
                </div>
              </div>
              <a className="founder-phone-btn" href="tel:+919540944490">
                <span>📞</span>
                <span>+91 95409 44490</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Channels */}
      <section style={{ background: "var(--bg-elev)", paddingTop: 64, paddingBottom: 64 }}>
        <div className="wrap">
          <div className="section-head">
            <div className="section-eyebrow">Quick Access</div>
            <h2 className="section-title">Registration Channels</h2>
            <p className="section-desc">
              Choose your participation path below to submit your details directly via our official Google Forms portal.
            </p>
          </div>

          <div className="contact-channels-grid">
            {[
              {
                icon: "🏫",
                title: "School Registration",
                desc: "Register your institution and coordinate class-wise student batches across multiple subjects.",
                cta: "Register School ↗",
                href: "https://forms.gle/ZLuKVuR8XXWMrToW8",
                accent: "var(--flame)",
              },
              {
                icon: "🧑‍🎓",
                title: "Student Registration",
                desc: "Individual students and parents can enroll directly for chosen Olympiad subjects and divisions.",
                cta: "Register Student ↗",
                href: "https://forms.gle/KvAiXYv1CRr5E1Y17",
                accent: "var(--teal)",
              },
              {
                icon: "🤝",
                title: "School Connect Network",
                desc: "Partner with India Genius Foundation for educational workshops, science fests, and school exhibitions.",
                cta: "Connect School ↗",
                href: "https://forms.gle/tt83cHHLN2n4B7YR6",
                accent: "var(--gold)",
              },
            ].map(({ icon, title, desc, cta, href, accent }) => (
              <div key={title} className="contact-channel-card" style={{ borderTop: `4px solid ${accent}` }}>
                <span className="contact-channel-icon">{icon}</span>
                <h3 className="contact-channel-title">{title}</h3>
                <p className="contact-channel-desc">{desc}</p>
                <a
                  className="contact-channel-btn"
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ borderColor: accent, color: "var(--ink)" }}
                >
                  {cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Institutional Organizing Body */}
      <section style={{ paddingTop: 64, paddingBottom: 80 }}>
        <div className="wrap">
          <div style={{
            background: "#FFFFFF",
            border: "1.5px solid var(--line)",
            borderRadius: "var(--r-xl)",
            padding: "36px 40px",
            display: "flex",
            alignItems: "center",
            gap: 28,
            boxShadow: "var(--shadow-card)",
            flexWrap: "wrap",
          }}>
            <img
              src="/assets/images/aipa-logo.png"
              alt="All India Principals Association Logo"
              style={{ height: 74, width: "auto", flexShrink: 0 }}
            />
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--flame)", marginBottom: 6, fontWeight: 700 }}>
                Organized Under The Aegis Of
              </div>
              <h3 style={{ fontFamily: "var(--display)", fontSize: 21, fontWeight: 800, color: "var(--ink)", marginBottom: 6, letterSpacing: "-0.01em" }}>
                All India Principals Association (AIPA)
              </h3>
              <p style={{ fontSize: 14.5, color: "var(--ink-dim)", lineHeight: 1.6 }}>
                Under the India Genius Olympiad National Initiative &middot; Spanning Pre-Primary (PG) to Class XII across India &middot; ₹100 per subject.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
