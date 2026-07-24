const injectStyle = (id: string, css: string): void => {
  if (typeof document === 'undefined') return // SSR guard
  if (document.getElementById(id)) return   

  const style = document.createElement('style')
  style.id = id
  style.textContent = css
  document.head.appendChild(style)
}


const injectFont = (): void => {
  if (typeof document === 'undefined') return
  if (document.getElementById('belagio-font')) return

  const link = document.createElement('link')
  link.id = 'belagio-font'
  link.rel = 'stylesheet'
  link.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap'
  document.head.appendChild(link)
}

const GLOBAL_CSS = `

  html {
    font-size: 62.5%;
    box-sizing: border-box;
  }

  *, *::before, *::after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  body {
    font-size: 1.6rem;
    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    background-color: #FFFFFF;
    color: #000000;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ul, ol {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  img, svg {
    display: block;
    max-width: 100%;
  }

  button, input, textarea, select {
    font: inherit;
  }
`

/**
 * Initialize belagio-styles-lib global styles.
 * 
 * @example
 * // Add this code at your project entry point (main.tsx ou App.tsx):
 * import { injectGlobalStyles } from 'belagio-styles-lib/styles'
 * injectGlobalStyles()
 */
export const injectGlobalStyles = (): void => {
  injectFont()
  injectStyle('belagio-global', GLOBAL_CSS)
}