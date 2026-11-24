import React, { useId, useRef, useState } from 'react'
import { tokens } from '../../tokens'

export interface InfoButtonProps {
  /** Text or content shown above the info button. */
  description: React.ReactNode
  /** Accessible name for the icon button. */
  label?: string
  /** Color used for the icon and circular border while hovered or focused. */
  hoverColor?: string
  className?: string
  style?: React.CSSProperties
}

export const InfoButton = ({
  description,
  label = 'Mais informações',
  hoverColor = tokens.colors.blue,
  className,
  style,
}: InfoButtonProps) => {
  const tooltipId = useId()
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [hovered, setHovered] = useState(false)
  const [focused, setFocused] = useState(false)
  const [pinned, setPinned] = useState(false)

  const isOpen = hovered || focused || pinned

  return (
    <span
      style={{
        position: 'relative',
        display: 'inline-flex',
        verticalAlign: 'middle',
        lineHeight: 1,
      }}
    >
      <button
        ref={buttonRef}
        type="button"
        className={className}
        aria-label={label}
        aria-describedby={tooltipId}
        aria-expanded={isOpen}
        aria-controls={tooltipId}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onClick={() => setPinned((open) => !open)}
        onKeyDown={(event) => {
          if (event.key === 'Escape') {
            setPinned(false)
            buttonRef.current?.blur()
          }
        }}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '18px',
          height: '18px',
          minWidth: '18px',
          padding: 0,
          border: `1px solid ${tokens.colors.textTertiary}`,
          borderRadius: '50%',
          backgroundColor: tokens.colors.background,
          color: tokens.colors.textSecondary,
          fontFamily: tokens.typography.fontFamily,
          fontSize: '12px',
          fontWeight: tokens.typography.weightBold,
          fontStyle: 'normal',
          lineHeight: 1,
          cursor: 'help',
          transition: 'color 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease',
          ...(isOpen
            ? { color: hoverColor, borderColor: hoverColor }
            : {}),
          ...style,
        }}
      >
        i
      </button>

      <span
        id={tooltipId}
        role="tooltip"
        style={{
          position: 'absolute',
          zIndex: 10,
          left: '50%',
          bottom: 'calc(100% + 8px)',
          transform: `translate(-50%, ${isOpen ? '0' : '4px'})`,
          width: 'max-content',
          maxWidth: '280px',
          padding: '8px 10px',
          border: `1px solid ${tokens.colors.separator}`,
          borderRadius: tokens.spacing.radiusSm,
          backgroundColor: tokens.colors.surface,
          color: tokens.colors.textSecondary,
          boxShadow: '0 4px 14px rgba(20, 33, 59, 0.12)',
          fontFamily: tokens.typography.fontFamily,
          fontSize: tokens.typography.sizeSm,
          fontWeight: tokens.typography.weightRegular,
          lineHeight: 1.45,
          whiteSpace: 'normal',
          textAlign: 'left',
          opacity: isOpen ? 1 : 0,
          visibility: isOpen ? 'visible' : 'hidden',
          pointerEvents: 'none',
          transition: 'opacity 0.15s ease, transform 0.15s ease, visibility 0.15s ease',
        }}
      >
        {description}
      </span>
    </span>
  )
}
