import React from 'react';
import styled from 'styled-components/macro';
import { AbilitySet, useAbilities } from './model/Ability';
import { AbilityHud } from './components/AbilityHud';
import { AbilityView } from './components/AbilityView';
import { nonNull } from './utils/nonNull';

const AppLayout = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: 1fr min-content;
`;

const RenderedArea = styled.div`
  background: powderblue;
  text-align: center;

  img {
    max-width: 95%;
  }

  p {
    color: white;
    /* text-shadow: #333 0 1px 2px; */
    font-size: 3rem;

    @media only screen and (min-width: 475px) {
      font-size: 4rem;
    }
  }
`;

export const App = () => {
  const [abilities, abilityActions] = useAbilities();
  return (
    <AppLayout>
      <RenderedArea>
        <AbilityTag abilities={abilities} />
        <AbilityView abilities={abilities} />
      </RenderedArea>
      <AbilityHud abilities={abilities} abilityActions={abilityActions} />
    </AppLayout>
  );
};

const AbilityTag = ({ abilities }: { abilities: AbilitySet }) => {
  const text = abilities.every(a => a == undefined)
    ? 'Choose an ability combination below!'
    : abilities
        .map(a => a && a.name)
        .filter(nonNull)
        .join(' + ');

  return <p>{text}</p>;
};
