import type React from 'react'
import { tokens } from '../../tokens'

export const dropdownCheckboxStyles = {
  wrapper: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    gap: tokens.spacing['1'],
    width: '100%',
  } as React.CSSProperties,

  label: {
    fontFamily: tokens.typography.fontFamily,
    fontWeight: tokens.typography.weightBold,
    fontSize: tokens.typography.sizeSm,
    color: tokens.colors.textSecondary,
    userSelect: 'none',
  } as React.CSSProperties,

  trigger: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: tokens.spacing['3'],
    width: '100%',
    border: `1px solid ${tokens.colors.border}`,
    borderRadius: tokens.spacing.radiusMd,
    backgroundColor: tokens.colors.surface,
    color: tokens.colors.textPrimary,
    fontFamily: tokens.typography.fontFamily,
    fontWeight: tokens.typography.weightRegular,
    textAlign: 'left',
    cursor: 'pointer',
    outline: 'none',
    transition: 'border-color 0.2s ease, background-color 0.2s ease',
  } as React.CSSProperties,

  sizes: {
    sm: {
      padding: `${tokens.spacing['2']} ${tokens.spacing['3']}`,
      fontSize: tokens.typography.sizeSm,
    } as React.CSSProperties,
    md: {
      padding: `${tokens.spacing['3']} ${tokens.spacing['4']}`,
      fontSize: tokens.typography.sizeMd,
    } as React.CSSProperties,
    lg: {
      padding: `${tokens.spacing['4']} ${tokens.spacing['5']}`,
      fontSize: tokens.typography.sizeLg,
    } as React.CSSProperties,
  },

  states: {
    hovered: {
      borderColor: tokens.colors.textTertiary,
    } as React.CSSProperties,
    focused: {
      borderColor: tokens.colors.textPrimary,
    } as React.CSSProperties,
    disabled: {
      opacity: 0.4,
      cursor: 'not-allowed',
      backgroundColor: tokens.colors.backgroundSecondary,
    } as React.CSSProperties,
  },

  value: {
    minWidth: 0,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  } as React.CSSProperties,

  placeholder: {
    color: tokens.colors.textTertiary,
  } as React.CSSProperties,

  chevron: {
    width: '0.8rem',
    height: '0.8rem',
    flexShrink: 0,
    borderRight: `1.5px solid ${tokens.colors.textSecondary}`,
    borderBottom: `1.5px solid ${tokens.colors.textSecondary}`,
    transform: 'rotate(45deg) translateY(-0.2rem)',
    transition: 'transform 0.2s ease',
  } as React.CSSProperties,

  chevronOpen: {
    transform: 'rotate(225deg) translate(-0.1rem, -0.1rem)',
  } as React.CSSProperties,

  panel: {
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    zIndex: 20,
    display: 'flex',
    flexDirection: 'column',
    gap: tokens.spacing['1'],
    maxHeight: '24rem',
    overflowY: 'auto',
    marginTop: tokens.spacing['1'],
    padding: tokens.spacing['2'],
    border: `1px solid ${tokens.colors.separator}`,
    borderRadius: tokens.spacing.radiusLg,
    backgroundColor: tokens.colors.surface,
    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.12)',
  } as React.CSSProperties,

  option: {
    display: 'flex',
    alignItems: 'center',
    gap: tokens.spacing['3'],
    minHeight: '3.6rem',
    padding: `${tokens.spacing['2']} ${tokens.spacing['3']}`,
    borderRadius: tokens.spacing.radiusMd,
    color: tokens.colors.textPrimary,
    fontFamily: tokens.typography.fontFamily,
    fontSize: tokens.typography.sizeMd,
    cursor: 'pointer',
  } as React.CSSProperties,

  optionDisabled: {
    opacity: 0.45,
    cursor: 'not-allowed',
  } as React.CSSProperties,

  checkbox: {
    width: '1.6rem',
    height: '1.6rem',
    flexShrink: 0,
    margin: 0,
    accentColor: tokens.colors.blue,
    cursor: 'inherit',
  } as React.CSSProperties,
} as const
