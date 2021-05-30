import React, { useState } from 'react';
import styled from 'styled-components';

const LabelStyled = styled.label`
  font-size: 16px; 
`;

const SelectorStyled = styled.select`
  font-size: 16px;
  height: 20px;
  width: 300px;
`;

let speed = "";

export function SpeedSelector() {

    const [delay, setDelay] = useState("1");
    console.log(delay);
    speed = delay;
    return <SelectorStyled onChange={(e) => setDelay(e.target.value)}>
      <option value ="1">1</option>
      <option value ="2">2</option>
      <option value ="3">3</option>
    </SelectorStyled>
};
  
export  {speed};