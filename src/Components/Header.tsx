import React from "react";
import styled from "styled-components";
import Hamburger from "./Hamburger";
import Logo from "./Logo";
import Modal from "./Modal";

const Container = styled.div`
  position: sticky;
  top: 0;
  height: 70px;
  line-height: 73px;
  font-size: 13px;
  font-weight: 400;
  background-color: ${(props) => props.theme.colors.background};
  transition: background 0.3s;
`;
const Main = styled.div`
  display: flex;
`;
const LogoB = styled(Logo)``;
const HamburgerH = styled(Hamburger)``;

const Header = () => (
  <>
    <Modal />
    <Container>
      <Main>
        <Logo />
        <Hamburger />
      </Main>
    </Container>
  </>
);

export default Header;
