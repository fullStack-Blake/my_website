import React from "react";
import styled from "styled-components";
import Footer from "../Components/Footer";
import Smile from "../Images/Blake_smile-removebg.png";
import Background from "../Images/blob-haikei.png";
import Computer from "../Images/computer.jpg";

const Container = styled.div`
  position: relative;
  min-height: calc(100vh - 70px);
`;
const HomeContent = styled.div`
  /* margin-top: 20px; */
  margin: 0 50px;
  border-bottom: 1px solid gray;
  padding-bottom: 3rem;
`;
const IntroHeader = styled.div`
  font-family: "Roboto Slab", serif;
  font-weight: 700;
  font-size: 60px;
  letter-spacing: 3px;
  padding-top: 20px;
`;
const HRow = styled.div`
  margin-bottom: 30px;
`;
const JobTitle = styled.div`
  font-weight: 400;
  font-size: 24px;
  letter-spacing: 1px;
`;
const TextContent = styled.div`
  letter-spacing: 2px;
  width: 80%;
  line-height: 150%;
  margin-bottom: 20px;
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
`;
const About = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const FlexText = styled.div`
  font-family: "Roboto Slab", serif;
  font-size: 1.2em;
  letter-spacing: 1px;
  line-height: 1.4;
  margin-bottom: 20px;
`;
const Talk = styled.div`
  font-size: 1.7em;
  font-weight: 600;
  margin-bottom: 20px;
`;
const ContactBox = styled.div`
  width: 100%;
  /* display: flex; */
  align-items: center;
  justify-content: space-between;
`;
const ContactText = styled.div`
  margin-bottom: 20px;
`;
const EmailBtn = styled.button`
  all: unset;
  cursor: pointer;
  color: white;
  background-color: ${(props) => props.theme.colors.button};
  font-weight: 600;
  width: 100%;
  height: 50px;
  text-align: center;
  border-radius: 20px;
  a:link,
  a:visited {
    all: unset;
  }
`;

const Home = () => (
  <Container>
    <HomeContent>
      <IntroHeader>
        <HRow>Hey There,</HRow>
        <HRow>I'm Blake</HRow>
      </IntroHeader>
      <TextContent>
        I design beautifully simple things, And I love what I do.
      </TextContent>

      <About>
        <Image src={Computer} />
        <FlexText>
          I have always wanted my work to be part of a bigger self to make
          people’s daily lives and complex app simple to use.
        </FlexText>
        <ContactBox>
          <ContactText>
            <Talk>Got a project?</Talk>
            <Talk>Let's Talk!</Talk>
          </ContactText>
          <EmailBtn>
            <a href="mailto:han.sangyeup@gmail.com">Contact Me</a>
          </EmailBtn>
        </ContactBox>
      </About>
    </HomeContent>

    <Footer />
  </Container>
);

export default Home;
