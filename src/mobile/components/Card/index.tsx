import type { ReactNode } from 'react'
import { Image, Pressable, Text, View, type ImageSourcePropType, type PressableProps, type ViewProps } from 'react-native'
import type { ComponentSize as CardSize, CardVariant } from '../../../shared/component-types'
import { useMobileTheme } from '../../theme'
import { styles } from './styles'

export interface CardProps extends ViewProps {
  variant?: CardVariant
  size?: CardSize
  hasHeader?: boolean
  title?: string
  headerIcon?: ImageSourcePropType
  headerIconAlt?: string
  description?: string
  children?: ReactNode
  onPress?: PressableProps['onPress']
  disabled?: boolean
}

export function Card({
  variant = 'raised', size = 'sm', hasHeader, title, headerIcon, headerIconAlt,
  description, children, onPress, disabled = false, style, accessibilityState, ...props
}: CardProps) {
  const { colors, fontFamily } = useMobileTheme()
  const cardStyle = [
    styles.base, styles[size], styles[variant],
    { backgroundColor: colors.surface, borderColor: colors.border },
    disabled && styles.disabled, style,
  ]
  const heading = title ? <Text style={[styles.title, { color: colors.text, fontFamily }]}>{title}</Text> : null
  const body = (
    <>
      {hasHeader && (
        <View style={[styles.header, { borderColor: colors.border }]}>
          {headerIcon && <Image source={headerIcon} accessible={Boolean(headerIconAlt)} accessibilityLabel={headerIconAlt} style={styles.icon} />}
          {heading}
        </View>
      )}
      {children ?? (
        <View style={styles.content}>
          {!hasHeader && heading}
          {description ? <Text style={[styles.description, { color: colors.secondaryText, fontFamily }]}>{description}</Text> : null}
        </View>
      )}
    </>
  )
  if (onPress) {
    return (
      <Pressable {...props} accessibilityRole="button" accessibilityState={{ ...accessibilityState, disabled }}
        onPress={onPress} disabled={disabled} style={({ pressed }) => [cardStyle, pressed && styles.pressed]}>
        {body}
      </Pressable>
    )
  }
  return <View {...props} accessibilityState={accessibilityState} style={cardStyle}>{body}</View>
}
