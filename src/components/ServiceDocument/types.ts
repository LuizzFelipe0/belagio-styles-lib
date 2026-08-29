import React from 'react'

export interface ServiceDocumentColumn {
  key:    string
  label:  string
  width?: string
  align?: 'left' | 'center' | 'right'
}

export interface ServiceDocumentRow {
  id:    string | number
  cells: Record<string, React.ReactNode>
}

export interface ServiceDocumentSection {
  title:   string
  columns: ServiceDocumentColumn[]
  rows:    ServiceDocumentRow[]
}

export interface ServiceDocumentMeta {
  label: string
  value: string
}

export interface ServiceDocumentProps {
  logo?:         string
  logoAlt?:      string
  companyName:   string
  tagline?:      string
  contactLines?: string[]
  documentTitle: string
  meta?:         ServiceDocumentMeta[]
  sections:      ServiceDocumentSection[]
  footerText?:   string
  printTitle?:   string
}