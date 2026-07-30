import React, { useState } from 'react'
import { cardStyles, type CardVariant } from './styles'

// ─── Types ────────────────────────────────────────────────────────────────────

export interface PrimalCardProps {
  variant?: CardVariant
  title?: string
  description?: string
  children?: React.ReactNode
  onClick?: () => void
  disabled?: boolean
  'aria-label'?: string
}

// ─── Component ────────────────────────────────────────────────────────────────

export const PrimalCard = ({
  variant     = 'raised',
  title,
  description,
  children,
  onClick,
  disabled    = false,
  'aria-label': ariaLabel,
}: PrimalCardProps) => {
  const [hovered, setHovered] = useState(false)
  const [focused, setFocused] = useState(false)

  const isClickable = Boolean(onClick) && !disabled

  const computedStyle: React.CSSProperties = {
    ...cardStyles.base,
    ...cardStyles.variants[variant],
    ...(isClickable ? { cursor: 'pointer' } : {}),

    ...(isClickable && hovered ? cardStyles.states.hovered  : {}),
    ...(focused                ? cardStyles.states.focused  : {}),
    ...(disabled               ? cardStyles.states.disabled : {}),
  }

  return (
    <div
      style={computedStyle}
      role={isClickable ? 'button' : undefined}
      tabIndex={isClickable ? 0 : undefined}
      aria-disabled={disabled || undefined}
      aria-label={ariaLabel}
      onClick={isClickable ? onClick : undefined}
      onKeyDown={isClickable ? (e) => { if (e.key === 'Enter') onClick?.() } : undefined}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    >

      {children ?? (
        <>
          {title       && <div style={cardStyles.inner.title}>{title}</div>}
          {description && <div style={cardStyles.inner.description}>{description}</div>}
        </>
      )}
    </div>
  )
}

// ─── Compositions ─────────────────────────────────────────────────────────────

export const ProfileCard = (props: Partial<PrimalCardProps>) => (
  <PrimalCard variant="raised" {...props} />
)

export const NotificationCard = (props: Partial<PrimalCardProps>) => (
  <PrimalCard variant="flat" {...props} />
)