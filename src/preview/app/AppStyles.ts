import type React from 'react'

export const layout = {
  page: {
    backgroundColor: '#F2F2F7',
    minHeight:       '100vh',
    padding:         '4.0rem',
    fontFamily:      "'Montserrat', sans-serif",
  } as React.CSSProperties,

  pageTitle: {
    fontSize:     '3.2rem',
    fontWeight:   700,
    color:        '#000000',
    marginBottom: '0.8rem',
  } as React.CSSProperties,

  subtitle: {
    fontSize:     '1.4rem',
    color:        '#8d8c8c',
    marginBottom: '6.4rem',
  } as React.CSSProperties,

  section: {
    marginBottom: '6.4rem',
  } as React.CSSProperties,

  sectionTitle: {
    fontSize:      '2.0rem',
    fontWeight:    700,
    color:         '#000000',
    marginBottom:  '3.2rem',
    paddingBottom: '1.2rem',
    borderBottom:  '1px solid #a7a7a7',
  } as React.CSSProperties,

  groupLabel: {
    fontSize:      '1.2rem',
    color:        '#8d8c8c',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.08em',
    marginBottom:  '1.2rem',
  } as React.CSSProperties,

  group: {
    marginBottom: '3.2rem',
  } as React.CSSProperties,

  row: {
    display:    'flex',
    flexWrap:   'wrap' as const,
    alignItems: 'center',
    gap:        '1.6rem',
  } as React.CSSProperties,

  column: {
    display:       'flex',
    flexDirection: 'column' as const,
    gap:           '1.6rem',
    maxWidth:      '36rem',
  } as React.CSSProperties,
}