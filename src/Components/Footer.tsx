import React from "react";
import styled from "styled-components";
import Github from "../Images/github.png";
import Idea from "../Images/idea.png";
import Linkedin from "../Images/linkedin.png";
import Instagram from "../Images/instagram.png";

const Container = styled.div`
  position: absolute;
  bottom: 0;
  height: 4rem;
  width: 100%;
  color: white;
  text-align: center;
  padding-bottom: 1rem;
`;
const IconList = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const List = styled.div`
  border: 1px solid ${(props) => props.theme.colors.iconBox};
  border-radius: 10px;
  padding: 6px;
`;
const Link = styled.a``;
const Icon = styled.img`
  width: 30px;
  height: 30px;
`;

const Footer = () => (
  <Container>
    <IconList>
      <List>
        <Link target="_blank">
          <Icon src={Github} />
        </Link>
      </List>
      <List>
        <Icon src={Idea} />
      </List>
      <List>
        <Icon src={Linkedin} />
      </List>
      <List>
        <Icon src={Instagram} />
      </List>
    </IconList>
  </Container>
);

export default Footer;
