import React from 'react';
import styled, { css } from 'styled-components/macro';
import { AbilitySet, AbilityActions } from '../../model/Ability';
import cardboard from './images/cardboard.svg';
import cardboardRagged from './images/cardboard-ragged.svg';
import cardboardRaggedRight from './images/cardboard-ragged-right.svg';
import { CardSelector } from './CardSelector';
import { Squares } from './Squares';

const Cardboard = styled.div`
  width: 100%;
  height: 224px;
  padding: 14px;
  position: relative;
  background:
    no-repeat left 5% / auto 100% url("${cardboardRagged}"),
    no-repeat right 5% / auto 100% url("${cardboardRaggedRight}"),
    repeat-x center / auto 100% url("${cardboard}");
  display: grid;
  grid-template-columns: repeat(2, 160px);
  grid-gap: 8px;
  justify-content: center;
  justify-items: center;
  align-items: center;
`;

const Card = styled.div<{ icon?: string; right?: boolean }>`
  background: #fff;
  width: 100%;
  height: 100%;
  border-radius: 16px;
  cursor: pointer;
  ${props =>
    props.icon &&
    css`
      background: no-repeat ${props.right ? '16px' : '-2px'} center / 90% auto
          url(${props.icon}),
        #fff;
    `}
`;

export interface AbilityHudProps {
  leftAbility?: Ability;
  rightAbility?: Ability;
  abilityActions: AbilityActions;
}

export const AbilityHud = ({
  leftAbility,
  rightAbility,
  abilityActions: { setLeft, setRight },
}: AbilityHudProps) => {
  return (
    <Cardboard>
      <CardSelector onClick={setRight}>
        <Card icon={leftAbility && leftAbility.icon} />
      </CardSelector>

      <CardSelector onClick={setLeft}>
        <Card right icon={rightAbility && rightAbility.icon} />
      </CardSelector>

      <Squares />
    </Cardboard>
  );
};
