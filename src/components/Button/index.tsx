import React, { useState } from 'react'
import { buttonStyles, type ButtonVariant, type ButtonSize } from './styles'

// ─── Types ────────────────────────────────────────────────────────────────────

export interface ButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  disabled?: boolean
  loading?: boolean
  children?: React.ReactNode
  onClick?: () => void
  className?: string
  'aria-label'?: string
  'aria-controls'?: string
  'aria-expanded'?: boolean
}

// ─── Component ────────────────────────────────────────────────────────────────

export const Button = ({
  variant  = 'primary',
  size     = 'md',
  disabled = false,
  loading  = false,
  children,
  onClick,
  className,
  'aria-label': ariaLabel,
  'aria-controls': ariaControls,
  'aria-expanded': ariaExpanded,
}: ButtonProps) => {
  const [hovered, setHovered] = useState(false)
  const [focused, setFocused] = useState(false)

  const isInert = disabled || loading

  const computedStyle: React.CSSProperties = {
    ...buttonStyles.base,
    ...buttonStyles.variants[variant],
    ...buttonStyles.sizes[size],

    ...(!isInert && hovered ? buttonStyles.states.hovered  : {}),
    ...(focused             ? buttonStyles.states.focused  : {}),
    ...(isInert             ? buttonStyles.states.disabled : {}),
  }

  return (
    <button
      style={computedStyle}
      className={className}
      disabled={isInert}
      aria-disabled={isInert}
      aria-label={ariaLabel}
      aria-controls={ariaControls}
      aria-expanded={ariaExpanded}
      aria-busy={loading}
      onClick={!isInert ? onClick : undefined}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    >
      {loading ? '...' : children}
    </button>
  )
}

// ─── Compositions ─────────────────────────────────────────────────────────────

export const DeleteButton = (props: Partial<ButtonProps>) => (
  <Button variant="danger" {...props} />
)

export const UpdateButton = (props: Partial<ButtonProps>) => (
  <Button variant="primary" {...props} />
)

export const AddButton = (props: Partial<ButtonProps>) => (
  <Button variant="success" {...props} />
)
