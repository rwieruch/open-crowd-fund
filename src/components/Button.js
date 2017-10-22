import React from 'react';
import styled from 'styled-components';

import CONFIGURATION from '../configuration';

const Button = styled.button`
  display: inline-block;
  border: 1px solid ${CONFIGURATION.themeColor};
  height: 20px;
  line-height: 20px;
  color: ${CONFIGURATION.themeColor};
  border-radius: 5px;
  background-clip: padding-box;
  padding: 0.5em 1.5em;
  font-weight: bold;
  transition: all 0.2s ease-out;
  background: transparent;
  box-sizing: content-box;
  cursor: pointer;

  &-small {
    height: 10px;
    line-height: 10px;
  }

  &:hover {
    transition: 0.2s ease;
    background-color: ${CONFIGURATION.themeColor};
    color: #ffffff !important;
  }

  &:focus {
    outline: none;
  }
`;

export default Button;
