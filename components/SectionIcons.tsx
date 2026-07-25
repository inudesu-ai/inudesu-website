'use client'

/**
 * Custom SVG icons for inudesu website sections.
 * Each icon is a pure component that inherits color via currentColor.
 * ViewBox: 48x48 (consistent with PipelineIcon).
 */

interface IconProps { className?: string }

/* ─── WhyItMatters (3) ─── */

export function NoControllerIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      {/* Hand / gesture — no controller needed */}
      <path d="M16 28 L12 38 Q10 42 16 42 L32 42 Q38 42 36 38 L32 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 22 L14 32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M20 18 L20 32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M26 16 L26 32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M32 18 L32 32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="20" cy="14" r="2" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1" />
      <circle cx="26" cy="12" r="2" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1" />
      {/* Strikethrough on a gamepad symbol */}
      <path d="M6 8 L42 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.4" strokeDasharray="4 3" />
    </svg>
  )
}

export function NoScreenIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      {/* Eye looking at physical world */}
      <path d="M10 24 Q24 12 38 24 Q24 36 10 24Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="24" cy="24" r="5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="24" cy="24" r="2" fill="currentColor" fillOpacity="0.3" />
      {/* Radiating lines — looking outward */}
      <path d="M24 8 L24 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.5" />
      <path d="M35 13 L38 10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.5" />
      <path d="M40 24 L44 24" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.5" />
      <path d="M35 35 L38 38" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.5" />
      <path d="M13 35 L10 38" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.5" />
    </svg>
  )
}

export function LowerBarrierIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      {/* Lightning bolt breaking through a barrier */}
      <path d="M8 24 L40 24" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 3" strokeOpacity="0.3" />
      <path d="M26 6 L18 26 L24 26 L16 42 L30 20 L22 20 L30 6Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" fill="currentColor" fillOpacity="0.15" />
    </svg>
  )
}

/* ─── GestureDemo (6) ─── */

export function PushForwardIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      <path d="M8 24 L38 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M32 18 L40 24 L32 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      {/* Hand outline */}
      <path d="M20 12 L16 22 L12 22 L12 34 Q12 38 16 38 L28 38 Q32 38 32 34 L30 22 L26 14" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function PullBackIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      <path d="M40 24 L10 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M16 18 L8 24 L16 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M30 12 L34 22 L38 22 L38 34 Q38 38 34 38 L22 38 Q18 38 18 34 L20 22 L24 14" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function TurnLeftIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      <path d="M24 8 A16 16 0 0 0 8 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M8 18 L8 24 L14 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      {/* Hand with arrow */}
      <path d="M26 16 L30 24 L30 34 Q30 38 26 38 L18 38" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  )
}

export function TurnRightIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      <path d="M24 8 A16 16 0 0 1 40 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M40 18 L40 24 L34 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M22 16 L18 24 L18 34 Q18 38 22 38 L30 38" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  )
}

export function LiftUpIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      <path d="M24 40 L24 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M18 16 L24 8 L30 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      {/* Hand rising */}
      <path d="M16 32 L18 24 L14 20" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 38 L22 28 L20 22" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M26 38 L26 26" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  )
}

export function CirclePatrolIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      <circle cx="24" cy="24" r="14" stroke="currentColor" strokeWidth="1.5" strokeDasharray="8 4" />
      <path d="M24 8 L26 14 L20 14Z" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" />
      {/* Small dots around the circle */}
      <circle cx="38" cy="24" r="2" fill="currentColor" fillOpacity="0.4" />
      <circle cx="24" cy="38" r="2" fill="currentColor" fillOpacity="0.3" />
      <circle cx="10" cy="24" r="2" fill="currentColor" fillOpacity="0.2" />
    </svg>
  )
}

/* ─── DomainPhilosophy (3) ─── */

export function UnknownDomainIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      {/* Question mark inside undefined boundary */}
      <rect x="8" y="8" width="32" height="32" rx="4" stroke="currentColor" strokeWidth="1.2" strokeDasharray="6 3" strokeOpacity="0.5" />
      <path d="M18 18 Q18 12 24 12 Q30 12 30 17 Q30 23 22 24 L22 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="22" cy="34" r="2" fill="currentColor" fillOpacity="0.5" />
    </svg>
  )
}

