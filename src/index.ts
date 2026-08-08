// Main entry point for belagio-styles-lib.

// --- Components ---
export type { PrimalButtonProps } from './components/Button'
export { PrimalButton, DeleteButton, UpdateButton, AddButton } from './components/Button'

export type { InputProps } from './components/Input'
export { Input, SearchInput, PasswordInput, EmailInput } from './components/Input'

export type { PrimalCardProps } from './components/Card'
export { PrimalCard, ProfileCard, NotificationCard } from './components/Card'

export type { HeaderProps } from './components/Header'
export { Header } from './components/Header'

// --- Tokens (design system) ---
export { tokens, colors, typography, spacing } from './tokens'
export type { ColorToken, TypographyToken, SpacingToken } from './tokens'

// --- Global Styles ---
export { injectGlobalStyles } from './styles/global'