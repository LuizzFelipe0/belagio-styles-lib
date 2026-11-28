import { footerStyles, getFooterRootStyle, getFooterSlotStyle } from './styles'
import { colors } from '../../tokens'

export interface FooterProps {
  left?: string[]
  center?: string[]
  right?: string[]
  backgroundColor?: string
}

const SlotLines = ({ lines }: { lines: string[] }) => (
  <>
    {lines.map((line, i) => (
      <span key={i} style={footerStyles.text}>{line}</span>
    ))}
  </>
)

export const Footer = ({ left, center, right, backgroundColor = colors.background }: FooterProps) => (
  <footer style={getFooterRootStyle(backgroundColor)}>

    <div style={getFooterSlotStyle('left')}>
      {left?.length && <SlotLines lines={left} />}
    </div>

    <div style={getFooterSlotStyle('center')}>
      {center?.length && <SlotLines lines={center} />}
    </div>

    <div style={getFooterSlotStyle('right')}>
      {right?.length && <SlotLines lines={right} />}
    </div>

  </footer>
)
