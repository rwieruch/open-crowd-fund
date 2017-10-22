import React from 'react';

import Content from '../Content';
import Progress from '../components/Progress';
import Checkout from '../components/Checkout';
import Backers from '../components/Backers';

const FundingPage = () => (
  <div>
    <Content>
      <Progress />
      <Checkout />
    </Content>
    <Backers />
  </div>
);

export default FundingPage;
