import { forwardRef, useState } from 'react'
import { Text, TextInput, View, type TextInputProps } from 'react-native'
import type { ComponentSize as InputSize } from '../../../shared/component-types'
import { fontSizes } from '../../tokens'
import { useMobileTheme } from '../../theme'
import { styles } from './styles'

export interface InputProps extends Omit<TextInputProps, 'onChange'> {
  size?: InputSize
  label?: string
  disabled?: boolean
  onChange?: (value: string) => void
}

export const Input = forwardRef<TextInput, InputProps>(function Input({
  size = 'md', label, disabled = false, editable = true, readOnly, onChange, onChangeText,
  onFocus, onBlur, accessibilityLabel, accessibilityState, style, ...props
}, ref) {
  const { colors, fontFamily } = useMobileTheme()
  const [focused, setFocused] = useState(false)
  const canEdit = editable && !disabled && !readOnly
  return (
    <View style={styles.wrapper}>
      {label ? <Text style={[styles.label, { color: colors.secondaryText, fontFamily, fontSize: fontSizes.sm }]}>{label}</Text> : null}
      <TextInput
        {...props}
        ref={ref}
        editable={canEdit}
        accessibilityLabel={accessibilityLabel ?? label}
        accessibilityState={{ ...accessibilityState, disabled: !canEdit }}
        onChangeText={text => {
          onChange?.(text)
          onChangeText?.(text)
        }}
        onFocus={event => {
          setFocused(true)
          onFocus?.(event)
        }}
        onBlur={event => {
          setFocused(false)
          onBlur?.(event)
        }}
        style={[styles.input, styles[size], {
          backgroundColor: colors.surface, borderColor: focused ? colors.primary : colors.border,
          color: colors.text, fontFamily, fontSize: fontSizes[size],
        }, disabled && styles.disabled, style]}
      />
    </View>
  )
})

export const SearchInput = (props: InputProps) => <Input returnKeyType="search" {...props} />
export const PasswordInput = (props: InputProps) => <Input secureTextEntry {...props} />
export const EmailInput = (props: InputProps) => <Input keyboardType="email-address" autoCapitalize="none" autoComplete="email" {...props} />
