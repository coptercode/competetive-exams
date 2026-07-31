import React from "react";

export const PlanetLogo: React.FC<{ className?: string; hideLetter?: boolean }> = ({
  className = "w-8 h-8",
  hideLetter = false,
}) => {
  return (
    <svg
      viewBox="0 0 100 100"
      className={`${className} select-none`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Planet sphere gradient */}
        <linearGradient id="planetGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7C3AED" /> {/* brand-violet */}
          <stop offset="50%" stopColor="#3B82F6" /> {/* brand-royal */}
          <stop offset="100%" stopColor="#06B6D4" /> {/* teal */}
        </linearGradient>

        {/* Orbital ring gradient */}
        <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.3" />
          <stop offset="50%" stopColor="#06B6D4" stopOpacity="1" />
          <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.3" />
        </linearGradient>
      </defs>



      {/* Back orbital ring (behind the planet) */}
      <path
        d="M12 58 C15 46, 85 38, 88 50"
        stroke="url(#ringGrad)"
        strokeWidth="3.5"
        strokeLinecap="round"
      />

      {/* Planet Sphere Core */}
      <circle
        cx="50"
        cy="50"
        r="26"
        fill="url(#planetGrad)"
        className="drop-shadow-lg"
      />

      {/* Elegant white combined 'RA' monogram (Rohit Aspire) inside the planet core */}
      {!hideLetter && (
        <g fill="white" className="drop-shadow-sm">
          {/* Combined R and A interlocking vector emblem */}
          <path d="M 32 36 H 43 C 48.5 36, 50.5 38.5, 50.5 43 C 50.5 47.5, 48 49.5, 42.5 49.5 H 37 V 64 H 32 Z M 37 40.5 V 45 H 42.5 C 45 45, 46 44.2, 46 42.75 C 46 41.3, 45 40.5, 42.5 40.5 Z" />
          <path d="M 42.5 49.5 L 50.5 64 H 45.5 L 38 49.5 Z" />
          <path d="M 52.5 64 L 59.5 36 H 64.5 L 71.5 64 H 66 L 64.5 57 H 59.5 L 58 64 Z M 60.5 52.5 H 63.5 L 62 44.5 Z" />
        </g>
      )}

      {/* Front orbital ring (in front of the planet to complete 3D overlap) */}
      <path
        d="M88 50 C85 62, 15 70, 12 58"
        stroke="url(#ringGrad)"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
    </svg>
  );
};
