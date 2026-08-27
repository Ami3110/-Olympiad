"use client";

import { useState } from "react";

export default function AwardsInteractive() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const awardTiers = [
    {
      id: "school",
      step: "01",
      icon: "🏫",
      tag: "SCHOOL SELECTION",
      color: "#0D7A67",
      accentBg: "rgba(13, 122, 103, 0.08)",
      borderColor: "rgba(13, 122, 103, 0.25)",
      glowColor: "rgba(13, 122, 103, 0.18)",
      items: [
        "Participation Certificate for all participants",
        "School Qualifier Certificate & e-Certificate",
      ],
    },
    {
      id: "district",
      step: "02",
      icon: "🥉",
      tag: "DISTRICT",
      color: "#C1650C",
      accentBg: "rgba(193, 101, 12, 0.08)",
      borderColor: "rgba(193, 101, 12, 0.25)",
      glowColor: "rgba(193, 101, 12, 0.18)",
      items: [
        "District Winners, Runner-ups & Merit Certificate",
        "Gold, Silver & Bronze Medals, as applicable",
      ],
    },
    {
      id: "state",
      step: "03",
      icon: "🥈",
      tag: "STATE",
      color: "#1E5F8A",
      accentBg: "rgba(30, 95, 138, 0.08)",
      borderColor: "rgba(30, 95, 138, 0.25)",
      glowColor: "rgba(30, 95, 138, 0.18)",
      items: [
        "State Winners, Runner-ups & Merit Certificate",
        "Gold, Silver & Bronze Medals and/or Trophies",
      ],
    },
    {
      id: "national",
      step: "04",
      icon: "🥇",
      tag: "NATIONAL",
      color: "#E65100",
      accentBg: "rgba(230, 81, 0, 0.08)",
      borderColor: "rgba(230, 81, 0, 0.35)",
      glowColor: "rgba(230, 81, 0, 0.22)",
      highlight: true,
      items: [
        "National Champion, Runner-ups & Merit Recognition",
        "Trophy and/or Medal + Official National Certificate",
      ],
    },
  ];

  return (
    <div className="awards-stage-container">
      {/* Step Progression Connecting Track */}
      <div className="awards-connect-track" aria-hidden="true" />

      {/* 4 Cards Grid */}
      <div className="awards-clean-grid">
        {awardTiers.map((tier, idx) => {
          const isHovered = hoveredIndex === idx;

          return (
            <div
              key={tier.id}
              className={`award-clean-card ${tier.highlight ? "tier-national" : ""} ${
                isHovered ? "card-hovered" : ""
              }`}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                "--tier-color": tier.color,
                "--tier-border": tier.borderColor,
                "--tier-glow": tier.glowColor,
                "--tier-bg-accent": tier.accentBg,
              }}
            >
              {/* Card Header: Step Badge & Icon */}
              <div className="award-card-header">
                <div className="award-step-badge">
                  <span className="step-num">{tier.step}</span>
                </div>
                <div className="award-icon-bubble">{tier.icon}</div>
              </div>

              {/* Tier Tag */}
              <div className="award-tier-tag" style={{ color: tier.color }}>
                {tier.tag}
              </div>

              {/* Items List */}
              <ul className="award-clean-list">
                {tier.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="award-item-row">
                    <span className="award-bullet-dash" style={{ color: tier.color }}>
                      —
                    </span>
                    <span className="award-item-label">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Hover Glare Reflection */}
              <div className="award-card-glare" aria-hidden="true" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
