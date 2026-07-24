import { colors }     from './colors'
import { typography } from './typography'
import { spacing }    from './spacing'

export const tokens = {
  colors,
  typography,
  spacing,
} as const

export { colors, typography, spacing }
export type { ColorToken }     from './colors'
export type { TypographyToken } from './typography'
export type { SpacingToken }   from './spacing'