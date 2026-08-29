"use client";

import Link from "next/link";

export default function Footer() {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer id="footer">
      <div className="wrap footer-inner">
        {/* Top Section: Brand + Multi-column Nav */}
        <div className="footer-top-grid">
          {/* Brand & Mission Pane */}
          <div className="footer-brand-pane">
            <div className="footer-brand-header">
              <div className="footer-brand-logo-wrap">
                <img
                  src="/assets/images/aipa-logo.png"
                  alt="India Genius Olympiad & India Genius Foundation"
                  width={46}
                  height={46}
                />
              </div>
              <div>
                <h3 className="footer-brand-title">India Genius Olympiad</h3>
                <p className="footer-brand-tagline">
                  Discover · Think · Compete · Achieve
                </p>
              </div>
            </div>

            <p className="footer-brand-desc">
              India&apos;s premier national-level academic Olympiad empowering young minds
              from Pre-Primary to Class XII across Space Science, Cyber Innovation, STEM,
              and Critical Thinking.
            </p>

            <div className="footer-brand-badge">
              <span className="footer-brand-badge-dot"></span>
              <span>Official Initiative of India Genius Foundation</span>
            </div>
          </div>

          {/* Navigation Links (3 Columns) */}
          <div className="footer-nav-grid">
            {/* Col 1: Olympiad & Academics */}
            <div className="footer-col">
              <div className="footer-col-title">Olympiad Info</div>
              <Link href="/olympiad-info/" className="footer-link-item">
                Olympiad Overview
              </Link>
              <Link href="/syllabus/" className="footer-link-item">
                Curriculum &amp; Syllabus
              </Link>
              <Link href="/sample-papers/" className="footer-link-item">
                Sample Question Papers
              </Link>
              <Link href="/how-to-prepare/" className="footer-link-item">
                Preparation Guidelines
              </Link>
              <Link href="/study-material/" className="footer-link-item">
                Recommended Study Books
              </Link>
              <Link href="/award-structure/" className="footer-link-item">
                Award Structure &amp; Honours
              </Link>
              <Link href="/#program" className="footer-link-item">
                Age Groups &amp; Levels
              </Link>
            </div>

            {/* Col 2: Portals & Initiatives */}
            <div className="footer-col">
              <div className="footer-col-title">Portals &amp; Hub</div>
              <a
                href="https://forms.gle/ZLuKVuR8XXWMrToW8"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link-item"
              >
                School Portal <span className="ext-arrow">↗</span>
              </a>
              <a
                href="https://forms.gle/KvAiXYv1CRr5E1Y17"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link-item"
              >
                Student Portal <span className="ext-arrow">↗</span>
              </a>
              <Link href="/initiatives/" className="footer-link-item">
                Annual Initiatives
              </Link>
              <Link href="/blog/" className="footer-link-item">
                Insights &amp; Articles
              </Link>
              <Link href="/about/" className="footer-link-item">
                About Us &amp; Leadership
              </Link>
              <Link href="/associated-institutes/" className="footer-link-item">
                Associated Institutes
              </Link>
              <Link href="/partner/" className="footer-link-item">
                Associated Partners
              </Link>
              <Link href="/contact-us/" className="footer-link-item">
                Contact &amp; Helpdesk
              </Link>
            </div>

            {/* Col 3: Legal & Governance */}
            <div className="footer-col">
              <div className="footer-col-title">Governance &amp; Trust</div>
              <Link href="/privacy-policy/" className="footer-link-item">
                Privacy Policy
              </Link>
              <Link href="/terms/" className="footer-link-item">
                Terms &amp; Conditions
              </Link>
              <Link href="/shipping-delivery/" className="footer-link-item">
                Dispatch &amp; Delivery
              </Link>
              <Link href="/refund-cancellation/" className="footer-link-item">
                Refund &amp; Cancellation
              </Link>
              <Link href="/sponsor/" className="footer-link-item">
                Become a Sponsor
              </Link>
              <Link href="/partner/" className="footer-link-item">
                Partner With Us
              </Link>
            </div>
          </div>
        </div>

        {/* Highlights Strip */}
        <div className="footer-highlights">
          <div className="footer-hl-card">
            <span className="footer-hl-label">Organized By</span>
            <span className="footer-hl-val">India Genius Foundation</span>
          </div>
          <div className="footer-hl-card">
            <span className="footer-hl-label">Eligibility Scope</span>
            <span className="footer-hl-val">PG – Class XII · Nationwide</span>
          </div>
          <div className="footer-hl-card">
            <span className="footer-hl-label">Registration Fee</span>
            <span className="footer-hl-val">₹80 per Subject, per Student</span>
          </div>
          <div className="footer-hl-card">
            <span className="footer-hl-label">Active Cycle</span>
            <span className="footer-hl-val">India Genius Olympiad 2026–27</span>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Trust badge & Back to Top */}
        <div className="footer-bottom-bar">
          <div>
            &copy; {new Date().getFullYear()} India Genius Olympiad. All rights reserved.
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
              <span
                style={{
                  display: "inline-block",
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  backgroundColor: "var(--saffron)"
                }}
              />
              National Educational Initiative
            </span>

            <button
              onClick={scrollToTop}
              className="footer-back-top-btn"
              type="button"
              aria-label="Back to top"
            >
              Back to Top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
