import React from 'react'
import { injectGlobalStyles } from '../../styles/global'
import { layout } from './AppStyles'

import { PrimalButton, DeleteButton, UpdateButton, AddButton } from '../../components/PrimalButton'
import { PrimalInput, SearchInput, PasswordInput, EmailInput } from '../../components/PrimalInput'
import { PrimalCard } from '../../components/PrimalCard'
import { PrimalHeader } from '../../components/PrimalHeader'
import { PrimalTable } from '../../components/PrimalTable'
import { PrimalSelect } from '../../components/PrimalSelect'

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
            <PrimalHeader
              title="Header Title"
              locationText="Las Vegas, US"
              actions={
                <>
                  <PrimalButton size="sm" variant="ghost">Login</PrimalButton>
                  <PrimalButton size="sm">Sign up</PrimalButton>
                </>
              }
            />
          </Group>

          <Group label="Title only">
            <PrimalHeader title="Header Title" />
          </Group>

          <Group label="Icon + title only">
            <PrimalHeader
              icon="https://placehold.co/32x32/007AFF/FFFFFF?text=B"
              iconAlt="Belagio logo"
              title="Header Title"
            />
          </Group>

          <Group label="Right side only (location + actions)">
            <PrimalHeader
              locationText="Rio de Janeiro, Brazil"
              actions={<DeleteButton size="sm">Delete</DeleteButton>}
            />
          </Group>
        </Section>

        {/* ── Button ── */}
        <Section title="Button">
          <Group label="Variants">
            <div style={layout.row}>
              <PrimalButton variant="primary">Primary</PrimalButton>
              <PrimalButton variant="danger">Danger</PrimalButton>
              <PrimalButton variant="success">Success</PrimalButton>
              <PrimalButton variant="ghost">Ghost</PrimalButton>
            </div>
          </Group>

          <Group label="Sizes">
            <div style={layout.row}>
              <PrimalButton size="sm">Small</PrimalButton>
              <PrimalButton size="md">Medium</PrimalButton>
              <PrimalButton size="lg">Large</PrimalButton>
            </div>
          </Group>

          <Group label="Disabled">
            <div style={layout.row}>
              <PrimalButton variant="primary" disabled>Primary</PrimalButton>
              <PrimalButton variant="danger"  disabled>Danger</PrimalButton>
              <PrimalButton variant="ghost"   disabled>Ghost</PrimalButton>
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
              <PrimalInput   label="Text"     placeholder="Type something..." />
              <SearchInput   label="Search" />
              <PasswordInput label="Password" />
              <EmailInput    label="Email" />
            </div>
          </Group>

          <Group label="Sizes">
            <div style={layout.column}>
              <PrimalInput size="sm" placeholder="Small" />
              <PrimalInput size="md" placeholder="Medium" />
              <PrimalInput size="lg" placeholder="Large" />
            </div>
          </Group>

          <Group label="Disabled">
            <div style={layout.column}>
              <PrimalInput placeholder="Disabled input" disabled />
            </div>
          </Group>
        </Section>

        {/* ── Card ── */}
        <Section title="Card">
          <Group label="Variants">
            <div style={layout.row}>
              <PrimalCard variant="flat"     title="Flat"     description="No shadow, subtle border." />
              <PrimalCard variant="raised"   title="Raised"   description="Default shadow." />
              <PrimalCard variant="elevated" title="Elevated" description="Pronounced shadow." />
            </div>
          </Group>
 
          <Group label="Sizes">
            <div style={layout.row}>
              <PrimalCard size="sm" title="Small" description="Small Card" />
              <PrimalCard size="md" title="Medium" description="Medium Card" />
              <PrimalCard size="lg" title="Large" description="Large Card" />
            </div>
          </Group>
 
          <Group label="With header (hasHeader)">
            <div style={layout.row}>
              <PrimalCard
                hasHeader
                title="Card Title"
                description="Header with title only."
              />
              <PrimalCard
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
              <PrimalCard
                title="Clickable card"
                description="Hover to see elevation. Click to fire onClick."
                onClick={() => alert('PrimalCard clicked!')}
              />
            </div>
          </Group>
 
          <Group label="Disabled">
            <div style={layout.row}>
              <PrimalCard title="Disabled card" description="No interaction." disabled />
            </div>
          </Group>
        </Section>

        <Section title="Table">
          <Group label="Title + columns + rows + actions">
            <PrimalTable
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
                    type:        <PrimalSelect options={[{ value: 'service', label: 'Service' }, { value: 'product', label: 'Product' }]} defaultValue="service" aria-label="Type" />,
                    description: <PrimalInput placeholder="Ex: Oil change" aria-label="Description" />,
                    qty:         <PrimalInput type="number" placeholder="1" aria-label="Qty" />,
                    unitPrice:   <PrimalInput placeholder="0.00" aria-label="Unit price" />,
                    total:       'R$ 0,00',
                  },
                },
                {
                  id: 2,
                  cells: {
                    type:        <PrimalSelect options={[{ value: 'service', label: 'Service' }, { value: 'product', label: 'Product' }]} defaultValue="product" aria-label="Type" />,
                    description: <PrimalInput placeholder="Ex: 5W30 Oil" aria-label="Description" />,
                    qty:         <PrimalInput type="number" placeholder="1" aria-label="Qty" />,
                    unitPrice:   <PrimalInput placeholder="0.00" aria-label="Unit price" />,
                    total:       'R$ 0,00',
                  },
                },
              ]}
              actions={<PrimalButton size="sm" onClick={() => alert('Add item')}>+ Add Item</PrimalButton>}
            />
          </Group>
 
          <Group label="Text-only rows">
            <PrimalTable
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
            <PrimalTable
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
 

      </div>
    </>
  )
}