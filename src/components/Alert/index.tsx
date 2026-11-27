import React from 'react'
import { Button } from '../Button'
import { alertStyles, type AlertTone } from './styles'

export type { AlertTone } from './styles'

export interface AlertProps {
  children: React.ReactNode
  title?: React.ReactNode
  tone?: AlertTone
  role?: 'alert' | 'status' | 'note'
  onClose?: () => void
  closeLabel?: string
  className?: string
  style?: React.CSSProperties
}

export function Alert({ children, title, tone = 'info', role, onClose, closeLabel = 'Dismiss message', className, style }: AlertProps) {
  return (
    <div role={role ?? (tone === 'error' ? 'alert' : 'status')} className={className} style={alertStyles.root(tone, style)}>
      <div style={alertStyles.content}>
        {title && <strong>{title}</strong>}
        <div>{children}</div>
      </div>
      {onClose && <Button variant="ghost" size="sm" aria-label={closeLabel} onClick={onClose} style={alertStyles.closeButton('currentColor')}>×</Button>}
    </div>
  )
}
