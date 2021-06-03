import React, { useState } from "react";
import styled from "styled-components";
import speak from "./services/speak";
import { SpeedSelector } from "./components/speedSelector";
import { LengthSelector } from "./components/lengthSelector";
import PlayButton from "./components/PlayButton";
import GenerateButton from "./components/GenerateButton";
import randomize from "./services/generator";


const Contayner = styled.div`
  height: 300px;
  width: 600px;
  font-size: 26px;
  background-color: #ccc;
  display: grid;
  grid-template-columns: 300px 300px;
  grid-template-rows: max-content 1fr max-content;
  grid-row-gap: 16px;
`;

const LabelStyled = styled.label`
  font-size: 16px;
`;

const SpanStyled = styled.span<{ isExist: boolean }>`
  font-size: ${ ({isExist}) => (isExist ? 30: 16)}px;
  color: black;
`;



function App() {
  const [random, setRandom] = useState("Number will appear here");
  const [length, setLength] = useState("7");
  const [delay, setDelay] = useState("1");


  return (
    <div>
      <h1>
        <SpanStyled isExist = {random !== "Number will appear here"}>{[...random]}</SpanStyled>
      </h1>
      <Contayner>
        <GenerateButton value={random} onClick={() => setRandom(() => randomize(length))}></GenerateButton>
        <PlayButton value={random} onClick={() => speak(random, delay)}></PlayButton>
        <LabelStyled>
          Chose pronounsation speed
          <SpeedSelector value={delay} onChange={setDelay}></SpeedSelector>
        </LabelStyled>
        <LabelStyled>
          Chose number of digits
          <LengthSelector value={length} onChange={setLength}></LengthSelector>
        </LabelStyled>
      </Contayner>
    </div>
  );
}

export default App;

