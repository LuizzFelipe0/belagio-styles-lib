import { useState } from 'react'
import type { ComponentSize } from '../../../shared/component-types'
import { Select, type SelectProps } from '../Select'

export type SiteLanguage = 'pt-BR' | 'en-US' | 'es-ES' | 'fr-FR' | 'zh-CN'
export type LanguageToggleSize = ComponentSize
export interface LanguageToggleProps extends Omit<SelectProps, 'options' | 'value' | 'defaultValue' | 'onChange'> {
  value?: SiteLanguage
  defaultValue?: SiteLanguage
  availableLanguages?: SiteLanguage[]
  onChange?: (value: SiteLanguage) => void
}
const languages: { value: SiteLanguage; label: string }[] = [
  { value: 'pt-BR', label: 'Português (Brasil)' },
  { value: 'en-US', label: 'English (United States)' },
  { value: 'es-ES', label: 'Español (España)' },
  { value: 'fr-FR', label: 'Français (France)' },
  { value: 'zh-CN', label: '中文 (中国)' },
]
export function LanguageToggle({ value, defaultValue = 'pt-BR', availableLanguages, onChange, ...props }: LanguageToggleProps) {
  const [internal, setInternal] = useState(defaultValue)
  const options = languages.filter(option => !availableLanguages || availableLanguages.includes(option.value))
  const selected = options.find(option => option.value === (value ?? internal))?.value ?? options[0]?.value
  return <Select label="Idioma do site" {...props} options={options} value={selected} onChange={next => {
    const language = options.find(option => option.value === next)?.value
    if (language) {
      if (value === undefined) setInternal(language)
      onChange?.(language)
    }
  }} />
}
