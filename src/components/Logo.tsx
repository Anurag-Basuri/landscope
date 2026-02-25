interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export default function Logo({
  className = "",
  width = 160,
  height = 36,
}: LogoProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 320 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Landscope"
    >
      <defs>
        <linearGradient id="logo-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0EA5EA" />
          <stop offset="100%" stopColor="#14B8A6" />
        </linearGradient>
        <linearGradient id="text-grad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#e2e8f0" />
        </linearGradient>
      </defs>

      {/* ── Icon: Layered mountain + scope circle ── */}
      <g transform="translate(4, 8)">
        {/* Back mountain */}
        <path d="M8 48 L24 16 L40 48 Z" fill="#14B8A6" opacity="0.4" />
        {/* Front mountain */}
        <path d="M16 48 L32 8 L48 48 Z" fill="url(#logo-grad)" />
        {/* Scope circle */}
        <circle
          cx="32"
          cy="28"
          r="14"
          stroke="url(#logo-grad)"
          strokeWidth="2.5"
          fill="none"
          opacity="0.7"
        />
        {/* Crosshair lines */}
        <line
          x1="32"
          y1="16"
          x2="32"
          y2="20"
          stroke="#0EA5EA"
          strokeWidth="1.5"
          opacity="0.5"
        />
        <line
          x1="32"
          y1="36"
          x2="32"
          y2="40"
          stroke="#14B8A6"
          strokeWidth="1.5"
          opacity="0.5"
        />
        <line
          x1="20"
          y1="28"
          x2="24"
          y2="28"
          stroke="#0EA5EA"
          strokeWidth="1.5"
          opacity="0.5"
        />
        <line
          x1="40"
          y1="28"
          x2="44"
          y2="28"
          stroke="#14B8A6"
          strokeWidth="1.5"
          opacity="0.5"
        />
      </g>

      {/* ── Wordmark ── */}
      <text
        x="68"
        y="49"
        fontFamily="'Inter', 'Segoe UI', system-ui, sans-serif"
        fontWeight="800"
        fontSize="38"
        letterSpacing="-0.5"
        fill="url(#text-grad)"
      >
        Land
        <tspan fill="url(#logo-grad)">scope</tspan>
      </text>

      {/* ── Subtle underline accent ── */}
      <rect
        x="68"
        y="56"
        width="50"
        height="2"
        rx="1"
        fill="url(#logo-grad)"
        opacity="0.6"
      />
    </svg>
  );
}
