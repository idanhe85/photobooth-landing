'use client'

export interface IconProps {
  className?: string
  size?: number
}

// ── Disco ball — celebrations / parties
export function DiscoBall({ className = '', size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}
      stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      {/* hanging thread */}
      <line x1="12" y1="1" x2="12" y2="4.5" strokeWidth="1.5" />
      {/* globe */}
      <circle cx="12" cy="13" r="8" strokeWidth="1.5" />
      {/* latitude arcs */}
      <path d="M4.2 10.5 Q12 9 19.8 10.5" strokeWidth="1" />
      <path d="M4.2 13 Q12 12 19.8 13" strokeWidth="1" />
      <path d="M4.2 15.5 Q12 17 19.8 15.5" strokeWidth="1" />
      {/* longitude arcs */}
      <path d="M12 5 Q9.5 13 12 21" strokeWidth="1" />
      <path d="M8.5 5.8 Q5.5 13 8.5 20.2" strokeWidth="1" />
      <path d="M15.5 5.8 Q18.5 13 15.5 20.2" strokeWidth="1" />
      {/* 4-pointed sparkle top-right */}
      <path d="M19.5 1.5 L20 3 L21.5 3.5 L20 4 L19.5 5.5 L19 4 L17.5 3.5 L19 3 Z" strokeWidth="1" />
      {/* 4-pointed sparkle bottom-left */}
      <path d="M3 19 L3.4 20.3 L4.5 20.5 L3.4 20.7 L3 22 L2.6 20.7 L1.5 20.5 L2.6 20.3 Z" strokeWidth="1" />
      {/* ray lines top-left */}
      <line x1="4.5" y1="5.5" x2="3.5" y2="4.5" strokeWidth="1" />
      <line x1="3" y1="7.5" x2="2" y2="7.5" strokeWidth="1" />
      {/* ray lines bottom-right */}
      <line x1="20.5" y1="19" x2="21.5" y2="20" strokeWidth="1" />
      <line x1="21.5" y1="17" x2="22.5" y2="17" strokeWidth="1" />
    </svg>
  )
}

// ── Necktie — corporate / B2B
export function Necktie({ className = '', size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.5 3 L14.5 3 L16 6.5 L14 8 L15 20.5 L12 23 L9 20.5 L10 8 L8 6.5 Z" />
      <line x1="10" y1="8" x2="14" y2="8" />
    </svg>
  )
}

// ── Star speech bubble — testimonials / reviews
export function StarBubble({ className = '', size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 3 Q3 3 3 4 L3 16 Q3 17 4 17 L10 17 L12 20 L14 17 L20 17 Q21 17 21 16 L21 4 Q21 3 20 3 Z" />
      <path d="M12 7 L12.9 9.6 L15.7 9.8 L13.7 11.5 L14.4 14.2 L12 12.8 L9.6 14.2 L10.3 11.5 L8.3 9.8 L11.1 9.6 Z" />
    </svg>
  )
}

// ── Camera on tripod — photography
export function CameraOnTripod({ className = '', size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {/* flash */}
      <rect x="9" y="2" width="5" height="3" rx="1" />
      {/* camera body */}
      <rect x="3" y="5" width="16" height="10" rx="2" />
      {/* lens */}
      <circle cx="11" cy="10" r="3" />
      <circle cx="11" cy="10" r="1.2" />
      {/* viewfinder */}
      <rect x="16" y="6" width="2.5" height="2" rx="0.5" />
      {/* tripod */}
      <line x1="11" y1="15" x2="11" y2="18" />
      <line x1="11" y1="17.5" x2="7.5" y2="22" />
      <line x1="11" y1="17.5" x2="14.5" y2="22" />
      <line x1="8.5" y1="20.2" x2="13.5" y2="20.2" strokeWidth="1" />
    </svg>
  )
}

