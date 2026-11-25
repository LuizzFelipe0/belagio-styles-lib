import type React from 'react'
import { semanticColors, spacing, typography } from '../../tokens'

export const dialogStyles = {
  backdrop: { position: 'fixed', inset: 0, zIndex: 1000, display: 'grid', placeItems: 'center', padding: spacing['4'], backgroundColor: 'rgba(0, 0, 0, 0.45)' } as React.CSSProperties,
  dialog: { width: 'min(100%, 48rem)', maxHeight: 'min(90vh, 72rem)', overflow: 'auto', padding: spacing['5'], border: `1px solid ${semanticColors.border}`, borderRadius: spacing.radiusLg, backgroundColor: semanticColors.surface, color: semanticColors.text, fontFamily: typography.fontFamily, boxShadow: '0 16px 48px rgba(0, 0, 0, 0.2)' } as React.CSSProperties,
  header: { display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: spacing['3'] } as React.CSSProperties,
  title: { fontSize: typography.sizeLg } as React.CSSProperties,
  description: { marginTop: spacing['1'] } as React.CSSProperties,
  body: { marginTop: spacing['4'] } as React.CSSProperties,
  closeButton: (color: string): React.CSSProperties => ({
    flex: '0 0 auto',
    width: '3.2rem',
    minWidth: '3.2rem',
    height: '3.2rem',
    padding: 0,
    color,
    border: `1px solid ${color}`,
  }),
}
