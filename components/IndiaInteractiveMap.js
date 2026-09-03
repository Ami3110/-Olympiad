"use client";

import { useState } from "react";

// Accurate geographic centers and SVG polygon/path coordinates for Indian states
export const MAP_STATES = [
  {
    id: "haryana",
    name: "Haryana",
    code: "HR",
    capital: "Chandigarh",
    highlight: true,
    accent: "#E65A00",
    center: { x: 265, y: 220 },
    labelPos: { x: 200, y: 215 },
    path: "M 252 195 L 268 190 L 280 205 L 278 228 L 262 238 L 248 230 L 245 208 Z",
  },
  {
    id: "punjab",
    name: "Punjab",
    code: "PB",
    capital: "Chandigarh",
    highlight: true,
    accent: "#E65A00",
    center: { x: 238, y: 185 },
    labelPos: { x: 175, y: 180 },
    path: "M 225 165 L 250 160 L 262 180 L 252 205 L 230 208 L 218 185 Z",
  },
  {
    id: "chandigarh",
    name: "Chandigarh",
    code: "CH",
    capital: "Chandigarh",
    highlight: true,
    accent: "#0D7A67",
    center: { x: 268, y: 182 },
    labelPos: { x: 315, y: 175 },
    path: "M 264 178 L 272 178 L 272 186 L 264 186 Z",
  },
  {
    id: "uttarakhand",
    name: "Uttarakhand",
    code: "UK",
    capital: "Dehradun",
    highlight: true,
    accent: "#DE5300",
    center: { x: 310, y: 195 },
    labelPos: { x: 360, y: 190 },
    path: "M 285 180 L 325 175 L 342 205 L 315 220 L 285 205 Z",
  },
  {
    id: "arunachal-pradesh",
    name: "Arunachal Pradesh",
    code: "AR",
    capital: "Itanagar",
    highlight: true,
    accent: "#0D7A67",
    center: { x: 550, y: 235 },
    labelPos: { x: 450, y: 220 },
    path: "M 515 220 L 565 210 L 590 235 L 575 260 L 540 250 L 520 235 Z",
  },
  {
    id: "telugu-andhra-telangana",
    name: "Andhra Pradesh & Telangana",
    code: "AP-TG",
    capital: "Amaravati / Hyderabad",
    highlight: true,
    accent: "#1E5F8A",
    center: { x: 315, y: 485 },
    labelPos: { x: 390, y: 490 },
    path: "M 275 420 L 340 415 L 375 450 L 360 520 L 315 560 L 290 520 L 270 470 Z",
  },
  {
    id: "himachal-pradesh",
    name: "Himachal Pradesh",
    code: "HP",
    capital: "Shimla",
    center: { x: 265, y: 150 },
    path: "M 248 135 L 285 130 L 295 165 L 265 175 L 245 160 Z",
  },
  {
    id: "jammu-kashmir-ladakh",
    name: "Jammu, Kashmir & Ladakh",
    code: "JK-LA",
    capital: "Srinagar / Leh",
    center: { x: 250, y: 80 },
    path: "M 220 40 L 290 35 L 330 75 L 315 125 L 250 130 L 205 95 Z",
  },
  {
    id: "rajasthan",
    name: "Rajasthan",
    code: "RJ",
    capital: "Jaipur",
    center: { x: 195, y: 275 },
    path: "M 155 210 L 235 210 L 255 265 L 245 330 L 175 340 L 135 285 Z",
  },
  {
    id: "uttar-pradesh",
    name: "Uttar Pradesh",
    code: "UP",
    capital: "Lucknow",
    center: { x: 345, y: 270 },
    path: "M 285 225 L 385 235 L 420 280 L 375 325 L 305 310 L 275 255 Z",
  },
  {
    id: "gujarat",
    name: "Gujarat",
    code: "GJ",
    capital: "Gandhinagar",
    center: { x: 145, y: 360 },
    path: "M 115 315 L 180 325 L 195 385 L 155 425 L 105 390 L 90 345 Z",
  },
  {
    id: "madhya-pradesh",
    name: "Madhya Pradesh",
    code: "MP",
    capital: "Bhopal",
    center: { x: 275, y: 355 },
    path: "M 215 315 L 345 315 L 370 380 L 315 415 L 210 395 L 195 345 Z",
  },
  {
    id: "bihar",
    name: "Bihar",
    code: "BR",
    capital: "Patna",
    center: { x: 425, y: 285 },
    path: "M 390 260 L 465 265 L 475 310 L 415 315 Z",
  },
  {
    id: "west-bengal",
    name: "West Bengal",
    code: "WB",
    capital: "Kolkata",
    center: { x: 465, y: 345 },
    path: "M 455 280 L 485 285 L 490 390 L 450 395 L 445 335 Z",
  },
  {
    id: "maharashtra",
    name: "Maharashtra",
    code: "MH",
    capital: "Mumbai",
    center: { x: 220, y: 445 },
    path: "M 175 390 L 295 395 L 305 465 L 245 510 L 175 480 L 165 420 Z",
  },
  {
    id: "karnataka",
    name: "Karnataka",
    code: "KA",
    capital: "Bengaluru",
    center: { x: 235, y: 550 },
    path: "M 205 490 L 265 485 L 275 570 L 240 625 L 205 575 Z",
  },
  {
    id: "tamil-nadu",
    name: "Tamil Nadu",
    code: "TN",
    capital: "Chennai",
    center: { x: 280, y: 620 },
    path: "M 255 565 L 315 560 L 310 655 L 265 675 L 245 625 Z",
  },
  {
    id: "kerala",
    name: "Kerala",
    code: "KL",
    capital: "Thiruvananthapuram",
    center: { x: 225, y: 635 },
    path: "M 215 595 L 240 595 L 245 665 L 230 675 L 210 625 Z",
  },
  {
    id: "odisha",
    name: "Odisha",
    code: "OD",
    capital: "Bhubaneswar",
    center: { x: 395, y: 400 },
    path: "M 365 365 L 435 360 L 430 435 L 360 435 Z",
  },
  {
    id: "assam-northeast",
    name: "Assam & North East",
    code: "NE",
    capital: "Guwahati",
    center: { x: 515, y: 275 },
    path: "M 485 255 L 545 250 L 565 305 L 505 320 L 480 280 Z",
  },
];

