import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface PortfolioCardProps {
  title: string;
  image: string;
  address: string;
  description: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
const Title = styled.div`
  font-size: 1.2em;
  font-weight: bold;
`;
const HLink = styled(Link)`
  all: unset;
  cursor: pointer;
  > div {
    margin-top: 5px;
  }
`;
const HImage = styled.img`
  width: 300px;
  border-radius: 20px;
`;
const Desc = styled.div``;
const PortfolioCard = ({
  title,
  address,
  description,
  image,
}: PortfolioCardProps) => {
  console.log(title, address, description, image);
  return (
    <Container>
      <HLink to={address}>
        <HImage src={image} alt={title} />
        <Title>{title}</Title>
        <Desc>{description}</Desc>
      </HLink>
    </Container>
  );
};

export default PortfolioCard;
