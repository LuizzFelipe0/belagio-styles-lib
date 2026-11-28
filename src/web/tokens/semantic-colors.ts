import { colors } from '../../shared/tokens/colors'

export const semanticColors = {
  primary: `var(--belagio-color-primary, ${colors.blue})`,
  surface: `var(--belagio-color-surface, ${colors.surface})`,
  border: `var(--belagio-color-border, ${colors.border})`,
  text: `var(--belagio-color-text, ${colors.textPrimary})`,
  success: `var(--belagio-color-success, ${colors.green})`,
  warning: `var(--belagio-color-warning, ${colors.orange})`,
  error: `var(--belagio-color-error, ${colors.red})`,
} as const

export type SemanticColorToken = keyof typeof semanticColors
