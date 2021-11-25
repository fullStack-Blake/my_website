import React from "react";
import styled from "styled-components";
import JobCard from "../Components/JobCard";
import { JobDetail, Skills } from "../AboutDetail/JobDetail";
import SkillCard from "./SkillCard";

const Container = styled.div``;
const Section = styled.div`
  background-color: #f8edeb;
  min-height: 30vh;
  padding: 3em 2em;
`;
const Title = styled.div`
  font-size: 3em;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 1.5em;
`;
const JobContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  column-gap: 40px;
  row-gap: 20px;
`;
const SkillsContainer = styled.div``;

const About = () => {
  return (
    <Container>
      <Section>
        <Title>Experience & Services</Title>
        <JobContainer>
          {JobDetail?.map((job) => (
            <JobCard
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
          {Skills.map((skill) => {
            return (
              <SkillCard
                category={Object.keys(skill).toString()}
                detail={Object.values(skill)}
              />
            );
          })}
        </SkillsContainer>
      </Section>
    </Container>
  );
};

export default About;
