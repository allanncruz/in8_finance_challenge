import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle<{}>`

  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  a{
    text-decoration: none;
  }

  body {
    font-size: 16px;
  }
`;

export default GlobalStyle;