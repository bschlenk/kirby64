import React from 'react';
import styled from 'styled-components/macro';

const SquareWrapper = styled.div`
  position: absolute;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 16px;
  pointer-events: none;
`;

const Square = styled.div`
  width: 40px;
  height: 40px;
  background: rgb(86, 190, 65);
  transform: rotate(45deg);
`;

export const Squares = () => (
  <SquareWrapper>
    <Square />
    <Square />
    <Square />
  </SquareWrapper>
);
