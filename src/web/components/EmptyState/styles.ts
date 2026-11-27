import type React from 'react'
import { semanticColors, spacing, typography } from '../../tokens'

export const emptyStateStyles = {
  root: (customStyle?: React.CSSProperties): React.CSSProperties => ({ display: 'grid', justifyItems: 'center', gap: spacing['3'], padding: spacing['6'], textAlign: 'center', color: semanticColors.text, fontFamily: typography.fontFamily, ...customStyle }),
  title: { fontSize: typography.sizeLg } as React.CSSProperties,
  description: { color: 'var(--belagio-color-text-secondary, #3C3C43)' } as React.CSSProperties,
}
