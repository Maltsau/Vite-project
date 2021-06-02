import React, { useState } from "react";
import styled from "styled-components";
import speak from "./services/speak";
import { SpeedSelector } from "./components/speedSelector";
import { LengthSelector } from "./components/lengthSelector";
import PlayButton from "./components/PlayButton";
import GenerateButton from "./components/GenerateButton";
import randomize from "./services/generator";

let output: number;

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

function App() {
  const [random, setRandom] = useState(0);
  const [length, setLength] = useState("7");

  output = random;

  return (
    <div>
      <h1>
        <span>{random}</span>
      </h1>
      <Contayner>
        <GenerateButton
          onClick={() => setRandom(() => randomize(length))}
        ></GenerateButton>
        <PlayButton onClick={() => speak(String(random))}></PlayButton>
        <LabelStyled>
          Chose pronounsation speed
          <SpeedSelector></SpeedSelector>
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
export { output };
