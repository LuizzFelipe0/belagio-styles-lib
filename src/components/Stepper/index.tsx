import React from 'react'
import { stepperStyles } from './styles'

export interface StepperStep {
  label: React.ReactNode
  description?: React.ReactNode
}

export interface StepperProps {
  steps: StepperStep[]
  activeStep: number
  label?: string
  className?: string
}

export function Stepper({ steps, activeStep, label = 'Progress', className }: StepperProps) {
  return (
    <nav aria-label={label} className={className}>
      <ol style={stepperStyles.list}>
        {steps.map((step, index) => {
          const current = index === activeStep
          const complete = index < activeStep
          return (
            <li key={index} aria-current={current ? 'step' : undefined} style={stepperStyles.step(current || complete)}>
              <span aria-hidden="true" style={stepperStyles.marker(current || complete)}>{complete ? '✓' : index + 1}</span>
              <span style={stepperStyles.content}>
                <span>{step.label}</span>
                {step.description && <small>{step.description}</small>}
              </span>
              {index < steps.length - 1 && <span aria-hidden="true" className="belagio-stepper__connector" style={stepperStyles.connector(complete)} />}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
