// GasCylinderIcon.jsx
import React from "react";

/**
 * Props:
 *  - size (number | string) : width/height in px or CSS value (default: 24)
 *  - color (string) : stroke/fill color (default: currentColor)
 *  - className (string) : optional css class
 */
export default function GasCylinderIcon({ size = 24, color = "currentColor", className = "", ...props }) {
  const s = typeof size === "number" ? `${size}px` : size;
  return (
    <svg
      width={s}
      height={s}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      role="img"
      {...props}
    >
      {/* cylinder body */}
      <rect x="6" y="6" width="12" height="12" rx="2" />
      {/* valve neck */}
      <rect x="10.5" y="3" width="3" height="3" rx="0.6" />
      {/* valve connector */}
      <path d="M12 6 L12 5" />
      {/* flame / LPG indicator */}
      <path d="M12 9.2c0 1-0.8 1.8-0.8 2.6 0 .9.67 1.6.8 1.8.13-.2.8-.9.8-1.8 0-.8-.8-1.6-.8-2.6 0-.9.4-1.6.8-2" />
    </svg>
  );
}
