import { colors } from '../../shared/tokens/colors'
import { semanticColors } from './semantic-colors'
import { typography } from './typography'
import { spacing } from '../../shared/tokens/spacing'

export const tokens = {
  colors,
  semanticColors,
  typography,
  spacing,
} as const

export { colors, semanticColors, typography, spacing }
export type { ColorToken } from '../../shared/tokens/colors'
export type { SemanticColorToken } from './semantic-colors'
export type { TypographyToken } from './typography'
export type { SpacingToken } from '../../shared/tokens/spacing'
