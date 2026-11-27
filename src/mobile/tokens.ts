import { fontSizes as fontScale } from '../shared/tokens/font-sizes'
import { spacing as spacingScale } from '../shared/tokens/spacing'

// The design scale uses 10 layout units per rem.
const fromRem = (value: `${number}rem`): number => Number.parseFloat(value) * 10

export const spacing = Object.fromEntries(
  Object.entries(spacingScale).map(([name, value]) => [name, fromRem(value)]),
) as Readonly<Record<keyof typeof spacingScale, number>>

export const fontSizes = {
  sm: fromRem(fontScale.sizeSm),
  md: fromRem(fontScale.sizeMd),
  lg: fromRem(fontScale.sizeLg),
}
