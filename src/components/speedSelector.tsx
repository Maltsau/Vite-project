import React, { useState } from 'react';
import styled from 'styled-components';


const SelectorStyled = styled.select`
  font-size: 16px;
  height: 20px;
  width: 300px;
`;



export default function SpeedSelector({
  value,
  onChange,
}: {
  value: string;
  onChange: (newValue: string) => void;
}) {
    return <SelectorStyled value={value} onChange={(e) => onChange(e.target.value)}>
      <option value ="1">1</option>
      <option value ="2">2</option>
      <option value ="3">3</option>
    </SelectorStyled>
};
  
