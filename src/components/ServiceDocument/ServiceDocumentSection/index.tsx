import React from 'react'
import { serviceDocumentSectionStyles } from './styles'
import { DocSection as DocSectionType } from '../types'

export const ServiceDocumentSection = ({ section }: { section: DocSectionType }) => (
  <div style={serviceDocumentSectionStyles.root}>

    <div style={serviceDocumentSectionStyles.title}>{section.title}</div>

    <table style={serviceDocumentSectionStyles.table.root}>
      <thead style={serviceDocumentSectionStyles.table.thead}>
        <tr>
          {section.columns.map((col) => (
            <th
              key={col.key}
              style={{ ...serviceDocumentSectionStyles.table.th, width: col.width, textAlign: col.align ?? 'left' }}
            >
              {col.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {section.rows.map((row) => (
          <tr key={row.id}>
            {section.columns.map((col) => (
              <td
                key={col.key}
                style={{ ...serviceDocumentSectionStyles.table.td, textAlign: col.align ?? 'left' }}
              >
                {row.cells[col.key] ?? null}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>

  </div>
)