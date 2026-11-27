import type { ReactNode } from 'react'
import { View, type ViewProps } from 'react-native'
import { Content } from '../../internal/Content'
import { styles } from '../../internal/styles'
import { useMobileTheme } from '../../theme'

export interface StepperStep {
  label: ReactNode
  description?: ReactNode
}
export interface StepperProps extends ViewProps {
  steps: StepperStep[]
  activeStep: number
  label?: string
}
export function Stepper({ steps, activeStep, label = 'Progress', style, ...props }: StepperProps) {
  const { colors } = useMobileTheme()
  return (
    <View {...props} accessibilityLabel={label} style={[styles.stack, style]}>
      {steps.map((step, index) => (
        <View key={index} style={styles.row} accessibilityState={{ selected: index === activeStep }}>
          <Content style={{ color: index <= activeStep ? colors.primary : colors.secondaryText }}>
            {index < activeStep ? '✓' : String(index + 1)}
          </Content>
          <View style={styles.grow}>
            <Content>{step.label}</Content>
            <Content>{step.description}</Content>
          </View>
        </View>
      ))}
    </View>
  )
}
