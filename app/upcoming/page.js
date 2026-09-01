"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const posters = [
  {
    id: "aipa-hindi-diwas-2026",
    title: "AIPA National Hindi Diwas Mahotsav 2026",
    category: "Class 11th & 12th · National Level",
    src: "/assets/images/upcoming-hindi-diwas-national-2026.jpg",
    alt: "AIPA National Hindi Diwas Mahotsav 2026 Official Flyer",
  },
  {
    id: "hindi-utsav-circular",
    title: "हिंदी उत्सव दिवस (भाषा गौरव दिवस)",
    category: "Class I to X · School-Wide Activities",
    src: "/assets/images/upcoming-hindi-utsav-vertical.jpg",
    alt: "हिंदी उत्सव दिवस भाषा गौरव दिवस Circular",
  },
  {
    id: "hindi-utsav-banner",
    title: "हिंदी उत्सव दिवस – Panoramic Campus Banner",
    category: "14 September 2026 · हिंदी का सम्मान, भारत का सम्मान",
    src: "/assets/images/upcoming-hindi-utsav-horizontal.jpg",
    alt: "हिंदी उत्सव दिवस भाषा गौरव दिवस Banner",
    fullWidth: true,
  },
];

export default function UpcomingPage() {
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setActiveImage(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <main style={{ background: "var(--bg, #FAF7EF)", minHeight: "100vh", width: "100%", padding: "28px 0 80px" }}>
      <div style={{ width: "100%", maxWidth: "100%", padding: "0 clamp(16px, 3.5vw, 48px)", boxSizing: "border-box" }}>
        
        {/* Minimal Full-Width Header */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: 20,
            paddingBottom: 24,
            marginBottom: 32,
            borderBottom: "1px solid var(--line, rgba(20, 23, 42, 0.10))",
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
                  transition: "all 0.18s ease",
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
              National Academic Calendar &middot; Session 2026
            </div>

            <h1
              style={{
                fontFamily: "var(--display, 'Space Grotesk', sans-serif)",
                fontSize: "clamp(28px, 3.5vw, 42px)",
                fontWeight: 850,
                color: "var(--ink, #14172A)",
                letterSpacing: "-0.025em",
                margin: 0,
                lineHeight: 1.2,
              }}
            >
              Upcoming Events
            </h1>
          </div>

          <div>
            <a
              href="/registration/?tab=school"
              data-reg-modal="school"
              style={{
                background: "linear-gradient(135deg, #E65A00 0%, #D84E00 100%)",
                color: "#FFFFFF",
                padding: "11px 24px",
                borderRadius: 9999,
                fontSize: 14.5,
                fontWeight: 800,
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                boxShadow: "0 4px 14px rgba(230, 90, 0, 0.28)",
                transition: "transform 0.18s ease, box-shadow 0.18s ease",
              }}
            >
              <span>Register School</span>
              <span>➔</span>
            </a>
          </div>
        </div>

        {/* Full-Width Poster Gallery */}
        <div style={{ display: "flex", flexDirection: "column", gap: 36, width: "100%" }}>
          
          {/* 2 Portrait Posters Side-by-Side (Expanded Full Width) */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
              gap: 32,
              width: "100%",
            }}
          >
            {posters.filter((p) => !p.fullWidth).map((item) => (
              <div
                key={item.id}
                style={{
                  background: "var(--bg-card, #FFFFFF)",
                  border: "1px solid var(--line, rgba(20, 23, 42, 0.10))",
                  borderRadius: "var(--r-card, 16px)",
                  overflow: "hidden",
                  boxShadow: "var(--shadow-card, 0 8px 32px rgba(20, 23, 42, 0.06))",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                  width: "100%",
                }}
              >
                {/* Clickable Image Preview */}
                <div
                  style={{
                    cursor: "zoom-in",
                    background: "#0A193B",
                    position: "relative",
                    overflow: "hidden",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                  }}
                  onClick={() => setActiveImage(item)}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    style={{
                      width: "100%",
                      height: "auto",
                      display: "block",
                      objectFit: "contain",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "rgba(10, 25, 59, 0.4)",
                      opacity: 0,
                      transition: "opacity 0.2s ease",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#FFFFFF",
                      fontWeight: 750,
                      fontSize: 15,
                      gap: 8,
                    }}
                    className="img-hover-overlay"
                  >
                    <span>🔍 Click to View Full Size</span>
                  </div>
                </div>

                {/* Card Bottom Strip */}
                <div
                  style={{
                    padding: "18px 24px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 16,
                    background: "#FFFFFF",
                    borderTop: "1px solid var(--line, rgba(20, 23, 42, 0.08))",
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--display, 'Space Grotesk', sans-serif)",
                        fontSize: 16,
                        fontWeight: 800,
                        color: "var(--ink, #14172A)",
                        marginBottom: 2,
                      }}
                    >
                      {item.title}
                    </div>
                    <div style={{ fontSize: 13.5, color: "var(--ink-dim, #454A66)", fontWeight: 600 }}>
                      {item.category}
                    </div>
                  </div>

                  <a
                    href={item.src}
                    download
                    style={{
                      background: "rgba(230, 90, 0, 0.08)",
                      color: "#E65A00",
                      border: "1px solid rgba(230, 90, 0, 0.2)",
                      padding: "8px 16px",
                      borderRadius: 8,
                      fontSize: 13.5,
                      fontWeight: 750,
                      textDecoration: "none",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      flexShrink: 0,
                      transition: "all 0.15s ease",
                    }}
                  >
                    <span>⬇</span> Download
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Panoramic Poster (Full Width) */}
          {posters.filter((p) => p.fullWidth).map((item) => (
            <div
              key={item.id}
              style={{
                background: "var(--bg-card, #FFFFFF)",
                border: "1px solid var(--line, rgba(20, 23, 42, 0.10))",
                borderRadius: "var(--r-card, 16px)",
                overflow: "hidden",
                boxShadow: "var(--shadow-card, 0 8px 32px rgba(20, 23, 42, 0.06))",
                display: "flex",
                flexDirection: "column",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
                width: "100%",
              }}
            >
              <div
                style={{
                  cursor: "zoom-in",
                  background: "#0A193B",
                  position: "relative",
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                }}
                onClick={() => setActiveImage(item)}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                    objectFit: "contain",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(10, 25, 59, 0.4)",
                    opacity: 0,
                    transition: "opacity 0.2s ease",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#FFFFFF",
                    fontWeight: 750,
                    fontSize: 15,
                    gap: 8,
                  }}
                  className="img-hover-overlay"
                >
                  <span>🔍 Click to View Full Size</span>
                </div>
              </div>

              <div
                style={{
                  padding: "18px 24px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 16,
                  background: "#FFFFFF",
                  borderTop: "1px solid var(--line, rgba(20, 23, 42, 0.08))",
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: "var(--display, 'Space Grotesk', sans-serif)",
                      fontSize: 16,
                      fontWeight: 800,
                      color: "var(--ink, #14172A)",
                      marginBottom: 2,
                    }}
                  >
                    {item.title}
                  </div>
                  <div style={{ fontSize: 13.5, color: "var(--ink-dim, #454A66)", fontWeight: 600 }}>
                    {item.category}
                  </div>
                </div>

                <a
                  href={item.src}
                  download
                  style={{
                    background: "rgba(230, 90, 0, 0.08)",
                    color: "#E65A00",
                    border: "1px solid rgba(230, 90, 0, 0.2)",
                    padding: "8px 16px",
                    borderRadius: 8,
                    fontSize: 13.5,
                    fontWeight: 750,
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    flexShrink: 0,
                    transition: "all 0.15s ease",
                  }}
                >
                  <span>⬇</span> Download
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {activeImage && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveImage(null)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 99999,
            background: "rgba(10, 15, 29, 0.95)",
            backdropFilter: "blur(12px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px",
            cursor: "zoom-out",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "100%",
              maxWidth: 1300,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              color: "#FFFFFF",
              marginBottom: 16,
              cursor: "default",
            }}
          >
            <div>
              <div style={{ fontSize: 16, fontWeight: 750, color: "#FFFFFF" }}>
                {activeImage.title}
              </div>
              <div style={{ fontSize: 13, color: "#CBD5E1" }}>
                {activeImage.category}
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <a
                href={activeImage.src}
                download
                style={{
                  fontSize: 13,
                  color: "#FFFFFF",
                  textDecoration: "none",
                  background: "linear-gradient(135deg, #E65A00 0%, #D84E00 100%)",
                  padding: "8px 16px",
                  borderRadius: 8,
                  fontWeight: 750,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <span>⬇</span> Download Original
              </a>
              <button
                type="button"
                onClick={() => setActiveImage(null)}
                style={{
                  background: "rgba(255, 255, 255, 0.15)",
                  border: "none",
                  color: "#FFFFFF",
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  fontSize: 18,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                ✕
              </button>
            </div>
          </div>

          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: "96vw",
              maxHeight: "86vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 12,
              overflow: "hidden",
              background: "#000000",
              boxShadow: "0 20px 60px rgba(0,0,0,0.7)",
              cursor: "default",
            }}
          >
            <img
              src={activeImage.src}
              alt={activeImage.alt}
              style={{
                maxWidth: "100%",
                maxHeight: "86vh",
                objectFit: "contain",
                display: "block",
              }}
            />
          </div>
        </div>
      )}
    </main>
  );
}
