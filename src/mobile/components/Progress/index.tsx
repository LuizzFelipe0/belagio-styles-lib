import { Text, View, type ViewProps } from 'react-native'
import { useMobileTheme } from '../../theme'
import { styles } from './styles'

export interface ProgressProps extends ViewProps {
  value: number
  max?: number
  label: string
  fillColor?: string
  formatValue?: (value: number, max: number) => string
}
export function Progress({ value, max = 100, label, fillColor, formatValue, style, ...props }: ProgressProps) {
  const { colors, fontFamily } = useMobileTheme()
  const safeMax = Number.isFinite(max) && max > 0 ? max : 100
  const current = Number.isFinite(value) ? Math.min(Math.max(value, 0), safeMax) : 0
  const percent = Math.round(current / safeMax * 100)
  const text = formatValue?.(current, safeMax) ?? `${percent}%`
  return (
    <View {...props} accessible accessibilityRole="progressbar" accessibilityLabel={label}
      accessibilityValue={{ min: 0, max: safeMax, now: current, text }} style={[styles.track, style]}>
      <View style={[styles.fill, { width: `${percent}%`, backgroundColor: fillColor ?? colors.success }]}>
        {percent > 0 && <Text numberOfLines={1} style={{ color: colors.onColor, fontFamily }}>{text}</Text>}
      </View>
    </View>
  )
}
