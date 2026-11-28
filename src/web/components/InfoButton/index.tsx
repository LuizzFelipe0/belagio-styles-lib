import React, { useId, useRef, useState } from 'react'
import { tokens } from '../../tokens'
import { infoButtonStyles } from './styles'

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
      style={infoButtonStyles.wrapper}
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
        style={infoButtonStyles.button(isOpen, hoverColor, style)}
      >
        i
      </button>

      <span
        id={tooltipId}
        role="tooltip"
        style={infoButtonStyles.tooltip(isOpen)}
      >
        {description}
      </span>
    </span>
  )
}
