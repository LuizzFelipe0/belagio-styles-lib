import { StyleSheet } from 'react-native'
import { spacing } from '../tokens'

export const styles = StyleSheet.create({
  stack: { gap: spacing[2] },
  row: { flexDirection: 'row', alignItems: 'center', gap: spacing[3], flexWrap: 'wrap' },
  panel: { padding: spacing[4], borderWidth: 1, borderRadius: spacing.radiusLg, gap: spacing[2] },
  heading: { fontWeight: '700', fontSize: 18 },
  grow: { flex: 1 },
  disabled: { opacity: 0.4 },
})
