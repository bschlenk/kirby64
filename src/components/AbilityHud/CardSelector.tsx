import React, { useRef, useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components/macro';
import { Ability } from '../../model/Ability';
import { Popover } from '../Popover';

const Wrapper = styled.div`
  height: 160px;
  display: grid;
  grid-template-columns: repeat(${Ability.values().length}, minmax(20px, 1fr));
  grid-gap: 5px;
  justify-items: center;
  align-items: center;
`;

const Card = styled.img`
  width: 100%;
  cursor: pointer;
  border-radius: 16px;

  :hover {
    background: #ddd;
  }
`;

export interface PopoverProps {
  onClick: (ability: Ability) => void;
  children: React.ReactElement<any, any>;
}

export const CardSelector = ({ children, onClick }: PopoverProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Popover
      open={open}
      onOutsideClick={() => setOpen(false)}
      contents={
        <Wrapper>
          {Ability.values().map(value => (
            <Card
              key={value.icon}
              src={value.icon}
              onClick={() => {
                onClick(value);
                setOpen(false);
              }}
            />
          ))}
        </Wrapper>
      }
    >
      {React.cloneElement(children, { onClick: () => setOpen(true) })}
    </Popover>
  );
};
