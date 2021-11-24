import React from "react";
import styled from "styled-components";
import { Routes, Route } from "react-router";
import { Link } from "react-router-dom";

interface ContainerProps {
  modal: boolean;
}
const Container = styled.div<ContainerProps>`
  display: ${(props) => (props.modal ? "initial" : "none")};
  position: fixed;
  z-index: 1;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`;
const Content = styled.div`
  background-color: #fefefe;
  margin: 15% auto;
  /* padding: 10px; */
  border: 1px solid #888;
  border-radius: 10px;
  width: 60%;
`;

const Close = styled.button`
  all: unset;
  color: #aaa;
  display: block;
  width: 98%;
  text-align: right;
  font-size: 28px;
  font-weight: bold;
  &:hover,
  &:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
`;
const MList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
`;
const MLink = styled(Link)`
  all: unset;
  display: block;
  /* height: 70px; */
  vertical-align: middle;
  line-height: 70px;
  width: 100%;
  text-align: center;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.colors.iconBox};
    opacity: 0.4;
  }
`;
interface ModalProps {
  HandleModal: React.MouseEventHandler;
  modal: boolean;
}

const Modal = ({ HandleModal, modal }: ModalProps) => {
  return (
    <Container modal={modal}>
      <Content>
        <Close onClick={HandleModal}>&times;</Close>

        <MList>
          <MLink onClick={HandleModal} to={"/"}>
            Home
          </MLink>
          <MLink onClick={HandleModal} to={"/portfolio"}>
            Portfolio
          </MLink>
          <MLink onClick={HandleModal} to={"/about"}>
            About
          </MLink>
          <MLink onClick={HandleModal} to={"/contact"}>
            Contact
          </MLink>
        </MList>
      </Content>
    </Container>
  );
};

export default Modal;
