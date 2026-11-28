import type { ReactNode } from 'react'
import { Image, View, type ImageSourcePropType, type ImageStyle, type StyleProp, type ViewProps } from 'react-native'
import { Content } from '../../internal/Content'
import { styles } from '../../internal/styles'
import { useMobileTheme } from '../../theme'

export interface HeaderProps extends ViewProps {
  icon?: ImageSourcePropType
  iconAlt?: string
  iconStyle?: StyleProp<ImageStyle>
  title?: string
  locationText?: string
  actions?: ReactNode
  backgroundColor?: string
}
export function Header({ icon, iconAlt, iconStyle, title, locationText, actions, backgroundColor, style, ...props }: HeaderProps) {
  const { colors } = useMobileTheme()
  return (
    <View {...props} style={[styles.panel, styles.row, { backgroundColor: backgroundColor ?? colors.surface, borderColor: colors.border }, style]}>
      {icon && <Image source={icon} accessibilityLabel={iconAlt} accessible={Boolean(iconAlt)} resizeMode="contain" style={[{ width: 40, height: 40 }, iconStyle]} />}
      <View style={styles.grow}><Content accessibilityRole="header" style={styles.heading}>{title}</Content></View>
      <Content>{locationText}</Content>
      {actions}
    </View>
  )
}
