import { ActivityIndicator, Pressable, Text, type PressableProps } from 'react-native'
import type { ButtonSize, ButtonVariant } from '../../components/Button/styles'
import { fontSizes, useMobileTheme } from '../theme'
import { styles } from './styles'

export interface ButtonProps extends Omit<PressableProps, 'children'> {
  children: string | number
  size?: ButtonSize
  variant?: ButtonVariant
  loading?: boolean
}

export function Button({
  children, size = 'md', variant = 'primary', disabled, loading = false,
  accessibilityLabel, accessibilityState, style, ...props
}: ButtonProps) {
  const { colors, fontFamily } = useMobileTheme()
  const inactive = Boolean(disabled || loading)
  const background = { primary: colors.primary, danger: colors.error, success: colors.success, ghost: 'transparent' }
  const foreground = variant === 'ghost' ? colors.primary : colors.onColor
  return (
    <Pressable
      {...props}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel ?? String(children)}
      accessibilityState={{ ...accessibilityState, disabled: inactive, busy: loading }}
      disabled={inactive}
      style={state => [
        styles.base, styles[size], { backgroundColor: background[variant] },
        variant === 'ghost' && { borderWidth: 1, borderColor: colors.primary },
        state.pressed && styles.pressed, inactive && styles.disabled,
        typeof style === 'function' ? style(state) : style,
      ]}
    >
      {loading ? <ActivityIndicator color={foreground} /> : (
        <Text style={[styles.label, { color: foreground, fontFamily, fontSize: fontSizes[size] }]}>{children}</Text>
      )}
    </Pressable>
  )
}
