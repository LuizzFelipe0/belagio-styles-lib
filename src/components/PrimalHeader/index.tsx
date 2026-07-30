import React from 'react'
import { headerStyles } from './styles'

export interface PrimalHeaderProps {
  icon?: string
  iconAlt?: string
  title?: string
  locationText?: string
  actions?: React.ReactNode
}

export const PrimalHeader = ({
  icon,
  iconAlt = '',
  title,
  locationText,
  actions,
}: PrimalHeaderProps) => {
  const hasLeft  = Boolean(icon || title)
  const hasRight = Boolean(locationText || actions)

  return (
    <header style={headerStyles.root}>

      {hasLeft && (
        <div style={headerStyles.left}>
          {icon && (
            <img src={icon} alt={iconAlt} style={headerStyles.icon} />
          )}
          {title && (
            <span style={headerStyles.title}>{title}</span>
          )}
        </div>
      )}

      {/* Spacer — pushes right slot to the edge when left slot is present */}
      {hasLeft && hasRight && <div style={{ flex: 1 }} />}

      {hasRight && (
        <div style={headerStyles.right}>
          {locationText && (
            <span style={headerStyles.locationText}>{locationText}</span>
          )}
          {actions}
        </div>
      )}

    </header>
  )
}