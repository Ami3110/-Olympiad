"use client";

import { useState } from "react";
import Link from "next/link";

const divisionDetails = [
  {
    slug: "foundation",
    name: "Foundation",
    classes: "PG – UKG",
    tagline: "Early Cognitive & Sensory Awakening",
    desc: "Playful exploration designed to nurture fundamental curiosity, observation skills, pattern recognition, and sensory intuition.",
    image: "/assets/images/age-group-foundation.jpg",
    color: "#C1650C",
    accentBg: "rgba(193, 101, 12, 0.08)",
    border: "rgba(193, 101, 12, 0.25)",
    badge: "Pre-School",
    status: "Coming Soon",
    subjects: [
      { name: "Curiosity & Patterns", topics: ["Color & Shape Sorting", "Basic Counting", "Nature Wonders", "Spatial Puzzles"] },
      { name: "Sensory & Logic Play", topics: ["Story Sequencing", "Observation Games", "Early Vocabulary", "Sound & Rhythm"] }
    ]
  },
  {
    slug: "junior",
    name: "Junior",
    classes: "Classes I – II",
    tagline: "Inquiry & Foundational Logic",
    desc: "Building confidence through simple scientific wonders, mathematical puzzles, nature appreciation, and everyday technology basics.",
    image: "/assets/images/age-group-junior.jpg",
    color: "#0D7A67",
    accentBg: "rgba(13, 122, 103, 0.08)",
    border: "rgba(13, 122, 103, 0.25)",
    badge: "Primary Prep",
    status: "Coming Soon",
    subjects: [
      { name: "Everyday Science & Earth", topics: ["Plant & Animal Life", "Weather & Seasons", "Simple Machines", "Water & Air"] },
      { name: "Math & Logic Riddles", topics: ["Number Bonds", "2D/3D Shapes", "Time & Calendar", "Visual Reasoning"] }
    ]
  },
  {
    slug: "primary",
    name: "Primary",
    classes: "Classes III – V",
    tagline: "Exploration & Emerging Horizons",
    desc: "Structured exposure to space exploration, introductory computer reasoning, financial habits, and ecological balance.",
    image: "/assets/images/age-group-primary.jpg",
    color: "#C94627",
    accentBg: "rgba(201, 70, 39, 0.08)",
    border: "rgba(201, 70, 39, 0.25)",
    badge: "4 Active Subjects",
    status: "Active",
    subjects: [
      {
        slug: "space-science-astronomy",
        name: "Space Science & Astronomy",
        topics: ["Solar System & Planets", "Sun, Moon & Eclipses", "ISRO Historic Missions", "Telescopes & Constellations", "Famous Astronauts"]
      },
      {
        slug: "computer-ai-awareness",
        name: "Computer & AI Awareness",
        topics: ["Hardware vs Software", "Internet Safety", "What is an Algorithm?", "Smart Devices & AI around us", "Block-based Coding logic"]
      },
      {
        slug: "financial-literacy",
        name: "Financial Literacy",
        topics: ["History of Money", "Needs vs Wants", "Piggy Banks & Savings", "Currency Identification", "Smart Shopping Habits"]
      },
      {
        slug: "environmental-climate-studies",
        name: "Environmental & Climate Studies",
        topics: ["Clean Energy Sources", "Recycling & Waste Segregation", "Biodiversity Hotspots", "Forests & Water Conservation"]
      }
    ]
  },
  {
    slug: "middle",
    name: "Middle",
    classes: "Classes VI – VIII",
    tagline: "Analytical Problem Solving & Robotics",
    desc: "Hands-on conceptual frameworks covering AI architectures, digital cybersecurity hygiene, personal budgeting, and astrophysics.",
    image: "/assets/images/age-group-middle.jpg",
    color: "#93650A",
    accentBg: "rgba(147, 101, 10, 0.08)",
    border: "rgba(147, 101, 10, 0.25)",
    badge: "5 Active Subjects",
    status: "Active",
    subjects: [
      {
        slug: "ai-emerging-technology",
        name: "Artificial Intelligence & Emerging Tech",
        topics: ["Machine Learning Fundamentals", "Computer Vision & Speech", "Robotics Sensors", "Ethics in Automation", "Prompting Basics"]
      },
      {
        slug: "cybersecurity-digital-safety",
        name: "Cybersecurity & Digital Safety",
        topics: ["Password Hygiene & 2FA", "Phishing & Social Engineering", "Malware Types", "Digital Footprints", "Safe Social Media"]
      },
      {
        slug: "financial-literacy",
        name: "Financial Literacy",
        topics: ["Banking Systems & UPI", "Compound Interest Power", "Budgeting & Expense Tracking", "Inflation Concepts", "Introduction to Investments"]
      },
      {
        slug: "space-science-astronomy",
        name: "Space Science & Astronomy",
        topics: ["Orbital Mechanics", "Rocket Propulsion Basics", "Gaganyaan & Chandrayaan", "Exoplanets & Deep Space", "Stellar Life Cycle"]
      },
      {
        slug: "climate-sustainability",
        name: "Climate & Sustainability",
        topics: ["Renewable Energy Grids", "Carbon Neutrality", "Global Treaties & SDGs", "Circular Economy", "Ecosystem Restoration"]
      }
    ]
  },
  {
    slug: "secondary",
    name: "Secondary",
    classes: "Classes IX – X",
    tagline: "Applied Innovation & Ethical Technologies",
    desc: "Advanced applied competencies in neural networks, ethical hacking, financial markets, space communication, and behavioral psychology.",
    image: "/assets/images/age-group-secondary.jpg",
    color: "#0D7A67",
    accentBg: "rgba(13, 122, 103, 0.08)",
    border: "rgba(13, 122, 103, 0.25)",
    badge: "7 Active Subjects",
    status: "Active",
    subjects: [
      {
        slug: "ai-machine-learning",
        name: "AI & Machine Learning",
        topics: ["Supervised vs Unsupervised ML", "Deep Learning & Neural Nets", "NLP & Large Language Models", "Bias & AI Governance"]
      },
      {
        slug: "cybersecurity-ethical-hacking",
        name: "Cybersecurity & Ethical Hacking",
        topics: ["Network Protocols & Vulnerabilities", "Cryptography & Ciphers", "Web Exploitation Prevention", "Incident Response Basics"]
      },
      {
        slug: "financial-literacy",
        name: "Financial Literacy & Capital Markets",
        topics: ["Stock Markets & Indices", "Mutual Funds & Risk Profiles", "Fintech & Digital Assets", "Taxation & Financial Planning"]
      },
      {
        slug: "space-science-astronomy",
        name: "Space Science & Astronomy",
        topics: ["Astrophysics & Relativity", "Satellite Communications", "Interplanetary Exploration", "Space Debris Management"]
      },
      {
        slug: "entrepreneurship-innovation",
        name: "Entrepreneurship & Innovation",
        topics: ["Business Model Canvas", "Design Thinking & Pitching", "Product-Market Fit", "Funding & Startup Ecosystems"]
      },
      {
        slug: "behavioural-science-psychology",
        name: "Behavioural Science & Psychology",
        topics: ["Cognitive Biases", "Decision Architecture", "Emotional Intelligence", "Social Dynamics & Persuasion"]
      },
      {
        slug: "climate-sustainability",
        name: "Climate & Sustainability",
        topics: ["Climate Tech Solutions", "ESG Frameworks", "Green Hydrogen & Storage", "Urban Sustainability Systems"]
      }
    ]
  },
  {
    slug: "senior-secondary",
    name: "Senior Secondary",
    classes: "Classes XI – XII",
    tagline: "Pre-College Mastery & Future Leadership",
    desc: "Leadership-level assessment covering space commercialization, venture creation, cybersecurity governance, public speaking, and strategic thinking.",
    image: "/assets/images/age-group-senior.jpg",
    color: "#C1650C",
    accentBg: "rgba(193, 101, 12, 0.08)",
    border: "rgba(193, 101, 12, 0.25)",
    badge: "9 Active Subjects",
    status: "Active",
    subjects: [
      {
        slug: "ai-emerging-technology-olympiad",
        name: "AI & Emerging Technology Olympiad",
        topics: ["Transformer Architectures", "Autonomous Systems", "Quantum Computing Concepts", "Global AI Policy"]
      },
      {
        slug: "cybersecurity-digital-safety-olympiad",
        name: "Cybersecurity & Digital Governance",
        topics: ["Zero Trust Architecture", "Cloud Security & Threat Hunting", "Cyber Law & Forensics", "Data Privacy Frameworks"]
      },
      {
        slug: "financial-literacy-olympiad",
        name: "Financial Literacy & Economics",
        topics: ["Macroeconomics & Monetary Policy", "Derivatives & Risk Modeling", "Decentralized Finance (DeFi)", "Corporate Finance"]
      },
      {
        slug: "entrepreneurship-innovation-olympiad",
        name: "Entrepreneurship & Innovation",
        topics: ["Venture Capital Mechanics", "Unit Economics & Scaling", "Intellectual Property Rights", "Disruptive Innovation"]
      },
      {
        slug: "climate-sustainability-olympiad",
        name: "Climate Economics & Sustainability",
        topics: ["Carbon Credit Markets", "Geoengineering & Policy", "Renewable Energy Transition", "Resource Economics"]
      },
      {
        slug: "leadership-life-skills-olympiad",
        name: "Leadership & Strategic Management",
        topics: ["High-Stakes Negotiation", "Crisis Management", "Organizational Psychology", "Executive Communication"]
      },
      {
        slug: "critical-thinking-problem-solving-olympiad",
        name: "Critical Thinking & Game Theory",
        topics: ["Strategic Game Theory", "Logical Fallacies & Epistemology", "Complex Systems Analysis", "Data-Driven Problem Solving"]
      },
      {
        slug: "communication-public-speaking-olympiad",
        name: "Communication & Public Rhetoric",
        topics: ["Debating Frameworks", "Persuasive Storytelling", "Diplomatic Communication", "Media & Public Relations"]
      },
      {
        slug: "career-future-skills-olympiad",
        name: "Career & Future Skills Olympiad",
        topics: ["Emerging Industry Landscapes", "Cross-Disciplinary Agility", "Research Methodologies", "Lifelong Learning Systems"]
      }
    ]
  }
];

