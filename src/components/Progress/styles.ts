import type React from 'react'
import { spacing, typography } from '../../tokens'

export const progressStyles = {
  root: (customStyle?: React.CSSProperties): React.CSSProperties => ({ width: '100%', ...customStyle }),
  track: {
    width: '100%',
    height: '1.875rem',
    overflow: 'hidden',
    borderRadius: spacing.radiusMd,
    backgroundColor: 'var(--belagio-progress-track, #E0E0E0)',
  } as React.CSSProperties,
  fill: (percent: number, fillColor?: string): React.CSSProperties => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: `${percent}%`,
    minWidth: percent > 0 && percent < 12 ? '4rem' : undefined,
    height: '100%',
    borderRadius: spacing.radiusLg,
    backgroundColor: fillColor ?? 'var(--belagio-progress-fill, #4CAF50)',
    transition: 'width 180ms ease',
  }),
  value: {
    padding: `0 ${spacing['2']}`,
    color: '#FFFFFF',
    fontFamily: typography.fontFamily,
    fontSize: typography.sizeSm,
    fontWeight: typography.weightBold,
    lineHeight: 1,
    whiteSpace: 'nowrap',
  } as React.CSSProperties,
}
