import { Image, View, type ImageSourcePropType, type ViewProps } from 'react-native'
import { Content } from '../../internal/Content'
import { styles } from '../../internal/styles'
import { useMobileTheme } from '../../theme'
import { Table, type TableColumn, type TableRow } from '../Table'

export type ServiceDocumentColumn = TableColumn
export type ServiceDocumentRow = TableRow
export interface ServiceDocumentSectionType {
  title: string
  columns: ServiceDocumentColumn[]
  rows: ServiceDocumentRow[]
}
export interface ServiceDocumentMeta {
  label: string
  value: string
}
export interface ServiceDocumentProps extends ViewProps {
  logo?: ImageSourcePropType
  logoAlt?: string
  companyName: string
  tagline?: string
  contactLines?: string[]
  documentTitle: string
  meta?: ServiceDocumentMeta[]
  sections: ServiceDocumentSectionType[]
  footerText?: string
}
export function ServiceDocument({
  logo, logoAlt, companyName, tagline, contactLines = [], documentTitle,
  meta = [], sections, footerText, style, ...props
}: ServiceDocumentProps) {
  const { colors } = useMobileTheme()
  return (
    <View {...props} style={[styles.panel, { backgroundColor: colors.surface, borderColor: colors.border }, style]}>
      {logo && <Image source={logo} accessible={Boolean(logoAlt)} accessibilityLabel={logoAlt} resizeMode="contain" style={{ width: 80, height: 80 }} />}
      <Content accessibilityRole="header" style={styles.heading}>{companyName}</Content>
      <Content>{tagline}</Content>
      {contactLines.map((line, index) => <Content key={index}>{line}</Content>)}
      <Content accessibilityRole="header" style={styles.heading}>{documentTitle}</Content>
      {meta.map((item, index) => <Content key={index}>{`${item.label}: ${item.value}`}</Content>)}
      {sections.map((section, index) => <Table key={index} title={section.title} columns={section.columns} rows={section.rows} />)}
      <Content>{footerText}</Content>
    </View>
  )
}
