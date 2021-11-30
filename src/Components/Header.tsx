import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import About from "../Routes/About";
import Contact from "../Routes/Contact";
import Home from "../Routes/Home";
import Portfolio from "../Routes/Portfolio";
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
  z-index: 1;
`;
const Main = styled.div`
  display: flex;
  @media screen and (min-width: 768px) {
    justify-content: space-between;
  }
`;
const LogoB = styled(Logo)``;
const Button = styled.button``;
const Wide = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    margin-right: 30px;
    display: flex;
    font-size: 1.1em;
    column-gap: 14px;
    cursor: pointer;
    justify-content: space-between;
    a {
      all: unset;
    }
  }
`;

const Header = () => {
  const [modal, setModal] = useState(false);
  const showModal = () => {
    setModal((prevState) => !prevState);
  };
  const handleModal = () => {
    setModal((prevState) => !prevState);
    window.scrollTo(0, 0);
  };
  return (
    <>
      <Modal handleModal={handleModal} showModal={showModal} modal={modal} />
      <Container>
        <Main>
          <Logo />
          <Hamburger showModal={showModal} />
          <Wide>
            <Link to={"/"}>Home</Link>
            <Link to={"/portfolio"}>Portfolio</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/contact"}>Contact</Link>
          </Wide>
        </Main>
      </Container>
    </>
  );
};

export default Header;
