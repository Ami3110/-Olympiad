"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const ACTIVE_HOTSPOTS = [
  {
    id: "punjab",
    name: "Punjab",
    code: "PB",
    left: 29.5,
    top: 24.5,
    accent: "#E65A00",
  },
  {
    id: "haryana",
    name: "Haryana",
    code: "HR",
    left: 33,
    top: 29.5,
    accent: "#E65A00",
  },
  {
    id: "chandigarh",
    name: "Chandigarh",
    code: "CH",
    left: 34.2,
    top: 24.8,
    accent: "#0D7A67",
  },
  {
    id: "uttarakhand",
    name: "Uttarakhand",
    code: "UK",
    left: 39,
    top: 27.2,
    accent: "#DE5300",
  },
  {
    id: "telangana",
    name: "Telangana",
    code: "TG",
    left: 36.8,
    top: 55.5,
    accent: "#1E5F8A",
  },
  {
    id: "andhra-pradesh",
    name: "Andhra Pradesh",
    code: "AP",
    left: 39,
    top: 64,
    accent: "#1E5F8A",
  },
  {
    id: "arunachal-pradesh",
    name: "Arunachal Pradesh",
    code: "AR",
    left: 73.5,
    top: 33,
    accent: "#0D7A67",
  },
];

export default function IndiaExactInteractiveMap() {
  const router = useRouter();
  const [hoveredState, setHoveredState] = useState(null);

  const handleStateClick = (stateId) => {
    router.push(`/explore/${stateId}/`);
  };

  return (
    <div className="exact-map-card">
      <div className="exact-map-container">
        {/* Exact India Map Image Background */}
        <div className="exact-map-image-wrap">
          <img
            src="/assets/images/india-map-exact.png"
            alt="Interactive Map of India — India Genius Olympiad"
            className="exact-map-base-img"
            draggable="false"
          />

          {/* Interactive State Hotspots & Pins */}
          {ACTIVE_HOTSPOTS.map((st) => {
            const isHovered = hoveredState?.id === st.id;

            return (
              <div
                key={st.id}
                className={`exact-map-pin-wrap ${isHovered ? "pin-hovered" : ""}`}
                style={{
                  left: `${st.left}%`,
                  top: `${st.top}%`,
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  handleStateClick(st.id);
                }}
                onMouseEnter={() => setHoveredState(st)}
                onMouseLeave={() => setHoveredState(null)}
              >
                {/* Pulsing ring */}
                <span
                  className="exact-pin-pulse"
                  style={{ background: st.accent }}
                />
                
                {/* Center interactive marker */}
                <button
                  type="button"
                  className="exact-pin-btn"
                  style={{
                    background: st.accent,
                    borderColor: "#FFFFFF",
                  }}
                  aria-label={`Open ${st.name} State Olympiad Page`}
                >
                  <span className="exact-pin-dot" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Floating Tooltip info */}
        {hoveredState && (
          <div
            className="exact-map-tooltip"
            style={{
              left: `${hoveredState.left}%`,
              top: `${hoveredState.top}%`,
            }}
          >
            <strong className="tooltip-title">{hoveredState.name}</strong>
            <span className="tooltip-sub">Click to view syllabus &amp; details &rarr;</span>
          </div>
        )}
      </div>
    </div>
  );
}
