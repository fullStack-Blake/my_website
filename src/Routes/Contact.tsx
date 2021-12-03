import React from "react";
import styled from "styled-components";
import fist from "../Images/fist.png";
import { ContactInfo } from "../AboutDetail/JobDetail";
import phone from "../Images/phone.png";
import github from "../Images/github.png";
import email from "../Images/email.png";
import linkedin from "../Images/linkedin.png";

const Container = styled.div`
  width: 100vw;
  height: calc(100vh - 70px);
  /* background-color: black; */
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ProfileCard = styled.div`
  background-color: #827bcc;
  border-radius: 30px;
  height: 500px;
  width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const MemojiContainer = styled.div`
  margin: 30px 0 20px 0;
  height: 200px;
  width: 200px;
  background-color: rgba(189, 178, 255, 0.8);
  border: 1px solid transparent;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Memoji = styled.img`
  height: 100%;
  background-position: center;
  background-size: cover;
`;
const ContactContainer = styled.div`
  width: 80%;
  height: 100%;
`;
const Name = styled.div`
  font-weight: bold;
  font-size: 1.7em;
  font-family: "Courier New", Courier, monospace;
  line-height: 2;
`;
const Title = styled.div`
  /* font-weight: bold; */
  font-family: "Courier New", Courier, monospace;
  font-size: 1.1em;
  font-weight: 400;
  line-height: 2;
`;
const Icons = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
`;
const Icon = styled.div`
  background-color: rgba(189, 178, 255, 0.5);
  border-radius: 7px;
  padding: 6px;
`;
const IconImage = styled.img`
  width: 25px;
  height: 25px;
  opacity: 0.7;
`;
const Contact = () => (
  <Container>
    <ProfileCard>
      <MemojiContainer>
        <Memoji src={fist} aria-label="My Memoji Icon" />
      </MemojiContainer>
      <ContactContainer>
        <Name>{`${ContactInfo.english} ${ContactInfo.last}`}</Name>
        <Title>{`${ContactInfo.title}`}</Title>
        <Icons>
          <Icon>
            <a href={"tel:+16478879236"}>
              <IconImage src={phone} aria-label="Phone Icon" />
            </a>
          </Icon>
          <Icon>
            <a href={"mailto:han.sangyeup@gmail.com"}>
              <IconImage src={email} aria-label="Email Icon" />
            </a>
          </Icon>
          <Icon>
            <a href={"https://www.linkedin.com/in/sangyeuphan/"}>
              <IconImage src={linkedin} area-label={"Linked in button"} />
            </a>
          </Icon>
          <Icon>
            <a href="">
              <IconImage src={github} aria-label="Github Icon" />
            </a>
          </Icon>
        </Icons>
      </ContactContainer>
    </ProfileCard>
  </Container>
);

export default Contact;
