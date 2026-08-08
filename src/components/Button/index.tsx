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
  'aria-label'?: string
}

// ─── Component ────────────────────────────────────────────────────────────────

export const Button = ({
  variant  = 'primary',
  size     = 'md',
  disabled = false,
  loading  = false,
  children,
  onClick,
  'aria-label': ariaLabel,
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
      disabled={isInert}
      aria-disabled={isInert}
      aria-label={ariaLabel}
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