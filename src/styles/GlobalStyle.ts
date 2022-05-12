import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    user-select: none;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px; 
    background-color: #d8efef;
  }

  a {
    text-decoration: none
  }
`
