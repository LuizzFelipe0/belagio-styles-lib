import type React from 'react'

export const serviceDocStyles = {

  wrapper: {
    width:                  '210mm',
    minHeight:              '297mm',
    margin:                 '0 auto',
    padding:                '12mm 14mm',
    boxSizing:              'border-box',
    background:             '#ffffff',
    color:                  '#1a1a1a',
    fontFamily:             'Arial, "Helvetica Neue", Helvetica, sans-serif',
    fontSize:               '9pt',
    lineHeight:             1.4,
    WebkitPrintColorAdjust: 'exact',
    printColorAdjust:       'exact',
  } as React.CSSProperties,

  titleBar: {
    padding:      '5px 8px',
    marginBottom: '6px',
    background:   '#d0d0d0',
    border:       '1px solid #aaaaaa',
    fontSize:     '10pt',
    fontWeight:   700,
    color:        '#1a1a1a',
  } as React.CSSProperties,

  footer: {
    marginTop: '8px',
    fontSize:  '8pt',
    color:     '#555555',
    textAlign: 'center' as const,
  } as React.CSSProperties,

} as const