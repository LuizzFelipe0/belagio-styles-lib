import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ServiceDocumentMetaRow } from './index'

describe('ServiceDocumentMetaRow', () => {
  it('renders every metadata label and value in a matching grid', () => {
    const { container } = render(
      <ServiceDocumentMetaRow meta={[
        { label: 'Customer', value: 'Acme' },
        { label: 'Order', value: 'SO-42' },
      ]} />,
    )

    expect(screen.getByText('Customer')).toBeInTheDocument()
    expect(screen.getByText('Acme')).toBeInTheDocument()
    expect(screen.getByText('Order')).toBeInTheDocument()
    expect(screen.getByText('SO-42')).toBeInTheDocument()
    expect(container.firstElementChild).toHaveStyle({ gridTemplateColumns: 'repeat(2, 1fr)' })
  })
})
