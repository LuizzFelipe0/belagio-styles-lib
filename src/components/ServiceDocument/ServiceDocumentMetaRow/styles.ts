import type React from 'react'

export const serviceDocumentMetaRowStyles = {

  root: {
    display:      'grid',
    gap:          0,
    marginBottom: 0,
    border:       '1px solid #aaaaaa',
    borderBottom: 'none',
  } as React.CSSProperties,

  box: {
    padding:      '4px 6px',
    borderRight:  '1px solid #aaaaaa',
    borderBottom: '1px solid #aaaaaa',
    background:   '#ffffff',
  } as React.CSSProperties,

  boxLast: {
    borderRight: 'none',
  } as React.CSSProperties,

  label: {
    display:      'block',
    fontSize:     '7.5pt',
    fontWeight:   700,
    color:        '#1a1a1a',
    marginBottom: '1px',
  } as React.CSSProperties,

  value: {
    fontSize:   '9pt',
    fontWeight: 400,
    color:      '#1a1a1a',
  } as React.CSSProperties,

} as const