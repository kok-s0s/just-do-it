import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    user-select: none;
    font-family: 'Macondo','Noto Serif SC';
    font-size: 16px;
    -webkit-app-region: drag;
  }

  a {
    text-decoration: none
  }

  input, textarea, button{
    -webkit-app-region: no-drag;
  }
`
