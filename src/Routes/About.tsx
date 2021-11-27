import React from "react";
import styled from "styled-components";
import JobCard from "../Components/JobCard";
import { JobDetail, Categories, Skills } from "../AboutDetail/JobDetail";
import SkillCard from "../Components/SkillCard";

const Container = styled.div``;
const Section = styled.div`
  background-color: #bdb2ff;
  min-height: 30vh;
  padding: 3em 2em;
`;
const Title = styled.div`
  font-size: 3em;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 1em;
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
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

const About = () => {
  return (
    <Container>
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
