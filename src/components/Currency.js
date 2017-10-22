import React from 'react';
import getSymbolFromCurrency from 'currency-symbol-map';

import CONFIGURATION from '../configuration';

const Currency = ({ currency = CONFIGURATION.currency }) => (
  <span>{getSymbolFromCurrency(currency)}</span>
);

export default Currency;
