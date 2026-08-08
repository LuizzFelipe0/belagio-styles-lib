import { footerStyles } from './styles'

export interface FooterProps {
  left?: string[]
  center?: string[]
  right?: string[]
}

const SlotLines = ({ lines }: { lines: string[] }) => (
  <>
    {lines.map((line, i) => (
      <span key={i} style={footerStyles.text}>{line}</span>
    ))}
  </>
)

export const Footer = ({ left, center, right }: FooterProps) => (
  <footer style={footerStyles.root}>

    <div style={footerStyles.slot}>
      {left?.length && <SlotLines lines={left} />}
    </div>

    <div style={{ ...footerStyles.slot, ...footerStyles.slotCenter }}>
      {center?.length && <SlotLines lines={center} />}
    </div>

    <div style={{ ...footerStyles.slot, ...footerStyles.slotRight }}>
      {right?.length && <SlotLines lines={right} />}
    </div>

  </footer>
)