import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ServiceDocumentHeader } from './index'

describe('ServiceDocumentHeader', () => {
  it('renders logo, company details, and each contact line', () => {
    render(
      <ServiceDocumentHeader
        logo="/logo.svg"
        logoAlt="Logo"
        companyName="Bellagio"
        tagline="Solutions"
        contactLines={['contact@example.com', 'New York']}
      />,
    )

    expect(screen.getByRole('img', { name: 'Logo' })).toHaveAttribute('src', '/logo.svg')
    expect(screen.getByText('Bellagio')).toBeInTheDocument()
    expect(screen.getByText('Solutions')).toBeInTheDocument()
    expect(screen.getByText('contact@example.com')).toBeInTheDocument()
    expect(screen.getByText('New York')).toBeInTheDocument()
  })

  it('uses optional fields safely when omitted', () => {
    render(<ServiceDocumentHeader companyName="Bellagio" />)

    expect(screen.getByText('Bellagio')).toBeInTheDocument()
    expect(screen.queryByRole('img')).not.toBeInTheDocument()
  })
})
