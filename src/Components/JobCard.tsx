import React from "react";
import styled from "styled-components";

interface DetailCardProps {
  title: string;
  company: string;
  department: string;
  tasks: Array<string>;
}
const Container = styled.div`
  background-color: transparent;
  width: 300px;
  height: 300px;
  perspective: 1000px;
  text-align: center;
`;
const Card = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.4s ease-in-out;
  border-radius: 25px;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  &:hover {
    transform: rotateY(180deg);
  }
`;
const Front = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;

  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 20px;
  border-radius: 25px;

  background-color: ${(props) => props.theme.colors.main};
  color: white;
`;
const Company = styled.div`
  font-size: 1em;
`;
const Title = styled.div`
  font-size: 1.7em;
  font-weight: bold;
  /* padding-bottom: 1em; */
`;
const Department = styled.div`
  font-size: 0.8em;
  width: 100%;
  line-height: 1.5;
  color: darkgrey;
  font-weight: bold;
`;
const Tasks = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  color: #ffffef;
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 1em;
  border-radius: 25px;
  background-color: ${(props) => props.theme.colors.main};
`;
const Task = styled.div`
  width: 100%;
  /* padding-left: 5px; */
  font-size: 1em;
  line-height: 1.1;
`;

const DetailCard = ({ title, company, department, tasks }: DetailCardProps) => {
  return (
    <Container>
      <Card>
        <Front>
          <Company>{company}</Company>
          <Title>{title}</Title>
          <Department>{department}</Department>
        </Front>
        <Tasks>
          {tasks?.map((task, index) => (
            <Task key={index}>{task}</Task>
          ))}
        </Tasks>
      </Card>
    </Container>
  );
};

export default DetailCard;
