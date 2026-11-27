import { StyleSheet } from 'react-native'
import { fontSizes, spacing } from '../theme'

export const styles = StyleSheet.create({
  base: { borderRadius: spacing.radiusLg },
  flat: { borderWidth: 1 },
  raised: { elevation: 2, shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.08, shadowRadius: 4 },
  elevated: { elevation: 5, shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.12, shadowRadius: 8 },
  sm: { padding: spacing[4] },
  md: { padding: spacing[6] },
  lg: { padding: spacing[8] },
  header: {
    flexDirection: 'row', alignItems: 'center', gap: spacing[3],
    borderBottomWidth: 1, marginBottom: spacing[4], paddingBottom: spacing[4],
  },
  icon: { width: 40, height: 40 },
  title: { fontSize: fontSizes.lg, fontWeight: '700', flexShrink: 1 },
  description: { fontSize: fontSizes.md },
  content: { gap: spacing[2] },
  disabled: { opacity: 0.4 },
  pressed: { opacity: 0.75 },
})
