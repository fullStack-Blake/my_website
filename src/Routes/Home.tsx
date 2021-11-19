import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 20px;
`;
const IntroHeader = styled.div`
  margin-left: 50px;
  font-family: "Roboto Slab", serif;
  font-weight: 700;
  font-size: 60px;
  letter-spacing: 3px;
`;
const HRow = styled.div`
  margin-bottom: 30px;
`;
const TextContent = styled.div`
  margin-left: 50px;
  letter-spacing: 2px;
`;
const Row = styled.div``;
const Col = styled.div`
  width: 70%;
  line-height: 150%;
`;

const Home = () => (
  <Container>
    <IntroHeader>
      <HRow>Hey There,</HRow>
      <HRow>I'm Blake</HRow>
    </IntroHeader>
    <TextContent>
      <Row>
        <Col>I design beautifully simple things, And I love what I do.</Col>
      </Row>
    </TextContent>
  </Container>
);

export default Home;
