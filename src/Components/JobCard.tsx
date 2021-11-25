import React from "react";
import styled from "styled-components";

interface DetailCardProps {
  title: string;
  company: string;
  department: string;
  tasks: Array<string>;
}
const ContainerT = styled.div`
  background-color: transparent;
  width: 300px;
  height: 300px;
  perspective: 1000px;
`;
const Card = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.4s ease-in-out;
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
  padding-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  background-color: white;
  /* padding: 30px; */
  color: black;
`;
const Company = styled.div`
  font-size: 0.9em;
`;
const Title = styled.div`
  margin-top: -10px;
  font-size: 1.7em;
  font-weight: bold;
  /* padding-bottom: 1em; */
`;
const Department = styled.div`
  font-size: 0.9em;
  width: 100%;
  line-height: 1.5;
  color: grey;
`;
const Tasks = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  color: white;
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 15px;
`;
const Task = styled.div`
  padding-left: 5px;
  font-size: 0.8em;
  line-height: 1.2;
`;

const DetailCard = ({ title, company, department, tasks }: DetailCardProps) => {
  return (
    <ContainerT>
      <Card>
        <Front>
          <Company>{company}</Company>
          <Title>{title}</Title>
          <Department>{department}</Department>
        </Front>
        <Tasks>
          {tasks?.map((task) => (
            <Task>{task}</Task>
          ))}
        </Tasks>
      </Card>
    </ContainerT>
  );
};

export default DetailCard;
