import React from "react";
import { StyledCard } from "./style/StyledCard";

export default function Card(props) {
  return (
    <StyledCard
      color={props.color}
      height={props.height}
      zIndex={props.zIndex}
      footer={props.footer}
    >
      {props.title}
    </StyledCard>
  );
}
