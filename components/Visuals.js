// High-fidelity Olympiad visual scenes matching the exact user mockup.

export function OlympiadHeroCollage() {
  return (
    <div className="olympiad-collage-container" style={{ position: "relative", width: "100%", maxWidth: "620px", margin: "0 auto" }}>
      <img
        src="/assets/images/hero-olympiad-collage-smooth.png"
        alt="India Genius Olympiad students, classroom, exam, and trophies collage"
        style={{
          width: "100%",
          height: "auto",
          display: "block",
          filter: "drop-shadow(0 12px 32px rgba(20, 23, 42, 0.08))",
        }}
        loading="eager"
        fetchPriority="high"
      />
    </div>
  );
}

export function WhyCollabScene() {
  return (
    <div style={{ width: "100%", height: "100%", minHeight: "300px", borderRadius: "var(--r-xl)", overflow: "hidden", position: "relative", boxShadow: "var(--shadow-img)" }}>
      <img
        src="/assets/images/kids-science-collab.jpg"
        alt="School students collaborating on science and robotics problem solving"
        style={{ width: "100%", height: "100%", minHeight: "300px", objectFit: "cover" }}
      />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(20,23,42,0.7) 0%, transparent 60%)" }} />
    </div>
  );
}

export function TrophyScene() {
  return (
    <div style={{ width: "100%", height: "100%", minHeight: "340px", borderRadius: "var(--r-xl)", overflow: "hidden", position: "relative", boxShadow: "var(--shadow-img)" }}>
      <img
        src="/assets/images/student-champions.jpg"
        alt="Happy school students with academic medals and certificates"
        style={{ width: "100%", height: "100%", minHeight: "340px", objectFit: "cover", objectPosition: "center 20%" }}
      />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(20,23,42,0.85) 0%, rgba(20,23,42,0.2) 60%, transparent 100%)" }} />
      <div style={{ position: "absolute", bottom: "24px", left: "24px", right: "24px", color: "#FFFFFF" }}>
        <div style={{ fontFamily: "var(--mono)", fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#FFD54F", marginBottom: "4px" }}>
          India Genius of the Year
        </div>
        <div style={{ fontFamily: "var(--display)", fontSize: "20px", fontWeight: "800", letterSpacing: "-0.01em" }}>
          National Champions Felicitation
        </div>
      </div>
    </div>
  );
}

export function DivisionIllustration({ type }) {
  const images = {
    foundation: "/assets/images/age-group-foundation.jpg",
    junior: "/assets/images/age-group-junior.jpg",
    primary: "/assets/images/age-group-primary.jpg",
    middle: "/assets/images/age-group-middle.jpg",
    secondary: "/assets/images/age-group-secondary.jpg",
    senior: "/assets/images/age-group-senior.jpg",
  };

  const src = images[type] || images.primary;

  return (
    <div style={{ width: "100%", height: "100%", position: "relative", overflow: "hidden" }}>
      <img
        src={src}
        alt={`${type} division students`}
        style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 20%" }}
        loading="lazy"
      />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(20,23,42,0.4) 0%, transparent 60%)" }} />
    </div>
  );
}

export function JourneyIllustration({ level }) {
  const levelImages = {
    1: {
      img: "/assets/images/student-exam-hall.jpg",
      tag: "Intra-School Round",
    },
    2: {
      img: "/assets/images/age-group-secondary.jpg",
      tag: "District Test Center",
    },
    3: {
      img: "/assets/images/school-campus-building.jpg",
      tag: "State Regional Championship",
    },
    4: {
      img: "/assets/images/national-olympiad-champions.jpg",
      tag: "National Grand Finale",
    },
  };

  const current = levelImages[level] || levelImages[1];

  return (
    <div style={{ height: "150px", position: "relative", overflow: "hidden" }}>
      <img
        src={current.img}
        alt={current.tag}
        style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 25%" }}
        loading="lazy"
      />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(20,23,42,0.75) 0%, transparent 60%)" }} />
      <div style={{ position: "absolute", bottom: "12px", right: "14px", background: "rgba(20,23,42,0.88)", border: "1.5px solid rgba(255,255,255,0.22)", borderRadius: "8px", padding: "6px 14px", fontFamily: "var(--mono)", fontSize: "12.5px", fontWeight: "700", color: "#FFD54F", letterSpacing: "0.04em", backdropFilter: "blur(6px)" }}>
        {current.tag}
      </div>
    </div>
  );
}

export function FAQIllustration() {
  return (
    <div style={{ width: "100%", height: "100%", minHeight: "340px", borderRadius: "var(--r-xl)", overflow: "hidden", position: "relative", boxShadow: "var(--shadow-img)" }}>
      <img
        src="/assets/images/girl-studying-laptop.jpg"
        alt="Student preparing for Olympiad"
        style={{ width: "100%", height: "100%", minHeight: "340px", objectFit: "cover" }}
      />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(20,23,42,0.75) 0%, transparent 60%)" }} />
      <div style={{ position: "absolute", bottom: "24px", left: "24px", right: "24px", color: "#FFFFFF" }}>
        <div style={{ fontFamily: "var(--mono)", fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#C1650C", marginBottom: "4px" }}>
          Preparation &amp; Guidance
        </div>
        <div style={{ fontFamily: "var(--display)", fontSize: "19px", fontWeight: "700" }}>
          Sample Papers &amp; Study Resources
        </div>
      </div>
    </div>
  );
}
