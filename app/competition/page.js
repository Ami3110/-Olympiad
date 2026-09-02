"use client";

import { useState } from "react";
import Link from "next/link";
import { spellBeeOverview } from "../../data/spellBeeData";
import { spellBeeLevels } from "../../data/spellBeePapers";

export default function CompetitionPage() {
  const [activeModal, setActiveModal] = useState(null); // { level, tab: 'syllabus' | 'paper' }
  const [userAnswers, setUserAnswers] = useState({});
  const [showAnswerKey, setShowAnswerKey] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);
  const [expandedSpellLevels, setExpandedSpellLevels] = useState({});

  const toggleLevelExpand = (slug) => {
    setExpandedSpellLevels((prev) => ({ ...prev, [slug]: !prev[slug] }));
  };

  const handleOpenModal = (level, tab) => {
    setActiveModal({ level, tab });
    setUserAnswers({});
    setShowAnswerKey(false);
  };

  const handleCloseModal = () => {
    setActiveModal(null);
  };

  const handleSelectOption = (qNum, optionKey) => {
    setUserAnswers((prev) => ({ ...prev, [qNum]: optionKey }));
  };

  const calculateScore = (level) => {
    let score = 0;
    level.questions.forEach((q) => {
      if (userAnswers[q.num] === level.answerKey[q.num]) score++;
    });
    return score;
  };

  return (
    <main style={{ background: "var(--bg, #FAF7EF)", minHeight: "100vh", width: "100%", overflowX: "hidden" }}>
      
      {/* 1. HEADER SECTION (Full Width Background, Centered Content) */}
      <section style={{ width: "100%", paddingTop: 36, paddingBottom: 28, borderBottom: "1px solid var(--line, rgba(20, 23, 42, 0.10))" }}>
        <div className="wrap">
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: 20,
            }}
          >
            <div>
              <div style={{ marginBottom: 14 }}>
                <Link
                  href="/"
                  className="page-back-btn light-variant"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    color: "var(--ink, #14172A)",
                    background: "var(--bg-card, #FFFFFF)",
                    border: "1px solid var(--line, rgba(20, 23, 42, 0.12))",
                    padding: "7px 16px",
                    borderRadius: 9999,
                    fontSize: 13.5,
                    fontWeight: 650,
                    textDecoration: "none",
                    boxShadow: "0 1px 3px rgba(20, 23, 42, 0.04)",
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="19" y1="12" x2="5" y2="12"></line>
                    <polyline points="12 19 5 12 12 5"></polyline>
                  </svg>
                  <span>Back to Home</span>
                </Link>
              </div>

              <div
                className="section-eyebrow"
                style={{
                  justifyContent: "flex-start",
                  marginBottom: 8,
                  color: "#E65A00",
                  fontSize: 12.5,
                  fontWeight: 800,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                National Academic Initiative &middot; Session 2026–27
              </div>

              <h1
                style={{
                  fontFamily: "var(--display, 'Space Grotesk', sans-serif)",
                  fontSize: "clamp(28px, 3.5vw, 44px)",
                  fontWeight: 850,
                  color: "var(--ink, #14172A)",
                  letterSpacing: "-0.025em",
                  margin: "0 0 6px 0",
                  lineHeight: 1.2,
                }}
              >
                🐝 India Genius “English Spell Bee” Olympiad
              </h1>

              <p style={{ fontSize: 16, color: "var(--ink-dim, #454A66)", margin: 0, fontWeight: 600, fontStyle: "italic" }}>
                {spellBeeOverview.tagline}
              </p>
            </div>

            <div>
              <a
                href="/registration/?tab=school"
                style={{
                  background: "linear-gradient(135deg, #E65A00 0%, #D84E00 100%)",
                  color: "#FFFFFF",
                  padding: "12px 28px",
                  borderRadius: 9999,
                  fontSize: 14.5,
                  fontWeight: 800,
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  boxShadow: "0 4px 14px rgba(230, 90, 0, 0.28)",
                }}
              >
                <span>Register School</span>
                <span>➔</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. 4 LEVEL CARDS GRID SECTION */}
      <section style={{ width: "100%", padding: "44px 0 56px" }}>
        <div className="wrap">
          <div style={{ marginBottom: 24, display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 12 }}>
            <div>
              <div className="section-eyebrow" style={{ justifyContent: "flex-start", marginBottom: 6 }}>Age-Appropriate Competition Levels</div>
              <h2 style={{ fontFamily: "var(--display)", fontSize: "clamp(22px, 2.5vw, 30px)", fontWeight: 800, color: "var(--ink)" }}>
                Four Structured Levels
              </h2>
            </div>
            <span style={{ fontSize: 13.5, color: "var(--ink-dim)", fontWeight: 600 }}>Click any level to view Syllabus or Practice Sample Paper</span>
          </div>

          <div className="syl-cards-grid">
            {spellBeeLevels.map((level) => {
              const bgImages = {
                "little-spell-genius": "/assets/images/age-group-foundation.jpg",
                "junior-spell-genius": "/assets/images/age-group-junior.jpg",
                "primary-spell-genius": "/assets/images/age-group-primary.jpg",
                "middle-spell-genius": "/assets/images/age-group-middle.jpg",
              };
              const colors = {
                "little-spell-genius": "#C1650C",
                "junior-spell-genius": "#0D7A67",
                "primary-spell-genius": "#7C3AED",
                "middle-spell-genius": "#93650A",
              };

              const levelColor = colors[level.slug] || "#E65A00";
              const isExpanded = !!expandedSpellLevels[level.slug];
              const visibleSyllabus = isExpanded ? level.syllabus : level.syllabus.slice(0, 2);

              return (
                <div key={level.slug} className="syl-card syl-spellbee-card">
                  {/* Visual Media Header */}
                  <div className="syl-card-media">
                    <img
                      src={bgImages[level.slug]}
                      alt={`${level.levelName} students`}
                      loading="lazy"
                      className="syl-card-img"
                    />
                    <div className="syl-card-overlay" />
                    <div className="syl-card-badge-top" style={{ color: levelColor }}>
                      🐝 {level.classes}
                    </div>
                    <div className="syl-card-status-pill">
                      <span className="syl-live-dot" />
                      50 MCQs &middot; {level.time}
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="syl-card-body">
                    <div className="syl-card-div-tag" style={{ color: levelColor }}>
                      🐝 {level.levelName}
                    </div>
                    <h3 className="syl-card-title">{level.classes} Level</h3>
                    <p className="syl-card-desc">
                      Progressive assessment covering spelling accuracy, vocabulary, homophones, synonyms, antonyms, and word structures.
                    </p>

                    {/* Syllabus Sections Chips */}
                    <div className="syl-subjects-preview">
                      <div className="syl-preview-label-row">
                        <div className="syl-preview-label">Syllabus Highlights:</div>
                        {level.syllabus.length > 2 && (
                          <button
                            type="button"
                            onClick={() => toggleLevelExpand(level.slug)}
                            className={`syl-subject-expand-btn ${isExpanded ? "is-expanded" : ""}`}
                            title={isExpanded ? "Show fewer topics" : `Show ${level.syllabus.length - 2} more topics`}
                          >
                            <span>{isExpanded ? "Show Less" : `+${level.syllabus.length - 2} More`}</span>
                            <span className="syl-expand-chevron">{isExpanded ? "▴" : "▾"}</span>
                          </button>
                        )}
                      </div>
                      <div className="syl-chips-wrapper">
                        {visibleSyllabus.map((unit, i) => (
                          <button
                            key={i}
                            type="button"
                            onClick={() => handleOpenModal(level, "syllabus")}
                            className="syl-subject-chip"
                            title="Click to preview key syllabus topics"
                          >
                            <span className="syl-chip-dot" style={{ background: levelColor }} />
                            {unit.category}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Card Action Footer */}
                    <div className="syl-card-footer" style={{ gap: 10 }}>
                      <button
                        type="button"
                        onClick={() => handleOpenModal(level, "syllabus")}
                        className="syl-cta-primary"
                        style={{ cursor: "pointer" }}
                      >
                        Syllabus <span className="arrow">→</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => handleOpenModal(level, "paper")}
                        className="syl-cta-secondary"
                        style={{ cursor: "pointer" }}
                      >
                        Sample Paper ↗
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. 4-STAGE COMPETITION PROGRESSION SECTION (Full-Width Background Banner) */}
      <section style={{ width: "100%", background: "var(--bg-elev, #F1EBDC)", borderTop: "1px solid var(--line, rgba(20,23,42,0.10))", borderBottom: "1px solid var(--line, rgba(20,23,42,0.10))", padding: "52px 0" }}>
        <div className="wrap">
          <div style={{ marginBottom: 28 }}>
            <div className="section-eyebrow" style={{ justifyContent: "flex-start", marginBottom: 6 }}>Academic Progression</div>
            <h2 style={{ fontFamily: "var(--display)", fontSize: "clamp(22px, 2.5vw, 30px)", fontWeight: 800, color: "var(--ink)" }}>
              🏆 Four-Stage Competition Structure
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
            {spellBeeOverview.rounds.map((rnd) => (
              <div
                key={rnd.num}
                style={{
                  background: "var(--bg-card, #FFFFFF)",
                  border: "1px solid var(--line, rgba(20,23,42,0.10))",
                  borderRadius: "var(--r-card, 16px)",
                  padding: "24px 28px",
                  boxShadow: "0 4px 16px rgba(20,23,42,0.03)",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                  <span
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, #E65A00 0%, #D84E00 100%)",
                      color: "#FFFFFF",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 16,
                      fontWeight: 850,
                      boxShadow: "0 4px 12px rgba(230, 90, 0, 0.25)",
                    }}
                  >
                    {rnd.num}
                  </span>
                  <h3 style={{ fontFamily: "var(--display)", fontSize: 16, fontWeight: 800, color: "var(--ink)", margin: 0 }}>
                    {rnd.title.replace(/ROUND \d+:\s*/, "")}
                  </h3>
                </div>

                <div style={{ fontSize: 12.5, fontWeight: 750, color: "#E65A00", marginBottom: 10, textTransform: "uppercase", letterSpacing: "0.04em" }}>
                  {rnd.mode}
                </div>

                <p style={{ fontSize: 14, color: "var(--ink-dim)", lineHeight: 1.65, margin: 0 }}>
                  {rnd.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. EXAM PATTERN & MARKING SCHEME SECTION */}
      <section style={{ width: "100%", padding: "52px 0" }}>
        <div className="wrap">
          <div style={{ marginBottom: 20 }}>
            <div className="section-eyebrow" style={{ justifyContent: "flex-start", marginBottom: 6 }}>Evaluation Parameters</div>
            <h2 style={{ fontFamily: "var(--display)", fontSize: "clamp(22px, 2.5vw, 30px)", fontWeight: 800, color: "var(--ink)" }}>
              Exam Pattern & Marking Rules
            </h2>
          </div>

          <div
            style={{
              background: "var(--bg-card, #FFFFFF)",
              border: "1px solid var(--line, rgba(20,23,42,0.10))",
              borderRadius: "var(--r-card, 16px)",
              overflow: "hidden",
              boxShadow: "0 4px 20px rgba(20,23,42,0.03)",
            }}
          >
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", fontSize: 14.5 }}>
                <thead>
                  <tr style={{ background: "var(--ink, #14172A)", color: "#FFFFFF" }}>
                    <th style={{ padding: "16px 24px", fontFamily: "var(--display)", fontWeight: 800 }}>Level</th>
                    <th style={{ padding: "16px 24px", fontFamily: "var(--display)", fontWeight: 800 }}>Classes</th>
                    <th style={{ padding: "16px 24px", fontFamily: "var(--display)", fontWeight: 800 }}>Questions</th>
                    <th style={{ padding: "16px 24px", fontFamily: "var(--display)", fontWeight: 800 }}>Marks</th>
                    <th style={{ padding: "16px 24px", fontFamily: "var(--display)", fontWeight: 800 }}>Duration</th>
                  </tr>
                </thead>
                <tbody>
                  {spellBeeOverview.examPattern.map((ep, i) => (
                    <tr key={i} style={{ borderBottom: "1px solid var(--line, rgba(20,23,42,0.08))", background: i % 2 === 0 ? "#FFFFFF" : "var(--bg-elev, #F8FAFC)" }}>
                      <td style={{ padding: "14px 24px", fontWeight: 800, color: "var(--ink)" }}>🐝 {ep.level}</td>
                      <td style={{ padding: "14px 24px", fontWeight: 700, color: "#E65A00" }}>{ep.classes}</td>
                      <td style={{ padding: "14px 24px", color: "var(--ink-dim)" }}>{ep.questions} Objective MCQs</td>
                      <td style={{ padding: "14px 24px", color: "var(--ink-dim)" }}>{ep.marks} Marks</td>
                      <td style={{ padding: "14px 24px", fontWeight: 750, color: "var(--ink)" }}>{ep.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div style={{ padding: "20px 24px", background: "rgba(13, 122, 103, 0.08)", borderTop: "1px solid rgba(13, 122, 103, 0.15)", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
              <div style={{ fontSize: 14, color: "#065F46", fontWeight: 650 }}>
                <strong>Marking Scheme:</strong> Correct answer: <strong>+1 mark</strong> &middot; Wrong answer: <strong>0</strong> &middot; Unattempted: <strong>0</strong>
              </div>
              <div style={{ fontSize: 13.5, fontWeight: 800, color: "#0D7A67", background: "#FFFFFF", padding: "6px 16px", borderRadius: 9999, border: "1px solid rgba(13, 122, 103, 0.3)" }}>
                ✨ No Negative Marking Format
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ABOUT INDIA GENIUS FOUNDATION SECTION (Full-Width Background Banner) */}
      <section style={{ width: "100%", background: "var(--bg-card-hi, #FFFDF7)", borderTop: "1px solid var(--line, rgba(20,23,42,0.10))", borderBottom: "1px solid var(--line, rgba(20,23,42,0.10))", padding: "52px 0" }}>
        <div className="wrap">
          <div className="section-eyebrow" style={{ justifyContent: "flex-start", marginBottom: 6 }}>Academic Organizer</div>
          <h2 style={{ fontFamily: "var(--display)", fontSize: "clamp(22px, 2.5vw, 30px)", fontWeight: 800, color: "var(--ink)", marginBottom: 16 }}>
            About India Genius Foundation
          </h2>
          
          <p style={{ fontSize: 15, color: "var(--ink-dim)", lineHeight: 1.7, marginBottom: 24, maxWidth: "100%" }}>
            India Genius Foundation (IGF) is an educational initiative committed to identifying, developing and celebrating the knowledge, intelligence, creativity, language ability and future-ready skills of students across India.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24, marginBottom: 32 }}>
            <div style={{ padding: 24, background: "rgba(230, 90, 0, 0.06)", border: "1px solid rgba(230, 90, 0, 0.2)", borderRadius: 14 }}>
              <h3 style={{ fontFamily: "var(--display)", fontSize: 17, fontWeight: 800, color: "#E65A00", margin: "0 0 8px 0" }}>🎯 Our Vision</h3>
              <p style={{ fontSize: 14.5, color: "var(--ink)", margin: 0, lineHeight: 1.65 }}>{spellBeeOverview.vision}</p>
            </div>
            <div style={{ padding: 24, background: "rgba(13, 122, 103, 0.06)", border: "1px solid rgba(13, 122, 103, 0.2)", borderRadius: 14 }}>
              <h3 style={{ fontFamily: "var(--display)", fontSize: 17, fontWeight: 800, color: "#0D7A67", margin: "0 0 8px 0" }}>🚀 Our Mission</h3>
              <p style={{ fontSize: 14.5, color: "var(--ink)", margin: 0, lineHeight: 1.65 }}>{spellBeeOverview.mission}</p>
            </div>
          </div>

          <div>
            <h3 style={{ fontFamily: "var(--display)", fontSize: 18, fontWeight: 800, color: "var(--ink)", marginBottom: 16 }}>
              Core Objectives of the Olympiad
            </h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 14 }}>
              {spellBeeOverview.objectives.map((obj, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 16px", background: "#FFFFFF", borderRadius: 10, border: "1px solid var(--line)" }}>
                  <span style={{ width: 22, height: 22, borderRadius: "50%", background: "#E65A00", color: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 800, flexShrink: 0 }}>✓</span>
                  <span style={{ fontSize: 14, fontWeight: 650, color: "var(--ink)" }}>{obj}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. FINAL SPELL-OFF & CERTIFICATES SECTION */}
      <section style={{ width: "100%", padding: "52px 0" }}>
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 32 }}>
            
            {/* Final Spell-Off Format */}
            <div
              style={{
                background: "var(--bg-card, #FFFFFF)",
                border: "1px solid var(--line, rgba(20,23,42,0.10))",
                borderRadius: "var(--r-card, 16px)",
                padding: "28px 32px",
                boxShadow: "0 4px 20px rgba(20,23,42,0.03)",
              }}
            >
              <div className="section-eyebrow" style={{ justifyContent: "flex-start", marginBottom: 6 }}>Championship Round</div>
              <h2 style={{ fontFamily: "var(--display)", fontSize: 22, fontWeight: 800, color: "var(--ink)", marginBottom: 16 }}>
                Round 4: Final Spell-Off Format
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  { stage: "Stage 1", name: "Written Spell Test", detail: "20 Words" },
                  { stage: "Stage 2", name: "Pronunciation Challenge", detail: "10 Words" },
                  { stage: "Stage 3", name: "Meaning Challenge", detail: "10 Words" },
                  { stage: "Stage 4", name: "Sentence Challenge", detail: "5 Words" },
                  { stage: "Stage 5", name: "Rapid-Fire Spell Bee", detail: "Championship Spell-Off" },
                ].map((stg, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 16px", background: "var(--bg-elev, #F8FAFC)", border: "1px solid var(--line)", borderRadius: 10 }}>
                    <div>
                      <span style={{ fontSize: 11.5, fontWeight: 800, color: "#E65A00", textTransform: "uppercase" }}>{stg.stage}</span>
                      <div style={{ fontSize: 14.5, fontWeight: 750, color: "var(--ink)" }}>{stg.name}</div>
                    </div>
                    <span style={{ fontSize: 13, fontWeight: 700, color: "var(--ink-dim)", background: "#FFFFFF", padding: "4px 12px", borderRadius: 9999, border: "1px solid var(--line)" }}>{stg.detail}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Awards & Certificates */}
            <div
              style={{
                background: "var(--bg-card, #FFFFFF)",
                border: "1px solid var(--line, rgba(20,23,42,0.10))",
                borderRadius: "var(--r-card, 16px)",
                padding: "28px 32px",
                boxShadow: "0 4px 20px rgba(20,23,42,0.03)",
              }}
            >
              <div className="section-eyebrow" style={{ justifyContent: "flex-start", marginBottom: 6 }}>Merit & Recognition</div>
              <h2 style={{ fontFamily: "var(--display)", fontSize: 22, fontWeight: 800, color: "var(--ink)", marginBottom: 16 }}>
                Awards & Certificate Categories
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {spellBeeOverview.certificateCategories.map((cat, i) => (
                  <div key={i} style={{ borderBottom: i < 3 ? "1px solid var(--line)" : "none", paddingBottom: i < 3 ? 12 : 0 }}>
                    <div style={{ fontSize: 13.5, fontWeight: 800, color: "#E65A00", marginBottom: 6 }}>{cat.round}</div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                      {cat.items.map((item, idx) => (
                        <span key={idx} style={{ fontSize: 13, fontWeight: 650, color: "var(--ink)", background: "var(--bg-elev, #F8FAFC)", padding: "4px 12px", borderRadius: 8, border: "1px solid var(--line)" }}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. FREQUENTLY ASKED QUESTIONS SECTION (Edge-to-Edge 100% Full Width Background Banner) */}
      <section style={{ width: "100%", background: "var(--bg-elev, #F1EBDC)", borderTop: "1px solid var(--line, rgba(20,23,42,0.10))", padding: "56px 0 64px" }}>
        <div className="wrap">
          <div style={{ marginBottom: 28, textAlign: "left" }}>
            <div className="section-eyebrow" style={{ justifyContent: "flex-start", marginBottom: 8, color: "#E65A00" }}>
              Olympiad Guidance
            </div>
            <h2 style={{ fontFamily: "var(--display)", fontSize: "clamp(24px, 2.8vw, 32px)", fontWeight: 850, color: "var(--ink, #14172A)", margin: 0 }}>
              Frequently Asked Questions
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 14, width: "100%" }}>
            {[
              {
                q: "Who is eligible to participate in the English Spell Bee Olympiad?",
                a: "Students from PG through Class IX across 4 age levels (Foundation: PG-UKG, Junior: Classes I-III, Primary: Classes IV-VI, Middle: Classes VII-IX) are eligible to participate."
              },
              {
                q: "What is the format and marking scheme for Round 1?",
                a: "Round 1 is a 50-question objective MCQ test conducted at the school. Correct answers carry +1 mark with NO negative marking."
              },
              {
                q: "How do students progress to District, State, and National rounds?",
                a: "Top 20% or students scoring a minimum of 60% in Round 1 qualify for District/City Round 2, followed by State Round 3 and National Championship Round 4."
              },
              {
                q: "Are sample papers available for practice?",
                a: "Yes! You can view and practice complete 50-MCQ official sample question papers for all 4 levels directly on this page by clicking 'Sample Paper ↗' on any level card."
              }
            ].map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div
                  key={index}
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid var(--line, rgba(20,23,42,0.12))",
                    borderRadius: 14,
                    overflow: "hidden",
                    width: "100%",
                    boxShadow: "0 2px 10px rgba(20,23,42,0.03)",
                    transition: "all 0.2s ease",
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    style={{
                      width: "100%",
                      padding: "20px 28px",
                      background: isOpen ? "#FFFDF9" : "#FFFFFF",
                      border: "none",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: 16,
                      fontSize: 16,
                      fontWeight: 750,
                      color: "var(--ink, #14172A)",
                      textAlign: "left",
                      cursor: "pointer",
                    }}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <span
                      style={{
                        width: 28,
                        height: 28,
                        borderRadius: "50%",
                        background: isOpen ? "rgba(230, 90, 0, 0.12)" : "rgba(20, 23, 42, 0.06)",
                        color: isOpen ? "#E65A00" : "#14172A",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 16,
                        fontWeight: 800,
                        flexShrink: 0,
                        transition: "all 0.2s ease",
                      }}
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen && (
                    <div style={{ padding: "0 28px 22px 28px", fontSize: 14.5, color: "var(--ink-dim, #454A66)", lineHeight: 1.7, borderTop: "1px dashed var(--line, rgba(20,23,42,0.10))", paddingTop: 16 }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* INTERACTIVE FULL-SCREEN MODAL (SYLLABUS & 50-MCQ SAMPLE PAPERS) */}
      {activeModal && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={handleCloseModal}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 99999,
            background: "rgba(10, 15, 29, 0.85)",
            backdropFilter: "blur(8px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "#FFFFFF",
              borderRadius: 20,
              width: "100%",
              maxWidth: 900,
              maxHeight: "90vh",
              display: "flex",
              flexDirection: "column",
              boxShadow: "0 24px 64px rgba(0,0,0,0.3)",
              overflow: "hidden",
            }}
          >
            {/* Modal Header */}
            <div
              style={{
                padding: "20px 28px",
                borderBottom: "1px solid var(--line, rgba(20,23,42,0.10))",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                background: "var(--bg-elev, #F8FAFC)",
              }}
            >
              <div>
                <span style={{ fontSize: 12, fontWeight: 800, color: "#E65A00", textTransform: "uppercase" }}>
                  🐝 {activeModal.level.levelName} ({activeModal.level.classes})
                </span>
                <h3 style={{ fontFamily: "var(--display)", fontSize: 20, fontWeight: 850, color: "var(--ink)", margin: "2px 0 0 0" }}>
                  {activeModal.tab === "syllabus" ? "Complete Level Syllabus" : `Official 50-MCQ Sample Paper (${activeModal.level.time})`}
                </h3>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                {activeModal.tab === "paper" && (
                  <span style={{ fontSize: 13.5, fontWeight: 800, color: "#0D7A67", background: "rgba(13, 122, 103, 0.1)", padding: "5px 14px", borderRadius: 9999 }}>
                    Score: {calculateScore(activeModal.level)} / 50
                  </span>
                )}
                <button
                  type="button"
                  onClick={handleCloseModal}
                  style={{
                    background: "rgba(20, 23, 42, 0.08)",
                    border: "none",
                    color: "var(--ink)",
                    width: 34,
                    height: 34,
                    borderRadius: "50%",
                    fontSize: 16,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                  }}
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Modal Content Body */}
            <div style={{ padding: "24px 28px", overflowY: "auto", flex: 1 }}>
              {activeModal.tab === "syllabus" ? (
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
                  {activeModal.level.syllabus.map((unit, uIdx) => (
                    <div key={uIdx} style={{ background: "var(--bg-elev, #F8FAFC)", border: "1px solid var(--line)", borderRadius: 12, padding: 18 }}>
                      <h4 style={{ fontSize: 15, fontWeight: 800, color: "var(--ink)", margin: "0 0 10px 0", borderBottom: "2px solid #E65A00", paddingBottom: 6 }}>
                        {unit.category}
                      </h4>
                      <ul style={{ paddingLeft: 18, margin: 0, fontSize: 13.5, color: "var(--ink-dim)", lineHeight: 1.7 }}>
                        {unit.items.map((item, iIdx) => (
                          <li key={iIdx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ) : (
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20, flexWrap: "wrap", gap: 12 }}>
                    <span style={{ fontSize: 13, color: "var(--ink-dim)" }}>
                      Choose options to test your score in real time.
                    </span>
                    <button
                      type="button"
                      onClick={() => setShowAnswerKey(!showAnswerKey)}
                      style={{
                        padding: "6px 14px",
                        borderRadius: 8,
                        fontSize: 12.5,
                        fontWeight: 750,
                        border: "none",
                        background: showAnswerKey ? "#DC2626" : "#0D7A67",
                        color: "#FFFFFF",
                        cursor: "pointer",
                      }}
                    >
                      {showAnswerKey ? "Hide Answer Key" : "View Full Answer Key"}
                    </button>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                    {activeModal.level.questions.map((q) => {
                      const selectedOpt = userAnswers[q.num];
                      const correctOpt = activeModal.level.answerKey[q.num];

                      return (
                        <div key={q.num} style={{ background: "var(--bg-card, #FFFFFF)", border: "1px solid var(--line)", borderRadius: 12, padding: 16 }}>
                          <div style={{ fontSize: 14.5, fontWeight: 750, color: "var(--ink)", marginBottom: 10 }}>
                            <span style={{ color: "#E65A00", marginRight: 6 }}>Q{q.num}.</span> {q.text}
                          </div>

                          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 8 }}>
                            {q.options.map((opt) => {
                              const isSelected = selectedOpt === opt.k;
                              const isCorrect = correctOpt === opt.k;

                              let optBg = "var(--bg-elev, #F8FAFC)";
                              let optBorder = "1px solid var(--line)";
                              let optColor = "var(--ink)";

                              if (isSelected) {
                                if (isCorrect) {
                                  optBg = "#D1FAE5";
                                  optBorder = "1.5px solid #10B981";
                                  optColor = "#065F46";
                                } else {
                                  optBg = "#FEE2E2";
                                  optBorder = "1.5px solid #EF4444";
                                  optColor = "#991B1B";
                                }
                              } else if (showAnswerKey && isCorrect) {
                                optBg = "#ECFDF5";
                                optBorder = "1.5px dashed #10B981";
                                optColor = "#047857";
                              }

                              return (
                                <button
                                  key={opt.k}
                                  type="button"
                                  onClick={() => handleSelectOption(q.num, opt.k)}
                                  style={{
                                    padding: "8px 12px",
                                    borderRadius: 8,
                                    border: optBorder,
                                    background: optBg,
                                    color: optColor,
                                    textAlign: "left",
                                    fontSize: 13,
                                    fontWeight: isSelected || (showAnswerKey && isCorrect) ? 750 : 500,
                                    cursor: "pointer",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 8,
                                  }}
                                >
                                  <span style={{ width: 20, height: 20, borderRadius: "50%", background: "rgba(0,0,0,0.06)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 750 }}>{opt.k}</span>
                                  <span>{opt.t}</span>
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
