import React from 'react';
import styled from 'styled-components';

import withFundings from './withFundings';
import Currency from './Currency';

const Backers = ({ fundings }) => (
  <div>
    {fundings.length ? (
      <div>
        <h2>List of Backers</h2>
        <ul>
          {fundings.map(funding => (
            console.log(funding) || <li key={funding.id}>
              {funding.amount}
              <Currency currency={funding.currency} /> by{' '}
              {funding.username ? funding.username : 'anonymous'}
            </li>
          ))}
        </ul>
      </div>
    ) : null}
  </div>
);

export default withFundings(Backers);
