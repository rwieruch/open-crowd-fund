import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
import getSymbolFromCurrency from 'currency-symbol-map';

import CONFIGURATION from '../crowdFundingConfiguration';

import Button from './Button';
import Input from './Input';

const fromTalerToCent = amount =>
  amount * 100;

const onToken = (amount, description) => token =>
  axios.post(CONFIGURATION.paymentServerUrl,
    {
      description,
      source: token.id,
      currency: CONFIGURATION.currency,
      amount: fromTalerToCent(amount)
    })
    .then(() => this.setState({ isSuccess: true }))
    .catch(() => this.setState({ isError: true }));

const Form = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  margin: 20px 0;
`

const Label = styled.label`
  margin: 0 20px;
`

const ButtonWrapper = styled.div`
  margin: 0 20px;
`

class Checkout extends Component {
  constructor() {
    super();

    this.state = {
      amount: CONFIGURATION.defaultAmount,
      isSuccess: null,
      isError: null,
    };

    this.onAmountChange = this.onAmountChange.bind(this);
  }

  onAmountChange(event) {
    const { value } = event.target;
    this.setState({ amount: value < 0 ? value * -1 : value });
  }

  render() {
    const { amount } = this.state;

    return (
      <Form>
        <Label htmlFor="amount">Amount in {getSymbolFromCurrency(CONFIGURATION.currency)}:</Label>

        <Input
          id="amount"
          type="number"
          min="1"
          max="99999"
          value={amount}
          onChange={this.onAmountChange}
          required
        />

        <ButtonWrapper>
          <StripeCheckout
            name={CONFIGURATION.checkoutTitle}
            description={CONFIGURATION.checkoutDescription}
            amount={fromTalerToCent(amount)}
            token={onToken(amount, CONFIGURATION.description)}
            currency={CONFIGURATION.currency}
            stripeKey={CONFIGURATION.stripePublishableKey}
            panelLabel={CONFIGURATION.checkoutButtonLabel}
          >
            <Button type="button">{CONFIGURATION.callToAction}</Button>
          </StripeCheckout>
        </ButtonWrapper>
      </Form>
    );
  }
}

export default Checkout;