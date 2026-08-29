"use client";

import React, { useState } from "react";

const TESTIMONIALS = [
  {
    id: 1,
    quote: "India Genius Olympiad represents a revolutionary paradigm in school assessments. Instead of rote memory, questions tested deep first-principles thinking in AI and scientific curiosity.",
    name: "Dr. K. S. Ramanathan",
    role: "Principal, Delhi Public School Network",
    division: "Institutional Partner",
    rating: 5,
    tag: "School Principal",
    avatarBg: "linear-gradient(135deg, #0A193B 0%, #173830 100%)",
    initials: "KR",
  },
  {
    id: 2,
    quote: "Participating in the National Space & Astronomy Olympiad opened my eyes to real astrophysics concepts. The syllabus breakdown and sample papers gave me immense clarity.",
    name: "Aarav Mehrotra",
    role: "Class IX Student · Gold Medalist",
    division: "Secondary Division",
    rating: 5,
    tag: "National Winner",
    avatarBg: "linear-gradient(135deg, #E65A00 0%, #D84E00 100%)",
    initials: "AM",
  },
  {
    id: 3,
    quote: "As a science educator for 18 years, this is the first Olympiad perfectly mapped to NEP 2020. The 4-level transparent structure gave every child in our school equal opportunity.",
    name: "Mrs. Sunita Deshmukh",
    role: "HOD Sciences, Ryan International",
    division: "Educator & Mentor",
    rating: 5,
    tag: "Senior Faculty",
    avatarBg: "linear-gradient(135deg, #0D7A67 0%, #085043 100%)",
    initials: "SD",
  },
  {
    id: 4,
    quote: "The fee of just ₹80 per subject makes world-class national competition truly accessible. Both of my daughters participated in Cyber and Math and loved the analytical problem sets.",
    name: "Vikramaditya Singhal",
    role: "Parent of Class 4 & 7 Students",
    division: "Parent Community",
    rating: 5,
    tag: "Verified Parent",
    avatarBg: "linear-gradient(135deg, #202945 0%, #3B4B74 100%)",
    initials: "VS",
  },
  {
    id: 5,
    quote: "The AI & Cyber Innovation Olympiad questions were incredibly practical! Building logic and algorithmic intuition at Class 6 was challenging and super fun.",
    name: "Ananya Joshi",
    role: "Class VI Student · State Rank 1",
    division: "Middle Division",
    rating: 5,
    tag: "State Champion",
    avatarBg: "linear-gradient(135deg, #7C3AED 0%, #5B21B6 100%)",
    initials: "AJ",
  },
  {
    id: 6,
    quote: "Organizing the school-level exam was exceptionally seamless. The India Genius foundation team provided prompt support, transparent results, and beautiful merit certificates.",
    name: "Fr. Thomas Varghese",
    role: "Administrator, St. Joseph's Academy",
    division: "Institutional Partner",
    rating: 5,
    tag: "School Admin",
    avatarBg: "linear-gradient(135deg, #0284C7 0%, #0369A1 100%)",
    initials: "TV",
  },
];

export default function TestimonialsSection() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="wrap">
        <div className="testimonials-header">
          <div className="section-eyebrow" style={{ justifyContent: "center", marginBottom: 10 }}>
            Voices of Trust &middot; National Impact
          </div>
          <h2 className="section-title" style={{ textAlign: "center", marginBottom: 12 }}>
            What Educators, Students &amp; Parents Say.
          </h2>
          <p className="section-desc" style={{ textAlign: "center", maxWidth: 680, margin: "0 auto 36px" }}>
            Real experiences from school principals, Olympiad rank holders, and parents across India experiencing our transparent assessment ecosystem.
          </p>
        </div>
      </div>

      {/* Infinite Moving Marquee Track */}
      <div
        className="testimonials-marquee-container"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        <div className={`testimonials-track ${isPaused ? "track-paused" : ""}`}>
          {/* Double the list to create a seamless infinite loop */}
          {[...TESTIMONIALS, ...TESTIMONIALS].map((item, index) => (
            <div key={`${item.id}-${index}`} className="testimonial-card">
              <div className="testimonial-card-top">
                <div className="testimonial-stars" aria-label="5 stars rating">
                  {"★".repeat(item.rating)}
                </div>
                <span className="testimonial-tag">{item.tag}</span>
              </div>

              <p className="testimonial-quote">
                &ldquo;{item.quote}&rdquo;
              </p>

              <div className="testimonial-author-row">
                <div
                  className="testimonial-avatar"
                  style={{ background: item.avatarBg }}
                  aria-hidden="true"
                >
                  {item.initials}
                </div>
                <div className="testimonial-meta">
                  <h4 className="testimonial-name">{item.name}</h4>
                  <p className="testimonial-role">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
