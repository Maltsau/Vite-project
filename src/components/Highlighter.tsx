import React, { useState, useEffect } from "react";
import styled, { AnyStyledComponent } from "styled-components";


const Container= styled.span`
    font-size: 30px;
    color: black;
`;

const Letter = styled.span<{ isHighlighted: boolean, isExist: boolean }>`
  color: ${({ isHighlighted, isExist }) => (isExist ?(isHighlighted ? "red" : "black"): "green")};
  opacity: ${({ isExist }) => (isExist ? 1: .5 )};
`;

type RandomNumberType = {
    number: string;
    highlight: boolean;
  };

export default function ({ number, highlight=true }: RandomNumberType) {
    return (
      <Container>
        {[...number].map((character, i) => (
          <Letter isHighlighted={highlight=true} isExist={number !== "Number will appear here"}>{character}</Letter>
        ))}
      </Container>
    );
}

