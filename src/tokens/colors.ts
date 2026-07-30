export const colors = {
  // --- COLORS ---
  blue:  '#305CDE', 
  red:   '#CF0000 ',
  green: '#44CC83',
  orange: '#FF9500', 

  // --- Background ---
  background:      '#FFFFFF', 
  backgroundSecondary: '#F2F2F7', 
  surface:         '#FFFFFF', 

  // --- Text ---
  textPrimary:   '#000000', 
  textSecondary: '#3C3C43', 
  textTertiary:  '#9e9e9e', 
  textOnColor:   '#FFFFFF', 

  // --- Borders and Separators ---
  border:    '#c7c7c7', 
  separator: '#E5E5EA', 

  // --- Disabled state ---
  disabled: '#C7C7CC', 
} as const

export type ColorToken = keyof typeof colors