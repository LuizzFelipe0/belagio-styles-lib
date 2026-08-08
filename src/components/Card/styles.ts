import type React from 'react'
import { tokens } from '../../tokens'

export type CardVariant = keyof typeof cardStyles.variants
export type CardSize    = keyof typeof cardStyles.sizes

export const cardStyles = {

  base: {
    fontFamily:      tokens.typography.fontFamily,
    backgroundColor: tokens.colors.surface,
    borderRadius:    tokens.spacing.radiusLg,
    transition:      'box-shadow 0.2s ease, transform 0.2s ease',
    width:           '100%',
    boxSizing:       'border-box',
  } as React.CSSProperties,

  sizes: {
    sm: { padding: tokens.spacing['4'] } as React.CSSProperties,
    md: { padding: tokens.spacing['12'] } as React.CSSProperties,
    lg: { padding: tokens.spacing['24'] } as React.CSSProperties,
  },

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

  // Card header (rendered when hasHeader=true)
  header: {
    root: {
      display:       'flex',
      alignItems:    'center',
      gap:           tokens.spacing['3'],
      marginBottom:  tokens.spacing['4'],
      paddingBottom: tokens.spacing['4'],
      borderBottom:  `1px solid ${tokens.colors.separator}`,
    } as React.CSSProperties,

    icon: {
      width:     '4.0rem',
      height:    '4.0rem',
      objectFit: 'contain',
      flexShrink: 0,
    } as React.CSSProperties,

    title: {
      fontWeight:  tokens.typography.weightBold,
      fontSize:    tokens.typography.sizeLg,
      color:       tokens.colors.textPrimary,
      lineHeight:  tokens.typography.lineHeightTight,
    } as React.CSSProperties,
  },

  inner: {
    icon: {
      width:        '2.4rem',
      height:       '2.4rem',
      objectFit:    'contain',
      marginBottom: tokens.spacing['3'],
      display:      'block',
    } as React.CSSProperties,

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