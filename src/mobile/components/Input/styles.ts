import { StyleSheet } from 'react-native'
import { spacing } from '../../tokens'

export const styles = StyleSheet.create({
  wrapper: { gap: spacing[1] },
  label: { fontWeight: '700' },
  input: { borderWidth: 1, borderRadius: spacing.radiusMd, minHeight: 44 },
  sm: { paddingVertical: spacing[2], paddingHorizontal: spacing[3] },
  md: { paddingVertical: spacing[2], paddingHorizontal: spacing[4] },
  lg: { paddingVertical: spacing[4], paddingHorizontal: spacing[5] },
  disabled: { opacity: 0.4 },
})
