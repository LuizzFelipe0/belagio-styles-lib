import React from 'react'
import { progressStyles } from './styles'

export interface ProgressProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'role' | 'aria-label'> {
  value: number
  max?: number
  label: string
  fillColor?: string
  formatValue?: (value: number, max: number) => string
}

export function Progress({ value, max = 100, label, fillColor, formatValue, style, ...props }: ProgressProps) {
  const safeMax = max > 0 ? max : 100
  const clampedValue = Math.min(Math.max(value, 0), safeMax)
  const percent = Math.round((clampedValue / safeMax) * 100)
  const accessibleValue = formatValue?.(clampedValue, safeMax) ?? `${percent}%`

  return (
    <div
      {...props}
      role="progressbar"
      aria-label={label}
      aria-valuemin={0}
      aria-valuemax={safeMax}
      aria-valuenow={clampedValue}
      aria-valuetext={accessibleValue}
      style={progressStyles.root(style)}
    >
      <div style={progressStyles.track}>
        <div style={progressStyles.fill(percent, fillColor)}>
          {percent > 0 && <span style={progressStyles.value}>{accessibleValue}</span>}
        </div>
      </div>
    </div>
  )
}
