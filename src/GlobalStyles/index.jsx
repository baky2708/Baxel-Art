import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*, body {
  box-sizing: border-box;
  font-family: 'Quicksand', sans-serif;
}
main {
  height: 88vh;
}
`;

export default GlobalStyles;
