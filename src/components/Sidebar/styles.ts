import type { CSSProperties } from 'react'
import { tokens } from '../../tokens'

export const sidebarStyles = {
  root: {
    backgroundColor: tokens.colors.background,
    borderRight: `1px solid ${tokens.colors.separator}`,
    color: tokens.colors.textPrimary,
    fontFamily: tokens.typography.fontFamily,
  } satisfies CSSProperties,
  brandMark: {
    background: `linear-gradient(145deg, ${tokens.colors.blue}, #758df0)`,
    borderRadius: tokens.spacing.radiusLg,
    boxShadow: '0 0.6rem 1.4rem rgba(48, 92, 222, 0.22)',
    color: tokens.colors.textOnColor,
    fontSize: tokens.typography.sizeXl,
    fontWeight: tokens.typography.weightBold,
  } satisfies CSSProperties,
  item: {
    backgroundColor: 'transparent',
    border: 0,
    borderRadius: tokens.spacing.radiusLg,
    color: tokens.colors.textSecondary,
    fontFamily: tokens.typography.fontFamily,
    fontSize: tokens.typography.sizeSm,
    fontWeight: tokens.typography.weightMedium,
  } satisfies CSSProperties,
  itemActive: {
    backgroundColor: '#edf2ff',
    color: tokens.colors.blue,
    fontWeight: tokens.typography.weightBold,
  } satisfies CSSProperties,
  badge: {
    backgroundColor: '#fff0e5',
    borderRadius: tokens.spacing.radiusMd,
    color: tokens.colors.orange,
    fontSize: tokens.typography.sizeXs,
    fontWeight: tokens.typography.weightBold,
  } satisfies CSSProperties,
  statusText: {
    color: tokens.colors.textTertiary,
    fontSize: tokens.typography.sizeXs,
  } satisfies CSSProperties,
  profileInitials: {
    backgroundColor: tokens.colors.backgroundSecondary,
    borderRadius: tokens.spacing.radiusFull,
    color: tokens.colors.blue,
    fontSize: tokens.typography.sizeXs,
    fontWeight: tokens.typography.weightBold,
  } satisfies CSSProperties,
  profileName: {
    color: tokens.colors.textPrimary,
    fontSize: tokens.typography.sizeXs,
    fontWeight: tokens.typography.weightBold,
  } satisfies CSSProperties,
} as const
