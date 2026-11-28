import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Table } from './index'

const columns = [
  { key: 'name', label: 'Name' },
  { key: 'status', label: 'Status', align: 'center' as const, width: '8rem' },
]

describe('Table', () => {
  it('renders column headings and row cells, including React content', () => {
    render(
      <Table
        columns={columns}
        rows={[
          { id: 1, cells: { name: 'Alex', status: <strong>Active</strong> } },
          { id: 2, cells: { name: 'Blake', status: 'Pending' } },
        ]}
      />,
    )

    expect(screen.getAllByRole('columnheader').map((cell) => cell.textContent)).toEqual(['Name', 'Status'])
    const rows = screen.getAllByRole('row')
    expect(within(rows[1]).getByText('Alex')).toBeInTheDocument()
    expect(within(rows[1]).getByText('Active')).toBeInTheDocument()
    expect(within(rows[2]).getByText('Blake')).toBeInTheDocument()
    expect(within(rows[2]).getByText('Pending')).toBeInTheDocument()
    expect(screen.getAllByRole('cell')[1]).toHaveStyle({ textAlign: 'center', width: '8rem' })
  })

  it('shows the empty-state message when there are no rows', () => {
    render(<Table columns={columns} rows={[]} />)
    expect(screen.getByText('No data available.')).toBeInTheDocument()
    expect(screen.getByRole('cell')).toHaveAttribute('colspan', '2')
  })

  it('allows the empty-state message to be customized', () => {
    render(<Table columns={columns} rows={[]} emptyMessage="No services" />)
    expect(screen.getByText('No services')).toBeInTheDocument()
  })

  it('renders the optional title and actions', () => {
    render(
      <Table
        columns={columns}
        rows={[]}
        title="Services"
        actions={<button type="button">Add</button>}
      />,
    )

    expect(screen.getByText('Services')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Add' })).toBeInTheDocument()
  })
})
