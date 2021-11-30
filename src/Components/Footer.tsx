import React from "react";
import styled from "styled-components";
import Github from "../Images/github.png";
import Idea from "../Images/idea.png";
import Linkedin from "../Images/linkedin.png";
import Instagram from "../Images/instagram.png";

const Container = styled.div`
  //display Footer when screen size is bigger
  display: none;
  position: relative;
  bottom: 0;
  height: 6rem;
  width: 100%;
  color: white;
  text-align: center;
  @media screen and (min-width: 768px) {
    display: block;
  }
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
        <Link target="_blank" href={"https://github.com/fullStack-Blake/"}>
          <Icon src={Github} />
        </Link>
      </List>
      <List>
        <Link target="_blank" href={""}>
          <Icon src={Idea} />
        </Link>
      </List>
      <List>
        <Link target="_blank" href={"https://www.linkedin.com/in/sangyeuphan/"}>
          <Icon src={Linkedin} />
        </Link>
      </List>
      <List>
        <Link target="_blank" href={""}>
          <Icon src={Instagram} />
        </Link>
      </List>
    </IconList>
  </Container>
);

export default Footer;
