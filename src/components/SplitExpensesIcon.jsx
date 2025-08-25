 function SplitExpensesIcon({ size = 48, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Outer circle */}
      <circle cx="12" cy="12" r="10" />

      {/* Person (left side) */}
      <circle cx="8" cy="9" r="2" />
      <path d="M5.5 15c.5-1.5 1.5-2.5 2.5-2.5s2 .8 2.5 2.5" />

      {/* Dollar sign (right side) */}
      <path d="M15.5 8.5c.8-.5 2-.5 2.5.5.4.8 0 1.6-.8 2-.6.2-1.2.4-1.7.6-.9.3-1.2 1.6-.3 2.2.8.6 2 .4 2.8-.2" />
      <path d="M17 7v10" />

      {/* Diagonal split line */}
      <line x1="6" y1="18" x2="18" y2="6" />
    </svg>
  );
}

export default SplitExpensesIcon;
