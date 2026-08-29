// Main entry point for belagio-styles-lib.

// --- Components ---
export type { ButtonProps } from './components/Button'
export { Button, DeleteButton, UpdateButton, AddButton } from './components/Button'

export type { InputProps } from './components/Input'
export { Input, SearchInput, PasswordInput, EmailInput } from './components/Input'

export type { CardProps } from './components/Card'
export { PrimalCard, ProfileCard, NotificationCard } from './components/Card'

export type { HeaderProps } from './components/Header'
export { Header } from './components/Header'

// --- Tokens (design system) ---
export { tokens, colors, typography, spacing } from './tokens'
export type { ColorToken, TypographyToken, SpacingToken } from './tokens'

// --- Global Styles ---
export { injectGlobalStyles } from './styles/global'