// Full-width minimal flowing wave background animation for the entire Hero Section
// Smooth, soft gradient wave fills without dashed lines or harsh contours

export default function HeroWaves() {
  return (
    <div className="hero-fullwidth-waves" aria-hidden="true">
      {/* Background Soft Floating Gradient Blobs */}
      <div className="hero-wave-glow glow-left" />
      <div className="hero-wave-glow glow-center" />
      <div className="hero-wave-glow glow-right" />

      {/* Flowing Wave Layer 1 (Left to Right) */}
      <div className="hero-wave-track track-layer-1">
        <svg className="fullwidth-wave-svg" viewBox="0 0 2880 400" preserveAspectRatio="none">
          <path
            d="M0,160 C480,260 960,60 1440,180 C1920,280 2400,80 2880,180 L2880,400 L0,400 Z"
            fill="url(#fullHeroWave1)"
          />
          <defs>
            <linearGradient id="fullHeroWave1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#F5A623" stopOpacity="0.08" />
              <stop offset="35%" stopColor="#C1650C" stopOpacity="0.05" />
              <stop offset="70%" stopColor="#0D7A67" stopOpacity="0.04" />
              <stop offset="100%" stopColor="#F5A623" stopOpacity="0.08" />
            </linearGradient>
          </defs>
        </svg>
        <svg className="fullwidth-wave-svg" viewBox="0 0 2880 400" preserveAspectRatio="none">
          <path
            d="M0,160 C480,260 960,60 1440,180 C1920,280 2400,80 2880,180 L2880,400 L0,400 Z"
            fill="url(#fullHeroWave1)"
          />
        </svg>
      </div>

      {/* Flowing Wave Layer 2 (Right to Left) */}
      <div className="hero-wave-track track-layer-2">
        <svg className="fullwidth-wave-svg" viewBox="0 0 2880 400" preserveAspectRatio="none">
          <path
            d="M0,220 C540,100 1080,290 1620,150 C2160,90 2520,230 2880,200 L2880,400 L0,400 Z"
            fill="url(#fullHeroWave2)"
          />
          <defs>
            <linearGradient id="fullHeroWave2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#C1650C" stopOpacity="0.06" />
              <stop offset="50%" stopColor="#F5A623" stopOpacity="0.05" />
              <stop offset="100%" stopColor="#E65100" stopOpacity="0.03" />
            </linearGradient>
          </defs>
        </svg>
        <svg className="fullwidth-wave-svg" viewBox="0 0 2880 400" preserveAspectRatio="none">
          <path
            d="M0,220 C540,100 1080,290 1620,150 C2160,90 2520,230 2880,200 L2880,400 L0,400 Z"
            fill="url(#fullHeroWave2)"
          />
        </svg>
      </div>
    </div>
  );
}
