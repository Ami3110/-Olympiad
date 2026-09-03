import Link from "next/link";
import { notFound } from "next/navigation";
import { STATES_DATA } from "../../../data/stateOlympiadData";

// Pre-render state routes
export async function generateStaticParams() {
  return STATES_DATA.map((state) => ({
    state: state.id,
  }));
}

export async function generateMetadata({ params }) {
  const { state: stateId } = await params;
  const stateData = STATES_DATA.find((s) => s.id === stateId);

  if (!stateData) {
    return {
      title: "State Olympiad Not Found | India Genius Olympiad",
    };
  }

  return {
    title: `${stateData.titleName} Cultural & Regional Olympiad Syllabus | India Genius Olympiad`,
    description: `Explore the official syllabus, cultural heritage, and curriculum for ${stateData.titleName} State Olympiad across Foundations, Traditions, and Advanced competition levels.`,
  };
}

export default async function StateDetailPage({ params }) {
  const { state: stateId } = await params;
  const stateData = STATES_DATA.find((s) => s.id === stateId);

  if (!stateData) {
    notFound();
  }

  return (
    <main className="state-detail-page-wrapper">
      <div className="wrap">
        {/* Navigation Breadcrumb */}
        <div className="state-page-breadcrumb">
          <Link href="/explore/" className="state-breadcrumb-link">
            &larr; Back to India Map
          </Link>
          <span className="state-breadcrumb-separator">/</span>
          <span className="state-breadcrumb-current">{stateData.name}</span>
        </div>

        {/* State Cultural Hero Split Banner */}
        <div className="state-detail-hero-banner">
          <div className="state-hero-info">
            <div className="state-hero-badge">
              State Olympiad Track &middot; Session 2026
            </div>
            <h1 className="state-hero-title">{stateData.titleName}</h1>
            <p className="state-hero-tagline">{stateData.tagline}</p>
            
            <div className="state-hero-meta">
              <span className="state-hero-meta-item">
                <strong>Capital / Hub:</strong> {stateData.capital}
              </span>
              <span className="state-hero-meta-divider">&bull;</span>
              <span className="state-hero-meta-item">
                <strong>Levels:</strong> Classes 1 to 12
              </span>
            </div>

            <div className="state-hero-actions" style={{ marginTop: 24 }}>
              <button
                type="button"
                className="btn btn-primary"
                data-reg-modal="student"
                style={{ cursor: "pointer", whiteSpace: "nowrap" }}
              >
                Register for {stateData.name} &rarr;
              </button>
              <button
                type="button"
                className="btn btn-ghost"
                data-reg-modal="school"
                style={{ cursor: "pointer", whiteSpace: "nowrap" }}
              >
                Register School &rarr;
              </button>
            </div>
          </div>

          {/* Authentic Culture Image Showcase */}
          {stateData.cultureImage && (
            <div className="state-hero-culture-image-wrap">
              <div className="state-culture-img-frame">
                <img
                  src={stateData.cultureImage}
                  alt={`${stateData.name} Culture and Traditional Heritage`}
                  className="state-culture-img"
                />
                <div className="state-culture-img-overlay">
                  <span className="culture-badge">Cultural &amp; Regional Heritage</span>
                  <p className="culture-highlights-text">{stateData.cultureHighlights}</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 3-Card Syllabus Overview */}
        <div className="state-syllabus-section">
          <div className="state-syllabus-heading-box">
            <h2 className="state-syllabus-heading-title">
              Syllabus Overview &middot; {stateData.name}
            </h2>
            <p className="state-syllabus-heading-sub">
              Carefully scaffolded competency benchmarks across foundational, middle, and secondary grade brackets.
            </p>
          </div>

          <div className="explore-three-levels-grid">
            {/* Level 1: Foundations (Green) */}
            <div className="explore-level-card level-foundations">
              <div
                className="level-card-top-bar"
                style={{ background: stateData.levels.level1.color }}
              >
                <h3 className="level-card-name">{stateData.levels.level1.title}</h3>
                <span className="level-card-classes">
                  {stateData.levels.level1.classes}
                </span>
              </div>
              <div className="level-card-body">
                <div className="level-objective-box">
                  <strong className="level-label">Objective:</strong>
                  <p className="level-text">{stateData.levels.level1.objective}</p>
                </div>

                <div className="level-topics-box">
                  <strong className="level-label">Topics Covered:</strong>
                  <ul className="level-topics-list">
                    {stateData.levels.level1.topics.map((t, idx) => (
                      <li key={idx}>
                        <span
                          className="topic-dot"
                          style={{ background: stateData.levels.level1.color }}
                        />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Level 2: Traditions (Blue) */}
            <div className="explore-level-card level-traditions">
              <div
                className="level-card-top-bar"
                style={{ background: stateData.levels.level2.color }}
              >
                <h3 className="level-card-name">{stateData.levels.level2.title}</h3>
                <span className="level-card-classes">
                  {stateData.levels.level2.classes}
                </span>
              </div>
              <div className="level-card-body">
                <div className="level-objective-box">
                  <strong className="level-label">Objective:</strong>
                  <p className="level-text">{stateData.levels.level2.objective}</p>
                </div>

                <div className="level-topics-box">
                  <strong className="level-label">Topics Covered:</strong>
                  <ul className="level-topics-list">
                    {stateData.levels.level2.topics.map((t, idx) => (
                      <li key={idx}>
                        <span
                          className="topic-dot"
                          style={{ background: stateData.levels.level2.color }}
                        />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Level 3: Advanced (Purple) */}
            <div className="explore-level-card level-advanced">
              <div
                className="level-card-top-bar"
                style={{ background: stateData.levels.level3.color }}
              >
                <h3 className="level-card-name">{stateData.levels.level3.title}</h3>
                <span className="level-card-classes">
                  {stateData.levels.level3.classes}
                </span>
              </div>
              <div className="level-card-body">
                <div className="level-objective-box">
                  <strong className="level-label">Objective:</strong>
                  <p className="level-text">{stateData.levels.level3.objective}</p>
                </div>

                <div className="level-topics-box">
                  <strong className="level-label">Topics Covered:</strong>
                  <ul className="level-topics-list">
                    {stateData.levels.level3.topics.map((t, idx) => (
                      <li key={idx}>
                        <span
                          className="topic-dot"
                          style={{ background: stateData.levels.level3.color }}
                        />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other States Quick Links Bar */}
        <div className="other-states-footer-bar">
          <h4 className="other-states-title">Explore Other State Olympiads</h4>
          <div className="other-states-links">
            {STATES_DATA.filter((s) => s.id !== stateData.id).map((st) => (
              <Link
                key={st.id}
                href={`/explore/${st.id}/`}
                className="other-state-btn"
              >
                <span>{st.name}</span>
                <span>&rarr;</span>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}
