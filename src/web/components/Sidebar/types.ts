import type { ReactNode } from 'react'

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

export interface SidebarProps {
  id?: string
  className?: string
  items: SidebarItem[]
  activeItem: string
  onItemSelect: (id: string) => void
  brand: SidebarBrand
  sectionLabel?: string
  status?: SidebarStatus
  profile?: SidebarProfile
  navigationLabel?: string
}
