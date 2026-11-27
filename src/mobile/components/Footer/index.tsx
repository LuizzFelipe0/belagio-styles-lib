import { View, type ViewProps } from 'react-native'
import { Content } from '../../internal/Content'
import { styles } from '../../internal/styles'
import { useMobileTheme } from '../../theme'

export interface FooterProps extends ViewProps {
  left?: string[]
  center?: string[]
  right?: string[]
  backgroundColor?: string
}
export function Footer({ left = [], center = [], right = [], backgroundColor, style, ...props }: FooterProps) {
  const { colors } = useMobileTheme()
  return (
    <View {...props} style={[styles.row, { padding: 16, backgroundColor: backgroundColor ?? colors.surface }, style]}>
      {[left, center, right].map((lines, slot) => (
        <View key={slot} style={styles.grow}>
          {lines.map((line, index) => <Content key={index} style={{ textAlign: (['left', 'center', 'right'] as const)[slot] }}>{line}</Content>)}
        </View>
      ))}
    </View>
  )
}
