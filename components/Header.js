"use client";

import { useState, useEffect, useRef } from "react";

export default function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isBlinking, setIsBlinking] = useState(false);
  const timeoutRef = useRef(null);
  const headerRef = useRef(null);

  // Periodically blink Register Now button every 5 minutes
  useEffect(() => {
    const triggerBlink = () => {
      setIsBlinking(true);
      setTimeout(() => {
        setIsBlinking(false);
      }, 5000); // Blinks for 5 seconds
    };

    // Also trigger initial brief highlight after load
    const initialTimer = setTimeout(triggerBlink, 3000);
    // Interval every 5 minutes (300,000ms)
    const interval = setInterval(triggerBlink, 5 * 60 * 1000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  // Hover handlers with debounced exit buffer (prevents dropdown closing when moving mouse)
  const handleMouseEnter = (menuKey) => {
    if (window.innerWidth > 1280) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      setActiveDropdown(menuKey);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth > 1280) {
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
        {/* Left: Brand Lockup matching mockup */}
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

        {/* Navigation matching Mockup */}
        <nav
          className={`main-nav ${mobileNavOpen ? "nav-open" : ""}`}
          id="mainNav"
          role="navigation"
          aria-label="Main navigation"
        >
          {/* Home Link */}
          <div className="nav-item">
            <a href="/" className="nav-direct-link" onClick={closeMenus}>
              Home
            </a>
          </div>

          {/* Upcoming Navigation Link */}
          <div className="nav-item">
            <a href="/upcoming/" className="nav-direct-link" onClick={closeMenus}>
              Upcoming
            </a>
          </div>

          {/* Vision Link */}
          <div className="nav-item">
            <a href="/vision/" className="nav-direct-link" onClick={closeMenus}>
              Vision
            </a>
          </div>

          {/* Mission Link */}
          <div className="nav-item">
            <a href="/mission/" className="nav-direct-link" onClick={closeMenus}>
              Mission
            </a>
          </div>

          {/* About Dropdown — simple flat list, no icon/desc cards */}
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
              <a href="/about/" className="dropdown-link-simple" onClick={closeMenus}>About Us</a>
              <a href="/associated-institutes/" className="dropdown-link-simple" onClick={closeMenus}>Associated Institutes</a>
              <a href="/partner/" className="dropdown-link-simple" onClick={closeMenus}>Associated Partners</a>
              <a href="/initiatives/" className="dropdown-link-simple" onClick={closeMenus}>Annual Initiatives</a>
              <a href="/blog/" className="dropdown-link-simple" onClick={closeMenus}>Blog &amp; Updates</a>
            </div>
          </div>

          {/* Olympiads Dropdown — simple flat list, no icon/desc cards */}
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
              <span>Olympiads</span>
              <svg className="nav-arrow-icon" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <div className={`nav-dropdown ${activeDropdown === "olympiad" ? "dropdown-visible" : ""}`}>
              <a href="/what-is-igo/" className="dropdown-link-simple" onClick={closeMenus}>What is IGO?</a>
              <a href="/age-group/" className="dropdown-link-simple" onClick={closeMenus}>Age Group</a>
              <a href="/subjects/" className="dropdown-link-simple" onClick={closeMenus}>Subjects &amp; Divisions</a>
              <a href="/how-to-prepare/" className="dropdown-link-simple" onClick={closeMenus}>How to Prepare</a>
              <a href="/competition-structure/" className="dropdown-link-simple" onClick={closeMenus}>Competition Structure</a>
            </div>
          </div>

          {/* Award Structure Link */}
          <div className="nav-item">
            <a href="/award-structure/" className="nav-direct-link" onClick={closeMenus}>
              Award Structure
            </a>
          </div>

          {/* Syllabus & Papers Dropdown — simple flat list, no icon/desc cards */}
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
              <a href="/syllabus/" className="dropdown-link-simple" onClick={closeMenus}>Syllabus by Age Group</a>
              <a href="/sample-papers/" className="dropdown-link-simple" onClick={closeMenus}>Sample Question Papers</a>
              <a href="/study-material/" className="dropdown-link-simple" onClick={closeMenus}>Study Material</a>
              <a href="/login/" className="dropdown-link-simple link-highlight" onClick={closeMenus}>Candidate Login / Status ➔</a>
            </div>
          </div>


          {/* Direct Contact Navigation Link */}
          <div className="nav-item">
            <a href="/contact-us/" className="nav-direct-link" onClick={closeMenus}>
              Contact
            </a>
          </div>

          {/* Register Dropdown Button — simple flat list, no icon/desc cards */}
          <div
            className={`nav-item nav-item-register ${activeDropdown === "register" ? "nav-item-active" : ""}`}
            onMouseEnter={() => handleMouseEnter("register")}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className={`nav-summary-register-btn pill-register-mock ${isBlinking ? "header-register-blink" : ""}`}
              type="button"
              aria-expanded={activeDropdown === "register" ? "true" : "false"}
              onClick={(e) => handleTriggerClick("register", e)}
            >
              <span>Register Now</span>
              <span className="register-arrow-circle">➔</span>
            </button>

            <div className={`nav-dropdown nav-dropdown-right ${activeDropdown === "register" ? "dropdown-visible" : ""}`}>
              <a
                href="/registration/?tab=student"
                data-reg-modal="student"
                className="dropdown-link-simple link-highlight"
                onClick={closeMenus}
              >
                Student Registration ➔
              </a>
              <a
                href="/registration/?tab=school"
                data-reg-modal="school"
                className="dropdown-link-simple"
                onClick={closeMenus}
              >
                School Registration ➔
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
