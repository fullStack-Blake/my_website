import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Signature = styled.div`
  font-family: "Reenie Beanie", cursive;
  font-size: 30px;
  margin-left: 30px;
  a {
    all: unset;
    cursor: pointer;
  }
`;
const SLink = styled(Link)``;
const Logo = () => (
  <Signature>
    <SLink to={"/"}>Blake</SLink>
  </Signature>
);

export default Logo;
