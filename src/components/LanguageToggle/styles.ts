import type React from 'react'
import { tokens } from '../../tokens'

export type LanguageToggleSize = 'sm' | 'md'

export const languageToggleStyles = {
  root: {
    position: 'relative',
    display: 'inline-block',
    fontFamily: tokens.typography.fontFamily,
  } as React.CSSProperties,

  trigger: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: tokens.spacing['3'],
    minWidth: '15.5rem',
    border: `1px solid ${tokens.colors.border}`,
    borderRadius: tokens.spacing.radiusMd,
    backgroundColor: tokens.colors.surface,
    color: tokens.colors.textPrimary,
    fontFamily: tokens.typography.fontFamily,
    fontWeight: tokens.typography.weightMedium,
    cursor: 'pointer',
    transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
  } as React.CSSProperties,

  sizes: {
    sm: {
      minHeight: '3.6rem',
      padding: `0 ${tokens.spacing['3']}`,
      fontSize: tokens.typography.sizeSm,
    } as React.CSSProperties,
    md: {
      minHeight: '4.2rem',
      padding: `0 ${tokens.spacing['4']}`,
      fontSize: tokens.typography.sizeMd,
    } as React.CSSProperties,
  },

  triggerContent: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: tokens.spacing['2'],
  } as React.CSSProperties,

  chevron: {
    width: '0.8rem',
    height: '0.8rem',
    borderRight: `1.5px solid ${tokens.colors.textSecondary}`,
    borderBottom: `1.5px solid ${tokens.colors.textSecondary}`,
    transform: 'rotate(45deg) translateY(-2px)',
    transition: 'transform 0.2s ease',
    flexShrink: 0,
  } as React.CSSProperties,

  chevronOpen: {
    transform: 'rotate(225deg) translate(-1px, -1px)',
  } as React.CSSProperties,

  menu: {
    position: 'absolute',
    zIndex: 20,
    top: 'calc(100% + 0.6rem)',
    left: 0,
    right: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '0.3rem',
    padding: '0.5rem',
    margin: 0,
    listStyle: 'none',
    border: `1px solid ${tokens.colors.separator}`,
    borderRadius: tokens.spacing.radiusMd,
    backgroundColor: tokens.colors.surface,
    boxShadow: '0 8px 24px rgba(20, 33, 59, 0.14)',
    boxSizing: 'border-box',
  } as React.CSSProperties,

  option: {
    display: 'flex',
    alignItems: 'center',
    gap: tokens.spacing['3'],
    width: '100%',
    padding: `${tokens.spacing['2']} ${tokens.spacing['3']}`,
    border: 0,
    borderRadius: '0.6rem',
    backgroundColor: 'transparent',
    color: tokens.colors.textPrimary,
    textAlign: 'left',
    fontFamily: tokens.typography.fontFamily,
    fontSize: tokens.typography.sizeSm,
    cursor: 'pointer',
  } as React.CSSProperties,

  optionSelected: {
    backgroundColor: tokens.colors.backgroundSecondary,
    color: tokens.colors.blue,
    fontWeight: tokens.typography.weightBold,
  } as React.CSSProperties,

  flag: {
    display: 'block',
    width: '2.2rem',
    height: '1.6rem',
    flexShrink: 0,
    borderRadius: '0.2rem',
    overflow: 'hidden',
    boxShadow: '0 0 0 1px rgba(20, 33, 59, 0.12)',
  } as React.CSSProperties,

  disabled: {
    opacity: 0.45,
    cursor: 'not-allowed',
  } as React.CSSProperties,
} as const
