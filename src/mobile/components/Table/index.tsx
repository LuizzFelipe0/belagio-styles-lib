import type { ReactNode } from 'react'
import { ScrollView, View, type DimensionValue, type ViewProps } from 'react-native'
import { Content } from '../../internal/Content'
import { styles as layout } from '../../internal/styles'
import { useMobileTheme } from '../../theme'
import { styles } from './styles'

export type CellAlign = 'left' | 'center' | 'right'
export interface TableColumn {
  key: string
  label: string
  width?: DimensionValue
  align?: CellAlign
}
export interface TableRow {
  id: string | number
  cells: Record<string, ReactNode>
}
export interface TableProps extends ViewProps {
  columns: TableColumn[]
  rows: TableRow[]
  title?: string
  actions?: ReactNode
  emptyMessage?: string
}
export function Table({ columns, rows, title, actions, emptyMessage = 'No data available.', style, ...props }: TableProps) {
  const { colors } = useMobileTheme()
  return (
    <View {...props} style={[layout.stack, style]}>
      <View style={layout.row}><Content accessibilityRole="header" style={layout.heading}>{title}</Content>{actions}</View>
      <ScrollView horizontal keyboardShouldPersistTaps="handled">
        <View>
          <View style={styles.row}>
            {columns.map(column => <View key={column.key} style={[styles.cell, { width: column.width ?? 160, borderColor: colors.border }]}>
              <Content accessibilityRole="header" style={[styles.heading, { textAlign: column.align }]}>{column.label}</Content>
            </View>)}
          </View>
          {rows.map(row => <View key={row.id} style={styles.row}>
            {columns.map(column => <View key={column.key} style={[styles.cell, { width: column.width ?? 160, borderColor: colors.border }]}>
              <Content style={{ textAlign: column.align }}>{row.cells[column.key]}</Content>
            </View>)}
          </View>)}
        </View>
      </ScrollView>
      {rows.length === 0 && <Content>{emptyMessage}</Content>}
    </View>
  )
}
