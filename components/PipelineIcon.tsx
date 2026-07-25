'use client'

interface Props { stage: number; className?: string }

/**
 * Custom SVG icons for the 5 motion pipeline stages.
 * All share the same 48x48 viewBox and inherit stroke via currentColor.
 */
export default function PipelineIcon({ stage, className = '' }: Props) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} style={{ width: '40px', height: '40px', color: 'var(--color-accent)' }}>
      {stage === 0 && (
        // SENSE — smart ring with sensor waves
        <>
          <circle cx="24" cy="20" r="8" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="24" cy="20" r="3" stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.2" />
          <path d="M12 14 Q8 20 12 26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M9 10 Q4 20 9 30" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.6" />
          <path d="M36 14 Q40 20 36 26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M39 10 Q44 20 39 30" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.6" />
          <path d="M24 34 L24 40" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M20 38 L28 38" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </>
      )}
      {stage === 1 && (
        // PROCESS — signal wave → clean line (filter/pipeline)
        <>
          <path d="M6 16 Q12 8 18 16 Q24 24 30 16 Q36 8 42 16" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.5" />
          <path d="M6 24 Q12 16 18 24 Q24 32 30 24 Q36 16 42 24" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M14 34 L34 34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M30 30 L34 34 L30 38" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </>
      )}
      {stage === 2 && (
        // UNDERSTAND — neural network / gesture recognition
        <>
          <circle cx="24" cy="12" r="3" stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.15" />
          <circle cx="12" cy="24" r="3" stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.15" />
          <circle cx="36" cy="24" r="3" stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.15" />
          <circle cx="16" cy="36" r="3" stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.15" />
          <circle cx="32" cy="36" r="3" stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.15" />
          <line x1="22" y1="14.5" x2="14" y2="21.5" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" />
          <line x1="26" y1="14.5" x2="34" y2="21.5" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" />
          <line x1="14" y1="26.5" x2="17" y2="33.5" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" />
          <line x1="34" y1="26.5" x2="31" y2="33.5" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" />
          <line x1="19" y1="37" x2="29" y2="37" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" />
          <circle cx="24" cy="24" r="6" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 2" fill="none" strokeOpacity="0.5" />
          <circle cx="24" cy="24" r="2" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.3" />
        </>
      )}
      {stage === 3 && (
        // MAP — gesture → robot command (transformation arrow)
        <>
          <path d="M10 24 Q12 18 14 22 Q16 26 18 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <circle cx="12" cy="18" r="2" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.1" />
          <path d="M22 24 L32 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="4 2" />
          <path d="M36 18 L42 24 L36 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <rect x="8" y="30" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.1" />
          <rect x="34" y="30" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.2" />
        </>
      )}
      {stage === 4 && (
        // ACT — robot dog in motion
        <>
          <rect x="20" y="10" width="12" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1" />
          <circle cx="24" cy="14" r="1.5" fill="currentColor" fillOpacity="0.4" />
          <circle cx="29" cy="14" r="1.5" fill="currentColor" fillOpacity="0.4" />
          <line x1="20" y1="20" x2="16" y2="28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="26" y1="20" x2="22" y2="30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="28" y1="20" x2="32" y2="30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="34" y1="20" x2="38" y2="28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M14 33 L38 33" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.4" strokeDasharray="2 3" />
        </>
      )}
    </svg>
  )
}
