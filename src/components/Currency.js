import React from 'react';
import getSymbolFromCurrency from 'currency-symbol-map';

import CONFIGURATION from '../crowdFundingConfiguration';

const Currency = ({ currency = CONFIGURATION.currency }) => (
  <span>{getSymbolFromCurrency(currency)}</span>
);

export default Currency;
