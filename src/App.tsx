import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { Ability } from './model/Ability';
import { AbilityHud } from './components/AbilityHud';

const AppLayout = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: 1fr min-content;
`;

const RenderedArea = styled.div`
  background: powderblue;
`;

export const App = () => {
  const [abilities, setAbilities] = useState<(Ability | undefined)[]>([]);
  return (
    <AppLayout>
      <RenderedArea />
      <AbilityHud
        leftAbility={abilities[0]}
        rightAbility={abilities[1]}
        onChange={setAbilities}
      />
    </AppLayout>
  );
};