export function ThreeDSpaceIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      {/* X, Y, Z coordinate axes */}
      <line x1="6" y1="38" x2="34" y2="38" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="6" y1="38" x2="6" y2="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="6" y1="38" x2="30" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.5" />
      {/* Labels */}
      <text x="36" y="40" fill="currentColor" fillOpacity="0.7" fontSize="6" fontWeight="bold" fontFamily="monospace">X</text>
      <text x="3" y="9" fill="currentColor" fillOpacity="0.7" fontSize="6" fontWeight="bold" fontFamily="monospace">Y</text>
      <text x="31" y="14" fill="currentColor" fillOpacity="0.5" fontSize="6" fontWeight="bold" fontFamily="monospace">Z</text>
      {/* Dot in 3D space */}
      <circle cx="20" cy="24" r="2.5" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="1" />
      <line x1="20" y1="24" x2="20" y2="38" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 2" strokeOpacity="0.3" />
      <line x1="20" y1="24" x2="6" y2="24" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 2" strokeOpacity="0.3" />
      <line x1="20" y1="24" x2="30" y2="28" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 2" strokeOpacity="0.2" />
    </svg>
  )
}

export function PublicDomainIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      {/* Globe / network nodes */}
      <circle cx="24" cy="24" r="15" stroke="currentColor" strokeWidth="1.2" />
      <ellipse cx="24" cy="24" rx="8" ry="15" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5" />
      <line x1="9" y1="24" x2="39" y2="24" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5" />
      {/* Connected nodes */}
      <circle cx="24" cy="12" r="2" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="0.8" />
      <circle cx="34" cy="20" r="2" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="0.8" />
      <circle cx="14" cy="20" r="2" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="0.8" />
      <circle cx="24" cy="36" r="2" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="0.8" />
      <line x1="24" y1="14" x2="14" y2="19" stroke="currentColor" strokeWidth="0.6" strokeOpacity="0.3" />
      <line x1="24" y1="14" x2="34" y2="19" stroke="currentColor" strokeWidth="0.6" strokeOpacity="0.3" />
      <line x1="14" y1="21" x2="24" y2="34" stroke="currentColor" strokeWidth="0.6" strokeOpacity="0.3" />
      <line x1="34" y1="21" x2="24" y2="34" stroke="currentColor" strokeWidth="0.6" strokeOpacity="0.3" />
    </svg>
  )
}

/* ─── UseCases (4) ─── */

export function RescueIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      {/* Siren / alert beacon */}
      <path d="M24 6 L30 18 L36 18 L28 26 L32 40 L24 30 L16 40 L20 26 L12 18 L18 18Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" fill="currentColor" fillOpacity="0.1" />
      {/* Pulse rings */}
      <circle cx="24" cy="24" r="10" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="3 5" />
      <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.15" strokeDasharray="3 7" />
    </svg>
  )
}

export function IndustrialIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      {/* Factory / building with gear */}
      <path d="M8 38 L8 18 L18 14 L28 18 L28 38" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M18 14 L18 20 L22 20 L22 14" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" />
      <rect x="13" y="24" width="5" height="6" rx="0.5" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.1" />
      <rect x="22" y="24" width="5" height="6" rx="0.5" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.1" />
      <rect x="31" y="24" width="5" height="6" rx="0.5" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.1" />
      {/* Smokestack */}
      <line x1="12" y1="18" x2="12" y2="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M8 10 Q12 6 16 10" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.4" />
    </svg>
  )
}

export function AccessibleIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      {/* Universal accessibility — open arms embracing */}
      <circle cx="24" cy="14" r="3" stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.1" />
      <path d="M24 18 L24 36" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M24 22 L12 30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M24 22 L36 30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M24 30 L14 40" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M24 30 L34 40" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      {/* Circle ring */}
      <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="0.8" strokeDasharray="4 6" strokeOpacity="0.25" />
    </svg>
  )
}

