import { colors, semanticColors } from './colors'
import { typography } from './typography'
import { spacing }    from './spacing'

export const tokens = {
  colors,
  semanticColors,
  typography,
  spacing,
} as const

export { colors, semanticColors, typography, spacing }
export type { ColorToken, SemanticColorToken } from './colors'
export type { TypographyToken } from './typography'
export type { SpacingToken }   from './spacing'
