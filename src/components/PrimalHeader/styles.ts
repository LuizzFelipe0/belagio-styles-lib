import type React from 'react'
import { tokens } from '../../tokens'

export const headerStyles = {

  root: {
    display:         'flex',
    alignItems:      'center',
    justifyContent:  'space-between',
    backgroundColor: tokens.colors.background,
    borderBottom:    `1px solid ${tokens.colors.separator}`,
    padding:         `0 ${tokens.spacing['6']}`,
    height:          '6.4rem',
    width:           '100%',
    boxSizing:       'border-box',
  } as React.CSSProperties,

  // Left slot: icon + title side by side
  left: {
    display:    'flex',
    alignItems: 'center',
    gap:        tokens.spacing['3'],
    flexShrink: 0,
  } as React.CSSProperties,

  icon: {
    width:        '3.2rem',
    height:       '3.2rem',
    objectFit:    'contain',
    display:      'block',
    flexShrink:   0,
  } as React.CSSProperties,

  title: {
    fontFamily:  tokens.typography.fontFamily,
    fontWeight:  tokens.typography.weightBold,
    fontSize:    tokens.typography.sizeLg,
    color:       tokens.colors.textPrimary,
    whiteSpace:  'nowrap',
  } as React.CSSProperties,

  // Right slot: optional text + optional buttons
  right: {
    display:    'flex',
    alignItems: 'center',
    gap:        tokens.spacing['3'],
    flexShrink: 0,
  } as React.CSSProperties,

  locationText: {
    fontFamily: tokens.typography.fontFamily,
    fontSize:   tokens.typography.sizeSm,
    color:      tokens.colors.textTertiary,
    whiteSpace: 'nowrap',
  } as React.CSSProperties,

} as const