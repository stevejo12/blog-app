import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: none;
  }

  body {
    background-color: #0a192f;
    color: #fff;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 50px;
  z-index: 1;

  @media screen and (max-width: 991px) {
    padding: 0 30px;
  }
`;

export default GlobalStyle;