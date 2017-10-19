import React, { Component } from 'react';
import styled from 'styled-components';
import getSymbolFromCurrency from 'currency-symbol-map';

import CONFIGURATION from '../crowdFundingConfiguration';

const getProgressPercentageRaw = progress =>
  progress / CONFIGURATION.goal * 100;

const getProgressPercentage = progress =>
  getProgressPercentageRaw(progress) <= 100
    ? getProgressPercentageRaw(progress)
    : 100;

const ProgressBar = styled.div`
  display: flex;
  height: 25px;
  border: 1px solid #134896;
  border-radius: 5px;
`;

const ProgressAchieved = styled.div`
  display: flex;
  background-color: #134896;
`;

const ProgressToGo = styled.div`
  display: flex;
  backgroundColor: #FFFFFF;
`;

const Currency = () =>
 <span>{getSymbolFromCurrency(CONFIGURATION.currency)}</span>

class Progress extends Component {
  constructor() {
    super();

    this.state = {
      progress: 0,
    };
  }

  componentDidMount() {
    // fetch progress from firebase TODO
    setTimeout(() => this.setState(() => ({ progress: 4500 })), 1000);
  }

  render() {
    const { progress } = this.state;
    return (
      <div>
        <span>{progress} <Currency /> raised of {CONFIGURATION.goal} <Currency /> goal</span>
        <ProgressBar>
          <ProgressAchieved style={{ width: `${getProgressPercentage(progress)}%` }} />
          <ProgressToGo style={{ width: `${100 - getProgressPercentage(progress)}%` }} />
        </ProgressBar>
      </div>
    );
  }
}

export default Progress;