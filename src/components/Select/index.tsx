import React, { useState } from 'react'
import { selectStyles, type SelectSize } from './styles'

// ─── Types ────────────────────────────────────────────────────────────────────

export interface SelectOption {
  value: string
  label: string
}

export interface SelectProps {
  options: SelectOption[]
  value?: string
  defaultValue?: string
  size?: SelectSize
  label?: string
  disabled?: boolean
  onChange?: (value: string) => void
  'aria-label'?: string
}

// ─── Component ────────────────────────────────────────────────────────────────

export const Select = ({
  options,
  value,
  defaultValue,
  size     = 'md',
  label,
  disabled = false,
  onChange,
  'aria-label': ariaLabel,
}: SelectProps) => {
  const [hovered, setHovered] = useState(false)
  const [focused, setFocused] = useState(false)

  const computedStyle: React.CSSProperties = {
    ...selectStyles.base,
    ...selectStyles.sizes[size],
    ...(!disabled && hovered && !focused ? selectStyles.states.hovered  : {}),
    ...(!disabled && focused            ? selectStyles.states.focused  : {}),
    ...(disabled                        ? selectStyles.states.disabled : {}),
  }

  return (
    <div style={selectStyles.wrapper}>
      {label && <label style={selectStyles.label}>{label}</label>}

      <select
        value={value}
        defaultValue={defaultValue}
        disabled={disabled}
        aria-disabled={disabled}
        aria-label={!label ? ariaLabel : undefined}
        style={computedStyle}
        onChange={(e) => onChange?.(e.target.value)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
    </div>
  )
}