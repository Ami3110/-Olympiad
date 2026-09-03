"use client";

import IndiaExactInteractiveMap from "./IndiaExactInteractiveMap";

export default function ExploreHeartOfIndia() {
  const handleScrollToMap = () => {
    const el = document.getElementById("india-map-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="explore-india-section" id="explore-india">
      <div className="wrap">
        
        {/* ====================================================
            HEADER: EXPLORE THE HEART OF INDIA
            ==================================================== */}
        <div className="explore-india-head">
          <h2 className="explore-india-title">
            Explore the Heart of <span className="highlight-orange">India</span>
          </h2>
          
          <p className="explore-india-desc">
            Embark on a journey through the vibrant cultures, traditions, and languages of India. Select a state from the map below to open its dedicated regional Olympiad syllabus page.
          </p>

          <div className="explore-india-action-bar">
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleScrollToMap}
              style={{ gap: 8 }}
            >
              <span>Explore Map</span>
              <span>↓</span>
            </button>
          </div>
        </div>

        {/* ====================================================
            EXACT INDIA MAP INTERACTION CONTAINER
            ==================================================== */}
        <div className="explore-map-showcase-box" id="india-map-section">
          <IndiaExactInteractiveMap />
        </div>

      </div>
    </section>
  );
}
