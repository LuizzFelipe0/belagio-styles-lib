import type React from 'react'
import { tokens } from '../../tokens'

export const tableStyles = {

  header: {
    root: {
      display:        'flex',
      alignItems:     'center',
      justifyContent: 'space-between',
      marginBottom:   tokens.spacing['4'],
    } as React.CSSProperties,

    title: {
      fontFamily: tokens.typography.fontFamily,
      fontWeight: tokens.typography.weightBold,
      fontSize:   tokens.typography.sizeLg,
      color:      tokens.colors.textPrimary,
    } as React.CSSProperties,

    actions: {
      display:    'flex',
      alignItems: 'center',
      gap:        tokens.spacing['2'],
    } as React.CSSProperties,
  },

  wrapper: {
    width:        '100%',
    overflowX:    'auto',
    borderRadius: tokens.spacing.radiusLg,
    border:       `1px solid ${tokens.colors.separator}`,
  } as React.CSSProperties,

  table: {
    width:          '100%',
    borderCollapse: 'collapse',
    fontFamily:     tokens.typography.fontFamily,
  } as React.CSSProperties,

  thead: {
    backgroundColor: tokens.colors.textPrimary,
  } as React.CSSProperties,

  th: {
    fontFamily:    tokens.typography.fontFamily,
    fontWeight:    tokens.typography.weightBold,
    fontSize:      tokens.typography.sizeSm,
    color:         tokens.colors.textOnColor,
    padding:       `${tokens.spacing['3']} ${tokens.spacing['4']}`,
    textTransform: 'uppercase' as const,
    letterSpacing: '0.06em',
    whiteSpace:    'nowrap',
    userSelect:    'none',
  } as React.CSSProperties,

  tr: {
    borderBottom: `1px solid ${tokens.colors.separator}`,
  } as React.CSSProperties,

  td: {
    fontFamily:    tokens.typography.fontFamily,
    fontSize:      tokens.typography.sizeMd,
    color:         tokens.colors.textPrimary,
    padding:       `${tokens.spacing['3']} ${tokens.spacing['4']}`,
    verticalAlign: 'middle',
  } as React.CSSProperties,

  emptyState: {
    textAlign: 'center' as const,
    padding:   `${tokens.spacing['10']} ${tokens.spacing['4']}`,
    color:     tokens.colors.textTertiary,
    fontSize:  tokens.typography.sizeMd,
  } as React.CSSProperties,

} as const