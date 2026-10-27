import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { EmailInput, Input, PasswordInput, SearchInput } from './index'

describe('Input', () => {
  it('renders a text input with the provided placeholder and value', () => {
    render(<Input aria-label="Name" placeholder="Your name" value="Alex" onChange={() => undefined} />)

    const input = screen.getByRole('textbox', { name: 'Name' })
    expect(input).toHaveAttribute('type', 'text')
    expect(input).toHaveAttribute('placeholder', 'Your name')
    expect(input).toHaveValue('Alex')
  })

  it('renders a visible label and reports changed values', () => {
    const onChange = vi.fn()
    render(<Input label="Email" onChange={onChange} />)

    const input = screen.getByRole('textbox')
    expect(screen.getByText('Email')).toBeInTheDocument()
    fireEvent.change(input, { target: { value: 'ana@example.com' } })
    expect(onChange).toHaveBeenCalledWith('ana@example.com')
  })

  it('disables the native input when requested', () => {
    render(<Input aria-label="Name" disabled />)
    expect(screen.getByRole('textbox', { name: 'Name' })).toBeDisabled()
  })

  it('applies focus styling', () => {
    render(<Input aria-label="Name" />)
    const input = screen.getByRole('textbox', { name: 'Name' })
    fireEvent.focus(input)
    expect(input.style.borderColor).not.toBe('')
  })

  it.each([
    ['SearchInput', SearchInput, 'search'],
    ['PasswordInput', PasswordInput, 'password'],
    ['EmailInput', EmailInput, 'email'],
  ])('%s configures the expected input type', (_name, Component, type) => {
    render(<Component aria-label="Campo" />)
    expect(screen.getByLabelText('Campo')).toHaveAttribute('type', type)
  })
})
