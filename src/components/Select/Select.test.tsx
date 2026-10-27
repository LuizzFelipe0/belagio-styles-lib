import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { Select } from './index'

const options = [
  { value: 'draft', label: 'Draft' },
  { value: 'sent', label: 'Sent' },
]

describe('Select', () => {
  it('renders its options and selected controlled value', () => {
    render(<Select aria-label="Status" options={options} value="sent" onChange={() => undefined} />)

    const select = screen.getByRole('combobox', { name: 'Status' })
    expect(select).toHaveValue('sent')
    expect(screen.getByRole('option', { name: 'Draft' })).toHaveValue('draft')
    expect(screen.getByRole('option', { name: 'Sent' })).toHaveValue('sent')
  })

  it('supports an initial default value and reports changes', () => {
    const onChange = vi.fn()
    render(<Select options={options} defaultValue="draft" onChange={onChange} />)

    const select = screen.getByRole('combobox')
    expect(select).toHaveValue('draft')
    fireEvent.change(select, { target: { value: 'sent' } })
    expect(onChange).toHaveBeenCalledWith('sent')
  })

  it('renders its label and disabled state', () => {
    render(<Select options={options} label="Status" disabled />)

    expect(screen.getByText('Status')).toBeInTheDocument()
    expect(screen.getByRole('combobox')).toBeDisabled()
  })

  it('applies focus styling', () => {
    render(<Select options={options} aria-label="Status" />)
    const select = screen.getByRole('combobox', { name: 'Status' })
    fireEvent.focus(select)
    expect(select.style.borderColor).not.toBe('')
  })
})
