// components/PrimalInput/styles.ts
// Define todos os objetos de estilo do PrimalInput.
// Unidades: rem para tudo. Exceção: border e outline usam px.

import type React from 'react'
import { tokens } from '../../tokens'

export type InputSize = keyof typeof inputStyles.sizes

export const inputStyles = {

  // Wrapper: empilha label + input em coluna com espaçamento fixo
  wrapper: {
    display:       'flex',
    flexDirection: 'column',
    gap:           tokens.spacing['1'],
    width:         '100%',
  } as React.CSSProperties,

  label: {
    fontFamily:  tokens.typography.fontFamily,
    fontWeight:  tokens.typography.weightBold,
    fontSize:    tokens.typography.sizeSm,
    color:       tokens.colors.textSecondary,
    userSelect:  'none',
  } as React.CSSProperties,

  base: {
    fontFamily:   tokens.typography.fontFamily,
    fontWeight:   tokens.typography.weightRegular,
    borderRadius: tokens.spacing.radiusMd,
    border:       `1px solid ${tokens.colors.border}`,
    backgroundColor: tokens.colors.surface,
    color:        tokens.colors.textPrimary,
    outline:      'none',
    transition:   'border-color 0.2s ease, outline 0.2s ease',
    width:        '100%',
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
    // Hover suaviza a borda para dar feedback visual antes do foco
    hovered: {
      borderColor: tokens.colors.textTertiary,
    } as React.CSSProperties,

    // Foco destaca a borda e adiciona anel de acessibilidade
    focused: {
      borderColor:   tokens.colors.blue,
      outline:       `2px solid ${tokens.colors.blue}`,
      outlineOffset: '1px',
    } as React.CSSProperties,

    disabled: {
      opacity:         0.4,
      cursor:          'not-allowed',
      backgroundColor: tokens.colors.backgroundSecondary,
    } as React.CSSProperties,
  },

} as const