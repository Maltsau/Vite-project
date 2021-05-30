import React, { useState } from 'react';
import styled from 'styled-components';
import speak from './services/speak';
import {SpeedSelector} from './components/speedSelector'
import {LengthSelector} from './components/lengthSelector'
// import PlayButton from './components/PlayButton'
import randomize from './services/generator'

const Contayner = styled.div`
  height: 300px;
  width: 600px;
  font-size: 26px;
  background-color: #ccc;
  display: grid;
  grid-template-columns: 300px 300px;
  grid-template-rows: max-content 1fr max-content;
  grid-row-gap: 16px
`;

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


const LabelStyled = styled.label`
  font-size: 16px; 
`;


function App() {
  
  const [random, setRandom] = useState(0);

  return (
    <div>
      <h1>{random}</h1>
      <Contayner>
        <ButtonStyled onClick = {() => setRandom(randomize)}>Generate</ButtonStyled>
        <ButtonStyled onClick = {() => speak(String(random))}>Play</ButtonStyled>
        <LabelStyled>
          Chose pronounsation speed
          <SpeedSelector></SpeedSelector>
        </LabelStyled>
        <LabelStyled>
          Chose number of digits
          <LengthSelector></LengthSelector>
        </LabelStyled>
      </Contayner>
    </div>
  )
};

export default App
