import React, { useState } from 'react'
import type { ComponentSize as ButtonSize, ButtonVariant } from '../../../shared/component-types'
import { getButtonStyle } from './styles'

// ─── Types ────────────────────────────────────────────────────────────────────

export interface ButtonProps {
  type?: 'button' | 'submit' | 'reset'
  variant?: ButtonVariant
  size?: ButtonSize
  disabled?: boolean
  loading?: boolean
  children?: React.ReactNode
  onClick?: () => void
  className?: string
  style?: React.CSSProperties
  'aria-label'?: string
  'aria-controls'?: string
  'aria-expanded'?: boolean
}

// ─── Component ────────────────────────────────────────────────────────────────

export const Button = ({
  type     = 'button',
  variant  = 'primary',
  size     = 'md',
  disabled = false,
  loading  = false,
  children,
  onClick,
  className,
  style,
  'aria-label': ariaLabel,
  'aria-controls': ariaControls,
  'aria-expanded': ariaExpanded,
}: ButtonProps) => {
  const [hovered, setHovered] = useState(false)
  const [focused, setFocused] = useState(false)

  const isInert = disabled || loading

  return (
    <button
      type={type}
      style={getButtonStyle({ variant, size, disabled, loading, hovered, focused, customStyle: style })}
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
