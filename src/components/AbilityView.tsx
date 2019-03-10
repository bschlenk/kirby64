import React from 'react';
import { Ability } from '../model/Ability';
import { nonNull } from '../utils/nonNull';

export interface AbilityViewProps {
  left?: Ability;
  right?: Ability;
}

export const AbilityView = ({ left, right }: AbilityViewProps) => {
  let abilities = [left, right].filter(nonNull).sort((a, b) => {
    const aIndex = Ability.values().indexOf(a);
    const bIndex = Ability.values().indexOf(b);
    return aIndex - bIndex;
  });

  if (abilities.length === 0) {
    return null;
  }

  const name = abilities.map(a => a.name).join('_');
  const gifName = `ability-gifs/${name}.gif`;

  return <img src={gifName} />;
};
