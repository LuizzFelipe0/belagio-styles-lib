import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { AddButton, Button, DeleteButton, UpdateButton } from './index'
import { colors } from '../../tokens'

describe('Button', () => {
  it('renders its children with the default primary variant and medium size', () => {
    render(<Button>Salvar</Button>)

    const button = screen.getByRole('button', { name: 'Salvar' })
    expect(button).toBeEnabled()
    expect(button).toHaveStyle({ backgroundColor: colors.blue })
    expect(button.style.padding).not.toBe('')
  })

  it('calls onClick when activated', () => {
    const onClick = vi.fn()
    render(<Button onClick={onClick}>Salvar</Button>)

    fireEvent.click(screen.getByRole('button', { name: 'Salvar' }))
    expect(onClick).toHaveBeenCalledOnce()
  })

  it('disables the button and suppresses clicks while disabled or loading', () => {
    const onClick = vi.fn()
    const { rerender } = render(<Button disabled onClick={onClick}>Salvar</Button>)

    let button = screen.getByRole('button', { name: 'Salvar' })
    expect(button).toBeDisabled()
    expect(button).toHaveAttribute('aria-disabled', 'true')
    fireEvent.click(button)
    expect(onClick).not.toHaveBeenCalled()

    rerender(<Button loading onClick={onClick}>Salvar</Button>)
    button = screen.getByRole('button')
    expect(button).toBeDisabled()
    expect(button).toHaveAttribute('aria-busy', 'true')
    expect(button).toHaveTextContent('...')
    fireEvent.click(button)
    expect(onClick).not.toHaveBeenCalled()
  })

  it('applies hover and focus styles', () => {
    render(<Button>Salvar</Button>)
    const button = screen.getByRole('button', { name: 'Salvar' })

    fireEvent.mouseEnter(button)
    expect(button).toHaveStyle({ filter: 'brightness(0.82)' })
    fireEvent.focus(button)
    expect(button).toHaveStyle({ outlineOffset: '1px' })
    fireEvent.mouseLeave(button)
    expect(button).not.toHaveStyle({ filter: 'brightness(0.82)' })
  })

  it.each([
    ['DeleteButton', DeleteButton, colors.red],
    ['UpdateButton', UpdateButton, colors.blue],
    ['AddButton', AddButton, colors.green],
  ])('%s selects its intended variant', (_name, Component, backgroundColor) => {
    render(<Component>Continuar</Component>)
    expect(screen.getByRole('button', { name: 'Continuar' })).toHaveStyle({ backgroundColor })
  })
})
