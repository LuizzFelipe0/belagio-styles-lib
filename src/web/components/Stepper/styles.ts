import type React from 'react'
import { semanticColors, spacing, typography } from '../../tokens'

export const stepperStyles = {
  list: { display: 'flex', padding: 0, margin: 0, listStyle: 'none', fontFamily: typography.fontFamily } as React.CSSProperties,
  step: (active: boolean): React.CSSProperties => ({ position: 'relative', display: 'grid', flex: 1, justifyItems: 'center', gap: spacing['2'], minWidth: 0, color: active ? semanticColors.primary : 'var(--belagio-color-text-secondary, #3C3C43)' }),
  marker: (active: boolean): React.CSSProperties => ({ position: 'relative', zIndex: 1, display: 'grid', flex: '0 0 2.4rem', width: '2.4rem', height: '2.4rem', placeItems: 'center', border: `1px solid ${active ? semanticColors.primary : semanticColors.border}`, borderRadius: '50%', backgroundColor: active ? semanticColors.primary : semanticColors.surface, color: active ? '#FFFFFF' : 'var(--belagio-color-text-secondary, #3C3C43)', fontSize: typography.sizeSm }),
  content: { display: 'grid', gap: spacing['1'], justifyItems: 'center', textAlign: 'center' } as React.CSSProperties,
  connector: (complete: boolean): React.CSSProperties => ({ position: 'absolute', zIndex: 0, top: '1.1rem', left: 'calc(50% + 1.2rem)', width: 'calc(100% - 2.4rem)', height: '2px', backgroundColor: complete ? semanticColors.primary : semanticColors.border }),
}
