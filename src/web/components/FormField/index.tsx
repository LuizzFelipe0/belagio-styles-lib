import React, { cloneElement, isValidElement, useId } from 'react'
import { formFieldStyles } from './styles'

export interface FormFieldProps {
  label: React.ReactNode
  children: React.ReactElement<Record<string, unknown>>
  description?: React.ReactNode
  required?: boolean
  error?: React.ReactNode
  id?: string
}
export function FormField({ label, children, description, required = false, error, id }: FormFieldProps) {
  const generatedId = useId()
  const controlId = id ?? `field-${generatedId}`
  const descriptionId = description ? `${controlId}-description` : undefined
  const errorId = error ? `${controlId}-error` : undefined

  if (!isValidElement(children)) return null

  const existingDescribedBy = children.props['aria-describedby'] as string | undefined
  const describedBy = [existingDescribedBy, descriptionId, errorId].filter(Boolean).join(' ') || undefined
  const control = cloneElement(children, {
    id: controlId,
    ...(required ? { required: true } : {}),
    'aria-describedby': describedBy,
    'aria-invalid': error ? true : children.props['aria-invalid'],
    ...(errorId ? { 'aria-errormessage': errorId } : {}),
  })

  return (
    <div style={formFieldStyles.wrapper}>
      <label htmlFor={controlId} style={formFieldStyles.label}>
        {label}{required && <span aria-hidden="true">{' '}*</span>}
        {required && <span style={formFieldStyles.visuallyHidden}> (required)</span>}
      </label>
      {control}
      {description && <div id={descriptionId} style={formFieldStyles.description}>{description}</div>}
      {error && <div id={errorId} role="alert" style={formFieldStyles.error}>{error}</div>}
    </div>
  )
}
