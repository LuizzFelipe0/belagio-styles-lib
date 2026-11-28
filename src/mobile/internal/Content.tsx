import { Children, type ReactNode } from 'react'
import { Text, type TextProps } from 'react-native'
import { useMobileTheme } from '../theme'

/** Wrap plain content for native layouts while preserving custom component slots. */
export function Content({ children, style, ...props }: TextProps & { children?: ReactNode }) {
  const { colors, fontFamily } = useMobileTheme()
  if (typeof children === 'string' || typeof children === 'number') {
    return <Text {...props} style={[{ color: colors.text, fontFamily }, style]}>{children}</Text>
  }
  return <>{Children.map(children, child => (
    typeof child === 'string' || typeof child === 'number'
      ? <Text {...props} style={[{ color: colors.text, fontFamily }, style]}>{child}</Text>
      : child
  ))}</>
}
