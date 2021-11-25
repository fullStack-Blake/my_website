import React from "react";
import styled from "styled-components";

interface SkillCardProps {
  category: string;
  detail: Array<string>;
}

const Container = styled.div`
  width: 100%;
`;
const Title = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
  font-weight: 500;
`;
const DetailContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  row-gap: 20px;
`;
const Detail = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 100px;
  font-size: 0.8em;
  /* border: 1px solid black; */
  border-radius: 30px;
  background-color: ${(props) => props.theme.colors.background};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

const SkillCard = ({ category, detail }: SkillCardProps) => {
  return (
    <Container>
      <Title>{category}</Title>
      <DetailContainer>
        {detail.map((item) => (
          <Detail>{item}</Detail>
        ))}
      </DetailContainer>
    </Container>
  );
};

export default SkillCard;
