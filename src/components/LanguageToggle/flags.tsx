import type { CSSProperties } from 'react'

interface FlagProps {
  style?: CSSProperties
}

export function BrazilFlag({ style }: FlagProps) {
  return (
    <svg viewBox="0 0 24 16" aria-hidden="true" style={style}>
      <rect width="24" height="16" fill="#009B3A" />
      <path d="M12 2 21 8 12 14 3 8Z" fill="#FFDF00" />
      <circle cx="12" cy="8" r="3.6" fill="#002776" />
      <path d="M8.7 6.9c2.2-.5 4.5-.2 6.4.8" fill="none" stroke="#FFFFFF" strokeWidth=".55" />
    </svg>
  )
}

export function UnitedStatesFlag({ style }: FlagProps) {
  return (
    <svg viewBox="0 0 24 16" aria-hidden="true" style={style}>
      <rect width="24" height="16" fill="#FFFFFF" />
      {[0, 2.46, 4.92, 7.38, 9.84, 12.3, 14.76].map((y) => (
        <rect key={y} y={y} width="24" height="1.23" fill="#B22234" />
      ))}
      <rect width="10.5" height="8.6" fill="#3C3B6E" />
      {[
        [2, 1.5], [4.3, 1.5], [6.6, 1.5], [8.8, 1.5],
        [3.1, 3.2], [5.4, 3.2], [7.7, 3.2],
        [2, 4.9], [4.3, 4.9], [6.6, 4.9], [8.8, 4.9],
        [3.1, 6.6], [5.4, 6.6], [7.7, 6.6],
      ].map(([cx, cy], index) => (
        <circle key={index} cx={cx} cy={cy} r=".35" fill="#FFFFFF" />
      ))}
    </svg>
  )
}

export function SpainFlag({ style }: FlagProps) {
  return (
    <svg viewBox="0 0 24 16" aria-hidden="true" style={style}>
      <rect width="24" height="16" fill="#AA151B" />
      <rect y="4" width="24" height="8" fill="#F1BF00" />
      <path d="M8 6h1.7v4H8zM7.5 6.7h2.7v.6H7.5z" fill="#AA151B" />
    </svg>
  )
}

export function FranceFlag({ style }: FlagProps) {
  return (
    <svg viewBox="0 0 24 16" aria-hidden="true" style={style}>
      <rect width="8" height="16" fill="#002395" />
      <rect x="8" width="8" height="16" fill="#FFFFFF" />
      <rect x="16" width="8" height="16" fill="#ED2939" />
    </svg>
  )
}

export function ChinaFlag({ style }: FlagProps) {
  return (
    <svg viewBox="0 0 24 16" aria-hidden="true" style={style}>
      <rect width="24" height="16" fill="#DE2910" />
      <path d="m5 2 .75 1.55 1.7.25-1.23 1.2.29 1.7L5 5.9l-1.51.8.29-1.7-1.23-1.2 1.7-.25Z" fill="#FFDE00" />
      <path d="m9.4 1.8.23.48.53.08-.38.37.09.53-.47-.25-.47.25.09-.53-.38-.37.53-.08Z" fill="#FFDE00" />
      <path d="m11.3 3.4.23.48.53.08-.38.37.09.53-.47-.25-.47.25.09-.53-.38-.37.53-.08Z" fill="#FFDE00" />
      <path d="m11.3 6 .23.48.53.08-.38.37.09.53-.47-.25-.47.25.09-.53-.38-.37.53-.08Z" fill="#FFDE00" />
      <path d="m9.4 7.6.23.48.53.08-.38.37.09.53-.47-.25-.47.25.09-.53-.38-.37.53-.08Z" fill="#FFDE00" />
    </svg>
  )
}
