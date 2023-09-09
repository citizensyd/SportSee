import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
  display: flex;
  justify-content: center;
  background-color: #020203;
  height: auto;
  margin: 0 auto;
  font-family: 'Roboto', sans-serif;
}
.body-page {
    background-color: #FFFFFF;
    color: black;
    width: 1440px;
    height: 1080px;
    min-width: 1024px;
    min-height: 780px;
}
`;
