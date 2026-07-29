import React from 'react'
import { injectGlobalStyles } from '../styles/global'
import { PrimalButton, DeleteButton, UpdateButton, AddButton } from '../components/PrimalButton'
import { PrimalInput, SearchInput, PasswordInput, EmailInput } from '../components/PrimalInput'
import { PrimalCard, ProfileCard, NotificationCard } from '../components/PrimalCard'

injectGlobalStyles()

// ─── Preview layout primitives ────────────────────────────────────────────────

const layout = {
  page: {
    backgroundColor: '#F2F2F7',
    minHeight:       '100vh',
    padding:         '4.0rem',
    fontFamily:      "'Montserrat', sans-serif",
  } as React.CSSProperties,

  header: {
    fontSize:     '3.2rem',
    fontWeight:   700,
    color:        '#000000',
    marginBottom: '0.8rem',
  } as React.CSSProperties,

  subtitle: {
    fontSize:     '1.4rem',
    color:        '#8d8c8c',
    marginBottom: '6.4rem',
  } as React.CSSProperties,

  section: {
    marginBottom: '6.4rem',
  } as React.CSSProperties,

  sectionTitle: {
    fontSize:      '2.0rem',
    fontWeight:    700,
    color:         '#000000',
    marginBottom:  '3.2rem',
    paddingBottom: '1.2rem',
    borderBottom:  '1px solid #a7a7a7',
  } as React.CSSProperties,

  groupLabel: {
    fontSize:     '1.1rem',
    fontWeight:   700,
    color:        '#8d8c8c',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.08em',
    marginBottom: '1.2rem',
  } as React.CSSProperties,

  group: {
    marginBottom: '3.2rem',
  } as React.CSSProperties,

  row: {
    display:    'flex',
    flexWrap:   'wrap' as const,
    alignItems: 'center',
    gap:        '1.6rem',
  } as React.CSSProperties,

  column: {
    display:       'flex',
    flexDirection: 'column' as const,
    gap:           '1.6rem',
    maxWidth:      '36rem',
  } as React.CSSProperties,
}

// ─── Section wrapper ──────────────────────────────────────────────────────────

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

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div style={layout.page}>

      <h1 style={layout.header}>belagio-styles-lib</h1>
      <p style={layout.subtitle}>Typescript Styles Library · Montserrat Bold · CSS-in-JS</p>

      {/* ── Button ── */}
      <Section title="Button">
        <Group label="Variantes">
          <div style={layout.row}>
            <PrimalButton variant="primary">Primary</PrimalButton>
            <PrimalButton variant="danger">Danger</PrimalButton>
            <PrimalButton variant="success">Success</PrimalButton>
            <PrimalButton variant="ghost">Ghost</PrimalButton>
          </div>
        </Group>

        <Group label="Tamanhos">
          <div style={layout.row}>
            <PrimalButton size="sm">Small</PrimalButton>
            <PrimalButton size="md">Medium</PrimalButton>
            <PrimalButton size="lg">Large</PrimalButton>
          </div>
        </Group>

        <Group label="Desabilitado">
          <div style={layout.row}>
            <PrimalButton variant="primary" disabled>Primary</PrimalButton>
            <PrimalButton variant="danger"  disabled>Danger</PrimalButton>
            <PrimalButton variant="ghost"   disabled>Ghost</PrimalButton>
          </div>
        </Group>

        <Group label="Composições">
          <div style={layout.row}>
            <DeleteButton>Delete</DeleteButton>
            <UpdateButton>Update</UpdateButton>
            <AddButton>Add</AddButton>
          </div>
        </Group>
      </Section>

      {/* ── Input ── */}
      <Section title="Input">
        <Group label="Variantes">
          <div style={layout.column}>
            <PrimalInput  label="Texto"  placeholder="Digite algo..." />
            <SearchInput  label="Busca" />
            <PasswordInput label="Senha" />
            <EmailInput   label="E-mail" />
          </div>
        </Group>

        <Group label="Tamanhos">
          <div style={layout.column}>
            <PrimalInput size="sm" placeholder="Small" />
            <PrimalInput size="md" placeholder="Medium" />
            <PrimalInput size="lg" placeholder="Large" />
          </div>
        </Group>

        <Group label="Desabilitado">
          <div style={layout.column}>
            <PrimalInput placeholder="Input desabilitado" disabled />
          </div>
        </Group>
      </Section>

      {/* ── Card ── */}
      <Section title="Card">
        <Group label="Variantes">
          <div style={layout.row}>
            <PrimalCard variant="flat"     title="Flat"     description="Sem sombra, borda sutil." />
            <PrimalCard variant="raised"   title="Raised"   description="Sombra padrão." />
            <PrimalCard variant="elevated" title="Elevated" description="Sombra pronunciada." />
          </div>
        </Group>

        <Group label="Clicável (hover para ver elevação)">
          <div style={layout.row}>
            <PrimalCard
              title="Card clicável"
              description="Clique para disparar o onClick."
              onClick={() => alert('PrimalCard clicado!')}
            />
          </div>
        </Group>

        <Group label="Desabilitado">
          <div style={layout.row}>
            <PrimalCard title="Card desabilitado" description="Sem interação." disabled />
          </div>
        </Group>

        <Group label="Composições">
          <div style={layout.row}>
            <ProfileCard      title="Profile Card"      description="Composição raised." />
            <NotificationCard title="Notification Card" description="Composição flat." />
          </div>
        </Group>
      </Section>

    </div>
  )
}