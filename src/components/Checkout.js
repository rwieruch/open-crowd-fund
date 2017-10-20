import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
import getSymbolFromCurrency from 'currency-symbol-map';

import CONFIGURATION from '../crowdFundingConfiguration';
import { database } from '../utils/firebase';

import Button from './Button';
import Input from './Input';

const fromTalerToCent = amount =>
  amount * 100;

const onToken = (amount, description, onSuccess, onError) => token =>
  axios.post(process.env.PAYMENT_SERVER_URL,
    {
      description,
      source: token.id,
      currency: CONFIGURATION.currency,
      amount: fromTalerToCent(amount)
    })
    .then(onSuccess)
    .catch(onError);

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
    this.onSuccess = this.onSuccess.bind(this);
    this.onError = this.onError.bind(this);
  }

  onAmountChange(event) {
    const { value } = event.target;
    this.setState({ amount: value < 0 ? value * -1 : value });
  }

  onSuccess() {
    const { amount } = this.state;

    database.ref('fundings').push(amount);

    this.setState({ isSuccess: true });
  }

  onError() {
    this.setState({ isError: true });
  }

  render() {
    const { amount, isError, isSuccess } = this.state;

    return (
      <div>
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
              token={onToken(amount, CONFIGURATION.checkoutDescription, this.onSuccess, this.onError)}
              currency={CONFIGURATION.currency}
              stripeKey={process.env.STRIPE_PUBLISHABLE_KEY}
              panelLabel={CONFIGURATION.checkoutButtonLabel}
            >
              <Button type="button">{CONFIGURATION.callToAction}</Button>
            </StripeCheckout>
          </ButtonWrapper>
        </Form>

        { isError && <p>Something went wrong. The payment couldn't be processed.</p> }
        { isSuccess && <p>Thanks for your funding.</p> }
      </div>
    );
  }
}

export default Checkout;