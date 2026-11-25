import { getMetaBoxStyle, getMetaRowStyle, serviceDocumentMetaRowStyles } from './styles'
import { ServiceDocumentMeta } from '../types'

export const ServiceDocumentMetaRow = ({ meta }: { meta: ServiceDocumentMeta[] }) => (
  <div style={getMetaRowStyle(meta.length)}>
    {meta.map((item, i) => (
      <div
        key={i}
        style={getMetaBoxStyle(i === meta.length - 1)}
      >
        <span style={serviceDocumentMetaRowStyles.label}>{item.label}</span>
        <span style={serviceDocumentMetaRowStyles.value}>{item.value}</span>
      </div>
    ))}
  </div>
)
