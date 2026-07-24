// Spacing scale 
// All values are at 'rem' (base: html { font-size: 62.5% } → 1rem = 10px).
// Use for para padding, margin, gap and layout dimensions.

export const spacing = {
  // --- Base ---
  '1':  '0.4rem',  
  '2':  '0.8rem',  
  '3':  '1.2rem',  
  '4':  '1.6rem',  
  '5':  '2.0rem',  
  '6':  '2.4rem', 
  '8':  '3.2rem',  
  '10': '4.0rem',  
  '12': '4.8rem',  
  '16': '6.4rem',  

  // --- Border radius  ---
  radiusSm:   '0.8rem',  
  radiusMd:   '1.2rem', 
  radiusLg:   '1.4rem',  
  radiusXl:   '2.0rem',  
  radiusFull: '9999rem', 
} as const

export type SpacingToken = keyof typeof spacing