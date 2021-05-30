import React, { useState } from 'react';
import styled from 'styled-components';
import speak from '../services/speak'

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

// export default function PlayButton() {
//     const [random, setRandom] = useState(0);
//     return 
//     <ButtonStyled onClick= {onClick}>Play</ButtonStyled>
// }