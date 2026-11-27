import { fireEvent, render, screen } from '@testing-library/react-native'
import { Modal, Text } from 'react-native'
import {
  AddButton, Alert, DeleteButton, Dialog, EmailInput, EmptyState, Footer,
  FormField, Header, InfoButton, Input, PasswordInput, Progress, SearchInput,
  ServiceDocument, Sidebar, Stepper, Table, UpdateButton,
} from '../index'

it('dismisses a native dialog through Android back and the close button', () => {
  const close = jest.fn()
  const { UNSAFE_getByType, rerender } = render(<Dialog open onClose={close} title="Confirm">Body</Dialog>)
  fireEvent(UNSAFE_getByType(Modal), 'requestClose')
  fireEvent.press(screen.getByRole('button', { name: 'Close dialog' }))
  expect(close).toHaveBeenCalledTimes(2)
  rerender(<Dialog open={false} onClose={close} title="Confirm">Body</Dialog>)
  expect(screen.queryByText('Body')).toBeNull()
})

it('opens information on touch and dismisses an alert', () => {
  const close = jest.fn()
  render(<>
    <InfoButton label="Help" description="Information" />
    <Alert title="Warning" tone="warning" onClose={close}>{['Check the fields', 'Try again']}</Alert>
  </>)
  expect(screen.getByText('Check the fields')).toBeOnTheScreen()
  expect(screen.getByText('Try again')).toBeOnTheScreen()
  fireEvent.press(screen.getByRole('button', { name: 'Dismiss message' }))
  expect(close).toHaveBeenCalledTimes(1)
  fireEvent.press(screen.getByRole('button', { name: 'Help' }))
  expect(screen.getByText('Information')).toBeOnTheScreen()
  fireEvent.press(screen.getByRole('button', { name: 'Close dialog' }))
  expect(screen.queryByText('Information')).toBeNull()
})

it('connects field labels and validation messages to the control', () => {
  render(<FormField label="Email" description="Work address" required error="Invalid email">
    <Input accessibilityHint="Enter email" />
  </FormField>)
  expect(screen.getByLabelText('Email')).toHaveProp('accessibilityHint', 'Enter email. Work address. Required. Invalid email')
  expect(screen.getByLabelText('Email')).toHaveProp('aria-invalid', true)
  expect(screen.getByRole('alert')).toHaveTextContent('Invalid email')
})

it('clamps progress and supports invalid values', () => {
  const { rerender } = render(<Progress value={120} label="Upload" />)
  expect(screen.getByRole('progressbar')).toHaveAccessibilityValue({ now: 100, max: 100, text: '100%' })
  rerender(<Progress value={Number.NaN} max={-1} label="Upload" />)
  expect(screen.getByRole('progressbar')).toHaveAccessibilityValue({ now: 0, max: 100, text: '0%' })
})

it('renders table slots, empty data and service document content', () => {
  const columns = [{ key: 'name', label: 'Name', width: 200 }]
  const { rerender, unmount } = render(<Table columns={columns} rows={[]} />)
  expect(screen.getByText('No data available.')).toBeOnTheScreen()
  rerender(<Table columns={columns} rows={[{ id: 1, cells: { name: <Text>Custom cell</Text> } }]} />)
  expect(screen.getByText('Custom cell')).toBeOnTheScreen()
  unmount()
  render(<ServiceDocument companyName="Belagio" documentTitle="Order" contactLines={['Phone']}
    meta={[{ label: 'Number', value: '42' }]} footerText="Thank you"
    sections={[{ title: 'Items', columns, rows: [{ id: 1, cells: { name: 'Oil' } }] }]} />)
  for (const text of ['Belagio', 'Order', 'Number: 42', 'Items', 'Oil', 'Thank you', 'Phone']) {
    expect(screen.getByText(text)).toBeOnTheScreen()
  }
})

it('selects navigation items by id and blocks disabled items', () => {
  const select = jest.fn()
  render(<Sidebar brand={{ title: 'Belagio' }} activeItem="home" onItemSelect={select}
    items={[{ id: 'home', label: 'Home' }, { id: 'disabled', label: 'Unavailable', disabled: true }]}
    profile={{ name: 'Ana', initials: 'A' }} status={{ label: 'Online', tone: 'success' }} />)
  expect(screen.getByRole('button', { name: 'Home' })).toBeSelected()
  fireEvent.press(screen.getByRole('button', { name: 'Home' }))
  fireEvent.press(screen.getByRole('button', { name: 'Unavailable' }))
  expect(select).toHaveBeenCalledTimes(1)
  expect(select).toHaveBeenCalledWith('home')
})

it('renders layout components and preserves button and input compositions', () => {
  render(<>
    <Header title="App" locationText="Office" actions={<AddButton>Add</AddButton>} />
    <Footer left={['Left']} center={['Center']} right={['Right']} />
    <EmptyState title="Empty" description="Create an item" action={<UpdateButton>Update</UpdateButton>} />
    <DeleteButton>Delete</DeleteButton>
    <Stepper steps={[{ label: 'Start' }, { label: 'Finish' }]} activeStep={1} />
    <EmailInput accessibilityLabel="Email" />
    <PasswordInput accessibilityLabel="Password" />
    <SearchInput accessibilityLabel="Search" />
  </>)
  expect(screen.getByRole('header', { name: 'App' })).toBeOnTheScreen()
  expect(screen.getByText('Right')).toBeOnTheScreen()
  expect(screen.getByText('Empty')).toBeOnTheScreen()
  expect(screen.getByText('✓')).toBeOnTheScreen()
  expect(screen.getByRole('button', { name: 'Delete' })).toBeOnTheScreen()
  expect(screen.getByLabelText('Email')).toHaveProp('keyboardType', 'email-address')
  expect(screen.getByLabelText('Password')).toHaveProp('secureTextEntry', true)
  expect(screen.getByLabelText('Search')).toHaveProp('returnKeyType', 'search')
})
