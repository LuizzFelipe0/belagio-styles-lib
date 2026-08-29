import { serviceDocumentMetaRowStyles } from './styles'
import { ServiceDocumentMeta } from '../types'

export const ServiceDocumentMetaRow = ({ meta }: { meta: ServiceDocumentMeta[] }) => (
  <div style={{ ...serviceDocumentMetaRowStyles.root, gridTemplateColumns: `repeat(${meta.length}, 1fr)` }}>
    {meta.map((item, i) => (
      <div
        key={i}
        style={{
          ...serviceDocumentMetaRowStyles.box,
          ...(i === meta.length - 1 ? serviceDocumentMetaRowStyles.boxLast : {}),
        }}
      >
        <span style={serviceDocumentMetaRowStyles.label}>{item.label}</span>
        <span style={serviceDocumentMetaRowStyles.value}>{item.value}</span>
      </div>
    ))}
  </div>
)