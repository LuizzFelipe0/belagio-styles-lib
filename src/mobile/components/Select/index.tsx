import { useEffect, useState } from 'react'
import { View, type ViewProps } from 'react-native'
import type { ComponentSize } from '../../../shared/component-types'
import { Button } from '../Button'
import { Dialog } from '../Dialog'

export interface SelectOption {
  value: string
  label: string
  disabled?: boolean
}
export interface SelectProps extends ViewProps {
  options: SelectOption[]
  value?: string
  defaultValue?: string
  size?: ComponentSize
  label?: string
  placeholder?: string
  disabled?: boolean
  onChange?: (value: string) => void
}
export function Select({
  options, value, defaultValue, size = 'md', label, placeholder = 'Select an option',
  disabled = false, onChange, accessibilityLabel, accessibilityHint, ...props
}: SelectProps) {
  const [internal, setInternal] = useState(defaultValue ?? options[0]?.value ?? '')
  const [open, setOpen] = useState(false)
  const selected = value ?? internal
  useEffect(() => {
    if (disabled) setOpen(false)
  }, [disabled])
  function choose(option: SelectOption) {
    if (disabled || option.disabled) return
    if (value === undefined) setInternal(option.value)
    onChange?.(option.value)
    setOpen(false)
  }
  return (
    <View {...props}>
      <Button size={size} variant="ghost" disabled={disabled} accessibilityLabel={accessibilityLabel ?? label ?? placeholder}
        accessibilityHint={accessibilityHint} accessibilityState={{ expanded: open }} onPress={() => setOpen(true)}>
        {options.find(option => option.value === selected)?.label ?? placeholder}
      </Button>
      <Dialog open={open && !disabled} onClose={() => setOpen(false)} title={label ?? placeholder}>
        {options.map(option => (
          <Button key={option.value} variant="ghost" size={size} disabled={option.disabled}
            accessibilityState={{ selected: option.value === selected }} onPress={() => choose(option)}>
            {option.label}
          </Button>
        ))}
      </Dialog>
    </View>
  )
}
