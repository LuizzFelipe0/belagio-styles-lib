// Main entry point for belagio-styles-lib.

// --- Components ---
export type { PrimalButtonProps } from './components/PrimalButton'
export { PrimalButton, DeleteButton, UpdateButton, AddButton } from './components/PrimalButton'

export type { PrimalInputProps } from './components/PrimalInput'
export { PrimalInput, SearchInput, PasswordInput, EmailInput } from './components/PrimalInput'

export type { PrimalCardProps } from './components/PrimalCard'
export { PrimalCard, ProfileCard, NotificationCard } from './components/PrimalCard'

export type { PrimalHeaderProps } from './components/PrimalHeader'
export { PrimalHeader } from './components/PrimalHeader'

// --- Tokens (design system) ---
export { tokens, colors, typography, spacing } from './tokens'
export type { ColorToken, TypographyToken, SpacingToken } from './tokens'

// --- Global Styles ---
export { injectGlobalStyles } from './styles/global'