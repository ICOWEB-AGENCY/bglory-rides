"use client";

export default function RideAnimation() {
  return (
    <div
      className="absolute bottom-16 sm:bottom-20 left-0 right-0 pointer-events-none select-none overflow-hidden"
      aria-hidden="true"
    >
      {/* Road line */}
      <div className="relative h-16 sm:h-24">
        {/* Road surface */}
        <div className="absolute bottom-6 left-0 right-0 h-px bg-white/[0.08]" />
        {/* Dashed center line */}
        <div
          className="absolute bottom-6 left-0 right-0 h-px"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 12px, transparent 12px, transparent 24px)",
          }}
        />

        {/* Pickup point - pulsing green dot */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center ride-pickup-point">
          {/* Pin line */}
          <div className="w-px h-2 sm:h-3 bg-primary-400/40" />
          {/* Dot */}
          <div className="relative">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary-400" />
            <div className="absolute inset-0 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary-400 animate-ping opacity-40" />
          </div>
        </div>

        {/* Passenger - appears at pickup, walks to car, disappears */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 ride-passenger">
          {/* Mobile size */}
          <svg
            width="6"
            height="11"
            viewBox="0 0 8 14"
            fill="none"
            className="opacity-0 sm:hidden"
          >
            <circle cx="4" cy="2.5" r="2" stroke="rgba(255,255,255,0.5)" strokeWidth="1" />
            <line x1="4" y1="4.5" x2="4" y2="9" stroke="rgba(255,255,255,0.5)" strokeWidth="1" />
            <line x1="4" y1="9" x2="2" y2="13" stroke="rgba(255,255,255,0.5)" strokeWidth="1" />
            <line x1="4" y1="9" x2="6" y2="13" stroke="rgba(255,255,255,0.5)" strokeWidth="1" />
            <line x1="4" y1="6" x2="1.5" y2="8" stroke="rgba(255,255,255,0.5)" strokeWidth="1" />
            <line x1="4" y1="6" x2="6.5" y2="8" stroke="rgba(255,255,255,0.5)" strokeWidth="1" />
          </svg>
          {/* Desktop size */}
          <svg
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            className="opacity-0 hidden sm:block"
          >
            <circle cx="4" cy="2.5" r="2" stroke="rgba(255,255,255,0.5)" strokeWidth="0.8" />
            <line x1="4" y1="4.5" x2="4" y2="9" stroke="rgba(255,255,255,0.5)" strokeWidth="0.8" />
            <line x1="4" y1="9" x2="2" y2="13" stroke="rgba(255,255,255,0.5)" strokeWidth="0.8" />
            <line x1="4" y1="9" x2="6" y2="13" stroke="rgba(255,255,255,0.5)" strokeWidth="0.8" />
            <line x1="4" y1="6" x2="1.5" y2="8" stroke="rgba(255,255,255,0.5)" strokeWidth="0.8" />
            <line x1="4" y1="6" x2="6.5" y2="8" stroke="rgba(255,255,255,0.5)" strokeWidth="0.8" />
          </svg>
        </div>

        {/* Car */}
        <div className="absolute bottom-3.5 ride-car">
          {/* Mobile size */}
          <svg
            width="32"
            height="13"
            viewBox="0 0 40 16"
            fill="none"
            className="sm:hidden"
          >
            <path
              d="M5 11 L8 4 L16 2 L28 2 L34 6 L38 8 L38 11 Z"
              stroke="rgba(155,197,61,0.7)"
              strokeWidth="1"
              fill="rgba(155,197,61,0.05)"
              strokeLinejoin="round"
            />
            <path d="M12 4 L15 2 L27 2 L30 4" stroke="rgba(155,197,61,0.5)" strokeWidth="0.8" fill="none" />
            <line x1="28" y1="2.5" x2="33" y2="5.5" stroke="rgba(155,197,61,0.4)" strokeWidth="0.8" />
            <line x1="16" y1="2.5" x2="10" y2="5" stroke="rgba(155,197,61,0.4)" strokeWidth="0.8" />
            <circle cx="31" cy="12" r="2.5" stroke="rgba(255,255,255,0.3)" strokeWidth="1" fill="rgba(155,197,61,0.08)" />
            <circle cx="31" cy="12" r="0.8" fill="rgba(255,255,255,0.2)" />
            <circle cx="11" cy="12" r="2.5" stroke="rgba(255,255,255,0.3)" strokeWidth="1" fill="rgba(155,197,61,0.08)" />
            <circle cx="11" cy="12" r="0.8" fill="rgba(255,255,255,0.2)" />
            <circle cx="38" cy="9" r="1" fill="rgba(155,197,61,0.6)" />
            <circle cx="5" cy="9" r="0.8" fill="rgba(255,100,100,0.5)" />
          </svg>
          {/* Desktop size */}
          <svg
            width="40"
            height="16"
            viewBox="0 0 40 16"
            fill="none"
            className="hidden sm:block"
          >
            <path
              d="M5 11 L8 4 L16 2 L28 2 L34 6 L38 8 L38 11 Z"
              stroke="rgba(155,197,61,0.7)"
              strokeWidth="0.8"
              fill="rgba(155,197,61,0.05)"
              strokeLinejoin="round"
            />
            <path d="M12 4 L15 2 L27 2 L30 4" stroke="rgba(155,197,61,0.5)" strokeWidth="0.6" fill="none" />
            <line x1="28" y1="2.5" x2="33" y2="5.5" stroke="rgba(155,197,61,0.4)" strokeWidth="0.6" />
            <line x1="16" y1="2.5" x2="10" y2="5" stroke="rgba(155,197,61,0.4)" strokeWidth="0.6" />
            <circle cx="31" cy="12" r="2.5" stroke="rgba(255,255,255,0.3)" strokeWidth="0.8" fill="rgba(155,197,61,0.08)" />
            <circle cx="31" cy="12" r="0.8" fill="rgba(255,255,255,0.2)" />
            <circle cx="11" cy="12" r="2.5" stroke="rgba(255,255,255,0.3)" strokeWidth="0.8" fill="rgba(155,197,61,0.08)" />
            <circle cx="11" cy="12" r="0.8" fill="rgba(255,255,255,0.2)" />
            <circle cx="38" cy="9" r="1" fill="rgba(155,197,61,0.6)" />
            <circle cx="5" cy="9" r="0.8" fill="rgba(255,100,100,0.5)" />
          </svg>
        </div>
      </div>
    </div>
  );
}
