import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    background: ${(props) => props.theme.colors.gray400};
    -webkit-font-smoothing: antialiased
  }
  body, input, button {
    font: 1rem Lato, sans-serif;
  }
  button {
    cursor: pointer;
  }
`
