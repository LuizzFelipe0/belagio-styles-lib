import React, { useState } from 'react'
import { inputStyles, type InputSize } from './styles'

// ─── Types ────────────────────────────────────────────────────────────────────

export interface PrimalInputProps {
  type?: 'text' | 'password' | 'email' | 'search' | 'number' | 'tel'
  size?: InputSize
  placeholder?: string
  label?: string
  value?: string
  disabled?: boolean
  onChange?: (value: string) => void
  'aria-label'?: string
}

// ─── Component ────────────────────────────────────────────────────────────────

export const PrimalInput = ({
  type        = 'text',
  size        = 'md',
  placeholder = '',
  label,
  value,
  disabled    = false,
  onChange,
  'aria-label': ariaLabel,
}: PrimalInputProps) => {
  const [hovered, setHovered] = useState(false)
  const [focused, setFocused] = useState(false)

  const computedStyle: React.CSSProperties = {
    ...inputStyles.base,
    ...inputStyles.sizes[size],
    // Hover só se aplica quando não há foco ativo (foco tem prioridade visual)
    ...(!disabled && hovered && !focused ? inputStyles.states.hovered  : {}),
    ...(!disabled && focused            ? inputStyles.states.focused  : {}),
    ...(disabled                        ? inputStyles.states.disabled : {}),
  }

  return (
    <div style={inputStyles.wrapper}>

      {/* Label só é renderizada quando fornecida */}
      {label && (
        <label style={inputStyles.label}>
          {label}
        </label>
      )}

      <input
        type={type}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        aria-disabled={disabled}

        aria-label={!label ? ariaLabel : undefined}
        style={computedStyle}
        onChange={(e) => onChange?.(e.target.value)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />

    </div>
  )
}

// ─── Compositions ─────────────────────────────────────────────────────────────

export const SearchInput = (props: Partial<PrimalInputProps>) => (
  <PrimalInput type="search" placeholder="..." {...props} />
)

export const PasswordInput = (props: Partial<PrimalInputProps>) => (
  <PrimalInput type="password" placeholder="..." {...props} />
)

export const EmailInput = (props: Partial<PrimalInputProps>) => (
  <PrimalInput type="email" placeholder="..." {...props} />
)