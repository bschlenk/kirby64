import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
import styled, { keyframes } from 'styled-components/macro';

const appear = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Wrapper = styled.div<{ x: number; y: number }>`
  border-radius: 16px;
  padding: 20px;
  position: fixed;
  top: ${props => props.y}px;
  left: ${props => props.x}px;
  background: white;
  animation: ${appear} 0.1s linear forwards;
  display: grid;
  grid-gap: 5px;
  justify-items: center;
  align-items: center;
`;

const TriangleWrapper = styled.div<{ offset: number }>`
  position: absolute;
  bottom: -18px;
  left: ${props => props.offset}px;
`;

const Triangle = ({ offset }: { offset: number }) => {
  return (
    <TriangleWrapper offset={offset}>
      <svg fill="#fff" width={20} height={15}>
        <path d="M0 0 H20 L10 15 z" />
      </svg>
    </TriangleWrapper>
  );
};

export interface PopoverProps {
  open?: boolean;
  children: React.ReactElement<any, any>;
  contents: React.ReactNode;
  onOutsideClick: () => void;
}

export const Popover = ({
  open,
  children,
  contents,
  onOutsideClick,
}: PopoverProps) => {
  const [coords, setCoords] = useState({ x: 0, y: 0, offset: 0 });
  const elRef = useRef<HTMLElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) {
      const close = (e: MouseEvent) => {
        if (
          wrapperRef.current &&
          !wrapperRef.current.contains(e.target as any)
        ) {
          onOutsideClick();
        }
      };
      document.addEventListener('click', close);
      return () => document.removeEventListener('click', close);
    }
  }, [open]);

  useLayoutEffect(() => {
    if (wrapperRef.current == null || elRef.current == null) {
      return;
    }
    const wrapperRect = wrapperRef.current!.getBoundingClientRect();
    const elRect = elRef.current!.getBoundingClientRect();
    const x = window.innerWidth / 2 - wrapperRect.width / 2;
    const y = elRect.top - wrapperRect.height - 20;
    const offset = elRect.left + elRect.width / 2 - x;
    setCoords({ x, y, offset });
  }, [open, children, contents]);

  const clone = React.cloneElement(children, { ref: elRef });

  return (
    <>
      {clone}
      {open && (
        <Wrapper x={coords.x} y={coords.y} ref={wrapperRef}>
          {contents}
          <Triangle offset={coords.offset} />
        </Wrapper>
      )}
    </>
  );
};
