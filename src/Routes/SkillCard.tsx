import React from "react";
import styled from "styled-components";

interface SkillCardProps {
  category: string;
  detail: Array<string>;
}

const SkillCard = ({ category, detail }: SkillCardProps) => {
  console.log(category, detail);
  return <div>HI</div>;
};

export default SkillCard;
