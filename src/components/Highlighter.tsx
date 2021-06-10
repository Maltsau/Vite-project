import React, { useState, useEffect } from "react";
import styled, { AnyStyledComponent } from "styled-components";
import play from "../services/useSpeak";

const Container = styled.span`
  font-size: 30px;
  color: black;
`;

const Letter = styled.span<{ isHighlighted: boolean; isExist: boolean }>`
  color: ${({ isHighlighted, isExist }) =>
    isExist ? (isHighlighted ? "red" : "black") : "green"};
  opacity: ${({ isExist }) => (isExist ? 1 : 0.5)};
`;

type RandomNumberType = {
  number: string;
  highlight: number;
  setHighlight: ()=> any
};




export default function ({ number, highlight = 0, setHighlight }: RandomNumberType) {
  return (
    <Container>
      {[...number].map((character, i) => (
        <Letter
          key={i}
          isHighlighted={highlight === i}
          isExist={number !== "Number will appear here"}
        >
          {character}
        </Letter>
      ))}
    </Container>
  );
}
