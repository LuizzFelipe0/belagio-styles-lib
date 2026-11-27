import type { ReactNode } from 'react'
import { Pressable, ScrollView, View, type ViewProps } from 'react-native'
import { Content } from '../../internal/Content'
import { styles } from '../../internal/styles'
import { useMobileTheme } from '../../theme'

export interface SidebarItem {
  id: string
  label: string
  icon?: ReactNode
  badge?: ReactNode
  disabled?: boolean
}
export interface SidebarBrand {
  title: string
  subtitle?: string
  mark?: ReactNode
}
export interface SidebarStatus {
  label: string
  tone?: 'success' | 'warning' | 'error' | 'neutral'
}
export interface SidebarProfile {
  initials: string
  name: string
  description?: string
}
export interface SidebarProps extends ViewProps {
  items: SidebarItem[]
  activeItem: string
  onItemSelect: (id: string) => void
  brand: SidebarBrand
  sectionLabel?: string
  status?: SidebarStatus
  profile?: SidebarProfile
  navigationLabel?: string
}
export function Sidebar({ items, activeItem, onItemSelect, brand, sectionLabel = 'MENU', status, profile, navigationLabel = 'Main navigation', style, ...props }: SidebarProps) {
  const { colors } = useMobileTheme()
  const statusColors = { success: colors.success, warning: colors.warning, error: colors.error, neutral: colors.secondaryText }
  return (
    <ScrollView {...props} accessibilityLabel={navigationLabel} style={style} contentContainerStyle={{ padding: 16, gap: 12 }} keyboardShouldPersistTaps="handled">
      <View style={styles.row}>
        <Content>{brand.mark}</Content>
        <Content style={styles.heading}>{brand.title}</Content>
      </View>
      <Content>{brand.subtitle}</Content>
      <Content>{sectionLabel}</Content>
      {items.map(item => (
        <Pressable key={item.id} accessibilityRole="button" accessibilityLabel={item.label}
          accessibilityState={{ selected: item.id === activeItem, disabled: Boolean(item.disabled) }}
          disabled={item.disabled} onPress={() => onItemSelect(item.id)}
          style={[styles.panel, styles.row, { borderColor: item.id === activeItem ? colors.primary : colors.border }, item.disabled && styles.disabled]}>
          <Content>{item.icon}</Content>
          <Content>{item.label}</Content>
          <Content>{item.badge}</Content>
        </Pressable>
      ))}
      {status && <Content style={{ color: statusColors[status.tone ?? 'neutral'] }}>{status.label}</Content>}
      {profile && <View style={styles.stack}><Content>{profile.initials}</Content><Content>{profile.name}</Content><Content>{profile.description}</Content></View>}
    </ScrollView>
  )
}
