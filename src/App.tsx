import React from "react";
import GlobalStyle from "./GlobalStyle";
import Router from "./Components/Router";
import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.background};
`;

const App = () => (
  <Container>
    <GlobalStyle />
    <Router />
  </Container>
);

export default App;
