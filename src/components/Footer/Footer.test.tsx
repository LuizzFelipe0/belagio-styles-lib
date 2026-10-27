import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './index'

describe('Footer', () => {
  it('renders all lines in the left, center, and right slots', () => {
    render(<Footer left={['Company', 'Tax ID']} center={['Page 1 of 3']} right={['Confidential', '2026']} />)

    for (const line of ['Company', 'Tax ID', 'Page 1 of 3', 'Confidential', '2026']) {
      expect(screen.getByText(line)).toBeInTheDocument()
    }
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('renders an empty footer when no slot content is passed', () => {
    const { container } = render(<Footer />)
    expect(container.querySelectorAll('span')).toHaveLength(0)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
