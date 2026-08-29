import React from "react";

const STATS_DATA = [
  {
    num: "25,000+",
    label: "Students Registered",
  },
  {
    num: "450+",
    label: "Partner Schools",
  },
  {
    num: "25+",
    label: "Olympiad Subjects",
  },
  {
    num: "4",
    label: "Competition Levels",
  },
];

export default function HomeStatsSection() {
  return (
    <section className="home-single-stats-section" id="impact-stats">
      <div className="wrap">
        <div className="home-stats-single-row">
          {STATS_DATA.map((stat, idx) => (
            <React.Fragment key={idx}>
              {idx > 0 && <div className="home-stat-divider" aria-hidden="true" />}
              <div className="home-single-stat-item">
                <div className="home-stat-number">{stat.num}</div>
                <div className="home-stat-label">{stat.label}</div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
