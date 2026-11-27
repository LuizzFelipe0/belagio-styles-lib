import type React from 'react'
import { semanticColors, spacing, typography } from '../../tokens'

export type AlertTone = 'info' | 'success' | 'warning' | 'error'

const tones: Record<AlertTone, { color: string; background: string; border: string }> = {
  info: { color: semanticColors.primary, background: 'var(--belagio-color-info-surface, #F2F2F7)', border: semanticColors.primary },
  success: { color: 'var(--belagio-color-success-text, #26734D)', background: 'var(--belagio-color-success-surface, #EAF8F0)', border: semanticColors.success },
  warning: { color: 'var(--belagio-color-warning-text, #8A4B00)', background: 'var(--belagio-color-warning-surface, #FFF5E5)', border: semanticColors.warning },
  error: { color: 'var(--belagio-color-error-text, #9B0000)', background: 'var(--belagio-color-error-surface, #FDECEC)', border: semanticColors.error },
}

export const alertStyles = {
  root: (tone: AlertTone, customStyle?: React.CSSProperties): React.CSSProperties => ({
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: spacing['3'],
    padding: spacing['4'],
    border: `1px solid ${tones[tone].border}`,
    borderRadius: spacing.radiusMd,
    color: tones[tone].color,
    backgroundColor: tones[tone].background,
    fontFamily: typography.fontFamily,
    ...customStyle,
  }),
  content: { display: 'grid', gap: spacing['1'], minWidth: 0 } as React.CSSProperties,
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
