import React from 'react'
import { tableStyles } from './styles'
import { tokens } from '../../tokens'

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
  // plain text, a PrimalInput, a PrimalSelect, or any other element
  cells: Record<string, React.ReactNode>
}

export interface PrimalTableProps {
  columns:       TableColumn[]
  rows:          TableRow[]
  title?:        string
  actions?:      React.ReactNode
  emptyMessage?: string
}

// ─── Component ────────────────────────────────────────────────────────────────

export const PrimalTable = ({
  columns,
  rows,
  title,
  actions,
  emptyMessage = 'No data available.',
}: PrimalTableProps) => {
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
                  style={{ ...tableStyles.th, width: col.width, textAlign: col.align ?? 'left' }}
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
                <tr key={row.id} style={{ ...tableStyles.tr, backgroundColor: index % 2 === 0 ? tokens.colors.background : tokens.colors.backgroundSecondary }}>
                  {columns.map((col) => (
                    <td
                      key={col.key}
                      style={{ ...tableStyles.td, textAlign: col.align ?? 'left', width: col.width }}
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