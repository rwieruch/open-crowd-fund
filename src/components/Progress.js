import React from 'react';
import styled from 'styled-components';

import Currency from './Currency';
import withFundings from './withFundings';
import CONFIGURATION from '../crowdFundingConfiguration';

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
  backgroundcolor: #ffffff;
`;

const Progress = ({ fundings }) => {
  const progress = fundings.reduce((result, value) => result + value.amount, 0);

  return (
    <ProgressWrapper>
      <span>
        {progress} <Currency /> raised of {CONFIGURATION.goal} <Currency /> goal
      </span>

      <ProgressBar>
        <ProgressAchieved
          style={{ width: `${getProgressPercentage(progress)}%` }}
        />
        <ProgressToGo
          style={{ width: `${100 - getProgressPercentage(progress)}%` }}
        />
      </ProgressBar>
    </ProgressWrapper>
  );
};

export default withFundings(Progress);
