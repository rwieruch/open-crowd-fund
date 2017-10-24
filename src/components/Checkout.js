import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
import getSymbolFromCurrency from 'currency-symbol-map';

import CONFIGURATION from '../configuration';
import { database } from '../utils/firebase';

import Button from './Button';
import Input from './Input';

const fromTalerToCent = amount => amount * 100;

const onToken = (amount, description, onSuccess, onError) => token =>
  axios
    .post(process.env.PAYMENT_SERVER_URL, {
      stripeBody: {
        description,
        source: token.id,
        currency: CONFIGURATION.currency,
        amount: fromTalerToCent(amount)
      },
      paymentServer: 'CONCISEJAVASCRIPTORG'
    })
    .then(onSuccess)
    .catch(onError);

const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormContent = styled.div`
  margin: 5px;
`;

const Label = styled.label`
  margin-right: 10px;
`;

class Checkout extends Component {
  constructor() {
    super();

    this.state = {
      amount: CONFIGURATION.defaultAmount,
      username: '',
      isSuccess: null,
      isError: null
    };

    this.onAmountChange = this.onAmountChange.bind(this);
    this.onUsernameChange = this.onUsernameChange.bind(this);
    this.onSuccess = this.onSuccess.bind(this);
    this.onError = this.onError.bind(this);
  }

  onUsernameChange(event) {
    const { value } = event.target;
    this.setState({ username: value });
  }

  onAmountChange(event) {
    const { value } = event.target;
    this.setState({ amount: value < 0 ? value * -1 : value });
  }

  onSuccess({ data }) {
    const { amount, username } = this.state;

    database.ref('fundings').push({
      amount,
      email: data.success.source.name,
      username,
      currency: CONFIGURATION.currency
    });

    this.setState({ isSuccess: true });
  }

  onError() {
    this.setState({ isError: true });
  }

  render() {
    const {
      amount,
      username,
      isError,
      isSuccess,
    } = this.state;

    if (isSuccess) {
      return (
        <div>
          <p>Thanks for your funding!</p>
        </div>
      );
    }

    if (isError) {
      return (
        <div>
          <p>Something went wrong. The payment couldn't be processed.</p>
        </div>
      );
    }

    return (
      <div>
        <Form>
          <FormContent>
            <Label>
              Amount ({getSymbolFromCurrency(CONFIGURATION.currency)}):
            </Label>

            <Input
              type="number"
              min="1"
              max="99999"
              value={amount}
              onChange={this.onAmountChange}
              required
            />
          </FormContent>

          <FormContent>
            <Label>Your Name (leave empty to stay anonymous):</Label>

            <Input
              type="text"
              onChange={this.onUsernameChange}
              value={username}
            />
          </FormContent>

          <FormContent>
            <StripeCheckout
              name={CONFIGURATION.checkoutTitle}
              description={CONFIGURATION.checkoutDescription}
              amount={fromTalerToCent(amount)}
              token={onToken(
                amount,
                CONFIGURATION.checkoutDescription,
                this.onSuccess,
                this.onError
              )}
              currency={CONFIGURATION.currency}
              stripeKey={process.env.STRIPE_PUBLISHABLE_KEY}
              panelLabel={CONFIGURATION.checkoutButtonLabel}
            >
              <Button type="button">{CONFIGURATION.callToAction}</Button>
            </StripeCheckout>
          </FormContent>
        </Form>
      </div>
    );
  }
}

export default Checkout;
