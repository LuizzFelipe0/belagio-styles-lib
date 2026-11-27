import type React from 'react'
import { semanticColors, tokens } from '../../tokens'


import type { ComponentSize as ButtonSize, ButtonVariant } from '../../../shared/component-types'

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
      backgroundColor: semanticColors.primary,
      color:           tokens.colors.textOnColor,
    } as React.CSSProperties,

    danger: {
      backgroundColor: semanticColors.error,
      color:           tokens.colors.textOnColor,
    } as React.CSSProperties,

    success: {
      backgroundColor: semanticColors.success,
      color:           tokens.colors.textOnColor,
    } as React.CSSProperties,

    ghost: {
      backgroundColor: 'transparent',
      color:           semanticColors.primary,
      border:          `1px solid ${semanticColors.primary}`,
    } as React.CSSProperties,
  },

  sizes: {
    sm: {
      padding:  `${tokens.spacing['2']} ${tokens.spacing['3']}`,
      fontSize: tokens.typography.sizeSm,
    } as React.CSSProperties,

    md: {
      boxSizing: 'border-box',
      height:    '42px',
      minHeight: '42px',
      padding:  `0 ${tokens.spacing['5']}`,
      fontSize: tokens.typography.sizeMd,
    } as React.CSSProperties,

    lg: {
      padding:  `${tokens.spacing['4']} ${tokens.spacing['6']}`,
      fontSize: tokens.typography.sizeLg,
    } as React.CSSProperties,
  },

  states: {
    hovered: {
      filter: 'brightness(0.82)',
    } as React.CSSProperties,

    focused: {
      
      outlineOffset: '1px',
    } as React.CSSProperties,

    disabled: {
      opacity: 0.4,
      cursor:  'not-allowed',
      filter:  'none',
    } as React.CSSProperties,
  },

} as const

export const getButtonStyle = ({ variant, size, disabled, loading, hovered, focused, customStyle }: {
  variant: ButtonVariant
  size: ButtonSize
  disabled: boolean
  loading: boolean
  hovered: boolean
  focused: boolean
  customStyle?: React.CSSProperties
}): React.CSSProperties => {
  const isInert = disabled || loading
  return {
    ...buttonStyles.base,
    ...buttonStyles.variants[variant],
    ...buttonStyles.sizes[size],
    ...(!isInert && hovered ? buttonStyles.states.hovered : {}),
    ...(focused ? buttonStyles.states.focused : {}),
    ...(isInert ? buttonStyles.states.disabled : {}),
    ...customStyle,
  }
}
