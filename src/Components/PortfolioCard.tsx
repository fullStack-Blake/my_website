import React from "react";
import styled from "styled-components";

const Container = styled.div``;
const Title = styled.div``;

interface PortfolioCardProps {
  title: string;
  image: string;
  address: string;
  description: string;
}

const PortfolioCard = ({ title, address, description }: PortfolioCardProps) => {
  return (
    <Container>
      <Title></Title>
    </Container>
  );
};

export default PortfolioCard;
