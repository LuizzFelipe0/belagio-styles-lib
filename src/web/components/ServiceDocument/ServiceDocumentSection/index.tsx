import { getSectionCellStyle, getSectionHeaderCellStyle, serviceDocumentSectionStyles } from './styles'
import type { ServiceDocumentSection as DocSectionType } from '../types'

export const ServiceDocumentSection = ({ section }: { section: DocSectionType }) => (
  <div style={serviceDocumentSectionStyles.root}>

    <div style={serviceDocumentSectionStyles.title}>{section.title}</div>

    <table style={serviceDocumentSectionStyles.table.root}>
      <thead style={serviceDocumentSectionStyles.table.thead}>
        <tr>
          {section.columns.map((col) => (
            <th
              key={col.key}
              style={getSectionHeaderCellStyle(col.width, col.align)}
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
                style={getSectionCellStyle(col.align)}
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
