# belagio-styles-lib

Biblioteca reutilizável de componentes React em TypeScript, com tokens de design e estilos CSS-in-JS aplicados diretamente aos componentes.

## Requisitos

- Node.js 20 ou superior
- npm
- React 18 ou superior e React DOM 18 ou superior no projeto consumidor

## Instalação

Para desenvolver a biblioteca localmente:

```bash
npm install
```

Para instalar a biblioteca a partir de um checkout local em outro projeto, gere primeiro o pacote compilado:

```bash
# Dentro de belagio-styles-lib
npm install
npm run build

# Dentro do projeto consumidor
npm install ../caminho/para/belagio-styles-lib
```

Quando a biblioteca estiver publicada em um registry npm, instale-a pelo nome do pacote:

```bash
npm install belagio-styles-lib
```

## Uso

Importe componentes e tipos pelo ponto de entrada principal:

```tsx
import {
  Button,
  Card,
  DropdownCheckbox,
  Header,
  Input,
  Select,
  Table,
  injectGlobalStyles,
} from 'belagio-styles-lib'

injectGlobalStyles()

export function ExamplePage() {
  return (
    <>
      <Header title="Dashboard" locationText="New York" />
      <Card title="Profile" description="Manage your account details." />
      <Input label="Email" type="email" placeholder="you@example.com" />
      <DropdownCheckbox
        label="Teams"
        options={[
          { value: 'design', label: 'Design' },
          { value: 'engineering', label: 'Engineering' },
        ]}
        defaultValue={['design']}
        onChange={(values) => console.log(values)}
      />
      <Select
        label="Status"
        options={[
          { value: 'active', label: 'Active' },
          { value: 'paused', label: 'Paused' },
        ]}
      />
      <Table
        columns={[{ key: 'name', label: 'Name' }]}
        rows={[{ id: '1', cells: { name: 'Alex Morgan' } }]}
      />
      <Button onClick={() => window.alert('Saved')}>Save</Button>
    </>
  )
}
```

`DropdownCheckbox` aceita uma lista de opções `{ value, label, disabled? }`. Use `defaultValue` para iniciar uma seleção não controlada ou `value` para controlar a seleção pelo estado do projeto consumidor. `onChange` recebe a lista atualizada de valores; o painel fecha ao clicar fora ou pressionar `Escape`.

`injectGlobalStyles()` adds the library's reset and base styles once to the document and requests the Montserrat font. Call it once from the consuming app's entry point. For server-side rendering it safely does nothing until a browser document is available.

## Executar o preview

Na pasta da biblioteca, instale as dependências e inicie o servidor de desenvolvimento Vite:

```bash
npm install
npm run dev
```

O Vite abre o preview no navegador, normalmente em `http://localhost:3000`.

Para gerar os arquivos de distribuição em `dist/`:

```bash
npm run build
```

Para verificar apenas os tipos TypeScript:

```bash
npm run typecheck
```

## Testes

Os testes unitários usam Vitest, React Testing Library, jest-dom e jsdom. Para executar uma vez:

```bash
npm run test:run
```

Para iniciar o Vitest em modo watch:

```bash
npm test
```

Os arquivos de teste ficam junto aos componentes em `src/components/`. O GitHub Actions executa a suíte automaticamente em cada push e pull request.

## Scripts npm

| Script | Descrição |
| --- | --- |
| `npm run dev` | Inicia o preview do Vite. |
| `npm run build` | Verifica os tipos e gera a biblioteca em `dist/`. |
| `npm run typecheck` | Verifica os tipos sem gerar arquivos. |
| `npm test` | Executa o Vitest em modo watch. |
| `npm run test:run` | Executa todos os testes uma vez. |
