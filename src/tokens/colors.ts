export const colors = {
  // --- ACTION COLORS ---
  blue:  '#007AFF', 
  red:   '#FF3B30',
  green: '#34C759',
  orange: '#FF9500', 

  // --- Background ---
  background:      '#FFFFFF', 
  backgroundSecondary: '#F2F2F7', 
  surface:         '#FFFFFF', 

  // --- Text ---
  textPrimary:   '#000000', 
  textSecondary: '#3C3C43', 
  textTertiary:  '#8E8E93', 
  textOnColor:   '#FFFFFF', 

  // --- Borders and Separators ---
  border:    '#C6C6C8', 
  separator: '#E5E5EA', 

  // --- Disabled state ---
  disabled: '#C7C7CC', 
} as const

export type ColorToken = keyof typeof colors