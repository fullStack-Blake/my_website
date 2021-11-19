import React from "react";
import styled from "styled-components";

const Container = styled.div`
  top: 50%;
  right: 10%;
  transform: translate(-50%, -50%);
  position: absolute;
  width: 20px;
  &:before,
  &:after,
  & div {
    background: ${(props) => props.theme.colors.burger};
    content: "";
    display: block;
    height: 3px;
    border-radius: 3px;
    margin: 3.5px 0;
    transition: 0.5s;
  }
  &:hover:before {
    transform: translateY(6px) rotate(135deg);
  }
  &:hover:after {
    transform: translateY(-6px) rotate(-135deg);
  }
  &:hover div {
    transform: scale(0);
  }
`;
const Bar = styled.div``;

const Hamburger = () => (
  <Container>
    <Bar />
  </Container>
);

export default Hamburger;