export default function IndiaInteractiveMap({ selectedStateId, onSelectState }) {
  const [hoveredState, setHoveredState] = useState(null);

  return (
    <div className="india-map-container">
      <div className="india-map-wrapper">
        <svg
          viewBox="0 0 650 720"
          className="india-svg-map"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <filter id="mapGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <filter id="activeShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#E65A00" floodOpacity="0.4" />
            </filter>
          </defs>

          {/* Base Background Outline of India */}
          <path
            d="M 235 45 Q 260 20 285 40 L 320 70 L 335 110 L 295 135 L 340 175 L 400 235 L 460 245 L 515 220 L 570 215 L 595 240 L 570 300 L 525 330 L 485 315 L 475 385 L 435 435 L 365 525 L 315 655 L 265 675 L 230 675 L 210 610 L 195 500 L 165 420 L 105 390 L 85 345 L 140 265 L 175 210 L 220 160 Z"
            fill="#F1F5F9"
            stroke="#CBD5E1"
            strokeWidth="2"
            className="india-base-silhouette"
          />

          {/* Individual Interactive States */}
          {MAP_STATES.map((st) => {
            const isSelected = st.id === selectedStateId;
            const isHovered = hoveredState?.id === st.id;
            const isPriority = st.highlight;

            return (
              <g
                key={st.id}
                className={`map-state-group ${isSelected ? "state-selected" : ""} ${isPriority ? "state-priority" : ""}`}
                onClick={() => onSelectState(st.id)}
                onMouseEnter={() => setHoveredState(st)}
                onMouseLeave={() => setHoveredState(null)}
                style={{ cursor: isPriority ? "pointer" : "pointer" }}
              >
                {/* State SVG Path */}
                <path
                  d={st.path}
                  className="state-polygon-path"
                  fill={
                    isSelected
                      ? (st.accent || "#E65A00")
                      : isHovered
                      ? "rgba(230, 90, 0, 0.45)"
                      : isPriority
                      ? "#CBD5E1"
                      : "#E2E8F0"
                  }
                  stroke={isSelected ? "#FFFFFF" : isPriority ? "#94A3B8" : "#CBD5E1"}
                  strokeWidth={isSelected ? "2.5" : "1.2"}
                  filter={isSelected ? "url(#activeShadow)" : undefined}
                />

                {/* Priority State Pulse Pin & Label */}
                {isPriority && (
                  <g className="state-marker-pin">
                    {/* Outer animated ring */}
                    <circle
                      cx={st.center.x}
                      cy={st.center.y}
                      r={isSelected ? 10 : 7}
                      fill={st.accent || "#E65A00"}
                      opacity={isSelected ? 0.35 : 0.25}
                      className={isSelected ? "active-pulse-ring" : ""}
                    />
                    {/* Center solid pin */}
                    <circle
                      cx={st.center.x}
                      cy={st.center.y}
                      r={isSelected ? 5.5 : 4}
                      fill={isSelected ? "#FFFFFF" : (st.accent || "#E65A00")}
                      stroke={isSelected ? (st.accent || "#E65A00") : "#FFFFFF"}
                      strokeWidth="1.5"
                    />

                    {/* Connecting line to text label */}
                    <line
                      x1={st.center.x}
                      y1={st.center.y}
                      x2={st.labelPos.x}
                      y2={st.labelPos.y}
                      stroke={isSelected ? "#0A193B" : "#64748B"}
                      strokeWidth={isSelected ? "1.5" : "1"}
                      strokeDasharray={isSelected ? "none" : "2,2"}
                    />

                    {/* State Text Callout Badge */}
                    <g transform={`translate(${st.labelPos.x}, ${st.labelPos.y})`}>
                      <rect
                        x={st.labelPos.x < st.center.x ? -110 : 0}
                        y="-12"
                        width="110"
                        height="24"
                        rx="12"
                        fill={isSelected ? "#0A193B" : "#FFFFFF"}
                        stroke={isSelected ? "#E65A00" : "#CBD5E1"}
                        strokeWidth={isSelected ? "2" : "1"}
                        className="state-label-bg"
                      />
                      <text
                        x={st.labelPos.x < st.center.x ? -55 : 55}
                        y="4"
                        textAnchor="middle"
                        fill={isSelected ? "#FFFFFF" : "#0A193B"}
                        fontSize="10.5"
                        fontWeight="800"
                        fontFamily="var(--display), sans-serif"
                      >
                        {st.name}
                      </text>
                    </g>
                  </g>
                )}
              </g>
            );
          })}
        </svg>

        {/* Hover Floating Tooltip */}
        {hoveredState && (
          <div
            className="map-floating-tooltip"
            style={{
              position: "absolute",
              top: `${(hoveredState.center.y / 720) * 100}%`,
              left: `${(hoveredState.center.x / 650) * 100}%`,
              transform: "translate(-50%, -130%)",
              pointerEvents: "none",
            }}
          >
            <div className="tooltip-inner">
              <strong className="tooltip-state">{hoveredState.name}</strong>
              <span className="tooltip-cap">Capital: {hoveredState.capital}</span>
              <span className="tooltip-cta">Click to view Olympiad Syllabus &rarr;</span>
            </div>
          </div>
        )}
      </div>

      {/* Quick Map Instruction Banner */}
      <div className="map-instruction-bar">
        <span className="map-inst-icon">💡</span>
        <span className="map-inst-text">
          Click on <strong>Haryana</strong>, <strong>Punjab</strong>, <strong>Chandigarh</strong>, <strong>Andhra &amp; Telangana</strong>, <strong>Arunachal Pradesh</strong>, or <strong>Uttarakhand</strong> directly on the map to explore their regional Olympiad syllabus.
        </span>
      </div>
    </div>
  );
}
