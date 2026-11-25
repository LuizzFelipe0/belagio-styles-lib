import React, { forwardRef, useState } from 'react'
import { getInputStyle, inputStyles, type InputSize } from './styles'

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'value' | 'onChange' | 'type'> {
  type?: 'text' | 'password' | 'email' | 'search' | 'number' | 'tel'
  size?: InputSize
  label?: string
  value?: string
  onChange?: (value: string) => void
  onChangeEvent?: React.ChangeEventHandler<HTMLInputElement>
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input({
  type = 'text',
  size = 'md',
  placeholder = '',
  label,
  value,
  disabled = false,
  required = false,
  onChange,
  onChangeEvent,
  onFocus,
  onBlur,
  onMouseEnter,
  onMouseLeave,
  style,
  ...inputProps
}, ref) {
  const [hovered, setHovered] = useState(false)
  const [focused, setFocused] = useState(false)
  return (
    <div style={inputStyles.wrapper}>
      {label && <label htmlFor={inputProps.id} style={inputStyles.label}>{label}</label>}
      <input
        {...inputProps}
        ref={ref}
        type={type}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        aria-disabled={disabled}
        style={getInputStyle({ size, disabled, hovered, focused, customStyle: style })}
        onChange={(event) => { onChange?.(event.currentTarget.value); onChangeEvent?.(event) }}
        onMouseEnter={(event) => { setHovered(true); onMouseEnter?.(event) }}
        onMouseLeave={(event) => { setHovered(false); onMouseLeave?.(event) }}
        onFocus={(event) => { setFocused(true); onFocus?.(event) }}
        onBlur={(event) => { setFocused(false); onBlur?.(event) }}
      />
    </div>
  )
})

export const SearchInput = (props: Partial<InputProps>) => <Input type="search" placeholder="..." {...props} />
export const PasswordInput = (props: Partial<InputProps>) => <Input type="password" placeholder="..." {...props} />
export const EmailInput = (props: Partial<InputProps>) => <Input type="email" placeholder="..." {...props} />
