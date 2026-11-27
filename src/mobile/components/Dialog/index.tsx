import type { ReactNode } from 'react'
import { KeyboardAvoidingView, Modal, Platform, Pressable, ScrollView, Text, View } from 'react-native'
import { Content } from '../../internal/Content'
import { useMobileTheme } from '../../theme'
import { styles } from './styles'

export interface DialogProps {
  open: boolean
  onClose: () => void
  title: ReactNode
  children: ReactNode
  description?: ReactNode
  closeLabel?: string
  closeButtonColor?: string
}

export function Dialog({ open, onClose, title, children, description, closeLabel = 'Close dialog', closeButtonColor }: DialogProps) {
  const { colors } = useMobileTheme()
  if (!open) return null
  return (
    <Modal transparent visible animationType="fade" onRequestClose={onClose}>
      <View style={styles.backdrop}>
        <KeyboardAvoidingView style={styles.center} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
          <View accessibilityViewIsModal onAccessibilityEscape={onClose} style={[styles.panel, { backgroundColor: colors.surface }]}>
            <View style={styles.header}>
              <Content accessibilityRole="header" style={styles.title}>{title}</Content>
              <Pressable accessibilityRole="button" accessibilityLabel={closeLabel} onPress={onClose} style={styles.close}>
                <Text style={{ color: closeButtonColor ?? colors.text, fontSize: 24 }}>×</Text>
              </Pressable>
            </View>
            {description != null && <Content>{description}</Content>}
            <ScrollView keyboardShouldPersistTaps="handled">
              <Content>{children}</Content>
            </ScrollView>
          </View>
        </KeyboardAvoidingView>
      </View>
    </Modal>
  )
}
