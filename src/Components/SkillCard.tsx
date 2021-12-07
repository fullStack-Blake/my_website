import React from "react";
import styled from "styled-components";

interface SkillCardProps {
  category: string;
  detail: Array<string>;
}

const Container = styled.div`
  width: 100%;
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 20vw 1fr;
    gap: 10px;
    align-items: center;
  }
`;
const Title = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
  font-weight: 500;
  @media screen and (min-width: 768px) {
    padding: 0;
    margin: 0;
    align-self: center;
  }
`;
const DetailContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  row-gap: 20px;
  column-gap: 20px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  /* For Mobile Portrait View and Device width under 768px */
  @media screen and (max-device-width: 767px) and (orientation: portrait) {
    justify-content: center;
  }
`;
const Detail = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 100px;
  font-size: 0.8em;
  /* border: 1px solid black; */
  /* border-radius: 30px; */
  /* background-color: ${(props) => props.theme.colors.background}; */
  /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); */
`;

const SkillCard = ({ category, detail }: SkillCardProps) => {
  return (
    <Container>
      <Title>{category}</Title>
      <DetailContainer>
        {detail.map((item, index) => (
          <Detail key={index}>{item}</Detail>
        ))}
      </DetailContainer>
    </Container>
  );
};

export default SkillCard;
