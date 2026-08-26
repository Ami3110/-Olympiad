"use client";

import { useState, useEffect, useRef } from "react";

export default function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const timeoutRef = useRef(null);
  const headerRef = useRef(null);

  // Hover handlers with debounced exit buffer (prevents dropdown closing when moving mouse)
  const handleMouseEnter = (menuKey) => {
    if (window.innerWidth > 992) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      setActiveDropdown(menuKey);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth > 992) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setActiveDropdown(null);
      }, 150);
    }
  };

  // Click toggle for mobile/touch or keyboard
  const handleTriggerClick = (menuKey, e) => {
    e.preventDefault();
    setActiveDropdown((prev) => (prev === menuKey ? null : menuKey));
  };

  // Close on navigation / click outside / Escape
  useEffect(() => {
    function handleDocumentClick(e) {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setActiveDropdown(null);
        setMobileNavOpen(false);
      }
    }

    function handleKeyDown(e) {
      if (e.key === "Escape") {
        setActiveDropdown(null);
        setMobileNavOpen(false);
      }
    }

    document.addEventListener("click", handleDocumentClick);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
      document.removeEventListener("keydown", handleKeyDown);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const closeMenus = () => {
    setActiveDropdown(null);
    setMobileNavOpen(false);
  };

  return (
    <header className="topbar" ref={headerRef}>
      <div className="topbar-inner">
        {/* Left: Refined Brand Lockup */}
        <a href="/" aria-label="India Genius Olympiad — Home" className="brand-link" onClick={closeMenus}>
          <img
            className="topbar-logo"
            src="/assets/images/aipa-logo.png"
            alt="India Genius Olympiad Official Logo"
          />
          <div className="brand-title-wrap">
            <span className="brand-text">India Genius Olympiad</span>
          </div>
        </a>

        {/* Mobile Hamburger Toggle */}
        <button
          className={`nav-toggle ${mobileNavOpen ? "toggle-active" : ""}`}
          id="navToggle"
          type="button"
          aria-expanded={mobileNavOpen ? "true" : "false"}
          aria-controls="mainNav"
          aria-label="Toggle navigation menu"
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Professional Navigation with Rock-Solid Hover & Interaction */}
        <nav
          className={`main-nav ${mobileNavOpen ? "nav-open" : ""}`}
          id="mainNav"
          role="navigation"
          aria-label="Main navigation"
        >
          {/* About Dropdown */}
          <div
            className={`nav-item ${activeDropdown === "about" ? "nav-item-active" : ""}`}
            onMouseEnter={() => handleMouseEnter("about")}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className="nav-summary-btn"
              type="button"
              aria-expanded={activeDropdown === "about" ? "true" : "false"}
              onClick={(e) => handleTriggerClick("about", e)}
            >
              <span>About</span>
              <svg className="nav-arrow-icon" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <div className={`nav-dropdown ${activeDropdown === "about" ? "dropdown-visible" : ""}`}>
              <div className="dropdown-section-label">Organization &amp; Outreach</div>
              <a href="/about/" className="dropdown-link" onClick={closeMenus}>
                <div className="dropdown-icon-box">ℹ️</div>
                <div className="dropdown-text-wrap">
                  <div className="dropdown-title">About Us &amp; Leadership</div>
                  <div className="dropdown-desc">AIPA national educational movement</div>
                </div>
                <span className="dropdown-hover-arrow">➔</span>
              </a>
              <a href="/initiatives/" className="dropdown-link" onClick={closeMenus}>
                <div className="dropdown-icon-box">🌟</div>
                <div className="dropdown-text-wrap">
                  <div className="dropdown-title">Annual Initiatives</div>
                  <div className="dropdown-desc">Conclaves, career guidance &amp; fairs</div>
                </div>
                <span className="dropdown-hover-arrow">➔</span>
              </a>
              <a href="/partner/" className="dropdown-link" onClick={closeMenus}>
                <div className="dropdown-icon-box">🤝</div>
                <div className="dropdown-text-wrap">
                  <div className="dropdown-title">Institutional Partners</div>
                  <div className="dropdown-desc">Collaborating bodies &amp; knowledge ecosystem</div>
                </div>
                <span className="dropdown-hover-arrow">➔</span>
              </a>
              <a href="/blog/" className="dropdown-link" onClick={closeMenus}>
                <div className="dropdown-icon-box">📝</div>
                <div className="dropdown-text-wrap">
                  <div className="dropdown-title">Blog &amp; Updates</div>
                  <div className="dropdown-desc">Official news and announcements</div>
                </div>
                <span className="dropdown-hover-arrow">➔</span>
              </a>
            </div>
          </div>

          {/* Olympiad Dropdown */}
          <div
            className={`nav-item ${activeDropdown === "olympiad" ? "nav-item-active" : ""}`}
            onMouseEnter={() => handleMouseEnter("olympiad")}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className="nav-summary-btn"
              type="button"
              aria-expanded={activeDropdown === "olympiad" ? "true" : "false"}
              onClick={(e) => handleTriggerClick("olympiad", e)}
            >
              <span>Olympiad</span>
              <svg className="nav-arrow-icon" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <div className={`nav-dropdown ${activeDropdown === "olympiad" ? "dropdown-visible" : ""}`}>
              <div className="dropdown-section-label">Competition Structure</div>
              <a href="/#vision" className="dropdown-link" onClick={closeMenus}>
                <div className="dropdown-icon-box">🎯</div>
                <div className="dropdown-text-wrap">
                  <div className="dropdown-title">Vision &amp; Philosophy</div>
                  <div className="dropdown-desc">Assessment methodology &amp; reasoning</div>
                </div>
                <span className="dropdown-hover-arrow">➔</span>
              </a>
              <a href="/#olympiad" className="dropdown-link" onClick={closeMenus}>
                <div className="dropdown-icon-box">📚</div>
                <div className="dropdown-text-wrap">
                  <div className="dropdown-title">Subjects &amp; Divisions</div>
                  <div className="dropdown-desc">15+ disciplines across PG to Class XII</div>
                </div>
                <span className="dropdown-hover-arrow">➔</span>
              </a>
              <a href="/how-to-prepare/" className="dropdown-link" onClick={closeMenus}>
                <div className="dropdown-icon-box">✏️</div>
                <div className="dropdown-text-wrap">
                  <div className="dropdown-title">How to Prepare</div>
                  <div className="dropdown-desc">Study roadmap, timelines &amp; tips</div>
                </div>
                <span className="dropdown-hover-arrow">➔</span>
              </a>
              <a href="/#stages" className="dropdown-link" onClick={closeMenus}>
                <div className="dropdown-icon-box">🏆</div>
                <div className="dropdown-text-wrap">
                  <div className="dropdown-title">Four-Level Progression</div>
                  <div className="dropdown-desc">School, District, State &amp; National Finale</div>
                </div>
                <span className="dropdown-hover-arrow">➔</span>
              </a>
            </div>
          </div>

          {/* Syllabus & Papers Dropdown */}
          <div
            className={`nav-item ${activeDropdown === "syllabus" ? "nav-item-active" : ""}`}
            onMouseEnter={() => handleMouseEnter("syllabus")}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className="nav-summary-btn"
              type="button"
              aria-expanded={activeDropdown === "syllabus" ? "true" : "false"}
              onClick={(e) => handleTriggerClick("syllabus", e)}
            >
              <span>Syllabus &amp; Papers</span>
              <svg className="nav-arrow-icon" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <div className={`nav-dropdown ${activeDropdown === "syllabus" ? "dropdown-visible" : ""}`}>
              <div className="dropdown-section-label">Curriculum &amp; Practice</div>
              <a href="/syllabus/" className="dropdown-link" onClick={closeMenus}>
                <div className="dropdown-icon-box">🗂️</div>
                <div className="dropdown-text-wrap">
                  <div className="dropdown-title">Syllabus by Age Group</div>
                  <div className="dropdown-desc">Detailed topics for 6 academic divisions</div>
                </div>
                <span className="dropdown-hover-arrow">➔</span>
              </a>
              <a href="/sample-papers/" className="dropdown-link" onClick={closeMenus}>
                <div className="dropdown-icon-box">📄</div>
                <div className="dropdown-text-wrap">
                  <div className="dropdown-title">Sample Question Papers</div>
                  <div className="dropdown-desc">Specimen tests with marking schemes</div>
                </div>
                <span className="dropdown-hover-arrow">➔</span>
              </a>
              <a href="/study-material/" className="dropdown-link" onClick={closeMenus}>
                <div className="dropdown-icon-box">📖</div>
                <div className="dropdown-text-wrap">
                  <div className="dropdown-title">Study Material</div>
                  <div className="dropdown-desc">Recommended preparation modules</div>
                </div>
                <span className="dropdown-hover-arrow">➔</span>
              </a>
            </div>
          </div>

          {/* Direct Contact Navigation Link */}
          <div className="nav-item">
            <a href="/contact-us/" className="nav-direct-link" onClick={closeMenus}>
              Contact
            </a>
          </div>

          {/* Register Dropdown Button (Professional Saffron/Flame CTA) */}
          <div
            className={`nav-item nav-item-register ${activeDropdown === "register" ? "nav-item-active" : ""}`}
            onMouseEnter={() => handleMouseEnter("register")}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className="nav-summary-register-btn"
              type="button"
              aria-expanded={activeDropdown === "register" ? "true" : "false"}
              onClick={(e) => handleTriggerClick("register", e)}
            >
              <span>Register</span>
              <svg className="nav-arrow-icon-white" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <div className={`nav-dropdown nav-dropdown-right ${activeDropdown === "register" ? "dropdown-visible" : ""}`}>
              <div className="dropdown-section-label">Session 2026–27 Entry</div>
              <a
                href="https://forms.gle/KvAiXYv1CRr5E1Y17"
                target="_blank"
                rel="noopener noreferrer"
                className="dropdown-link link-highlight"
                onClick={closeMenus}
              >
                <div className="dropdown-icon-box box-highlight">🧑‍🎓</div>
                <div className="dropdown-text-wrap">
                  <div className="dropdown-title">
                    Student Registration <span className="tag-external">↗</span>
                  </div>
                  <div className="dropdown-desc">Individual entry at ₹80 per subject</div>
                </div>
                <span className="dropdown-hover-arrow">➔</span>
              </a>
              <a
                href="https://forms.gle/ZLuKVuR8XXWMrToW8"
                target="_blank"
                rel="noopener noreferrer"
                className="dropdown-link"
                onClick={closeMenus}
              >
                <div className="dropdown-icon-box">🏫</div>
                <div className="dropdown-text-wrap">
                  <div className="dropdown-title">
                    School Registration <span className="tag-external">↗</span>
                  </div>
                  <div className="dropdown-desc">Register institution &amp; coordinators</div>
                </div>
                <span className="dropdown-hover-arrow">➔</span>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
