import type React from 'react'
import { semanticColors, spacing, typography } from '../../tokens'

export const formFieldStyles = {
  wrapper: { display: 'grid', gap: spacing['1'], width: '100%' } as React.CSSProperties,
  label: { color: semanticColors.text, fontFamily: typography.fontFamily, fontSize: typography.sizeSm, fontWeight: typography.weightBold } as React.CSSProperties,
  description: { color: 'var(--belagio-color-text-secondary, #3C3C43)', fontFamily: typography.fontFamily, fontSize: typography.sizeSm } as React.CSSProperties,
  error: { color: semanticColors.error, fontFamily: typography.fontFamily, fontSize: typography.sizeSm } as React.CSSProperties,
  visuallyHidden: { position: 'absolute', width: 1, height: 1, padding: 0, margin: -1, overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', border: 0 } as React.CSSProperties,
}
