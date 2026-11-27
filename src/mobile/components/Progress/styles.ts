import { StyleSheet } from 'react-native'
import { spacing } from '../../tokens'

export const styles = StyleSheet.create({
  track: { height: 30, borderRadius: spacing.radiusMd, overflow: 'hidden', backgroundColor: '#E0E0E0' },
  fill: { height: '100%', borderRadius: spacing.radiusMd, alignItems: 'center', justifyContent: 'center' },
})
