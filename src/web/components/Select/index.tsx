import React, { forwardRef, useState } from 'react'
import { getSelectStyle, selectStyles, type SelectSize } from './styles'

export interface SelectOption {
  value: string
  label: string
}

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size' | 'value' | 'defaultValue' | 'onChange'> {
  options: SelectOption[]
  value?: string
  defaultValue?: string
  size?: SelectSize
  label?: string
  onChange?: (value: string) => void
  onChangeEvent?: React.ChangeEventHandler<HTMLSelectElement>
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(function Select({
  options,
  value,
  defaultValue,
  size = 'md',
  label,
  disabled = false,
  required = false,
  onChange,
  onChangeEvent,
  onFocus,
  onBlur,
  onMouseEnter,
  onMouseLeave,
  style,
  ...selectProps
}, ref) {
  const [hovered, setHovered] = useState(false)
  const [focused, setFocused] = useState(false)
  return (
    <div style={selectStyles.wrapper}>
      {label && <label htmlFor={selectProps.id} style={selectStyles.label}>{label}</label>}
      <select
        {...selectProps}
        ref={ref}
        value={value}
        defaultValue={defaultValue}
        disabled={disabled}
        required={required}
        aria-disabled={disabled}
        style={getSelectStyle({ size, disabled, hovered, focused, customStyle: style })}
        onChange={(event) => { onChange?.(event.currentTarget.value); onChangeEvent?.(event) }}
        onMouseEnter={(event) => { setHovered(true); onMouseEnter?.(event) }}
        onMouseLeave={(event) => { setHovered(false); onMouseLeave?.(event) }}
        onFocus={(event) => { setFocused(true); onFocus?.(event) }}
        onBlur={(event) => { setFocused(false); onBlur?.(event) }}
      >
        {options.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
      </select>
    </div>
  )
})
