import React from "react";
import styled from "styled-components";

const Container = styled.div`
  /* display: none; Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
`;
const Content = styled.div`
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 80%; /* Could be more or less, depending on screen size */
`;
const Close = styled.button`
  all: unset;
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  &:hover,
  &:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
`;

const Modal = () => (
  <Container>
    <Content>
      <Close>&times;</Close>
      <p>Some text in the Modal..</p>
      <p>Some text in the Modal..</p>
      <p>Some text in the Modal..</p>
      <p>Some text in the Modal..</p>
      <p>Some text in the Modal..</p>
      <p>Some text in the Modal..</p>
      <p>Some text in the Modal..</p>
      <p>Some text in the Modal..</p>
      <p>Some text in the Modal..</p>
    </Content>
  </Container>
);

export default Modal;
