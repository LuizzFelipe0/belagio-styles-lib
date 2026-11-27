import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ServiceDocument } from './index'

describe('ServiceDocument', () => {
  it('renders the company header, document title, metadata, sections, and footer', () => {
    render(
      <ServiceDocument
        logo="/logo.svg"
        logoAlt="Bellagio logo"
        companyName="Bellagio Solutions"
        tagline="Technology and services"
        contactLines={['contact@example.com', '+1 555 0100']}
        documentTitle="Service order"
        meta={[
          { label: 'Customer', value: 'Acme' },
          { label: 'Date', value: '10/27/2026' },
        ]}
        sections={[
          {
            title: 'Purchased services',
            columns: [
              { key: 'description', label: 'Description' },
              { key: 'quantity', label: 'Quantity', align: 'right' },
            ],
            rows: [{ id: 'service-1', cells: { description: 'Installation', quantity: '2' } }],
          },
        ]}
        footerText="Subject to confirmation"
      />,
    )

    expect(screen.getByRole('img', { name: 'Bellagio logo' })).toHaveAttribute('src', '/logo.svg')
    expect(screen.getByText('Bellagio Solutions')).toBeInTheDocument()
    expect(screen.getByText('Technology and services')).toBeInTheDocument()
    expect(screen.getByText('contact@example.com')).toBeInTheDocument()
    expect(screen.getByText('Service order')).toBeInTheDocument()
    expect(screen.getByText('Customer')).toBeInTheDocument()
    expect(screen.getByText('Acme')).toBeInTheDocument()
    expect(screen.getByText('Purchased services')).toBeInTheDocument()
    const sectionTable = screen.getByRole('table')
    expect(within(sectionTable).getByRole('columnheader', { name: 'Description' })).toBeInTheDocument()
    expect(within(sectionTable).getByText('Installation')).toBeInTheDocument()
    expect(within(sectionTable).getByText('2')).toBeInTheDocument()
    expect(screen.getByText('Subject to confirmation')).toBeInTheDocument()
  })

  it('omits optional metadata and footer when they are not provided', () => {
    render(<ServiceDocument companyName="Bellagio" documentTitle="Proposal" sections={[]} />)

    expect(screen.getByText('Bellagio')).toBeInTheDocument()
    expect(screen.getByText('Proposal')).toBeInTheDocument()
    expect(screen.queryByRole('table')).not.toBeInTheDocument()
  })
})
