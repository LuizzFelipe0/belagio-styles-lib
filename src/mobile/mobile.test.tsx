import { fireEvent, render, screen } from '@testing-library/react-native'
import { Text } from 'react-native'
import { Button, Card, Input, MobileThemeProvider } from './index'

describe('mobile form components', () => {
  it('submits on press and keeps the accessible name while loading', () => {
    const save = jest.fn()
    const { rerender } = render(<Button onPress={save}>Save</Button>)
    const button = () => screen.getByRole('button', { name: 'Save' })
    fireEvent.press(button())
    rerender(<Button onPress={save} loading>Save</Button>)
    expect(button()).toBeBusy()
    expect(button()).toBeDisabled()
    fireEvent.press(button())
    rerender(<Button onPress={save} disabled>Save</Button>)
    fireEvent.press(button())
    expect(save).toHaveBeenCalledTimes(1)
  })

  it('renders a labelled controlled input and sends the edited string', () => {
    const change = jest.fn()
    const field = (value: string, disabled = false) => (
      <Input label="Name" value={value} onChange={change} disabled={disabled} readOnly={false} />
    )
    const { rerender } = render(field('Ana'))
    const input = () => screen.getByLabelText('Name')
    expect(input()).toHaveDisplayValue('Ana')
    fireEvent.changeText(input(), 'Lia')
    expect(change).toHaveBeenCalledWith('Lia')
    rerender(field('Lia', true))
    expect(input()).toHaveDisplayValue('Lia')
    expect(input()).toBeDisabled()
    expect(input()).toHaveProp('editable', false)
    fireEvent.changeText(input(), 'Eva')
    expect(change).toHaveBeenCalledTimes(1)
  })

  it('renders card content and exposes a button only for an actionable card', () => {
    const open = jest.fn()
    const { rerender } = render(<Card title="Order" description="Draft" />)
    expect(screen.getByText('Order')).toBeOnTheScreen()
    expect(screen.getByText('Draft')).toBeOnTheScreen()
    expect(screen.queryByRole('button')).toBeNull()
    const card = (disabled: boolean) => (
      <Card hasHeader title="Order" description="Draft" onPress={open} disabled={disabled} accessibilityLabel="Open order">
        <Text>Details</Text>
      </Card>
    )
    rerender(card(false))
    expect(screen.getByText('Order')).toBeOnTheScreen()
    expect(screen.getByText('Details')).toBeOnTheScreen()
    expect(screen.queryByText('Draft')).toBeNull()
    fireEvent.press(screen.getByRole('button', { name: 'Open order' }))
    rerender(card(true))
    fireEvent.press(screen.getByRole('button', { name: 'Open order' }))
    expect(open).toHaveBeenCalledTimes(1)
  })

  it('applies theme overrides and numeric design sizes', () => {
    render(
      <MobileThemeProvider colors={{ primary: '#123456' }} fontFamily="Montserrat">
        <Button size="lg" variant="ghost">Continue</Button>
      </MobileThemeProvider>,
    )
    expect(screen.getByText('Continue')).toHaveStyle({ color: '#123456', fontFamily: 'Montserrat', fontSize: 16 })
    expect(screen.getByRole('button')).toHaveStyle({ borderColor: '#123456', paddingHorizontal: 24 })
  })
})
