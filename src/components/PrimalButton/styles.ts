import type React from 'react'
import { tokens } from '../../tokens'


export type ButtonVariant = keyof typeof buttonStyles.variants
export type ButtonSize    = keyof typeof buttonStyles.sizes

export const buttonStyles = {

  base: {
    fontFamily:      tokens.typography.fontFamily,
    fontWeight:      tokens.typography.weightBold,
    borderRadius:    tokens.spacing.radiusMd,
    border:          'none',
    cursor:          'pointer',
    outline:         'none',
    transition:      'all 0.2s ease',
    display:         'inline-flex',
    alignItems:      'center',
    justifyContent:  'center',
    gap:             tokens.spacing['2'],
  } as React.CSSProperties,


  variants: {
    primary: {
      backgroundColor: tokens.colors.blue,
      color:           tokens.colors.textOnColor,
    } as React.CSSProperties,

    danger: {
      backgroundColor: tokens.colors.red,
      color:           tokens.colors.textOnColor,
    } as React.CSSProperties,

    success: {
      backgroundColor: tokens.colors.green,
      color:           tokens.colors.textOnColor,
    } as React.CSSProperties,

    ghost: {
      backgroundColor: 'transparent',
      color:           tokens.colors.blue,
      border:          `1px solid ${tokens.colors.blue}`,
    } as React.CSSProperties,
  },

  sizes: {
    sm: {
      padding:  `${tokens.spacing['2']} ${tokens.spacing['3']}`,
      fontSize: tokens.typography.sizeSm,
    } as React.CSSProperties,

    md: {
      padding:  `${tokens.spacing['3']} ${tokens.spacing['5']}`,
      fontSize: tokens.typography.sizeMd,
    } as React.CSSProperties,

    lg: {
      padding:  `${tokens.spacing['4']} ${tokens.spacing['6']}`,
      fontSize: tokens.typography.sizeLg,
    } as React.CSSProperties,
  },

  states: {
    hovered: {
      filter: 'brightness(0.92)',
    } as React.CSSProperties,

    focused: {
      outline:       `1px solid ${tokens.colors.blue}`,
      outlineOffset: '1px',
    } as React.CSSProperties,

    disabled: {
      opacity: 0.4,
      cursor:  'not-allowed',
      filter:  'none',
    } as React.CSSProperties,
  },

} as const