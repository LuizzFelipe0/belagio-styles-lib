import { createContext, useContext, useMemo, type ReactNode } from 'react'
import { colors, spacing as webSpacing, typography } from '../tokens'

// The web reset sets the design baseline to 10 px per rem.
const fromRem = (value: `${number}rem`): number => Number.parseFloat(value) * 10

export const spacing = Object.fromEntries(
  Object.entries(webSpacing).map(([name, value]) => [name, fromRem(value)]),
) as Readonly<Record<keyof typeof webSpacing, number>>

export const fontSizes = {
  sm: fromRem(typography.sizeSm),
  md: fromRem(typography.sizeMd),
  lg: fromRem(typography.sizeLg),
}

const defaultColors = {
  primary: colors.blue,
  error: colors.red,
  success: colors.green,
  surface: colors.surface,
  border: colors.border,
  text: colors.textPrimary,
  secondaryText: colors.textSecondary,
  onColor: colors.textOnColor,
}

type ThemeColors = Record<keyof typeof defaultColors, string>
interface MobileTheme {
  colors: ThemeColors
  fontFamily?: string
}

const ThemeContext = createContext<MobileTheme>({ colors: defaultColors })
export const useMobileTheme = () => useContext(ThemeContext)

export interface MobileThemeProviderProps {
  colors?: Partial<ThemeColors>
  fontFamily?: string
  children: ReactNode
}

export function MobileThemeProvider({ colors, fontFamily, children }: MobileThemeProviderProps) {
  const parent = useMobileTheme()
  const theme = useMemo(() => ({
    colors: { ...parent.colors, ...colors },
    fontFamily: fontFamily ?? parent.fontFamily,
  }), [parent, colors, fontFamily])
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}
