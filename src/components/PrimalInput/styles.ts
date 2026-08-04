import type React from 'react'
import { tokens } from '../../tokens'

export type InputSize = keyof typeof inputStyles.sizes

export const inputStyles = {

  wrapper: {
    display:       'flex',
    flexDirection: 'column',
    gap:           tokens.spacing['1'],
    width:         '100%',
  } as React.CSSProperties,

  label: {
    fontFamily: tokens.typography.fontFamily,
    fontWeight: tokens.typography.weightBold,
    fontSize:   tokens.typography.sizeSm,
    color:      tokens.colors.textSecondary,
    userSelect: 'none',
  } as React.CSSProperties,

  base: {
    fontFamily:      tokens.typography.fontFamily,
    fontWeight:      tokens.typography.weightRegular,
    borderRadius:    tokens.spacing.radiusMd,
    border:          `1px solid ${tokens.colors.border}`,
    backgroundColor: tokens.colors.surface,
    color:           tokens.colors.textPrimary,
    outline:         'none',
    width:           '100%',
    transition:      'border-color 0.2s ease',
  } as React.CSSProperties,

  sizes: {
    sm: {
      padding:  `${tokens.spacing['2']} ${tokens.spacing['3']}`,
      fontSize: tokens.typography.sizeSm,
    } as React.CSSProperties,

    md: {
      padding:  `${tokens.spacing['3']} ${tokens.spacing['4']}`,
      fontSize: tokens.typography.sizeMd,
    } as React.CSSProperties,

    lg: {
      padding:  `${tokens.spacing['4']} ${tokens.spacing['5']}`,
      fontSize: tokens.typography.sizeLg,
    } as React.CSSProperties,
  },

  states: {
    hovered: {
      borderColor: tokens.colors.textTertiary,
      cursor:      'pointer',
    } as React.CSSProperties,

    focused: {
      borderColor: tokens.colors.textTertiary,
    } as React.CSSProperties,

    disabled: {
      opacity:         0.4,
      cursor:          'not-allowed',
      backgroundColor: tokens.colors.backgroundSecondary,
    } as React.CSSProperties,
  },

} as const