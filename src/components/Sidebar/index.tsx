import { useRef, type CSSProperties, type KeyboardEvent } from 'react'
import { sidebarStyles } from './styles'
import type { SidebarProps } from './types'

export type { SidebarBrand, SidebarItem, SidebarProfile, SidebarProps, SidebarStatus } from './types'

const statusToneClass: Record<'success' | 'warning' | 'error' | 'neutral', string> = {
  success: 'belagio-sidebar__status-dot--success',
  warning: 'belagio-sidebar__status-dot--warning',
  error: 'belagio-sidebar__status-dot--error',
  neutral: 'belagio-sidebar__status-dot--neutral',
}

export function Sidebar({
  id,
  className,
  items,
  activeItem,
  onItemSelect,
  brand,
  sectionLabel = 'MENU',
  status,
  profile,
  navigationLabel = 'Main navigation',
}: SidebarProps) {
  const rootStyle = { ...sidebarStyles.root, '--belagio-sidebar-item-count': Math.max(items.length, 1) } as CSSProperties
  const itemRefs = useRef(new Map<string, HTMLButtonElement>())

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const enabledItems = items.filter((item) => !item.disabled)
    if (!['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) return
    event.preventDefault()
    const currentId = items[index]?.id
    const currentIndex = enabledItems.findIndex((item) => item.id === currentId)
    const nextIndex = event.key === 'Home' ? 0
      : event.key === 'End' ? enabledItems.length - 1
        : (currentIndex + (event.key === 'ArrowDown' ? 1 : -1) + enabledItems.length) % enabledItems.length
    const nextId = enabledItems[nextIndex]?.id
    if (nextId) itemRefs.current.get(nextId)?.focus()
  }

  return (
    <aside id={id} className={['belagio-sidebar', className].filter(Boolean).join(' ')} style={rootStyle}>
      <div className="belagio-sidebar__brand">
        <span className="belagio-sidebar__brand-mark" style={sidebarStyles.brandMark}>{brand.mark ?? brand.title.slice(0, 1).toUpperCase()}</span>
        <span className="belagio-sidebar__brand-copy"><b>{brand.title}</b>{brand.subtitle && <small>{brand.subtitle}</small>}</span>
      </div>

      {sectionLabel && <div className="belagio-sidebar__section-label">{sectionLabel}</div>}
      <nav className="belagio-sidebar__nav" aria-label={navigationLabel}>
        {items.map((item, index) => {
          const active = item.id === activeItem
          const itemStyle: CSSProperties = { ...sidebarStyles.item, ...(active ? sidebarStyles.itemActive : {}) }
          return <button key={item.id} type="button" className={`belagio-sidebar__item${active ? ' is-active' : ''}`}
            ref={(element) => { if (element) itemRefs.current.set(item.id, element); else itemRefs.current.delete(item.id) }}
            style={itemStyle} disabled={item.disabled}
            aria-current={active ? 'page' : undefined} onClick={() => onItemSelect(item.id)}
            onKeyDown={(event) => handleKeyDown(event, index)}>
            {item.icon && <span className="belagio-sidebar__item-icon" aria-hidden="true">{item.icon}</span>}
            <span className="belagio-sidebar__item-label">{item.label}</span>
            {item.badge != null && <span className="belagio-sidebar__badge" style={sidebarStyles.badge}>{item.badge}</span>}
          </button>
        })}
      </nav>

      {(status || profile) && <div className="belagio-sidebar__footer">
        {status && <div className="belagio-sidebar__status" title={status.label}>
          <i className={`belagio-sidebar__status-dot ${statusToneClass[status.tone ?? 'success']}`} />
          <span className="belagio-sidebar__status-label" style={sidebarStyles.statusText}>{status.label}</span>
        </div>}
        {profile && <div className="belagio-sidebar__profile">
          <span className="belagio-sidebar__profile-initials" style={sidebarStyles.profileInitials}>{profile.initials}</span>
          <span className="belagio-sidebar__profile-copy"><b style={sidebarStyles.profileName}>{profile.name}</b>
            {profile.description && <small>{profile.description}</small>}</span>
        </div>}
      </div>}
    </aside>
  )
}
