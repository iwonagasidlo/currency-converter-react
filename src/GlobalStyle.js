import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
      }
      
      *, ::after, ::before {
        box-sizing: inherit;
      }
      
      #root {
        font-family: 'Montserrat', sans-serif;
        min-height: 100vh;
        background-image: url(money.webp);
        display: flex;
        align-items: center;
        justify-content: center;
        background-position: center;
        background-size: cover;
      }
`;