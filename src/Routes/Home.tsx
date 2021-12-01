import React from "react";
import styled from "styled-components";
import Footer from "../Components/Footer";
import Smile from "../Images/Blake_smile-removebg.png";
import Background from "../Images/blob-haikei.png";
import Computer from "../Images/computer.jpg";

const Container = styled.div`
  /* position: relative; */
  /* min-height: calc(100vh - 70px); */
`;
const HomeContent = styled.div`
  /* margin-top: 20px; */
  margin: 0 50px;
  border-bottom: 1px solid gray;
  padding-bottom: 3rem;
`;
const IntroHeader = styled.div`
  font-family: "Roboto Slab", serif;
  padding-top: 30px;
  margin-bottom: 30px;
  /* height: 160px; */
  /* @media screen and (min-width: 768px) {
    display: flex;
    height: 50px;
    align-items: flex-end;
    justify-content: space-between;
  } */
`;
const HRow = styled.div`
  font-size: 40px;
  font-weight: 400;
  margin-bottom: 30px;
  /* @media screen and (min-width: 768px) {
    margin: 0 0;
  } */
`;
const Name = styled.div`
  font-weight: 700;
  font-size: 60px;
  letter-spacing: 3px;
`;
const TextContent = styled.div`
  letter-spacing: 2px;
  width: 80%;
  line-height: 150%;
  margin-bottom: 30px;
`;
// const Photo = styled.div`
//   display: flex;
//   width: 100%;
//   justify-content: center;
//   img {
//     width: 50%;
//     border-radius: 10px;
//   }
//   margin-bottom: 20px;
// `;
const Image = styled.img`
  width: 100%;
  margin-bottom: 20px;
  min-width: 350px;
  max-width: 600px;
`;
const About = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;
const FlexContainer = styled.div`
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: right;
    align-items: flex-end;
  }
`;
const FlexText = styled.div`
  font-family: "Roboto Slab", serif;
  font-size: 1.2em;
  letter-spacing: 1px;
  line-height: 1.4;
  margin-bottom: 20px;
  width: 80%;
`;
const Talk = styled.div`
  font-size: 1.3em;
  font-weight: 600;
  margin-bottom: 20px;
  width: 50%;
  line-height: 1.2;
  @media screen and (min-width: 768px) {
    width: 100%;
    text-align: right;
  }
`;
const EmailBtn = styled.button`
  all: unset;
  cursor: pointer;
  color: white;
  background-color: ${(props) => props.theme.colors.main};
  font-weight: 600;
  width: 100%;
  height: 50px;
  text-align: center;
  border-radius: 20px;
  a:link,
  a:visited {
    all: unset;
  }
  &:hover {
    color: black;
    background-color: ${(props) => props.theme.colors.main};
  }
  @media screen and (min-width: 768px) {
    width: 200px;
  }
`;

const Home = () => (
  <Container>
    <HomeContent>
      <IntroHeader>
        <HRow>Hey There,</HRow>
        <Name>I'm Blake</Name>
      </IntroHeader>
      <TextContent>
        Simple things are beautiful, And I love challenges.
      </TextContent>

      <About>
        <Image src={Computer} />
        <FlexContainer>
          <FlexText>I want to make your life easy and simple</FlexText>
          <Talk>Got a project? Let's Talk!</Talk>
          <EmailBtn>
            <a href="mailto:han.sangyeup@gmail.com">Contact Me</a>
          </EmailBtn>
        </FlexContainer>
      </About>
    </HomeContent>

    <Footer />
  </Container>
);

export default Home;
