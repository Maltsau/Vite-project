import React from 'react';
import styled, { css } from 'styled-components';
import { output } from '../App';



const highlightCss = css`
  text-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #0fa,
    0 0 82px #0fa, 0 0 92px #0fa, 0 0 102px #0fa, 0 0 151px #0fa;
`;

const ButtonStyled = styled.button<{ isHighlighted: boolean }>`
  background-color: #4caf50;
  border-width: 5px;
  border-color: white;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: ${({ isHighlighted }) => (isHighlighted ? 20 : 16)}px;
  ${({ isHighlighted }) => isHighlighted && highlightCss}
`;


export default function PlayButton({ onClick }: { onClick: () => void }) {
    return (<ButtonStyled onClick={onClick} isHighlighted={output !== "Number wil appear here"}>
        PLAY
    </ButtonStyled>
    );
}