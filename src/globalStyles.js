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

  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: #0a192f;
    color: #64ffda;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 100px;
  z-index: 1;

  @media screen and (max-width: 991px) {
    padding: 0 30px;
  }
`;

export const Wrapper = styled.section`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 100px;

  @media screen and (max-width: 991px) {
    padding: 0;
  }
`;

export default GlobalStyle;