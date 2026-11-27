import { StyleSheet } from 'react-native'
import { spacing } from '../theme'

export const styles = StyleSheet.create({
  base: { alignItems: 'center', justifyContent: 'center', borderRadius: spacing.radiusMd, minHeight: 44 },
  sm: { paddingVertical: spacing[2], paddingHorizontal: spacing[3] },
  md: { paddingVertical: spacing[2], paddingHorizontal: spacing[5] },
  lg: { paddingVertical: spacing[4], paddingHorizontal: spacing[6] },
  label: { fontWeight: '700' },
  pressed: { opacity: 0.75 },
  disabled: { opacity: 0.4 },
})
