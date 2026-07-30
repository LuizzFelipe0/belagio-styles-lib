import type React from 'react'
import { tokens } from '../../tokens'

export type CardVariant = keyof typeof cardStyles.variants

export const cardStyles = {

  base: {
    fontFamily:      tokens.typography.fontFamily,
    backgroundColor: tokens.colors.surface,
    borderRadius:    tokens.spacing.radiusLg,
    padding:         tokens.spacing['5'],
    transition:      'box-shadow 0.2s ease, transform 0.2s ease',
    width:           '100%',
  } as React.CSSProperties,

  variants: {
    flat: {
      boxShadow: 'none',
      border:    `1px solid ${tokens.colors.separator}`,
    } as React.CSSProperties,

    raised: {
      boxShadow: '0 1px 4px rgba(0, 0, 0, 0.08)',
      border:    'none',
    } as React.CSSProperties,

    elevated: {
      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.12)',
      border:    'none',
    } as React.CSSProperties,
  },

  states: {
    // Hover
    hovered: {
      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.12)',
      transform: 'translateY(-1px)',
    } as React.CSSProperties,

    focused: {
      outline:       `2px solid ${tokens.colors.blue}`,
      outlineOffset: '2px',
    } as React.CSSProperties,

    disabled: {
      opacity: 0.4,
      cursor:  'not-allowed',
    } as React.CSSProperties,
  },

  inner: {
    title: {
      fontWeight:   tokens.typography.weightBold,
      fontSize:     tokens.typography.sizeLg,
      color:        tokens.colors.textPrimary,
      marginBottom: tokens.spacing['2'],
      lineHeight:   tokens.typography.lineHeightTight,
    } as React.CSSProperties,

    description: {
      fontSize:   tokens.typography.sizeMd,
      color:      tokens.colors.textSecondary,
      lineHeight: tokens.typography.lineHeightNormal,
    } as React.CSSProperties,
  },

} as const