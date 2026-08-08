import React from 'react'
import { injectGlobalStyles } from '../../styles/global'
import { layout } from './AppStyles'

import { Button, DeleteButton, UpdateButton, AddButton } from '../../components/Button'
import { Input, SearchInput, PasswordInput, EmailInput } from '../../components/Input'
import { Card } from '../../components/Card'
import { Header } from '../../components/Header'
import { Table } from '../../components/Table'
import { Select } from '../../components/Select'
import { Footer } from '../../components/Footer'

injectGlobalStyles()

// Local primitives — structural wrappers for the preview only
const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section style={layout.section}>
    <h2 style={layout.sectionTitle}>{title}</h2>
    {children}
  </section>
)

const Group = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div style={layout.group}>
    <p style={layout.groupLabel}>{label}</p>
    {children}
  </div>
)

export default function App() {
  return (
    <>

      <div style={layout.page}>
        <h1 style={layout.pageTitle}>belagio-styles-lib</h1>
        <p style={layout.subtitle}>Typescript Styles Library · Montserrat Bold · CSS-in-JS</p>

        <Section title="Header">
          <Group label="Icon + title + location + actions">
            <Header
              title="Header Title"
              locationText="Las Vegas, US"
              actions={
                <>
                  <Button size="sm" variant="ghost">Login</Button>
                  <Button size="sm">Sign up</Button>
                </>
              }
            />
          </Group>

          <Group label="Title only">
            <Header title="Header Title" />
          </Group>

          <Group label="Icon + title only">
            <Header
              icon="https://placehold.co/32x32/007AFF/FFFFFF?text=B"
              iconAlt="Belagio logo"
              title="Header Title"
            />
          </Group>

          <Group label="Right side only (location + actions)">
            <Header
              locationText="Rio de Janeiro, Brazil"
              actions={<DeleteButton size="sm">Delete</DeleteButton>}
            />
          </Group>
        </Section>

        {/* ── Button ── */}
        <Section title="Button">
          <Group label="Variants">
            <div style={layout.row}>
              <Button variant="primary">Primary</Button>
              <Button variant="danger">Danger</Button>
              <Button variant="success">Success</Button>
              <Button variant="ghost">Ghost</Button>
            </div>
          </Group>

          <Group label="Sizes">
            <div style={layout.row}>
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
            </div>
          </Group>

          <Group label="Disabled">
            <div style={layout.row}>
              <Button variant="primary" disabled>Primary</Button>
              <Button variant="danger"  disabled>Danger</Button>
              <Button variant="ghost"   disabled>Ghost</Button>
            </div>
          </Group>

          <Group label="Compositions">
            <div style={layout.row}>
              <DeleteButton>Delete</DeleteButton>
              <UpdateButton>Update</UpdateButton>
              <AddButton>Add</AddButton>
            </div>
          </Group>
        </Section>

        {/* ── Input ── */}
        <Section title="Input">
          <Group label="Variants">
            <div style={layout.column}>
              <Input   label="Text"     placeholder="Type something..." />
              <SearchInput   label="Search" />
              <PasswordInput label="Password" />
              <EmailInput    label="Email" />
            </div>
          </Group>

          <Group label="Sizes">
            <div style={layout.column}>
              <Input size="sm" placeholder="Small" />
              <Input size="md" placeholder="Medium" />
              <Input size="lg" placeholder="Large" />
            </div>
          </Group>

          <Group label="Disabled">
            <div style={layout.column}>
              <Input placeholder="Disabled input" disabled />
            </div>
          </Group>
        </Section>

        {/* ── Card ── */}
        <Section title="Card">
          <Group label="Variants">
            <div style={layout.row}>
              <Card variant="flat"     title="Flat"     description="No shadow, subtle border." />
              <Card variant="raised"   title="Raised"   description="Default shadow." />
              <Card variant="elevated" title="Elevated" description="Pronounced shadow." />
            </div>
          </Group>
 
          <Group label="Sizes">
            <div style={layout.row}>
              <Card size="sm" title="Small" description="Small Card" />
              <Card size="md" title="Medium" description="Medium Card" />
              <Card size="lg" title="Large" description="Large Card" />
            </div>
          </Group>
 
          <Group label="With header (hasHeader)">
            <div style={layout.row}>
              <Card
                hasHeader
                title="Card Title"
                description="Header with title only."
              />
              <Card
                hasHeader
                title="Card Title"
                headerIcon="https://placehold.co/40x40/305CDE/FFFFFF?text=B"
                headerIconAlt="App icon"
                description="Header with icon and title."
              />
            </div>
          </Group>
 
          <Group label="Clickable">
            <div style={layout.row}>
              <Card
                title="Clickable card"
                description="Hover to see elevation. Click to fire onClick."
                onClick={() => alert('Card clicked!')}
              />
            </div>
          </Group>
 
          <Group label="Disabled">
            <div style={layout.row}>
              <Card title="Disabled card" description="No interaction." disabled />
            </div>
          </Group>
        </Section>

        <Section title="Table">
          <Group label="Title + columns + rows + actions">
            <Table
              title="Service Order Items"
              columns={[
                { key: 'type',        label: 'Type',       width: '16rem' },
                { key: 'description', label: 'Description' },
                { key: 'qty',         label: 'Qty',        width: '9rem',  align: 'right' },
                { key: 'unitPrice',   label: 'Unit Price', width: '14rem', align: 'right' },
                { key: 'total',       label: 'Total',      width: '12rem', align: 'right' },
              ]}
              rows={[
                {
                  id: 1,
                  cells: {
                    type:        <Select options={[{ value: 'service', label: 'Service' }, { value: 'product', label: 'Product' }]} defaultValue="service" aria-label="Type" />,
                    description: <Input placeholder="Ex: Oil change" aria-label="Description" />,
                    qty:         <Input type="number" placeholder="1" aria-label="Qty" />,
                    unitPrice:   <Input placeholder="0.00" aria-label="Unit price" />,
                    total:       'R$ 0,00',
                  },
                },
                {
                  id: 2,
                  cells: {
                    type:        <Select options={[{ value: 'service', label: 'Service' }, { value: 'product', label: 'Product' }]} defaultValue="product" aria-label="Type" />,
                    description: <Input placeholder="Ex: 5W30 Oil" aria-label="Description" />,
                    qty:         <Input type="number" placeholder="1" aria-label="Qty" />,
                    unitPrice:   <Input placeholder="0.00" aria-label="Unit price" />,
                    total:       'R$ 0,00',
                  },
                },
              ]}
              actions={<Button size="sm" onClick={() => alert('Add item')}>+ Add Item</Button>}
            />
          </Group>
 
          <Group label="Text-only rows">
            <Table
              columns={[
                { key: 'name',   label: 'Name' },
                { key: 'role',   label: 'Role',   width: '16rem' },
                { key: 'status', label: 'Status', width: '12rem', align: 'center' },
              ]}
              rows={[
                { id: 1, cells: { name: 'Alice', role: 'Engineer',     status: 'Active'   } },
                { id: 2, cells: { name: 'Bob',   role: 'Designer',     status: 'Active'   } },
                { id: 3, cells: { name: 'Carol', role: 'Product Lead', status: 'On leave' } },
                { id: 4, cells: { name: 'Dave',  role: 'Engineer',     status: 'Active'   } },
              ]}
            />
          </Group>
 
          <Group label="Empty state">
            <Table
              title="Empty Table"
              columns={[
                { key: 'name',   label: 'Name' },
                { key: 'status', label: 'Status', width: '12rem' },
                { key: 'date',   label: 'Date',   width: '14rem', align: 'right' },
              ]}
              rows={[]}
              emptyMessage="No records found."
            />
          </Group>
        </Section>
 
         <Section title="Footer">
          <Group label="Footer + text on right, left and center">
            <Footer
              left={['belagiosystems@gmail.com']}
              center={['© 2026 belagio-styles-lib', 'All rights reserved']}
              right={['Las Vegas, US']}
          />
          </Group>
         </Section>

      </div>
    </>
  )
}