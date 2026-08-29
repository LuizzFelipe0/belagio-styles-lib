import type React from 'react'

export const serviceDocumentSectionStyles = {

  root: {
    marginBottom:    0,
    border:          '1px solid #aaaaaa',
    borderTop:       'none',
    breakInside:     'avoid',
    pageBreakInside: 'avoid',
  } as React.CSSProperties,

  title: {
    padding:       '4px 8px',
    background:    '#c8c8c8',
    fontSize:      '9pt',
    fontWeight:    700,
    textAlign:     'center' as const,
    textTransform: 'uppercase' as const,
    color:         '#1a1a1a',
    borderBottom:  '1px solid #aaaaaa',
  } as React.CSSProperties,

  table: {
    root: {
      width:          '100%',
      borderCollapse: 'collapse',
      background:     '#ffffff',
      fontSize:       '9pt',
    } as React.CSSProperties,

    thead: {
      background: '#e8e8e8',
    } as React.CSSProperties,

    th: {
      padding:    '5px 6px',
      fontSize:   '8.5pt',
      fontWeight: 700,
      color:      '#1a1a1a',
      border:     '1px solid #aaaaaa',
      textAlign:  'left' as const,
    } as React.CSSProperties,

    td: {
      padding:       '4px 6px',
      color:         '#1a1a1a',
      border:        '1px solid #dddddd',
      verticalAlign: 'middle' as const,
    } as React.CSSProperties,
  },

} as const