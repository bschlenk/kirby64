import React from 'react';
import styled from 'styled-components/macro';
import { ReactComponent as Icon } from '../images/github.svg';

const Anchor = styled.a`
  position: absolute;
  top: 5px;
  right: 5px;
  width: 24px;
  height: 24px;

  svg {
    width: 100%;
    height: auto;
  }
`;

export const GithubIcon = () => (
  <Anchor href="https://github.com/bschlenk/kirby64">
    <Icon />
  </Anchor>
);
