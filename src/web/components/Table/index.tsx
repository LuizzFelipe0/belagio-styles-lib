import React from 'react'
import { getTableCellStyle, getTableHeaderCellStyle, getTableRowStyle, tableStyles } from './styles'

// ─── Types ────────────────────────────────────────────────────────────────────

export type CellAlign = 'left' | 'center' | 'right'

export interface TableColumn {
  key:    string
  label:  string
  width?: string
  align?: CellAlign
}

export interface TableRow {
  id:    string | number
  // Each cell value is a ReactNode — the caller decides whether to pass
  // plain text, a Input, a Select, or any other element
  cells: Record<string, React.ReactNode>
}

export interface TableProps {
  columns:       TableColumn[]
  rows:          TableRow[]
  title?:        string
  actions?:      React.ReactNode
  emptyMessage?: string
}

// ─── Component ────────────────────────────────────────────────────────────────

export const Table = ({
  columns,
  rows,
  title,
  actions,
  emptyMessage = 'No data available.',
}: TableProps) => {
  const hasHeader = Boolean(title || actions)

  return (
    <div>

      {hasHeader && (
        <div style={tableStyles.header.root}>
          {title   && <span style={tableStyles.header.title}>{title}</span>}
          {actions && <div style={tableStyles.header.actions}>{actions}</div>}
        </div>
      )}

      <div style={tableStyles.wrapper}>
        <table className="belagio-table" style={tableStyles.table}>

          <thead style={tableStyles.thead}>
            <tr>
              {columns.map((col) => (
                <th
                  key={col.key}
                  style={getTableHeaderCellStyle(col.width, col.align)}
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {rows.length === 0 ? (
              <tr>
                <td colSpan={columns.length}>
                  <div style={tableStyles.emptyState}>{emptyMessage}</div>
                </td>
              </tr>
            ) : (
              rows.map((row, index) => (
                <tr key={row.id} style={getTableRowStyle(index)}>
                  {columns.map((col) => (
                    <td
                      key={col.key}
                      style={getTableCellStyle(col.width, col.align)}
                    >
                      {row.cells[col.key] ?? null}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>

        </table>
      </div>

    </div>
  )
}
