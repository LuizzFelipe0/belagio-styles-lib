import { createRef, useState } from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { Alert } from './Alert'
import { Dialog } from './Dialog'
import { EmptyState } from './EmptyState'
import { FormField } from './FormField'
import { Progress } from './Progress'
import { Stepper } from './Stepper'
import { Input } from './Input'
import { Select } from './Select'

describe('form controls and shared primitives', () => {
  it('connects FormField label, description, required state and error to a control', () => {
    render(
      <FormField label="Email" description="Used for updates" required error="Enter a valid email">
        <Input type="email" />
      </FormField>,
    )

    const input = screen.getByRole('textbox', { name: /Email/ })
    expect(input).toHaveAttribute('id')
    expect(input).toHaveAttribute('required')
    expect(input).toHaveAttribute('aria-invalid', 'true')
    expect(input.getAttribute('aria-describedby')).toContain('description')
    expect(input.getAttribute('aria-describedby')).toContain('error')
    expect(input).toHaveAttribute('aria-errormessage')
  })

  it('keeps native attributes, event handlers and refs available on Input and Select', () => {
    const inputRef = createRef<HTMLInputElement>()
    const selectRef = createRef<HTMLSelectElement>()
    const onKeyDown = vi.fn()
    const onChangeEvent = vi.fn()
    const options = [{ value: 'one', label: 'One' }]
    render(<>
      <Input ref={inputRef} name="email" autoComplete="email" onKeyDown={onKeyDown} onChangeEvent={onChangeEvent} aria-label="Email" />
      <Select ref={selectRef} name="choice" options={options} aria-label="Choice" />
    </>)

    fireEvent.keyDown(screen.getByRole('textbox', { name: 'Email' }), { key: 'a' })
    fireEvent.change(screen.getByRole('textbox', { name: 'Email' }), { target: { value: 'test@example.com' } })
    expect(onKeyDown).toHaveBeenCalledOnce()
    expect(onChangeEvent.mock.calls[0][0].target).toBe(inputRef.current)
    expect(inputRef.current).toBe(screen.getByRole('textbox', { name: 'Email' }))
    expect(selectRef.current).toBe(screen.getByRole('combobox', { name: 'Choice' }))
    expect(inputRef.current).toHaveAttribute('autocomplete', 'email')
    expect(selectRef.current).toHaveAttribute('name', 'choice')
  })

  it('marks the current step and exposes progress values', () => {
    render(<>
      <Stepper label="Recovery steps" activeStep={1} steps={[{ label: 'Select disk' }, { label: 'Choose files' }, { label: 'Recover' }]} />
      <Progress label="Scan progress" value={35} max={70} />
      <Progress label="Custom scan progress" value={80} fillColor="#9C27B0" />
    </>)
    const stepNavigation = screen.getByRole('navigation', { name: 'Recovery steps' })
    expect(stepNavigation.querySelector('[aria-current="step"]')).toHaveTextContent('Choose files')
    const connectors = stepNavigation.querySelectorAll('.belagio-stepper__connector')
    expect(connectors).toHaveLength(2)
    expect(connectors[0]).toHaveStyle({ backgroundColor: 'var(--belagio-color-primary, #305CDE)' })
    expect(connectors[1]).toHaveStyle({ backgroundColor: 'var(--belagio-color-border, #c7c7c7)' })
    const progress = screen.getByRole('progressbar', { name: 'Scan progress' })
    expect(progress).toHaveAttribute('aria-valuetext', '50%')
    expect(progress.querySelector('span')).toHaveTextContent('50%')
    expect(progress.firstElementChild?.firstElementChild).toHaveStyle({ width: '50%' })
    expect(screen.getByRole('progressbar', { name: 'Custom scan progress' }).firstElementChild?.firstElementChild).toHaveStyle({ backgroundColor: '#9C27B0' })
  })

  it('renders a dismissible alert using the shared button and an empty state', () => {
    const onClose = vi.fn()
    render(<>
      <Alert tone="warning" title="Partial result" onClose={onClose}>Some areas could not be checked.</Alert>
      <EmptyState title="No disks found" description="Connect a disk to continue." />
    </>)
    expect(screen.getByText('Some areas could not be checked.').closest('[role="status"]')).toHaveTextContent('Some areas could not be checked.')
    const dismissButton = screen.getByRole('button', { name: 'Dismiss message' })
    expect(dismissButton).toHaveStyle({ width: '3.2rem', minWidth: '3.2rem', height: '3.2rem' })
    fireEvent.click(dismissButton)
    expect(onClose).toHaveBeenCalledOnce()
    expect(screen.getByRole('heading', { name: 'No disks found' })).toBeInTheDocument()
  })

  it('handles Escape, traps focus and restores focus when Dialog closes', () => {
    const onClose = vi.fn()
    function Harness() {
      const [open, setOpen] = useState(false)
      return <>
        <button type="button" onClick={() => setOpen(true)}>Open dialog</button>
        <Dialog open={open} onClose={() => { onClose(); setOpen(false) }} title="Confirm" description="Check before continuing">
          <button type="button">Continue</button>
        </Dialog>
      </>
    }

    render(<Harness />)
    const opener = screen.getByRole('button', { name: 'Open dialog' })
    opener.focus()
    fireEvent.click(opener)
    expect(screen.getByRole('dialog')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Close dialog' })).toHaveFocus()
    expect(screen.getByRole('button', { name: 'Close dialog' })).toHaveStyle({ color: '#000000', border: '1px solid #000000' })
    fireEvent.keyDown(document, { key: 'Tab', shiftKey: true })
    expect(screen.getByRole('button', { name: 'Continue' })).toHaveFocus()
    fireEvent.keyDown(document, { key: 'Escape' })
    expect(onClose).toHaveBeenCalledOnce()
    expect(opener).toHaveFocus()
  })

  it('allows configuring the Dialog close button color', () => {
    render(<Dialog open onClose={() => undefined} title="Custom close" closeButtonColor="#7B2CBF">Content</Dialog>)
    expect(screen.getByRole('button', { name: 'Close dialog' })).toHaveStyle({ color: '#7B2CBF', border: '1px solid #7B2CBF' })
  })
})
