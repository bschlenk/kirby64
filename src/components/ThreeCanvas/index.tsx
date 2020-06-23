import React, { useRef, useEffect } from 'react';
import { renderScene } from './renderScene';

export interface ThreeCanvasProps {
  model: string;
}

export const ThreeCanvas = React.memo(({ model }: ThreeCanvasProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    renderScene(ref.current!, model);
  });

  return <div ref={ref} />;
});
