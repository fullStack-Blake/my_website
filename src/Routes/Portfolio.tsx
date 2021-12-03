import React from "react";
import styled from "styled-components";
import PortfolioCard from "../Components/PortfolioCard";
import Netflex from "../Images/netflex.png";
import Blake from "../Images/Blake_smile-removebg.png";

const Container = styled.div`
  min-height: calc(100vh - 70px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Portfolios = styled.div`
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 30px;
  @media screen and (min-width: 768px) {
    padding: 0 60px;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    column-gap: 40px;
    row-gap: 50px;
  }
`;

const portfolio = [
  // form of title, address, image, description.
  {
    title: "NETFLEX",
    address: "https://zen-wozniak-50bb82.netlify.app/",
    image: Netflex,
    desc: "Movie & TV Application",
  },
];

const Portfolio = () => (
  <Container>
    <Portfolios>
      {portfolio.map((item, index) => (
        <PortfolioCard
          key={index}
          title={item.title}
          address={item.address}
          description={item.desc}
          image={item.image}
        />
      ))}
    </Portfolios>
  </Container>
);

export default Portfolio;
