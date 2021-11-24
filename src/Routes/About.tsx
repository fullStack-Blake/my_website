import React from "react";
import styled from "styled-components";

const Container = styled.div``;
const Section = styled.div`
  background-color: grey;
  min-height: 30vh;
  padding: 4em;
`;
const Title = styled.div`
  font-size: 3em;
  width: 50%;
  color: white;
  line-height: 1.2;
`;
const Detail = styled.div``;

const About = () => {
  return (
    <Container>
      <Section>
        <Title>Experience & Services</Title>
      </Section>
    </Container>
  );
};

export default About;
