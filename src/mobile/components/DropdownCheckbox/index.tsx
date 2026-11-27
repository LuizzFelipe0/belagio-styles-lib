import { useEffect, useState } from 'react'
import { Pressable, Text, View, type ViewProps } from 'react-native'
import type { ComponentSize } from '../../../shared/component-types'
import { styles } from '../../internal/styles'
import { useMobileTheme } from '../../theme'
import { Button } from '../Button'
import { Dialog } from '../Dialog'

export type DropdownCheckboxSize = ComponentSize
export interface DropdownCheckboxOption {
  value: string
  label: string
  disabled?: boolean
}
export interface DropdownCheckboxProps extends ViewProps {
  options: DropdownCheckboxOption[]
  value?: string[]
  defaultValue?: string[]
  size?: DropdownCheckboxSize
  label?: string
  placeholder?: string
  disabled?: boolean
  onChange?: (values: string[]) => void
}
export function DropdownCheckbox({
  options, value, defaultValue = [], size = 'md', label, placeholder = 'Select options...',
  disabled = false, onChange, accessibilityLabel, accessibilityHint, ...props
}: DropdownCheckboxProps) {
  const { colors, fontFamily } = useMobileTheme()
  const [internal, setInternal] = useState(defaultValue)
  const [open, setOpen] = useState(false)
  const selected = value ?? internal
  useEffect(() => {
    if (disabled) setOpen(false)
  }, [disabled])
  function toggle(option: DropdownCheckboxOption) {
    if (disabled || option.disabled) return
    const next = selected.includes(option.value) ? selected.filter(item => item !== option.value) : [...selected, option.value]
    if (value === undefined) setInternal(next)
    onChange?.(next)
  }
  const text = options.filter(option => selected.includes(option.value)).map(option => option.label).join(', ')
  return (
    <View {...props}>
      <Button size={size} variant="ghost" disabled={disabled} accessibilityLabel={accessibilityLabel ?? label ?? placeholder}
        accessibilityHint={accessibilityHint} accessibilityState={{ expanded: open }} onPress={() => setOpen(true)}>
        {text || placeholder}
      </Button>
      <Dialog open={open && !disabled} onClose={() => setOpen(false)} title={label ?? placeholder}>
        {options.map(option => (
          <Pressable key={option.value} accessibilityRole="checkbox" accessibilityLabel={option.label}
            accessibilityState={{ checked: selected.includes(option.value), disabled: Boolean(option.disabled) }}
            disabled={option.disabled} onPress={() => toggle(option)}
            style={[styles.panel, { borderColor: colors.border, minHeight: 44 }, option.disabled && styles.disabled]}>
            <Text style={{ color: colors.text, fontFamily }}>{selected.includes(option.value) ? '☑' : '☐'} {option.label}</Text>
          </Pressable>
        ))}
      </Dialog>
    </View>
  )
}
