import type React from 'react'

export const serviceDocumentHeaderStyles = {

  root: {
    display:             'grid',
    gridTemplateColumns: 'auto 1fr auto',
    alignItems:          'center',
    gap:                 '12px',
    paddingBottom:       '8px',
    marginBottom:        '6px',
    borderBottom:        '2px solid #1a1a1a',
  } as React.CSSProperties,

  logoSection: {
    display:    'flex',
    alignItems: 'center',
    gap:        '8px',
  } as React.CSSProperties,

  logo: {
    width:     '8rem',
    height:    '6rem',
    objectFit: 'contain',
  } as React.CSSProperties,

  companyName: {
    fontSize:   '1.4rem',
    fontWeight: 700,
    color:      '#1a1a1a',
    lineHeight: 1.1,
  } as React.CSSProperties,

  tagline: {
    marginTop:     '2px',
    fontSize:      '8pt',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.5px',
    color:         '#555555',
  } as React.CSSProperties,

  contactInfo: {
    textAlign:  'right' as const,
    lineHeight: 1.6,
    color:      '#333333',
    fontSize:   '9pt',
  } as React.CSSProperties,

} as const