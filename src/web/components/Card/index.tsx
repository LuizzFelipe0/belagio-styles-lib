import React, { useState } from 'react'
import type { ComponentSize as CardSize, CardVariant } from '../../../shared/component-types'
import { cardStyles, getCardStyle } from './styles'


export interface CardProps {
  variant?: CardVariant
  size?: CardSize
  hasHeader?: boolean
  title?: string
  headerIcon?: string
  headerIconAlt?: string
  description?: string
  children?: React.ReactNode
  onClick?: () => void
  disabled?: boolean
  'aria-label'?: string
}


const CardHeader = ({
  title,
  icon,
  iconAlt = '',
}: {
  title?: string
  icon?: string
  iconAlt?: string
}) => (
  <div style={cardStyles.header.root}>
    {icon && (
      <img src={icon} alt={iconAlt} style={cardStyles.header.icon} />
    )}
    {title && (
      <span style={cardStyles.header.title}>{title}</span>
    )}
  </div>
)


export const Card = ({
  variant    = 'raised',
  size       = 'sm',
  hasHeader  = false,
  title,
  headerIcon,
  headerIconAlt = '',
  description,
  children,
  onClick,
  disabled   = false,
  'aria-label': ariaLabel,
}: CardProps) => {
  const [hovered, setHovered] = useState(false)
  const [focused, setFocused] = useState(false)

  const isClickable = Boolean(onClick) && !disabled

  return (
    <div
      style={getCardStyle({ variant, size, clickable: isClickable, disabled, hovered, focused })}
      role={isClickable ? 'button' : undefined}
      tabIndex={isClickable ? 0 : undefined}
      aria-disabled={disabled || undefined}
      aria-label={ariaLabel}
      onClick={isClickable ? onClick : undefined}
      onKeyDown={isClickable ? (e) => { if (e.key === 'Enter') onClick?.() } : undefined}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    >
      {hasHeader && (
        <CardHeader
          title={title}
          icon={headerIcon}
          iconAlt={headerIconAlt}
        />
      )}
      {/*
        Body priority:
        1. children  — full custom content
        2. default   — icon + title (when no header) + description
      */}
      {children ?? (
        <>
          {!hasHeader && title && (
            <div style={cardStyles.inner.title}>{title}</div>
          )}
          {description && (
            <div style={cardStyles.inner.description}>{description}</div>
          )}
        </>
      )}
    </div>
  )
}
