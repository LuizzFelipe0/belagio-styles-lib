import { StyleSheet } from 'react-native'
import { spacing } from '../../tokens'

export const styles = StyleSheet.create({
  backdrop: { flex: 1, backgroundColor: 'rgba(0,0,0,0.45)' },
  center: { flex: 1, justifyContent: 'center', padding: spacing[4] },
  panel: { borderRadius: spacing.radiusLg, padding: spacing[4], maxHeight: '90%', gap: spacing[3] },
  header: { flexDirection: 'row', alignItems: 'center', gap: spacing[3] },
  title: { flex: 1, fontWeight: '700', fontSize: 20 },
  close: { minWidth: 44, minHeight: 44, alignItems: 'center', justifyContent: 'center' },
})
