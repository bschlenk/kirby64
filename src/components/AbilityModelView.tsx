import React from 'react';
import styled from 'styled-components/macro';
import { AbilitySet, getAbilityModel } from '../model/Ability';
import { ThreeCanvas } from './ThreeCanvas';

const Wrapper = styled.div`
  width: 500px;
  height: 500px;

  & > * {
    width: 100%;
    height: 100%;
  }
`;

export interface AbilityModelViewProps {
  abilities: AbilitySet;
}

export const AbilityModelView = ({ abilities }: AbilityModelViewProps) => {
  const abilityModel = getAbilityModel(abilities);
  return abilityModel ? (
    <Wrapper>
      <ThreeCanvas model={abilityModel} />
    </Wrapper>
  ) : null;
};
