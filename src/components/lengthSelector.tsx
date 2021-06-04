import React from "react";
import styled from "styled-components";

const SelectorStyled = styled.select`
  font-size: 16px;
  height: 20px;
  width: 300px;
`;

export default function LengthSelector({
  value,
  onChange,
}: {
  value: string;
  onChange: (newValue: string) => void;
}) {
  return (
    <SelectorStyled value={value} onChange={(e) => onChange(e.target.value)}>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
    </SelectorStyled>
  );
}
