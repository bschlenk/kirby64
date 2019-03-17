import React from 'react';
import { AbilitySet } from '../model/Ability';
import { nonNull } from '../utils/nonNull';

export interface AbilityViewProps {
  abilities: AbilitySet;
}

export const AbilityView = ({ abilities }: AbilityViewProps) => {
  let abilityList = abilities.filter(nonNull).sort((a, b) => {
    const aIndex = Ability.values().indexOf(a);
    const bIndex = Ability.values().indexOf(b);
    return aIndex - bIndex;
  });

  if (abilityList.length === 0) {
    return null;
  }

  const name = abilityList.map(a => a.name).join('_');
  const gifName = `ability-gifs/${name}.gif`;

  return <img src={gifName} />;
};
