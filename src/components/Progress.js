import React, { Component } from 'react';
import styled from 'styled-components';
import getSymbolFromCurrency from 'currency-symbol-map';

import CONFIGURATION from '../crowdFundingConfiguration';
import { database } from '../utils/firebase';

const getProgressPercentageRaw = progress =>
  progress / CONFIGURATION.goal * 100;

const getProgressPercentage = progress =>
  getProgressPercentageRaw(progress) <= 100
    ? getProgressPercentageRaw(progress)
    : 100;

const ProgressWrapper = styled.div`
  margin: 20px 0;
`;

const ProgressBar = styled.div`
  display: flex;
  height: 25px;
  border: 1px solid #134896;
  border-radius: 5px;
  border-radius: 5px;
`;

const ProgressAchieved = styled.div`
  display: flex;
  background-color: ${CONFIGURATION.themeColor};
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
      fundings: [],
    };
  }

  componentDidMount() {
    const fundingsRef = database.ref('fundings');

    fundingsRef.on('child_added', snapshot => {
      const funding = {
        amount: snapshot.val(),
        id: snapshot.key,
      };

      this.setState(prevState => ({
        fundings: [
          funding,
          ...prevState.fundings
        ],
      }));
    });
  }

  // componentDidMount() {
  //   // fetch progress from firebase TODO
  //   setTimeout(() => this.setState(() => ({ progress: 4500 })), 1000);
  // }

  render() {
    const { fundings } = this.state;
    const progress = fundings.reduce((result, value) => result + value.amount, 0);
    return (
      <ProgressWrapper>
        <span>{progress} <Currency /> raised of {CONFIGURATION.goal} <Currency /> goal</span>
        <ProgressBar>
          <ProgressAchieved style={{ width: `${getProgressPercentage(progress)}%` }} />
          <ProgressToGo style={{ width: `${100 - getProgressPercentage(progress)}%` }} />
        </ProgressBar>
      </ProgressWrapper>
    );
  }
}

export default Progress;