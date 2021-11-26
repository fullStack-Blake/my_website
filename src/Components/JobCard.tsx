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
  width: 260px;
  height: 260px;
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
  justify-content: center;
  row-gap: 20px;

  background-color: ${(props) => props.theme.colors.background};
  /* padding: 30px; */
  color: ${(props) => props.theme.colors.darkfont};
`;
const Company = styled.div`
  font-size: 0.8em;
`;
const Title = styled.div`
  font-size: 1.5em;
  font-weight: bold;
  /* padding-bottom: 1em; */
`;
const Department = styled.div`
  font-size: 0.8em;
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
  color: #ffffef;
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 1em;
  /* overflow: scroll; */
  /* background-color: ${(props) => props.theme.colors.taskBack}; */
  background-color: #ffc2c3;
`;
const Task = styled.div`
  width: 100%;
  padding-left: 5px;
  font-size: 0.8em;
  line-height: 1.1;
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
          {tasks?.map((task, index) => (
            <Task key={index}>{task}</Task>
          ))}
        </Tasks>
      </Card>
    </ContainerT>
  );
};

export default DetailCard;
