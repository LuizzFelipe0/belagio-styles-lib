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

  /* Responsive sidebar shared by Bellagio applications. */
  .belagio-sidebar {
    position: fixed;
    inset: 0 auto 0 0;
    z-index: 5;
    display: flex;
    flex: 0 0 244px;
    flex-direction: column;
    width: 244px;
    padding: 26px 16px 16px;
  }

  .belagio-sidebar__brand {
    display: flex;
    align-items: center;
    gap: 11px;
    padding: 0 12px 34px;
    letter-spacing: -.04em;
  }

  .belagio-sidebar__brand-mark {
    display: grid;
    flex: 0 0 38px;
    width: 38px;
    height: 38px;
    place-items: center;
  }

  .belagio-sidebar__brand-copy { min-width: 0; }

  .belagio-sidebar__brand-copy b {
    display: block;
    font-size: 18px;
    font-weight: 750;
    line-height: 1.05;
  }

  .belagio-sidebar__brand-copy small {
    display: block;
    margin-top: 4px;
    color: #8e99ad;
    font-size: 9px;
    font-weight: 750;
    letter-spacing: .22em;
  }

  .belagio-sidebar__section-label {
    padding: 0 12px 12px;
    color: #8e99ad;
    font-size: 10px;
    font-weight: 750;
    letter-spacing: .1em;
  }

  .belagio-sidebar__nav {
    display: grid;
    gap: 5px;
  }

  .belagio-sidebar__item {
    position: relative;
    display: flex;
    width: 100%;
    min-height: 44px;
    align-items: center;
    gap: 12px;
    padding: 0 12px;
    text-align: left;
    cursor: pointer;
    transition: color .15s ease, background-color .15s ease;
  }

  .belagio-sidebar__item:hover:not(:disabled):not(.is-active) {
    background-color: #f6f8fe !important;
    color: #305cde !important;
  }

  .belagio-sidebar__item:focus-visible {
    outline: 2px solid #305cde;
    outline-offset: 2px;
  }

  .belagio-sidebar__item:disabled {
    cursor: not-allowed;
    opacity: .45;
  }

  .belagio-sidebar__item-icon {
    display: grid;
    flex: 0 0 20px;
    width: 20px;
    place-items: center;
    font-size: 17px;
  }

  .belagio-sidebar__item-label {
    overflow: hidden;
    flex: 1;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .belagio-sidebar__badge {
    display: grid;
    min-width: 21px;
    height: 21px;
    place-items: center;
    padding: 0 5px;
  }

  .belagio-sidebar__footer { margin-top: auto; }

  .belagio-sidebar__status {
    display: flex;
    min-height: 39px;
    align-items: center;
    gap: 8px;
    overflow: hidden;
    padding: 0 10px;
    border-bottom: 1px solid #edf0f5;
  }

  .belagio-sidebar__status-label {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .belagio-sidebar__status-dot {
    flex: 0 0 7px;
    width: 7px;
    height: 7px;
    border-radius: 50%;
  }

  .belagio-sidebar__status-dot--success {
    background: #44cc83;
    box-shadow: 0 0 0 3px rgba(68, 204, 131, .12);
  }

  .belagio-sidebar__status-dot--warning {
    background: #ff9500;
    box-shadow: 0 0 0 3px rgba(255, 149, 0, .12);
  }

  .belagio-sidebar__status-dot--error {
    background: #cf0000;
    box-shadow: 0 0 0 3px rgba(207, 0, 0, .1);
  }

  .belagio-sidebar__status-dot--neutral { background: #9e9e9e; }

  .belagio-sidebar__profile {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 15px 9px 1px;
  }

  .belagio-sidebar__profile-initials {
    display: grid;
    flex: 0 0 34px;
    width: 34px;
    height: 34px;
    place-items: center;
  }

  .belagio-sidebar__profile-copy {
    display: flex;
    min-width: 0;
    flex-direction: column;
    gap: 3px;
  }

  .belagio-sidebar__profile-copy b,
  .belagio-sidebar__profile-copy small {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .belagio-sidebar__profile-copy small {
    color: #8994a7;
    font-size: 10px;
  }

  @media (max-width: 840px) {
    .belagio-sidebar {
      width: 72px;
      flex-basis: 72px;
      padding-right: 9px;
      padding-left: 9px;
    }

    .belagio-sidebar__brand {
      justify-content: center;
      padding: 0 0 28px;
    }

    .belagio-sidebar__brand-copy,
    .belagio-sidebar__section-label,
    .belagio-sidebar__item-label,
    .belagio-sidebar__status-label,
    .belagio-sidebar__profile-copy { display: none; }

    .belagio-sidebar__item {
      justify-content: center;
      padding: 0;
    }

    .belagio-sidebar__item-icon { font-size: 18px; }

    .belagio-sidebar__badge {
      position: absolute;
      top: 0;
      right: 0;
      min-width: 16px;
      height: 16px;
      padding: 0 3px;
      font-size: 9px;
    }

    .belagio-sidebar__status {
      justify-content: center;
      padding: 0;
      border: 0;
    }

    .belagio-sidebar__profile {
      justify-content: center;
      padding-right: 0;
      padding-left: 0;
    }
  }

  @media (max-width: 620px) {
    .belagio-sidebar {
      inset: auto 0 0;
      display: block;
      width: 100%;
      height: 65px;
      padding: 5px 8px max(5px, env(safe-area-inset-bottom));
      border-top: 1px solid #e7ebf2;
      border-right: 0;
      box-shadow: 0 -5px 16px rgba(36, 56, 84, .04);
    }

    .belagio-sidebar__brand,
    .belagio-sidebar__section-label,
    .belagio-sidebar__footer { display: none; }

    .belagio-sidebar__nav {
      display: grid;
      height: 100%;
      grid-template-columns: repeat(var(--belagio-sidebar-item-count, 5), minmax(0, 1fr));
      align-items: center;
      gap: 3px;
    }

    .belagio-sidebar__item {
      height: 48px;
      min-height: 0;
      flex-direction: column;
      justify-content: center;
      gap: 3px;
      padding: 3px 1px;
      border-radius: 8px;
      font-size: 8px;
      line-height: 1;
    }

    .belagio-sidebar__item-label {
      display: block;
      max-width: 100%;
      font-size: 8px;
      font-weight: 600;
    }

    .belagio-sidebar__item.is-active .belagio-sidebar__item-label { font-weight: 700; }

    .belagio-sidebar__item-icon {
      flex-basis: auto;
      width: auto;
      font-size: 17px;
    }

    .belagio-sidebar__badge {
      top: 2px;
      right: calc(50% - 18px);
      min-width: 15px;
      height: 15px;
      font-size: 8px;
    }
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
