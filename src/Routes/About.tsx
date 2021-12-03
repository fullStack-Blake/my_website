import React from "react";
import styled from "styled-components";
import JobCard from "../Components/JobCard";
import { JobDetail, Categories, Skills } from "../AboutDetail/JobDetail";
import SkillCard from "../Components/SkillCard";
import Blake from "../Images/Blake_smile-removebg.png";

const Container = styled.div``;
const Section = styled.div`
  /* background-color: white; */
  min-height: 30vh;
  padding: 3em 2em;
`;
const Title = styled.div`
  font-size: 3em;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 0.7em;
  font-family: "Roboto Slab", serif;
`;
const JobContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  column-gap: 40px;
  row-gap: 20px;
`;
const SkillsContainer = styled.div`
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;
const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  /* height: 400px; */
  width: 100vw;

  /* background-color: black; */
  @media screen and (min-width: 768px) {
    flex-direction: row-reverse;
    align-items: center;
  }
`;
const AboutText = styled.div`
  padding-left: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  @media screen and (min-width: 768px) {
    width: 60vw;
  }
`;
const Reference = styled.div`
  margin-bottom: 20px;
  font-family: "Courier New", Courier, monospace;
  width: 80%;
`;
const ImageContainer = styled.div`
  height: 100%;
  text-align: center;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    width: 30vw;
    padding-right: 30px;
  }
`;
const AboutImage = styled.img`
  width: 250px;
  /* background-color: blue; */
  /* height: 100%; */
  opacity: 0.9;
`;

const About = () => {
  return (
    <Container>
      <IntroContainer>
        <ImageContainer>
          <AboutImage src={Blake} />
        </ImageContainer>
        <AboutText>
          <Title>Amazing Team Player</Title>
          <Reference>
            The work you have done has been exceptional. I’d be prepared to
            speak to any employer about the work you did and how well it was
            done and how it exceeded our expectations.
            <br /> - Manager, MLTSD, Government of Canada
          </Reference>
        </AboutText>
      </IntroContainer>
      <Section>
        <Title>Experience</Title>
        <JobContainer>
          {JobDetail?.map((job, index) => (
            <JobCard
              key={index}
              title={job.title}
              company={job.company}
              department={job.department}
              tasks={job.task}
            />
          ))}
        </JobContainer>
      </Section>
      <Section>
        <Title>Experties</Title>
        <SkillsContainer>
          {Categories.map((category, index) => (
            <SkillCard key={index} category={category} detail={Skills[index]} />
          ))}
        </SkillsContainer>
      </Section>
    </Container>
  );
};

export default About;
