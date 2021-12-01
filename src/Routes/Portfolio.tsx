import React from "react";
import styled from "styled-components";
import PortfolioCard from "../Components/PortfolioCard";
import Netflex from "../Images/netflex.png";

const Container = styled.div``;
const Portfolios = styled.div`
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  row-gap: 30px;
`;

const portfolio = [
  {
    title: "NETFLEX",
    address: "https://zen-wozniak-50bb82.netlify.app/",
    image: Netflex,
    desc: "Movie & TV Application",
  },
  {
    title: "NETFLEX",
    address: "https://zen-wozniak-50bb82.netlify.app/",
    image: Netflex,
    desc: "Movie & TV Application",
  },
  {
    title: "NETFLEX",
    address: "https://zen-wozniak-50bb82.netlify.app/",
    image: Netflex,
    desc: "Movie & TV Application",
  },

  // { title: "hi", address: "hey", image: , desc: "description" },
  // { title: "hi", address: "hey", desc: "description" },
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
