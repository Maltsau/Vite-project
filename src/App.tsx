import React, { useState } from 'react';
import styled from 'styled-components';
import speak from './services/speak';
import {SpeedSelector} from './components/speedSelector'
import {LengthSelector, numberOfDigits} from './components/lengthSelector'


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

const OlStyled = styled.ol`
  font-size: 16px
`;

const SelectorStyled = styled.select`
  font-size: 16px;
  height: 20px;
  width: 300px;
`;

const LabelStyled = styled.label`
  font-size: 16px; 
`;

function randomize() {
  return (Math.trunc(Math.random()*10**Number(numberOfDigits)))
};



function App() {
  
  const [random, setRandom] = useState(0);

  return (
    <div>
      <h1>{random}</h1>
      <Contayner>
        <ButtonStyled onClick = {() => setRandom(randomize)}>Generate</ButtonStyled>
        <ButtonStyled onClick={() => speak(String(random))}>Play</ButtonStyled>
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
