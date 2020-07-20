# 🐣 Open Crowd Fund

[![Build Status](https://travis-ci.org/rwieruch/open-crowd-fund.svg?branch=master)](https://travis-ci.org/rwieruch/open-crowd-fund) [![Greenkeeper badge](https://badges.greenkeeper.io/rwieruch/open-crowd-fund.svg)](https://greenkeeper.io/)

Your minimal yet powerful open source solution to crowd fund your ideas. Open crowd fund is an alternative to all the enterprise crowdfunding platforms and applications. You can do it yourself. Take control over your project fundings, stay flexible by creating the content yourself, and minimize the fees by cutting out the middlemen. Everything you need is to host it yourself.

Powered by [Gatsby](https://github.com/gatsbyjs/gatsby)

* Use your own domain
* Create your own content
* Charge and secure fundings by Credit Card with Stripe
* Minimize payment fees and choose your currency
* Keep your funding information in Firebase

## Setup

* `git clone git@github.com:rwieruch/open-crowd-fund.git`
* `cd open-crowd-fund`
* `npm install`
* `gatsby develop`
* visit http://localhost:8000/
* setup Firebase and Stripe (read External Services Setup)

### Client-side Setup

The client-side project is this project. You just need to provide your configurational information for it and fill in your own content to crowd fund your idea (read Customize). In addition, you need to provide the following things in this project:

* provide Firebase Credentials (read External Services Setup)
* provide Stripe Credentials (read External Services Setup)
* optional: provide Google Analytics Key in *gatsby-config.js*

### External Services Setup

There are two external services that are used: a firebase database and a stripe payment server.

First, Firebase is needed to store the funding information (e.g. who funded you with how much fundings). Firebase is an external service and doesn't need to be hosted by yourself.

Second, the payment server is not included in this repository. There is another GitHub repository where you could simply clone partly the payment server. On the other hand, you could follow the provided tutorial to build your own minimal payment server from scratch. Here you get all the instructions on how to setup your payment server.

#### Firebase Setup

* create a [Firebase account and a Firebase project](https://firebase.google.com/) (free)
* modify the Firebase -> Database -> Rules
 * everyone can write to the database
 * thus no account creation necessary
 * will be secured by domain restriction in another step though

```
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```

* Client-side Application: add your Firebase credentials in *.env.development* and *.env.production*
 * there are two files, in case you have a Firebase databases for each environment
 * if you don't care, you can use the same configuration in both files
* [Secure your Firebase project with domain restriction in the Google Console](https://stackoverflow.com/questions/35418143/how-to-restrict-firebase-data-modification)
  * otherwise everyone from everwhere would be able to write to your Firebase database
* optional: adjust your Firebase plan in case you are expecting spikes in traffic for your campaign announcement

That's it for Firebase! You are now able to track your fundings and display your progress in the application.

#### Payment Server Setup

Furthermore, you will need a Stripe payment server where you can receive your fundings. The payment server is not included in this repository. Please use the following tutorial to setup a small [payment server with Stripe](https://github.com/rwieruch/react-express-stripe). As alternative, feel free to use the payment server from [this repository](https://github.com/rwieruch/react-express-stripe). It is located in the backend folder. But make sure to read the tutorial once to understand what's happening in the payment flow.

* Create a [Stripe Account](https://stripe.com/) (free)
* Client-side Application: add your public Stripe API keys in *.env.development* and *.env.production*
* Client-side Application: add your payment server URL in *.env.development* and *.env.production*
  * e.g. http://localhost:8080 for development if your development payment server runs under this address
  * http://yourdomain.com for your production payment server that you host with an own domain or IP address

* start your payment server on the command line
  * verify that the localhost URL where it is started is the same as your payment server URL that is added in the client-side *.env.development*
  * verify that your payment server has all Stripe API keys specified

### Try it!

* run your client-side application and your payment server on the command line
* visit your client-side application in the browser
* fund your own project with a [test credit card](https://stripe.com/docs/testing#cards)
* verify
  * 1) that the funding progress updates in the client-side application
  * 2) the test payment is visible in your Stripe dashboard
* add your *.env.production* and *.env.development* to your .gitignore
* you are ready to deploy it!

## Customize

* modify funding configuration in *src/configuration.js*
* modify funding content in *src/Content.js*

* optional: use an own favion in *static/favicon* (e.g. use https://realfavicongenerator.net/)
* optional: add, remove or modify meta tags in *src/layouts/index.js*
* optional: add, remove or modify global style in *src/layouts/index.js*
* optional: add, remove or modify assets, such as images, in *static/*
* optional: add, remove or modify gatsby [plugins](https://www.gatsbyjs.org/docs/plugins/) in *gatsby-config.js*

## Deploy to Production

* deploy your client-side application (this repository) to your hosting solution (read up the [Gatsby documentation](https://www.gatsbyjs.org) on how to deploy your application to different hosting solutions)
* deploy your payment server to your hosting solution too
* make sure that your payment server URL matches in *.env.production* with your domain for your payment server in production
* verify that the payment flow works in production

## Contribute

You can contribute to the project. Contributing in three steps:

* create an [Issue](https://github.com/rwieruch/open-crowdfund/issues)
* discuss with maintainers and contributors about the issue
* create a [Pull Request](https://github.com/rwieruch/open-crowdfund/pulls) if the issue should be solved

### First Command Line Tab:

* `git clone https://github.com/rwieruch/react-express-stripe`
* `cd backend`
* `npm install`
* `node index.js`

Follow further installation instructions for the [payment server](https://github.com/rwieruch/react-express-stripe) to provide the necessary configuration (e.g. Stripe API keys).

### Second Command Line Tab:

* `git clone git@github.com:rwieruch/open-crowd-fund.git`
* `cd open-crowd-fund`
* `npm install`
* `gatsby develop`

Follow further installation instructions from this README to provide the necessary configuration.

* Formatting with Prettier: `npm run format`
