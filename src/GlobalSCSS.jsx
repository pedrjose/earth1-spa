import { createGlobalStyle } from "styled-components";

export const GlobalSCSS = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
  html {
    width: auto;
  }
  body {
    max-width: 100vw;
    height: 100vh;
    background-color: #F799AA;
  }
`;