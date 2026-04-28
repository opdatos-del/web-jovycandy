export const HeroEventsTransition = () => (
  <section aria-hidden="true" className="relative -mb-px overflow-hidden bg-[#00AFAA]">
    <svg
      viewBox="0 0 1440 200"
      preserveAspectRatio="none"
      className="block h-[clamp(4.5rem,8vw,11rem)] w-full"
      role="presentation"
    >
      <defs>
        <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#fff5d4" stopOpacity="0.3" />
          <stop offset="40%" stopColor="#fff5d4" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#fff5d4" stopOpacity="1" />
        </linearGradient>
      </defs>
      <path
        fill="url(#waveGradient)"
        d="M0,80 Q180,0 360,80 T720,80 T1080,80 T1440,80 L1440,200 L0,200 Z"
      />
    </svg>
  </section>
);
