import { cloneElement, type ReactElement } from 'react'
import { Text, View } from 'react-native'
import { styles } from '../../internal/styles'
import { useMobileTheme } from '../../theme'

interface FieldControlProps {
  accessibilityLabel?: string
  accessibilityHint?: string
  'aria-invalid'?: boolean
}
export interface FormFieldProps {
  label: string
  children: ReactElement<FieldControlProps>
  description?: string
  required?: boolean
  error?: string
}
export function FormField({ label, children, description, required = false, error }: FormFieldProps) {
  const { colors, fontFamily } = useMobileTheme()
  const hint = [children.props.accessibilityHint, description, required ? 'Required' : undefined, error].filter(Boolean).join('. ')
  return (
    <View style={styles.stack}>
      <Text style={{ color: colors.text, fontFamily, fontWeight: '700' }}>{label}{required ? ' *' : ''}</Text>
      {cloneElement(children, {
        accessibilityLabel: children.props.accessibilityLabel ?? label,
        accessibilityHint: hint || undefined,
        'aria-invalid': Boolean(error) || children.props['aria-invalid'],
      })}
      {description && <Text style={{ color: colors.secondaryText, fontFamily }}>{description}</Text>}
      {error && <Text accessibilityRole="alert" accessibilityLiveRegion="polite" style={{ color: colors.error, fontFamily }}>{error}</Text>}
    </View>
  )
}
