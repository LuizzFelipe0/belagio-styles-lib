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

/** Semantic colors can be overridden by setting these CSS custom properties. */
export const semanticColors = {
  primary: 'var(--belagio-color-primary, #305CDE)',
  surface: 'var(--belagio-color-surface, #FFFFFF)',
  border: 'var(--belagio-color-border, #c7c7c7)',
  text: 'var(--belagio-color-text, #000000)',
  success: 'var(--belagio-color-success, #44CC83)',
  warning: 'var(--belagio-color-warning, #FF9500)',
  error: 'var(--belagio-color-error, #CF0000)',
} as const

export type SemanticColorToken = keyof typeof semanticColors
