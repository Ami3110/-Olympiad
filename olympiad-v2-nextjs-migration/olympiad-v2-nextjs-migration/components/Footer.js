export default function Footer() {
  return (
    <footer id="footer">
      <div className="wrap">
        {/* Logo + brand statement */}
        <div className="footer-logos">
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <img src="/assets/images/aipa-logo.png" alt="India Genius Olympiad Logo" />
            <div>
              <div style={{
                fontFamily: "var(--display)", fontWeight: 700, fontSize: 17,
                color: "var(--ink)", letterSpacing: "-0.01em", marginBottom: 4
              }}>
                India Genius Olympiad
              </div>
              <div style={{
                fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.14em",
                textTransform: "uppercase", color: "var(--ink-faint)"
              }}>
                Discover · Think · Compete · Achieve
              </div>
            </div>
          </div>

          {/* Register CTA */}
          <a
            href="/#register"
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "11px 24px",
              background: "linear-gradient(135deg, var(--flame), var(--saffron))",
              color: "#FFFFFF", borderRadius: "var(--r-btn)",
              fontFamily: "var(--body)", fontWeight: 600, fontSize: 14,
              textDecoration: "none", whiteSpace: "nowrap",
              boxShadow: "0 4px 16px rgba(201,70,39,0.22)"
            }}
          >
            Register Now ↗
          </a>
        </div>

        {/* Links grid */}
        <div className="footer-links-grid footer-links-grid-3">
          <div className="footer-link-col">
            <b>Olympiad Info</b>
            <a href="/olympiad-info/">Olympiad Info</a>
            <a href="/syllabus/">Olympiad Syllabus</a>
            <a href="/sample-papers/">Sample Papers</a>
            <a href="/how-to-prepare/">How to Prepare</a>
            <a href="/study-material/">Study Material</a>
            <a href="/#program">Olympiad Levels</a>
          </div>

          <div className="footer-link-col">
            <b>Other Links</b>
            <a href="https://forms.gle/ZLuKVuR8XXWMrToW8" target="_blank" rel="noopener noreferrer">School Registration ↗</a>
            <a href="https://forms.gle/KvAiXYv1CRr5E1Y17" target="_blank" rel="noopener noreferrer">Student Registration ↗</a>
            <a href="/blog/">Blog</a>
            <a href="/#about">About Us</a>
            <a href="/initiatives/">Annual Initiatives</a>
            <a href="/contact-us/">Contact Us</a>
          </div>

          <div className="footer-link-col">
            <b>Legal &amp; Partnerships</b>
            <a href="/privacy-policy/">Privacy Policy</a>
            <a href="/terms/">Terms &amp; Conditions</a>
            <a href="/shipping-delivery/">Shipping &amp; Delivery</a>
            <a href="/refund-cancellation/">Refund &amp; Cancellation</a>
            <a href="/sponsor/">Become a Sponsor</a>
            <a href="/partner/">Become a Partner</a>
          </div>
        </div>

        {/* Metadata row */}
        <div className="footer-grid">
          <div className="fcol"><b>Organized By</b>All India Principals Association (AIPA)<br />Under the India Genius Olympiad Initiative</div>
          <div className="fcol"><b>Eligibility</b>PG &ndash; Class XII, Nationwide</div>
          <div className="fcol"><b>Fee</b>&#8377;100 per subject, per student</div>
          <div className="fcol"><b>Edition</b>India Genius Olympiad 2026–27</div>
        </div>

        {/* Copyright */}
        <div style={{
          marginTop: 28,
          paddingTop: 20,
          borderTop: "1px solid var(--line)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 12,
          fontSize: 12,
          color: "var(--ink-faint)",
          fontFamily: "var(--mono)",
          letterSpacing: "0.04em"
        }}>
          <span>&copy; {new Date().getFullYear()} India Genius Olympiad. All rights reserved.</span>
          <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{
              display: "inline-block", width: 6, height: 6,
              borderRadius: "50%", background: "var(--saffron)"
            }}></span>
            Powered by AIPA
          </span>
        </div>
      </div>
    </footer>
  );
}
