import React from "react";
import styled from "styled-components";
import JobCard from "../Components/JobCard";
import { JobDetail } from "../AboutDetail/JobDetail";

const Container = styled.div``;
const Section = styled.div`
  background-color: grey;
  min-height: 30vh;
  padding: 2em;
`;
const Title = styled.div`
  font-size: 3em;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 20px;
`;
const JobContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  column-gap: 40px;
  row-gap: 20px;
`;

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
    </Container>
  );
};

export default About;