// ── Photo strips — prints / gallery
export function PhotoStrips({ className = '', size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {/* left strip */}
      <g transform="rotate(-11, 9, 12)">
        <rect x="5.5" y="3" width="6" height="18" rx="1" />
        <rect x="6.8" y="5" width="3.4" height="3" rx="0.4" strokeWidth="1" />
        <rect x="6.8" y="9.5" width="3.4" height="3" rx="0.4" strokeWidth="1" />
        <rect x="6.8" y="14" width="3.4" height="3" rx="0.4" strokeWidth="1" />
      </g>
      {/* right strip */}
      <g transform="rotate(11, 15, 12)">
        <rect x="12.5" y="3" width="6" height="18" rx="1" />
        <rect x="13.8" y="5" width="3.4" height="3" rx="0.4" strokeWidth="1" />
        {/* star in top frame */}
        <path d="M15.5 6 L15.7 6.6 L16.4 6.6 L15.9 7 L16.1 7.7 L15.5 7.3 L14.9 7.7 L15.1 7 L14.6 6.6 L15.3 6.6 Z" strokeWidth="0.8" />
        <rect x="13.8" y="9.5" width="3.4" height="3" rx="0.4" strokeWidth="1" />
        <rect x="13.8" y="14" width="3.4" height="3" rx="0.4" strokeWidth="1" />
        {/* heart in bottom frame */}
        <path d="M15.5 15.3 Q15.5 14.8 15.9 14.8 Q16.3 14.8 16.3 15.3 Q16.3 15.8 15.5 16.3 Q14.7 15.8 14.7 15.3 Q14.7 14.8 15.1 14.8 Q15.5 14.8 15.5 15.3 Z" strokeWidth="0.8" />
      </g>
    </svg>
  )
}

// ── Chat bubble — consult / conversation
export function ChatBubble({ className = '', size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 3 Q3 3 3 4 L3 15 Q3 16 4 16 L8 16 L8 20 L13 16 L20 16 Q21 16 21 15 L21 4 Q21 3 20 3 Z" />
      <line x1="7" y1="9" x2="17" y2="9" />
      <line x1="7" y1="12" x2="13" y2="12" />
    </svg>
  )
}

// ── Paintbrush — customize / design / branding
export function Paintbrush({ className = '', size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18.5 2 L22 5.5 L8.5 19 Q6.5 21 3.5 21.5 Q4 18.5 6 16.5 Z" />
      <line x1="14.5" y1="5.5" x2="18.5" y2="9.5" />
    </svg>
  )
}

// ── Lightbulb — high-end lighting
export function Lightbulb({ className = '', size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 2 Q5 5 5 9 Q5 13 8 14.5 L8 17 L16 17 L16 14.5 Q19 13 19 9 Q19 5 15 2 Q13.5 1 12 1 Q10.5 1 9 2 Z" />
      <line x1="9" y1="19.5" x2="15" y2="19.5" />
      <line x1="10" y1="21.5" x2="14" y2="21.5" />
      <line x1="11" y1="23" x2="13" y2="23" />
    </svg>
  )
}

// ── Bar chart — data & analytics
export function BarChart({ className = '', size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="21" x2="21" y2="21" />
      <rect x="4" y="12" width="4" height="9" rx="0.5" />
      <rect x="10" y="6" width="4" height="15" rx="0.5" />
      <rect x="16" y="9" width="4" height="12" rx="0.5" />
    </svg>
  )
}

// ── Share nodes — instant sharing
export function Share({ className = '', size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="5" r="2.5" />
      <circle cx="18" cy="19" r="2.5" />
      <circle cx="6" cy="12" r="2.5" />
      <line x1="8.4" y1="10.7" x2="15.6" y2="6.3" />
      <line x1="8.4" y1="13.3" x2="15.6" y2="17.7" />
    </svg>
  )
}

// ── Ring — wedding
export function Ring({ className = '', size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="15" r="7" />
      <path d="M8 9 Q12 7 16 9" />
      <path d="M9 8.5 L10 5.5 L12 4 L14 5.5 L15 8.5 L12 10.5 Z" />
    </svg>
  )
}

// ── Phone handset — contact
export function Phone({ className = '', size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.6 2 2 0 0 1 2-2.2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.4 2.1L8.1 9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.5 2.9.7a2 2 0 0 1 1.6 2z" />
    </svg>
  )
}

// ── Envelope — email
export function Envelope({ className = '', size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <path d="M2 7 L12 13 L22 7" />
    </svg>
  )
}

// ── Map pin — service area / location
export function MapPin({ className = '', size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2 Q7 2 7 8 Q7 14 12 22 Q17 14 17 8 Q17 2 12 2 Z" />
      <circle cx="12" cy="8" r="2.5" />
    </svg>
  )
}
