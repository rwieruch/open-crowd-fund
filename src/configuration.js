const CONFIGURATION = {
  themeColor: '#134896',

  // Funding Goal
  goal: '2500', // adjustable during funding campaign
  currency: 'EUR', // shouldn't ne adjusted during funding compaing (find supported currencies at https://stripe.com/docs/currencies)

  // Checkout Form
  checkoutTitle: 'Thank you!',
  checkoutDescription: 'eBook Funding', // will show up in your Stripe payment dashboard too
  checkoutButtonLabel: 'Fund',
  callToAction: 'Fund it!',
  defaultAmount: 25
};

export default CONFIGURATION;
