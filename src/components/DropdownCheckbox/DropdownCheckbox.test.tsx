import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { DropdownCheckbox, type DropdownCheckboxOption } from './index'

const options: DropdownCheckboxOption[] = [
  { value: 'design', label: 'Design' },
  { value: 'engineering', label: 'Engineering' },
  { value: 'operations', label: 'Operations', disabled: true },
]

describe('DropdownCheckbox', () => {
  it('opens the options panel and shows the placeholder when nothing is selected', () => {
    render(<DropdownCheckbox options={options} aria-label="Teams" />)

    const trigger = screen.getByRole('button', { name: 'Teams' })
    expect(trigger).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('checkbox', { name: 'Design' })).not.toBeInTheDocument()

    fireEvent.click(trigger)
    expect(trigger).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByText('Select options...')).toBeInTheDocument()
    expect(screen.getByRole('checkbox', { name: 'Design' })).toBeVisible()
  })

  it('updates its uncontrolled selection and reports the selected values', () => {
    const onChange = vi.fn()
    render(<DropdownCheckbox options={options} label="Teams" onChange={onChange} />)

    fireEvent.click(screen.getByRole('button', { name: /Teams/ }))
    const design = screen.getByRole('checkbox', { name: 'Design' })
    fireEvent.click(design)

    expect(design).toBeChecked()
    expect(screen.getByRole('button', { name: /Design/ })).toHaveTextContent('Design')
    expect(onChange).toHaveBeenLastCalledWith(['design'])

    fireEvent.click(design)
    expect(design).not.toBeChecked()
    expect(onChange).toHaveBeenLastCalledWith([])
  })

  it('supports an initial selection and disabled options', () => {
    render(<DropdownCheckbox options={options} defaultValue={['engineering']} label="Teams" />)

    fireEvent.click(screen.getByRole('button', { name: /Teams/ }))
    expect(screen.getByRole('checkbox', { name: 'Engineering' })).toBeChecked()
    expect(screen.getByRole('checkbox', { name: 'Operations' })).toBeDisabled()
  })

  it('supports controlled values', () => {
    const onChange = vi.fn()
    const { rerender } = render(
      <DropdownCheckbox options={options} value={[]} label="Teams" onChange={onChange} />,
    )

    fireEvent.click(screen.getByRole('button', { name: /Teams/ }))
    fireEvent.click(screen.getByRole('checkbox', { name: 'Design' }))
    expect(onChange).toHaveBeenCalledWith(['design'])
    expect(screen.getByRole('checkbox', { name: 'Design' })).not.toBeChecked()

    rerender(<DropdownCheckbox options={options} value={['design']} label="Teams" onChange={onChange} />)
    expect(screen.getByRole('checkbox', { name: 'Design' })).toBeChecked()
  })

  it('closes on Escape and returns focus to the trigger', () => {
    render(<DropdownCheckbox options={options} aria-label="Teams" />)

    const trigger = screen.getByRole('button', { name: 'Teams' })
    fireEvent.click(trigger)
    fireEvent.focus(screen.getByRole('checkbox', { name: 'Design' }))
    fireEvent.keyDown(screen.getByRole('checkbox', { name: 'Design' }), { key: 'Escape' })

    expect(trigger).toHaveAttribute('aria-expanded', 'false')
    expect(trigger).toHaveFocus()
  })

  it('closes when the user clicks outside and cannot open while disabled', () => {
    const { rerender } = render(<DropdownCheckbox options={options} aria-label="Teams" />)

    fireEvent.click(screen.getByRole('button', { name: 'Teams' }))
    fireEvent.mouseDown(document.body)
    expect(screen.getByRole('button', { name: 'Teams' })).toHaveAttribute('aria-expanded', 'false')

    rerender(<DropdownCheckbox options={options} aria-label="Teams" disabled />)
    const trigger = screen.getByRole('button', { name: 'Teams' })
    expect(trigger).toBeDisabled()
    fireEvent.click(trigger)
    expect(trigger).toHaveAttribute('aria-expanded', 'false')
  })
})
