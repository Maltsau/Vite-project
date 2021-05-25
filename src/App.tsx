import React, { useState } from 'react';
import styled from 'styled-components';
import speak from './services/speak';

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

function randomize() {
  return (Math.trunc(Math.random()*10000000))
};



function App() {
  
  const [random, setRandom] = useState(0);

  return (
    <div>
      <h1>{random}</h1>
      <Contayner>
        <ButtonStyled onClick = {() => setRandom(randomize)}>Generate</ButtonStyled>
        <ButtonStyled onClick={() => speak(String(random))}>Play</ButtonStyled>
        <OlStyled>Chose pronounsation speed
        <li><input type= 'checkbox'></input></li>
        <li><input type= 'checkbox'></input></li>
        <li><input type= 'checkbox'></input></li>
        </OlStyled>
        <input></input>
      </Contayner>
    </div>
  )
};

export default App
