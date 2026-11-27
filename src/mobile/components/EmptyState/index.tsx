import type { ReactNode } from 'react'
import { View, type ViewProps } from 'react-native'
import { Content } from '../../internal/Content'
import { styles } from '../../internal/styles'

export interface EmptyStateProps extends ViewProps {
  title: ReactNode
  description?: ReactNode
  action?: ReactNode
}
export function EmptyState({ title, description, action, style, ...props }: EmptyStateProps) {
  return (
    <View {...props} style={[styles.stack, style]}>
      <Content accessibilityRole="header" style={styles.heading}>{title}</Content>
      <Content>{description}</Content>
      {action}
    </View>
  )
}
