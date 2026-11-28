import type { ReactNode } from 'react'
import { View, type ViewProps } from 'react-native'
import { Content } from '../../internal/Content'
import { styles } from '../../internal/styles'
import { useMobileTheme } from '../../theme'
import { Button } from '../Button'

export type AlertTone = 'info' | 'success' | 'warning' | 'error'
export interface AlertProps extends ViewProps {
  children: ReactNode
  title?: ReactNode
  tone?: AlertTone
  onClose?: () => void
  closeLabel?: string
}
export function Alert({ children, title, tone = 'info', onClose, closeLabel = 'Dismiss message', style, ...props }: AlertProps) {
  const { colors } = useMobileTheme()
  const color = { info: colors.primary, success: colors.success, warning: colors.warning, error: colors.error }[tone]
  return (
    <View {...props} accessibilityRole="alert" accessibilityLiveRegion={tone === 'error' ? 'assertive' : 'polite'}
      style={[styles.panel, { borderColor: color, backgroundColor: colors.surface }, style]}>
      {title != null && <Content style={[styles.heading, { color }]}>{title}</Content>}
      <Content>{children}</Content>
      {onClose && <Button variant="ghost" size="sm" accessibilityLabel={closeLabel} onPress={onClose}>×</Button>}
    </View>
  )
}
