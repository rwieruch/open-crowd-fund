import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
import getSymbolFromCurrency from 'currency-symbol-map';

import CONFIGURATION from '../crowdFundingConfiguration';
import { database } from '../utils/firebase';

import Button from './Button';
import Input from './Input';

const fromTalerToCent = amount => amount * 100;

const onToken = (amount, description, onSuccess, onError) => token =>
  axios
    .post(process.env.PAYMENT_SERVER_URL, {
      description,
      source: token.id,
      currency: CONFIGURATION.currency,
      amount: fromTalerToCent(amount)
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
      includeBacker: true,
      isSuccess: null,
      isError: null
    };

    this.onAmountChange = this.onAmountChange.bind(this);
    this.onIncludeBackerChange = this.onIncludeBackerChange.bind(this);
    this.onSuccess = this.onSuccess.bind(this);
    this.onError = this.onError.bind(this);
  }

  onAmountChange(event) {
    const { value } = event.target;
    this.setState({ amount: value < 0 ? value * -1 : value });
  }

  onIncludeBackerChange(event) {
    const { checked } = event.target;
    this.setState({ includeBacker: checked });
  }

  onSuccess({ data }) {
    const { amount, includeBacker } = this.state;

    database.ref('fundings').push({
      amount,
      email: data.success.source.name,
      includeBacker,
      currency: CONFIGURATION.currency
    });

    this.setState({ isSuccess: true });
  }

  onError() {
    this.setState({ isError: true });
  }

  render() {
    const { amount, includeBacker, isError, isSuccess } = this.state;

    return (
      <div>
        <Form>
          <FormContent>
            <Label htmlFor="amount">
              Amount in {getSymbolFromCurrency(CONFIGURATION.currency)}:
            </Label>

            <Input
              id="amount"
              type="number"
              min="1"
              max="99999"
              value={amount}
              onChange={this.onAmountChange}
              required
            />
          </FormContent>

          <FormContent>
            <Label htmlFor="amount">Show up in list of backers:</Label>

            <input
              type="checkbox"
              defaultChecked={includeBacker}
              onChange={this.onIncludeBackerChange}
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

        {isError && (
          <p>Something went wrong. The payment couldn't be processed.</p>
        )}
        {isSuccess && <p>Thanks for your funding.</p>}
      </div>
    );
  }
}

export default Checkout;
