import React, { useEffect, useId, useRef } from 'react'
import { Button } from '../Button'
import { dialogStyles } from './styles'

export interface DialogProps {
  open: boolean
  onClose: () => void
  title: React.ReactNode
  children: React.ReactNode
  description?: React.ReactNode
  closeLabel?: string
  closeButtonColor?: string
  initialFocusRef?: React.RefObject<HTMLElement>
  className?: string
}

const focusableSelector = 'a[href], button:not(:disabled), input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"])'

export function Dialog({ open, onClose, title, children, description, closeLabel = 'Close dialog', closeButtonColor = '#000000', initialFocusRef, className }: DialogProps) {
  const dialogRef = useRef<HTMLDivElement>(null)
  const onCloseRef = useRef(onClose)
  onCloseRef.current = onClose
  const titleId = useId()
  const descriptionId = useId()

  useEffect(() => {
    if (!open) return
    const previouslyFocused = document.activeElement instanceof HTMLElement ? document.activeElement : null
    const dialog = dialogRef.current
    const initialTarget = initialFocusRef?.current ?? dialog?.querySelector<HTMLElement>(focusableSelector) ?? dialog
    initialTarget?.focus()

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        onCloseRef.current()
        return
      }
      if (event.key !== 'Tab' || !dialog) return

      const focusable = Array.from(dialog.querySelectorAll<HTMLElement>(focusableSelector)).filter((element) => element.getAttribute('aria-hidden') !== 'true')
      if (!focusable.length) {
        event.preventDefault()
        dialog.focus()
        return
      }
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && (document.activeElement === first || !dialog.contains(document.activeElement))) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && (document.activeElement === last || !dialog.contains(document.activeElement))) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      previouslyFocused?.focus()
    }
  }, [open, initialFocusRef])

  if (!open) return null

  return (
    <div style={dialogStyles.backdrop}>
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={description ? descriptionId : undefined}
        tabIndex={-1}
        className={className}
        style={dialogStyles.dialog}
      >
        <header style={dialogStyles.header}>
          <div>
            <h2 id={titleId} style={dialogStyles.title}>{title}</h2>
            {description && <p id={descriptionId} style={dialogStyles.description}>{description}</p>}
          </div>
          <Button variant="ghost" size="sm" aria-label={closeLabel} onClick={onClose} style={dialogStyles.closeButton(closeButtonColor)}>×</Button>
        </header>
        <div style={dialogStyles.body}>{children}</div>
      </div>
    </div>
  )
}
