import type React from 'react'
import { tokens } from '../../tokens'

export const footerStyles = {

  root: {
    display:         'flex',
    alignItems:      'center',
    justifyContent:  'space-between',
    backgroundColor: tokens.colors.background,
    borderTop:       `1px solid ${tokens.colors.separator}`,
    padding:         `${tokens.spacing['4']} ${tokens.spacing['6']}`,
    minHeight:       '6.4rem',
    width:           '100%',
    boxSizing:       'border-box',
  } as React.CSSProperties,

  slot: {
    display:        'flex',
    flexDirection:  'column',
    justifyContent: 'center',
    flex:           1,
    gap:            tokens.spacing['1'],
  } as React.CSSProperties,

  slotCenter: {
    justifyContent: 'center',
  } as React.CSSProperties,

  slotRight: {
    justifyContent: 'flex-end',
  } as React.CSSProperties,

  text: {
    fontFamily: tokens.typography.fontFamily,
    fontSize:   tokens.typography.sizeSm,
    color:      tokens.colors.textTertiary,
    whiteSpace: 'nowrap',
  } as React.CSSProperties,

} as const