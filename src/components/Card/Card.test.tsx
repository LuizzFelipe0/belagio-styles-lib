import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { Card } from './index'

describe('Card', () => {
  it('renders custom children', () => {
    render(<Card><p>Card content</p></Card>)
    expect(screen.getByText('Card content')).toBeInTheDocument()
  })

  it('renders a header with its title and optional icon', () => {
    render(
      <Card hasHeader title="Summary" headerIcon="/summary.svg" headerIconAlt="Summary icon">
        Content
      </Card>,
    )

    expect(screen.getByText('Summary')).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Summary icon' })).toHaveAttribute('src', '/summary.svg')
  })

  it('renders the default title and description when children are omitted', () => {
    render(<Card title="Plan" description="Plan details" />)

    expect(screen.getByText('Plan')).toBeInTheDocument()
    expect(screen.getByText('Plan details')).toBeInTheDocument()
  })

  it('becomes keyboard and pointer interactive when onClick is provided', () => {
    const onClick = vi.fn()
    render(<Card onClick={onClick} aria-label="Open summary">Summary</Card>)

    const card = screen.getByRole('button', { name: 'Open summary' })
    expect(card).toHaveAttribute('tabindex', '0')
    fireEvent.click(card)
    fireEvent.keyDown(card, { key: 'Enter' })
    expect(onClick).toHaveBeenCalledTimes(2)
  })

  it('does not activate or expose a button role when disabled', () => {
    const onClick = vi.fn()
    render(<Card onClick={onClick} disabled>Summary</Card>)

    const card = screen.getByText('Summary')
    expect(card).toHaveAttribute('aria-disabled', 'true')
    expect(card).not.toHaveAttribute('tabindex')
    fireEvent.click(card)
    expect(onClick).not.toHaveBeenCalled()
  })

  it('applies hover styling only to a clickable card', () => {
    const { rerender } = render(<Card onClick={() => undefined}>Interactive</Card>)
    const clickable = screen.getByRole('button', { name: 'Interactive' })
    fireEvent.mouseEnter(clickable)
    expect(clickable).toHaveStyle({ transform: 'translateY(-1px)' })

    rerender(<Card>Static</Card>)
    const staticCard = screen.getByText('Static')
    fireEvent.mouseEnter(staticCard)
    expect(staticCard).not.toHaveStyle({ transform: 'translateY(-1px)' })
  })
})
