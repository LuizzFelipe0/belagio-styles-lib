import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ServiceDocumentSection } from './index'
import type { ServiceDocumentSection as Section } from '../types'

describe('ServiceDocumentSection', () => {
  it('renders its title, aligned columns, and row cell content', () => {
    const section: Section = {
      title: 'Parts',
      columns: [
        { key: 'part', label: 'Part' },
        { key: 'price', label: 'Price', align: 'right', width: '10rem' },
      ],
      rows: [
        { id: 1, cells: { part: 'Filter', price: <strong>$25.00</strong> } },
      ],
    }
    render(<ServiceDocumentSection section={section} />)

    expect(screen.getByText('Parts')).toBeInTheDocument()
    const table = screen.getByRole('table')
    expect(within(table).getByRole('columnheader', { name: 'Part' })).toBeInTheDocument()
    expect(within(table).getByRole('columnheader', { name: 'Price' })).toHaveStyle({ textAlign: 'right', width: '10rem' })
    expect(within(table).getByText('Filter')).toBeInTheDocument()
    expect(within(table).getByText('$25.00')).toBeInTheDocument()
  })

  it('renders headers with an empty body when the section has no rows', () => {
    render(<ServiceDocumentSection section={{ title: 'Parts', columns: [{ key: 'part', label: 'Part' }], rows: [] }} />)
    expect(screen.getByRole('columnheader', { name: 'Part' })).toBeInTheDocument()
    expect(screen.queryByRole('cell')).not.toBeInTheDocument()
  })
})