export default function SyllabusInteractive() {
  const [selectedSubjectModal, setSelectedSubjectModal] = useState(null);
  const [activeFaq, setActiveFaq] = useState(null);
  const [expandedDivisions, setExpandedDivisions] = useState({});

  const toggleDivisionExpand = (slug) => {
    setExpandedDivisions((prev) => ({ ...prev, [slug]: !prev[slug] }));
  };

  return (
    <>
      {/* Main Grid Section */}
      <section className="syl-grid-section" style={{ paddingTop: 48 }}>
        <div className="wrap">
          <div className="syl-cards-grid">
            {divisionDetails.map((div) => {
              const isExpanded = !!expandedDivisions[div.slug];
              const visibleSubjects = isExpanded ? div.subjects : div.subjects.slice(0, 2);

              return (
                <div key={div.slug} className="syl-card">
                  {/* Visual Media Header */}
                  <div className="syl-card-media">
                    <img
                      src={div.image}
                      alt={`${div.name} Division students`}
                      loading="lazy"
                      className="syl-card-img"
                    />
                    <div className="syl-card-overlay" />
                    <div className="syl-card-badge-top" style={{ color: div.color }}>
                      {div.classes}
                    </div>
                    <div className="syl-card-status-pill">
                      {div.status === "Active" ? (
                        <>
                          <span className="syl-live-dot" />
                          {div.subjects.length} Subjects
                        </>
                      ) : (
                        "Coming Soon"
                      )}
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="syl-card-body">
                    <div className="syl-card-div-tag" style={{ color: div.color }}>
                      {div.name} Division
                    </div>
                    <h3 className="syl-card-title">{div.tagline}</h3>
                    <p className="syl-card-desc">{div.desc}</p>

                    {/* Subject Chips / Interactive Topics Preview */}
                    <div className="syl-subjects-preview">
                      <div className="syl-preview-label-row">
                        <div className="syl-preview-label">Included Subjects:</div>
                        {div.subjects.length > 2 && (
                          <button
                            type="button"
                            onClick={() => toggleDivisionExpand(div.slug)}
                            className={`syl-subject-expand-btn ${isExpanded ? "is-expanded" : ""}`}
                            title={isExpanded ? "Show fewer subjects" : `Show ${div.subjects.length - 2} more subjects`}
                          >
                            <span>{isExpanded ? "Show Less" : `+${div.subjects.length - 2} More`}</span>
                            <span className="syl-expand-chevron">{isExpanded ? "▴" : "▾"}</span>
                          </button>
                        )}
                      </div>
                      <div className="syl-chips-wrapper">
                        {visibleSubjects.map((sub, i) => (
                          <button
                            key={i}
                            type="button"
                            onClick={() =>
                              setSelectedSubjectModal({
                                division: div.name,
                                classes: div.classes,
                                color: div.color,
                                subject: sub,
                              })
                            }
                            className="syl-subject-chip"
                            title="Click to preview key syllabus topics"
                          >
                            <span className="syl-chip-dot" style={{ background: div.color }} />
                            {sub.name}
                          </button>
                        ))}
                      </div>
                    </div>

                      {/* Card Action Footer */}
                      <div className="syl-card-footer">
                        <Link
                          href={`/syllabus/${div.slug}/`}
                          className="syl-cta-primary"
                        >
                          Explore Full Syllabus <span className="arrow">→</span>
                        </Link>
                        {div.status === "Active" && (
                          <Link
                            href="/sample-papers/"
                            className="syl-cta-secondary"
                            title="Download sample papers for this level"
                          >
                            Sample Papers ↗
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
        </div>
      </section>

      {/* Interactive FAQ Section */}
      <section className="syl-faq-section">
        <div className="wrap">
          <div className="section-head" style={{ maxWidth: 640 }}>
            <div className="section-eyebrow">Syllabus Guidance</div>
            <h2 className="section-title">Frequently Asked Questions</h2>
          </div>

          <div className="syl-faq-list">
            {[
              {
                q: "Is the Olympiad syllabus aligned with CBSE, ICSE, and State Boards?",
                a: "Yes. The core concepts correlate with school curriculums across all major national and state boards, while extending into applied thinking, real-world scenarios, and emerging competencies like Space Science and AI."
              },
              {
                q: "Can a student appear for multiple subject Olympiads in their division?",
                a: "Absolutely! Students from Classes III through XII are encouraged to participate in multiple subject Olympiads within their designated age division to explore diverse interests."
              },
              {
                q: "Are sample question papers available for practice?",
                a: "Yes. Free sample question papers and model blueprints for each active subject can be accessed directly on our Sample Papers page to help students familiarize themselves with question patterns and difficulty tiers."
              },
              {
                q: "What is the format and duration of the Olympiad examination?",
                a: "The assessment consists of objective Multiple-Choice Questions (MCQs) designed for 60 minutes, focusing on analytical reasoning, problem solving, and conceptual clarity."
              }
            ].map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div key={index} className={`syl-faq-card ${isOpen ? "open" : ""}`}>
                  <button
                    type="button"
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    className="syl-faq-question"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <span className="syl-faq-chevron">{isOpen ? "−" : "+"}</span>
                  </button>
                  {isOpen && <div className="syl-faq-answer">{faq.a}</div>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Subject Topic Quick Preview Modal */}
      {selectedSubjectModal && (
        <div className="syl-modal-backdrop" onClick={() => setSelectedSubjectModal(null)}>
          <div
            className="syl-modal-content"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <button
              type="button"
              onClick={() => setSelectedSubjectModal(null)}
              className="syl-modal-close"
              aria-label="Close modal"
            >
              ✕
            </button>

            <div className="syl-modal-header">
              <span
                className="syl-modal-div-badge"
                style={{ color: selectedSubjectModal.color }}
              >
                {selectedSubjectModal.division} Division · {selectedSubjectModal.classes}
              </span>
              <h3 className="syl-modal-title">{selectedSubjectModal.subject.name}</h3>
              <p className="syl-modal-subtitle">
                Core syllabus blueprint and key learning topics covered in the Olympiad:
              </p>
            </div>

            <div className="syl-modal-topics-grid">
              {selectedSubjectModal.subject.topics ? (
                selectedSubjectModal.subject.topics.map((t, idx) => (
                  <div key={idx} className="syl-modal-topic-item">
                    <span className="syl-topic-num">{String(idx + 1).padStart(2, "0")}</span>
                    <span className="syl-topic-text">{t}</span>
                  </div>
                ))
              ) : (
                <p style={{ color: "#64748B", fontSize: 13.5 }}>Detailed topic breakdown loading...</p>
              )}
            </div>

            <div className="syl-modal-footer">
              <Link
                href={`/syllabus/${selectedSubjectModal.division.toLowerCase().replace(/\s+/g, "-")}/`}
                className="btn btn-primary"
                style={{ padding: "10px 22px", fontSize: 13.5 }}
              >
                View Full Division Syllabus →
              </Link>
              <button
                type="button"
                onClick={() => setSelectedSubjectModal(null)}
                className="btn btn-ghost"
                style={{ padding: "10px 18px", fontSize: 13.5 }}
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