export function CollaborationIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      {/* Two figures collaborating */}
      <circle cx="16" cy="14" r="4" stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.08" />
      <path d="M8 30 Q10 22 16 22 Q22 22 24 30" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="32" cy="18" r="4" stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.08" />
      <path d="M26 32 Q30 26 32 26 Q34 26 38 32" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      {/* Connection */}
      <path d="M22 24 L28 28" stroke="currentColor" strokeWidth="1" strokeDasharray="3 2" strokeOpacity="0.4" />
      {/* Shared circle */}
      <circle cx="25" cy="26" r="3" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.12" />
    </svg>
  )
}

/* ─── tech/page.tsx Layer Icons (6) ─── */

export function SensingLayerIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      <circle cx="24" cy="24" r="10" stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.05" />
      <circle cx="24" cy="24" r="4" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1" />
      <path d="M24 6 L24 12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M24 36 L24 42" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M6 24 L12 24" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M36 24 L42 24" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M11 13 L15 17" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" strokeOpacity="0.4" />
      <path d="M33 31 L37 35" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" strokeOpacity="0.4" />
      {/* Signal wave */}
      <path d="M30 18 Q32 14 34 18 Q36 22 38 18" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.6" />
    </svg>
  )
}

export function TransportLayerIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      <path d="M6 24 L18 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M30 24 L42 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M18 18 L24 24 L18 30" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      {/* Signal wave arcs */}
      <path d="M20 14 Q22 10 24 14 Q26 18 28 14" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.5" />
      <path d="M28 34 Q30 38 32 34 Q34 30 36 34" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.5" />
      {/* Data packet */}
      <rect x="22" y="20" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.12" />
    </svg>
  )
}

export function AlgorithmLayerIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      {/* Neural network nodes */}
      <circle cx="24" cy="10" r="3" stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.1" />
      <circle cx="12" cy="24" r="3" stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.1" />
      <circle cx="36" cy="24" r="3" stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.1" />
      <circle cx="18" cy="38" r="3" stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.1" />
      <circle cx="30" cy="38" r="3" stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.1" />
      {/* Connections */}
      <line x1="22" y1="12" x2="14" y2="22" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" />
      <line x1="26" y1="12" x2="34" y2="22" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" />
      <line x1="14" y1="26" x2="19" y2="36" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" />
      <line x1="34" y1="26" x2="29" y2="36" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" />
      <line x1="21" y1="36" x2="27" y2="36" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" />
      <line x1="24" y1="13" x2="18" y2="35" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.2" />
    </svg>
  )
}

export function MappingLayerIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      {/* Target / crosshair with mapping arrow */}
      <circle cx="24" cy="24" r="12" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" />
      <circle cx="24" cy="24" r="6" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="24" cy="24" r="1.5" fill="currentColor" fillOpacity="0.4" />
      <line x1="24" y1="8" x2="24" y2="16" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="24" y1="32" x2="24" y2="40" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="8" y1="24" x2="16" y2="24" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="32" y1="24" x2="40" y2="24" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  )
}

export function ActuationLayerIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      {/* Robot dog silhouette */}
      <rect x="18" y="14" width="12" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.08" />
      <circle cx="22" cy="18" r="1.5" fill="currentColor" fillOpacity="0.4" />
      <circle cx="27" cy="18" r="1.5" fill="currentColor" fillOpacity="0.4" />
      <line x1="18" y1="24" x2="14" y2="32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="24" y1="24" x2="20" y2="34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="26" y1="24" x2="30" y2="34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="32" y1="24" x2="36" y2="32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12 37 L38 37" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.4" strokeDasharray="2 3" />
    </svg>
  )
}

export function FrontendLayerIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      {/* Code brackets / atom-like */}
      <path d="M14 12 L6 24 L14 36" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M34 12 L42 24 L34 36" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="20" y1="38" x2="28" y2="10" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.4" />
      {/* Center accent */}
      <circle cx="24" cy="24" r="3" stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.15" />
    </svg>
  )
}
