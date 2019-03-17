import React from 'react';
import { AbilitySet, getAbilityGif } from '../model/Ability';

export interface AbilityViewProps {
  abilities: AbilitySet;
}

export const AbilityView = ({ abilities }: AbilityViewProps) => {
  const abilityGif = getAbilityGif(abilities);
  return abilityGif ? <img src={abilityGif} /> : null;
};
