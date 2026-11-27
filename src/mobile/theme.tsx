import { createContext, useContext, useMemo, type ReactNode } from 'react'
import { colors } from '../shared/tokens/colors'

const defaultColors = {
  primary: colors.blue,
  error: colors.red,
  success: colors.green,
  warning: colors.orange,
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
