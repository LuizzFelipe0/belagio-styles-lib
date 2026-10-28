<p align="center">
  <img src="assets/belagio-styles-lib-banner.png" alt="BELAGIO-styles-lib" width="100%" />
</p>

# BELAGIO-styles-lib

A reusable React component library written in TypeScript, with design tokens and CSS-in-JS styles.

## Requirements

- Node.js 20 or later
- npm
- React 18 or later and React DOM 18 or later in the consuming project

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
import { Button, Card, Input, injectGlobalStyles } from 'belagio-styles-lib'

injectGlobalStyles()

export function ExamplePage() {
  return (
    <>
      <Card title="Profile" description="Manage your account details." />
      <Input label="Email" type="email" placeholder="you@example.com" />
      <Button onClick={() => window.alert('Saved')}>Save</Button>
    </>
  )
}
```

`injectGlobalStyles()` applies the library's reset and base styles and requests the Montserrat font. It safely does nothing when no browser document is available, such as during server-side rendering.

## Components and utilities

- **Buttons:** `Button`, `AddButton`, `UpdateButton`, `DeleteButton`
- **Content and navigation:** `Card`, `Header`, `Footer`, `Sidebar`, `ServiceDocument`
- **Form controls:** `Input`, `EmailInput`, `PasswordInput`, `SearchInput`, `Select`, `DropdownCheckbox`
- **Data display:** `Table`
- **Design system:** `colors`, `spacing`, `tokens`, `typography`, `injectGlobalStyles`

`DropdownCheckbox` accepts options with `value`, `label`, and an optional `disabled` flag. Use `defaultValue` for an uncontrolled selection or `value` to control it; `onChange` receives the selected values. The menu closes when the user clicks outside it or presses `Escape`.

`Sidebar` supports a brand, active item, optional badges, status, and profile. Each item uses a stable `id`, which is passed to `onItemSelect`. On narrow screens, the navigation becomes a bottom bar.

## Development

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
| `npm run test:run` | Runs the test suite once. |

Tests are located alongside components in `src/components/`. GitHub Actions runs the test suite on pushes and pull requests.
