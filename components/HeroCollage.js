"use client";

import { useState, useRef } from "react";

export default function HeroCollage() {
  const containerRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5; // -0.5 to 0.5
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePos({ x: 0, y: 0 });
  };

  // 3D Parallax offsets
  const tiltX = isHovered ? mousePos.y * -10 : 0;
  const tiltY = isHovered ? mousePos.x * 10 : 0;
  const shiftMainX = isHovered ? mousePos.x * 8 : 0;
  const shiftMainY = isHovered ? mousePos.y * 8 : 0;
  const shiftBackX = isHovered ? mousePos.x * -12 : 0;
  const shiftBackY = isHovered ? mousePos.y * -12 : 0;

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="hero-collage-wrapper"
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "600px",
        height: "480px",
        margin: "0 auto",
        perspective: "1200px",
        userSelect: "none",
      }}
    >
      {/* Subtle cursor highlight glow */}
      <div
        className="cursor-glow"
        style={{
          left: `${(mousePos.x + 0.5) * 100}%`,
          top: `${(mousePos.y + 0.5) * 100}%`,
          opacity: isHovered ? 0.30 : 0.12,
        }}
        aria-hidden="true"
      />

      {/* 3D Collage Stage */}
      <div
        className="collage-3d-stage"
        style={{
          transform: `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`,
          transition: isHovered ? "transform 0.15s ease-out" : "transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)",
          width: "100%",
          height: "100%",
          position: "relative",
        }}
      >
        {/* ====================================================
            CLEAN 5-PHOTO COLLAGE CARDS (NO DOODLES/ICONS)
            ==================================================== */}

        {/* Card 2: Top Left Boy Solving Exam (Tilted) */}
        <div
          className="collage-card card-exam-boy"
          style={{
            position: "absolute",
            top: "6%",
            left: "14%",
            width: "160px",
            height: "175px",
            transform: `translate(${shiftBackX * 0.8}px, ${shiftBackY * 0.8}px) rotate(-6deg)`,
            zIndex: 2,
          }}
        >
          <div className="card-inner">
            <img
              src="/assets/images/crop-student-boy.png"
              alt="Indian student solving exam problem"
              className="card-img"
              loading="eager"
            />
          </div>
        </div>

        {/* Card 3: Bottom Left Classroom Scene */}
        <div
          className="collage-card card-classroom"
          style={{
            position: "absolute",
            bottom: "12%",
            left: "5%",
            width: "190px",
            height: "150px",
            transform: `translate(${shiftBackX * 0.6}px, ${shiftBackY * 0.6}px) rotate(-2deg)`,
            zIndex: 3,
          }}
        >
          <div className="card-inner">
            <img
              src="/assets/images/crop-classroom.png"
              alt="Classroom teacher with students participating"
              className="card-img"
              loading="eager"
            />
          </div>
        </div>

        {/* Card 4: Top Right Girl Student in Uniform */}
        <div
          className="collage-card card-student-girl"
          style={{
            position: "absolute",
            top: "16%",
            right: "4%",
            width: "155px",
            height: "155px",
            transform: `translate(${shiftBackX * 0.9}px, ${shiftBackY * 0.9}px) rotate(4deg)`,
            zIndex: 2,
          }}
        >
          <div className="card-inner">
            <img
              src="/assets/images/crop-student-girl.png"
              alt="High school student writing notes"
              className="card-img"
              loading="eager"
            />
          </div>
        </div>

        {/* Card 5: Bottom Right Trophy on Books */}
        <div
          className="collage-card card-trophy-books"
          style={{
            position: "absolute",
            bottom: "10%",
            right: "10%",
            width: "140px",
            height: "130px",
            transform: `translate(${shiftBackX * 0.7}px, ${shiftBackY * 0.7}px) rotate(3deg)`,
            zIndex: 3,
          }}
        >
          <div className="card-inner">
            <img
              src="/assets/images/crop-trophy.png"
              alt="Academic gold trophy on books"
              className="card-img"
              loading="eager"
            />
          </div>
        </div>

        {/* Card 1: MAIN CENTRAL HERO CARD (Curious Girl Thinking) */}
        <div
          className="collage-card card-main-hero"
          style={{
            position: "absolute",
            top: "12%",
            left: "25%",
            width: "295px",
            height: "330px",
            transform: `translate(${shiftMainX}px, ${shiftMainY}px) scale(${isHovered ? 1.03 : 1})`,
            zIndex: 4,
            transition: "transform 0.2s cubic-bezier(0.2, 0.8, 0.2, 1)",
          }}
        >
          <div className="card-inner main-card-inner">
            <img
              src="/assets/images/crop-student-main.png"
              alt="Curious Indian school student thinking and learning"
              className="card-img"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
