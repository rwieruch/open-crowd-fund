import React from 'react';
import styled from 'styled-components';

import { database } from '../utils/firebase';

const withFundings = Component =>
  class WithFundings extends React.Component {
    constructor() {
      super();

      this.state = {
        fundings: []
      };
    }

    componentDidMount() {
      const fundingsRef = database.ref('fundings');

      fundingsRef.on('child_added', snapshot => {
        const { amount, includeBacker, email, currency } = snapshot.val();

        const funding = {
          amount: +amount,
          includeBacker,
          email,
          currency,
          id: snapshot.key
        };

        this.setState(prevState => ({
          fundings: [funding, ...prevState.fundings]
        }));
      });
    }

    render() {
      const { fundings } = this.state;
      return <Component fundings={fundings} />;
    }
  };

export default withFundings;
