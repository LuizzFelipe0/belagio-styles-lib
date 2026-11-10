import { useEffect, useId, useRef, useState, type CSSProperties } from 'react'
import { languageToggleStyles, type LanguageToggleSize } from './styles'
import { BrazilFlag, ChinaFlag, FranceFlag, SpainFlag, UnitedStatesFlag } from './flags'

export type SiteLanguage = 'pt-BR' | 'en-US' | 'es-ES' | 'fr-FR' | 'zh-CN'

export interface LanguageToggleProps {
  value?: SiteLanguage
  defaultValue?: SiteLanguage
  onChange?: (language: SiteLanguage) => void
  size?: LanguageToggleSize
  disabled?: boolean
  'aria-label'?: string
}

const languages: {
  value: SiteLanguage
  name: string
  Flag: (props: { style: CSSProperties }) => JSX.Element
}[] = [
  { value: 'pt-BR', name: 'Português (Brasil)', Flag: BrazilFlag },
  { value: 'en-US', name: 'English (United States)', Flag: UnitedStatesFlag },
  { value: 'es-ES', name: 'Español (España)', Flag: SpainFlag },
  { value: 'fr-FR', name: 'Français (France)', Flag: FranceFlag },
  { value: 'zh-CN', name: '中文 (中国)', Flag: ChinaFlag },
]

export const LanguageToggle = ({
  value,
  defaultValue = 'pt-BR',
  onChange,
  size = 'md',
  disabled = false,
  'aria-label': ariaLabel = 'Idioma do site',
}: LanguageToggleProps) => {
  const [internalValue, setInternalValue] = useState<SiteLanguage>(defaultValue)
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const menuId = useId()
  const selectedLanguage = value ?? internalValue
  const selected = languages.find((language) => language.value === selectedLanguage) ?? languages[0]
  const SelectedFlag = selected.Flag

  useEffect(() => {
    if (!open) return

    const closeOnOutsidePointer = (event: PointerEvent) => {
      if (event.target instanceof Node && !rootRef.current?.contains(event.target)) {
        setOpen(false)
      }
    }
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        triggerRef.current?.focus()
      }
    }

    document.addEventListener('pointerdown', closeOnOutsidePointer)
    document.addEventListener('keydown', closeOnEscape)
    return () => {
      document.removeEventListener('pointerdown', closeOnOutsidePointer)
      document.removeEventListener('keydown', closeOnEscape)
    }
  }, [open])

  const selectLanguage = (language: SiteLanguage) => {
    if (value === undefined) setInternalValue(language)
    onChange?.(language)
    setOpen(false)
    triggerRef.current?.focus()
  }

  return (
    <div ref={rootRef} style={languageToggleStyles.root}>
      <button
        ref={triggerRef}
        type="button"
        aria-label={ariaLabel}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={menuId}
        disabled={disabled}
        onClick={() => setOpen((isOpen) => !isOpen)}
        style={{
          ...languageToggleStyles.trigger,
          ...languageToggleStyles.sizes[size],
          ...(disabled ? languageToggleStyles.disabled : {}),
        }}
      >
        <span style={languageToggleStyles.triggerContent}>
          <SelectedFlag style={languageToggleStyles.flag} />
          <span>{selected.value}</span>
        </span>
        <span
          aria-hidden="true"
          style={{
            ...languageToggleStyles.chevron,
            ...(open ? languageToggleStyles.chevronOpen : {}),
          }}
        />
      </button>

      {open && !disabled && (
        <div id={menuId} role="menu" aria-label={ariaLabel} style={languageToggleStyles.menu}>
          {languages.map(({ value: language, name, Flag }) => (
            <button
              key={language}
              type="button"
              role="menuitemradio"
              aria-checked={selectedLanguage === language}
              aria-label={name}
              onClick={() => selectLanguage(language)}
              style={{
                ...languageToggleStyles.option,
                ...(selectedLanguage === language ? languageToggleStyles.optionSelected : {}),
              }}
            >
              <Flag style={languageToggleStyles.flag} />
              <span>{language}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export type { LanguageToggleSize }
