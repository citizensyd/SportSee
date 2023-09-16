import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
#root{
  width: 100%
}
body {
  display: flex;
  justify-content: center;
  margin: 0 auto;
  background-color: #020203;
  font-family: 'Roboto', sans-serif;
}
.body-page {
    background-color: #FFFFFF;
    margin: 0 auto;
    color: black;
    min-height: 780px;
    min-width: 1024px;
}
`;
