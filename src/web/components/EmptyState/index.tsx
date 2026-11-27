import React from 'react'
import { emptyStateStyles } from './styles'

export interface EmptyStateProps {
  title: React.ReactNode
  description?: React.ReactNode
  action?: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

export function EmptyState({ title, description, action, className, style }: EmptyStateProps) {
  return (
    <section className={className} style={emptyStateStyles.root(style)}>
      <h2 style={emptyStateStyles.title}>{title}</h2>
      {description && <p style={emptyStateStyles.description}>{description}</p>}
      {action}
    </section>
  )
}
