type P = { className?: string };
const base = {
  viewBox: "0 0 32 32",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.1,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function IconBriefcase({ className }: P) {
  return (
    <svg {...base} className={className}>
      <rect x="5" y="11" width="22" height="14" rx="2" />
      <path d="M12 11V8.5A1.5 1.5 0 0 1 13.5 7h5A1.5 1.5 0 0 1 20 8.5V11" />
      <path d="M5 17h22" />
    </svg>
  );
}

export function IconRiver({ className }: P) {
  return (
    <svg {...base} className={className}>
      <path d="M4 12c3-2 5-2 8 0s5 2 8 0 5-2 8 0" />
      <path d="M4 18c3-2 5-2 8 0s5 2 8 0 5-2 8 0" />
      <path d="M4 24c3-2 5-2 8 0s5 2 8 0 5-2 8 0" />
    </svg>
  );
}

export function IconWine({ className }: P) {
  return (
    <svg {...base} className={className}>
      <path d="M11 5h10l-1 6a4 4 0 0 1-8 0z" />
      <path d="M16 17v8" />
      <path d="M11 27h10" />
    </svg>
  );
}

export function IconSparkle({ className }: P) {
  return (
    <svg {...base} className={className}>
      <path d="M16 5l2.2 6.8L25 14l-6.8 2.2L16 23l-2.2-6.8L7 14l6.8-2.2z" />
      <path d="M24 23l.8 2.4L27 26l-2.2.6L24 29l-.8-2.4L21 26l2.2-.6z" />
    </svg>
  );
}

export function IconClock({ className }: P) {
  return (
    <svg {...base} className={className}>
      <circle cx="16" cy="16" r="11" />
      <path d="M16 9v7l5 3" />
    </svg>
  );
}

export function IconLeaf({ className }: P) {
  return (
    <svg {...base} className={className}>
      <path d="M25 7c0 9-5 15-13 15-3 0-5-1-5-1s0-12 9-13c4-.5 9-1 9-1z" />
      <path d="M9 23c4-6 8-9 12-11" />
    </svg>
  );
}

export function IconChat({ className }: P) {
  return (
    <svg {...base} className={className}>
      <path d="M6 8h20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H13l-6 5v-5H6a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2z" />
    </svg>
  );
}

export function IconPin({ className }: P) {
  return (
    <svg {...base} className={className}>
      <path d="M16 28s9-7.5 9-15a9 9 0 1 0-18 0c0 7.5 9 15 9 15z" />
      <circle cx="16" cy="13" r="3.2" />
    </svg>
  );
}

export function IconPhone({ className }: P) {
  return (
    <svg {...base} className={className}>
      <path d="M11 5l3 6-2.5 2c1.2 2.8 3.7 5.3 6.5 6.5L21 23l6 3v3a2 2 0 0 1-2.2 2C13.5 33 -1 18.5 0 7.2A2 2 0 0 1 2 5z" transform="translate(3 -1)" />
    </svg>
  );
}

export function IconMail({ className }: P) {
  return (
    <svg {...base} className={className}>
      <rect x="4" y="8" width="24" height="16" rx="2" />
      <path d="M5 9l11 8 11-8" />
    </svg>
  );
}

export function IconGoogle({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className={className}>
      <path d="M21 12.2c0 5-3.4 8.3-8.4 8.3a8.5 8.5 0 1 1 5.8-14.7" />
      <path d="M12.6 12.2H21" />
    </svg>
  );
}

export function IconCloche({ className }: P) {
  return (
    <svg {...base} className={className}>
      <path d="M5 23h22" />
      <path d="M7 23a9 9 0 0 1 18 0" />
      <path d="M16 14v-3" />
      <circle cx="16" cy="9.5" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconCake({ className }: P) {
  return (
    <svg {...base} className={className}>
      <path d="M6 26h20V17a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3z" />
      <path d="M6 20c2 0 2 1.6 4 1.6S12 20 14 20s2 1.6 4 1.6S20 20 22 20" />
      <path d="M16 14V9" />
      <circle cx="16" cy="7.5" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconBottle({ className }: P) {
  return (
    <svg viewBox="0 0 32 80" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" className={className}>
      <path d="M13 3h6v10c0 2 .6 3 1.6 4.2C22.4 19.6 24 22 24 27v44a4 4 0 0 1-4 4h-8a4 4 0 0 1-4-4V27c0-5 1.6-7.4 3.4-9.8C12.4 16 13 15 13 13z" />
      <rect x="10" y="40" width="12" height="18" rx="1.5" fill="currentColor" opacity="0.10" stroke="none" />
      <path d="M13 3h6" stroke-width="1.6" />
    </svg>
  );
}

export function IconUsers({ className }: P) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="12" r="3.6" />
      <path d="M5 25c0-3.9 3.1-6.5 7-6.5s7 2.6 7 6.5" />
      <path d="M21 9.5a3.2 3.2 0 0 1 0 6" />
      <path d="M22 24.5c0-3.2-1.6-5.4-4-6.2" />
    </svg>
  );
}

export function IconCalendar({ className }: P) {
  return (
    <svg {...base} className={className}>
      <rect x="5" y="7" width="22" height="20" rx="2" />
      <path d="M5 13h22M11 4v5M21 4v5" />
    </svg>
  );
}
