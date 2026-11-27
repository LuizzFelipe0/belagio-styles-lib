import { fontSizes } from '../../shared/tokens/font-sizes'

export const typography = {
  // --- Font family ---
  fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",

  // --- weights ---
  weightRegular: 400,
  weightMedium:  500,
  weightBold:    700, // default weight (Montserrat Bold)

  // --- Size Scale in rem ---
  ...fontSizes,

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
