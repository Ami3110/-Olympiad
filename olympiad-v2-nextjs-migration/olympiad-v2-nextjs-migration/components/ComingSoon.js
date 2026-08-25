// Elegant coming-soon component with orbit/constellation SVG motif.
// Used for stub pages like Blog, Partner, Sponsor, How to Prepare, etc.
export default function ComingSoon({ title, body }) {
  return (
    <section
      className="coming-soon-page"
      style={{ textAlign: "center", position: "relative", overflow: "hidden" }}
    >
      {/* Decorative background orbit rings */}
      <svg
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "min(600px, 90vw)",
          height: "min(600px, 90vw)",
          opacity: 0.12,
          pointerEvents: "none",
          zIndex: 0,
        }}
        viewBox="0 0 600 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer ring */}
        <circle cx="300" cy="300" r="280" stroke="#C1650C" strokeWidth="1" strokeDasharray="6 10" />
        {/* Mid ring */}
        <circle cx="300" cy="300" r="200" stroke="#0D7A67" strokeWidth="1" strokeDasharray="4 8" />
        {/* Inner ring */}
        <circle cx="300" cy="300" r="120" stroke="#93650A" strokeWidth="1" strokeDasharray="3 6" />
        {/* Stars / nodes on outer ring */}
        <circle cx="300" cy="20" r="4" fill="#C1650C" />
        <circle cx="580" cy="300" r="3" fill="#C94627" />
        <circle cx="300" cy="580" r="4" fill="#C1650C" />
        <circle cx="20" cy="300" r="3" fill="#0D7A67" />
        <circle cx="498" cy="102" r="3" fill="#93650A" />
        <circle cx="102" cy="498" r="3" fill="#C1650C" />
        {/* Stars on mid ring */}
        <circle cx="300" cy="100" r="3" fill="#0D7A67" />
        <circle cx="500" cy="300" r="2.5" fill="#C1650C" />
        <circle cx="300" cy="500" r="3" fill="#0D7A67" />
        <circle cx="100" cy="300" r="2.5" fill="#93650A" />
        {/* Central glow */}
        <circle cx="300" cy="300" r="40" fill="#C1650C" opacity="0.06" />
        <circle cx="300" cy="300" r="20" fill="#C94627" opacity="0.1" />
        {/* Constellation lines */}
        <line x1="300" y1="20" x2="498" y2="102" stroke="#C1650C" strokeWidth="0.5" opacity="0.6" />
        <line x1="498" y1="102" x2="580" y2="300" stroke="#C1650C" strokeWidth="0.5" opacity="0.6" />
        <line x1="300" y1="580" x2="102" y2="498" stroke="#0D7A67" strokeWidth="0.5" opacity="0.6" />
        <line x1="102" y1="498" x2="20" y2="300" stroke="#0D7A67" strokeWidth="0.5" opacity="0.6" />
      </svg>

      <div className="wrap" style={{ position: "relative", zIndex: 1 }}>
        <div className="eyebrow">Coming Soon</div>
        <h1>{title}</h1>
        <p className="coming-soon-body">{body}&nbsp;We&rsquo;re actively building this section out.</p>

        {/* Navigation options */}
        <div style={{
          display: "flex",
          gap: 12,
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 8
        }}>
          <a className="btn btn-primary" href="/">
            ← Back to Home
          </a>
          <a className="btn btn-ghost" href="/#register">
            Register Now ↗
          </a>
          <a className="btn btn-ghost" href="/syllabus/">
            View Syllabus
          </a>
        </div>

        {/* Helpful links */}
        <div style={{
          marginTop: 56,
          paddingTop: 32,
          borderTop: "1px solid var(--line)",
          display: "flex",
          gap: 32,
          flexWrap: "wrap",
          justifyContent: "center"
        }}>
          {[
            { href: "/sample-papers/", label: "Sample Papers" },
            { href: "/initiatives/", label: "Annual Initiatives" },
            { href: "/contact-us/", label: "Contact Us" },
          ].map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="cs-quick-link"
            >
              {label} →
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
