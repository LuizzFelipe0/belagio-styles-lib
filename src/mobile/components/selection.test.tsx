import { fireEvent, render, screen } from '@testing-library/react-native'
import { DropdownCheckbox, LanguageToggle, Select } from '../index'

const options = [
  { value: 'a', label: 'Alpha' },
  { value: 'b', label: 'Beta', disabled: true },
  { value: 'c', label: 'Gamma' },
]

it('selects an option, closes the modal and respects controlled values', () => {
  const change = jest.fn()
  const { rerender } = render(<Select label="Category" options={options} value="a" onChange={change} />)
  fireEvent.press(screen.getByRole('button', { name: 'Category' }))
  fireEvent.press(screen.getByRole('button', { name: 'Beta' }))
  expect(change).not.toHaveBeenCalled()
  fireEvent.press(screen.getByRole('button', { name: 'Gamma' }))
  expect(change).toHaveBeenCalledWith('c')
  expect(screen.queryByRole('button', { name: 'Close dialog' })).toBeNull()
  expect(screen.getByRole('button', { name: 'Category' })).toHaveTextContent('Alpha')
  rerender(<Select label="Category" options={options} value="c" disabled onChange={change} />)
  expect(screen.getByRole('button', { name: 'Category' })).toHaveTextContent('Gamma')
  fireEvent.press(screen.getByRole('button', { name: 'Category' }))
  expect(screen.queryByRole('button', { name: 'Close dialog' })).toBeNull()
})

it('keeps an uncontrolled selection and closes an open menu when disabled', () => {
  const { rerender } = render(<Select label="Category" options={options} />)
  fireEvent.press(screen.getByRole('button', { name: 'Category' }))
  fireEvent.press(screen.getByRole('button', { name: 'Gamma' }))
  expect(screen.getByRole('button', { name: 'Category' })).toHaveTextContent('Gamma')
  fireEvent.press(screen.getByRole('button', { name: 'Category' }))
  rerender(<Select label="Category" options={options} disabled />)
  expect(screen.queryByRole('button', { name: 'Close dialog' })).toBeNull()
})

it('toggles multiple values, keeps disabled options inert and accepts parent updates', () => {
  const change = jest.fn()
  const { rerender } = render(<DropdownCheckbox label="Tags" options={options} defaultValue={['a']} onChange={change} />)
  fireEvent.press(screen.getByRole('button', { name: 'Tags' }))
  fireEvent.press(screen.getByRole('checkbox', { name: 'Beta' }))
  expect(change).not.toHaveBeenCalled()
  fireEvent.press(screen.getByRole('checkbox', { name: 'Gamma' }))
  expect(change).toHaveBeenLastCalledWith(['a', 'c'])
  expect(screen.getByRole('checkbox', { name: 'Gamma' })).toBeChecked()
  fireEvent.press(screen.getByRole('checkbox', { name: 'Alpha' }))
  expect(change).toHaveBeenLastCalledWith(['c'])
  rerender(<DropdownCheckbox label="Tags" options={options} value={['a']} onChange={change} />)
  expect(screen.getByRole('checkbox', { name: 'Alpha' })).toBeChecked()
  expect(screen.getByRole('checkbox', { name: 'Gamma' })).not.toBeChecked()
})

it('limits language choices and returns the language code', () => {
  const change = jest.fn()
  render(<LanguageToggle availableLanguages={['pt-BR', 'en-US']} onChange={change} />)
  fireEvent.press(screen.getByRole('button', { name: 'Idioma do site' }))
  expect(screen.queryByRole('button', { name: 'Français (France)' })).toBeNull()
  fireEvent.press(screen.getByRole('button', { name: 'English (United States)' }))
  expect(change).toHaveBeenCalledWith('en-US')
  expect(screen.getByRole('button', { name: 'Idioma do site' })).toHaveTextContent('English (United States)')
})
