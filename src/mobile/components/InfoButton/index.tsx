import { useState, type ReactNode } from 'react'
import { View, type StyleProp, type ViewStyle } from 'react-native'
import { Button } from '../Button'
import { Dialog } from '../Dialog'

export interface InfoButtonProps {
  description: ReactNode
  label?: string
  style?: StyleProp<ViewStyle>
}
export function InfoButton({ description, label = 'Mais informações', style }: InfoButtonProps) {
  const [open, setOpen] = useState(false)
  return (
    <View style={style}>
      <Button variant="ghost" size="sm" accessibilityLabel={label} onPress={() => setOpen(true)}>i</Button>
      <Dialog open={open} onClose={() => setOpen(false)} title={label}>{description}</Dialog>
    </View>
  )
}
