import React from 'react'
import { getHeaderIconStyle, getHeaderRootStyle, headerSpacerStyle, headerStyles } from './styles'
import { colors } from '../../tokens'

export interface HeaderProps {
  className?: string
  style?: React.CSSProperties
  iconStyle?: React.CSSProperties
  icon?: string
  iconAlt?: string
  title?: string
  locationText?: string
  actions?: React.ReactNode
  backgroundColor?: string
}

export const Header = ({
  className,
  style,
  iconStyle,
  icon,
  iconAlt = '',
  title,
  locationText,
  actions,
  backgroundColor = colors.background,
}: HeaderProps) => {
  const hasLeft  = Boolean(icon || title)
  const hasRight = Boolean(locationText || actions)

  return (
    <header className={className} style={getHeaderRootStyle(backgroundColor, style)}>

      {hasLeft && (
        <div style={headerStyles.left}>
          {icon && (
            <img src={icon} alt={iconAlt} style={getHeaderIconStyle(iconStyle)} />
          )}
          {title && (
            <span style={headerStyles.title}>{title}</span>
          )}
        </div>
      )}

      {/* Spacer — pushes right slot to the edge when left slot is present */}
      {hasLeft && hasRight && <div style={headerSpacerStyle} />}

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
