import { useEffect, useId, useRef, useState, type KeyboardEvent } from 'react'
import { dropdownCheckboxStyles } from './styles'

export interface DropdownCheckboxOption {
  value: string
  label: string
  disabled?: boolean
}

export type DropdownCheckboxSize = keyof typeof dropdownCheckboxStyles.sizes

export interface DropdownCheckboxProps {
  options: DropdownCheckboxOption[]
  value?: string[]
  defaultValue?: string[]
  size?: DropdownCheckboxSize
  label?: string
  placeholder?: string
  disabled?: boolean
  onChange?: (selectedValues: string[]) => void
  'aria-label'?: string
}

export const DropdownCheckbox = ({
  options,
  value,
  defaultValue = [],
  size = 'md',
  label,
  placeholder = 'Select options...',
  disabled = false,
  onChange,
  'aria-label': ariaLabel,
}: DropdownCheckboxProps) => {
  const [internalValue, setInternalValue] = useState(defaultValue)
  const [open, setOpen] = useState(false)
  const [hovered, setHovered] = useState(false)
  const [focused, setFocused] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const id = useId()
  const labelId = `${id}-label`
  const valueId = `${id}-value`
  const optionsId = `${id}-options`

  const selectedValues = value ?? internalValue
  const selectedLabels = options
    .filter((option) => selectedValues.includes(option.value))
    .map((option) => option.label)
  const displayValue = selectedLabels.length > 0 ? selectedLabels.join(', ') : placeholder

  const triggerStyle = {
    ...dropdownCheckboxStyles.trigger,
    ...dropdownCheckboxStyles.sizes[size],
    ...(!disabled && hovered && !focused ? dropdownCheckboxStyles.states.hovered : {}),
    ...(!disabled && focused ? dropdownCheckboxStyles.states.focused : {}),
    ...(disabled ? dropdownCheckboxStyles.states.disabled : {}),
  }

  useEffect(() => {
    if (!open) return

    const handleOutsideMouseDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false)
    }

    document.addEventListener('mousedown', handleOutsideMouseDown)
    return () => document.removeEventListener('mousedown', handleOutsideMouseDown)
  }, [open])

  const toggleValue = (option: DropdownCheckboxOption) => {
    if (disabled || option.disabled) return

    const nextValues = selectedValues.includes(option.value)
      ? selectedValues.filter((selectedValue) => selectedValue !== option.value)
      : [...selectedValues, option.value]

    if (value === undefined) setInternalValue(nextValues)
    onChange?.(nextValues)
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Escape' && open) {
      event.preventDefault()
      setOpen(false)
      triggerRef.current?.focus()
    }
  }

  return (
    <div ref={rootRef} style={dropdownCheckboxStyles.wrapper} onKeyDown={handleKeyDown}>
      {label && <span id={labelId} style={dropdownCheckboxStyles.label}>{label}</span>}

      <button
        ref={triggerRef}
        type="button"
        disabled={disabled}
        aria-disabled={disabled}
        aria-expanded={open}
        aria-controls={optionsId}
        aria-label={!label ? ariaLabel : undefined}
        aria-labelledby={label ? `${labelId} ${valueId}` : undefined}
        style={triggerStyle}
        onClick={() => setOpen((isOpen) => !isOpen)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      >
        <span
          id={valueId}
          style={{
            ...dropdownCheckboxStyles.value,
            ...(selectedLabels.length === 0 ? dropdownCheckboxStyles.placeholder : {}),
          }}
        >
          {displayValue}
        </span>
        <span
          aria-hidden="true"
          style={{
            ...dropdownCheckboxStyles.chevron,
            ...(open ? dropdownCheckboxStyles.chevronOpen : {}),
          }}
        />
      </button>

      <div
        id={optionsId}
        role="group"
        aria-label={`${label ?? ariaLabel ?? 'Dropdown'} options`}
        hidden={!open}
        style={{
          ...dropdownCheckboxStyles.panel,
          display: open ? 'flex' : 'none',
        }}
      >
        {options.map((option) => (
          <label
            key={option.value}
            style={{
              ...dropdownCheckboxStyles.option,
              ...(option.disabled ? dropdownCheckboxStyles.optionDisabled : {}),
            }}
          >
            <input
              type="checkbox"
              value={option.value}
              checked={selectedValues.includes(option.value)}
              disabled={disabled || option.disabled}
              style={dropdownCheckboxStyles.checkbox}
              onChange={() => toggleValue(option)}
            />
            <span>{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  )
}
