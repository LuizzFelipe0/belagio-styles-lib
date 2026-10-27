import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Header } from './index'

describe('Header', () => {
  it('renders the optional icon and title on the left', () => {
    render(<Header icon="/logo.svg" iconAlt="Company logo" title="Bellagio" />)

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Company logo' })).toHaveAttribute('src', '/logo.svg')
    expect(screen.getByText('Bellagio')).toBeInTheDocument()
  })

  it('renders location text and caller-provided actions on the right', () => {
    render(<Header locationText="New York" actions={<button type="button">Sign out</button>} />)

    expect(screen.getByText('New York')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Sign out' })).toBeInTheDocument()
  })

  it('renders the header without optional content', () => {
    const { container } = render(<Header />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(container.querySelectorAll('img')).toHaveLength(0)
  })
})
