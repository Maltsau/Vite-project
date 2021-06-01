import React from 'react';
import styled from 'styled-components';
import { output } from '../App';

const ButtonStyled = styled.button`
    background-color: #4CAF50;
    border-width: 5px;
    border-color: white;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
`;

const ButtonStyledActive = styled.button`
    background-color: #4CAF50;
    border-width: 5px;
    border-color: white;
    color: white;
    text-shadow:
      0 0 7px #fff,
      0 0 10px #fff,
      0 0 21px #fff,
      0 0 42px #0fa,
      0 0 82px #0fa,
      0 0 92px #0fa,
      0 0 102px #0fa,
      0 0 151px #0fa;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
`;

export default function GenerateButton({ onClick }: { onClick: () => void }) {
    if (output === 0) return <ButtonStyledActive onClick= {onClick}>Generate</ButtonStyledActive>
    else return <ButtonStyled onClick= {onClick}>Generate</ButtonStyled>
}