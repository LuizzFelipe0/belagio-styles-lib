export const typography = {
  // --- Font family ---
  fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",

  // --- weights ---
  weightRegular: 400,
  weightMedium:  500,
  weightBold:    700, // default weight (Montserrat Bold)

  // --- Size Scale in rem ---
  sizeXs:  '1.0rem',
  sizeSm:  '1.2rem', 
  sizeMd:  '1.4rem', 
  sizeLg:  '1.6rem', 
  sizeXl:  '2.0rem',
  size2xl: '2.4rem', 
  size3xl: '3.2rem',

  // --- Line heights  ---
  lineHeightTight:  1.2, 
  lineHeightNormal: 1.5, 
  lineHeightLoose:  1.8,

  // --- Letter spacings ---
  letterSpacingTight:  '-0.02em', 
  letterSpacingNormal: '0em',
  letterSpacingWide:   '0.04em',  
} as const

export type TypographyToken = keyof typeof typography