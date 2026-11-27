<p align="center">
  <img src="assets/belagio-styles-lib-banner.png" alt="BELAGIO-styles-lib" width="100%" />
</p>

# BELAGIO-styles-lib

A reusable React component library written in TypeScript, with design tokens and CSS-in-JS styles.

## Requirements

- Node.js 20 or later
- npm
- React 18 or later, with React DOM for web apps or React Native 0.77.3 or later for mobile apps. Use the React version required by your app's renderer.

## Installation

To install from a local checkout, build the library first:

```bash
# In the library directory
npm install
npm run build

# In the consuming project
npm install ../path/to/belagio-styles-lib
```

To use the npm package, install it by name after it has been published:

```bash
npm install belagio-styles-lib
```

## Quick start

Import the components you need and call `injectGlobalStyles()` once from your app's entry point:

```tsx
import { Button, Card, FormField, InfoButton, Input, injectGlobalStyles } from 'belagio-styles-lib'

injectGlobalStyles()

export function ExamplePage() {
  return (
    <>
      <Card title="Profile" description="Manage your account details." />
      <FormField label="Email" description="We will send account updates here." required>
        <Input type="email" placeholder="you@example.com" />
      </FormField>
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
        <Button onClick={() => window.alert('Saved')}>Save</Button>
        <InfoButton description="This explains what the action does." />
      </span>
    </>
  )
}
```

`injectGlobalStyles()` applies the library's reset and base styles and requests the Montserrat font. It safely does nothing when no browser document is available, such as during server-side rendering.

## React Native

Import components from `belagio-styles-lib/mobile` in iOS and Android apps using a bundler that supports package `exports`, such as Metro from React Native 0.79 onward. All components listed below and the button/input compositions have mobile implementations.

```tsx
import { useState } from 'react'
import { Button, Card, Input } from 'belagio-styles-lib/mobile'

export function ProfileForm({ save }: { save: (name: string) => Promise<void> }) {
  const [name, setName] = useState('')
  const [saving, setSaving] = useState(false)

  async function submit() {
    setSaving(true)
    try {
      await save(name)
    } finally {
      setSaving(false)
    }
  }

  return (
    <Card hasHeader title="Profile">
      <Input label="Name" value={name} onChange={setName} autoComplete="name" />
      <Button onPress={submit} disabled={!name.trim()} loading={saving}>Save</Button>
    </Card>
  )
}
```

The mobile button accepts a text label, supports the web variants and sizes, and blocks presses while loading or disabled. The input forwards a native `TextInput` ref and accepts native props such as `keyboardType` and `secureTextEntry`. An actionable card accepts `onPress` and an optional `accessibilityLabel`. Wrap custom card text in React Native's `Text` component.

Mobile components use the system font by default. To use a bundled font or override semantic colors, wrap them in `<MobileThemeProvider fontFamily="Montserrat" colors={{ primary: '#254BB7' }}>` after loading the font in your app. The mobile entry also exports numeric `spacing` and `fontSizes`.

Mobile callbacks use `onPress` for actions and `onChange` for field values. Use native accessibility props, native image sources for `icon`/`logo`, and native style objects. `Select`, `DropdownCheckbox` and `LanguageToggle` show their choices in a scrollable modal. `Dialog` handles Android back and accessibility escape. `InfoButton` opens its description on touch.

`FormField` accepts string labels, descriptions and errors, assigns the control's accessible name and combines its accessibility hint with the field messages. `Sidebar` renders a scrollable navigation panel for the app to place in its layout. `Table` and `ServiceDocument` support native cell content and horizontal scrolling, with numeric or native dimension values for column widths. `ServiceDocument` displays document content; PDF generation and printing belong to the consuming app.

## Components and utilities

- **Buttons:** `Button`, `AddButton`, `UpdateButton`, `DeleteButton`, `InfoButton`
- **Content and navigation:** `Card`, `Header`, `Footer`, `Sidebar`, `ServiceDocument`
- **Form controls:** `Input`, `EmailInput`, `PasswordInput`, `SearchInput`, `Select`, `DropdownCheckbox`
- **Workflow and feedback:** `FormField`, `Stepper`, `Alert`, `Progress`, `Dialog`, `EmptyState`
- **Data display:** `Table`
- **Design system:** `colors`, `spacing`, `tokens`, `typography`, `injectGlobalStyles`

`DropdownCheckbox` accepts options with `value`, `label`, and an optional `disabled` flag. Use `defaultValue` for an uncontrolled selection or `value` to control it; `onChange` receives the selected values. The menu closes when the user clicks outside it or presses `Escape`.

`InfoButton` accepts a `description` and an optional `hoverColor` to customize the color of its icon and circular border while active.

`Sidebar` supports a brand, active item, optional badges, status, and profile. Each item uses a stable `id`, which is passed to `onItemSelect`. On narrow screens, the navigation becomes a bottom bar.

`FormField` wraps one control and connects its label, description, required state and error message. Omit the control's own `label` when using this wrapper. `Input` and `Select` forward native DOM attributes, event handlers and refs; their existing `onChange` callback continues to receive the new string value, while `onChangeEvent` receives the native React change event.

`Stepper` takes an ordered `steps` array and zero-based `activeStep`. `Progress` renders an accessible rounded progress bar and requires an accessible `label`; set `fillColor` to customize its fill color. `Alert` supports `info`, `success`, `warning` and `error` tones; pass `onClose` to show its accessible close button, rendered with the shared `Button`. `Dialog` is controlled with `open` and `onClose`, handles Escape, traps Tab focus and restores focus to the element that opened it. Its close button is black by default; set `closeButtonColor` to customize it. `EmptyState` provides a generic title, optional description and action slot.

Semantic colors are exported as `semanticColors` and used by the common controls and workflow primitives. Consumers can override them on any ancestor with CSS custom properties; defaults match the library's existing palette:

```css
:root {
  --belagio-color-primary: #305CDE;
  --belagio-color-surface: #FFFFFF;
  --belagio-color-border: #c7c7c7;
  --belagio-color-text: #000000;
  --belagio-color-success: #44CC83;
  --belagio-color-warning: #FF9500;
  --belagio-color-error: #CF0000;
}
```

`Progress` also accepts `--belagio-progress-fill` and `--belagio-progress-track` for its green fill and gray track.

## Development

### Source layout

| Directory | Contents |
| --- | --- |
| `src/web/components/` | DOM components, colocated styles and component tests. |
| `src/mobile/components/` | React Native components and colocated styles. |
| `src/shared/` | Component sizes, variants and design scales used by both platforms. |
| `src/web/` | Web exports, CSS tokens, global styles and the browser preview. |
| `src/mobile/` | Mobile exports, numeric tokens, theme provider and mobile integration tests. |

Add each implementation under its platform and export it from that platform's `index.ts`. Both platforms can import from `src/shared/`. Shared modules have no renderer dependencies. The root `src/index.ts` forwards the web API. The package `exports` field defines the public web and mobile entry points.

### Local preview

Install dependencies and start the Vite preview:

```bash
npm install
npm run dev
```

The preview runs at `http://localhost:3000`.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the Vite preview. |
| `npm run build` | Type-checks the project and builds the library in `dist/`. |
| `npm run typecheck` | Checks TypeScript types without building. |
| `npm test` | Runs Vitest in watch mode. |
| `npm run test:run` | Runs the web and mobile suites once. |
| `npm run test:mobile` | Runs the mobile tests with the React Native Jest preset. |

GitHub Actions runs both suites on pushes and pull requests.
