import React from 'react';
import styled from 'styled-components/macro';

import { nonNull } from '../../utils/nonNull';
import { AbilitySet, useAbilities } from '../../model/Ability';

import { AbilityHud } from '../AbilityHud';
import { AbilityView } from '../AbilityView';
import { GithubIcon } from '../GithubIcon';
import { AbilityModelView } from '../AbilityModelView';

const AppLayout = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  position: relative;
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
        {/*<AbilityView abilities={abilities} />*/}
        <AbilityModelView abilities={abilities} />
      </RenderedArea>
      <AbilityHud abilities={abilities} abilityActions={abilityActions} />
      <GithubIcon />
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
