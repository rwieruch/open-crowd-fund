# 🐣 Open Crowd Fund

Your open source solution to crowd fund your own ideas and host it yourself. Reduce your fees to a minimum by using an own crowd funding solution as alternative to enterprise crowdfundings.

## Setup

* `git clone git@github.com:rwieruch/open-crowdfund.git`
* `cd open-crowdfund`
* `npm install`
* `gatsby develop`
* visit http://localhost:8000/ after you have setup Firebase and Stripe (see below)

### Client-side Setup

The client-side project is this project. You just need to provide your configurational information for it and fill in your own content for your own crowd funding project (read Customize).

* provide Firebase Credentials (read External Services Setup)
* provide Stripe Credentials (read External Services Setup)
* optional: provide Google Analytics Key in *gatsby-config.js*

### External Services Setup

There are two external services that are used in this open source project: a firebase database and a stripe payment server.

Firebase is needed to store the funding information (e.g. who funded you and how much did they fund you). Firebase is an external service and doesn't need to be hosted by yourself.

Furthermore, the payment server is not included in this repository. There is another GitHub repository where you could simply clone partly the payment server. On the other hand, you could follow the provided tutorial to build your own minimal payment server from scratch. Here you get all the instructions on how to setup your payment server.

**Note:** You don't want to worry about a payment server or a database to collect the funding information? [Please let me know](mailto:rwieruch@fastmail.com?Subject=Hello%20Open%20Crowd%20Fund). If there is any interest in such service, I would love to provide an affordable solution for you. If you don't want to worry about the client-side, payment server and Firebase at all, please reach out to me as well. [Get on the list for updates](https://www.getrevue.co/profile/open-crowdfund) in case there will be a hosted solution.

#### Firebase Setup

* create a [Firebase account and a Firebase project](https://firebase.google.com/) (free)
* modify the Firebase -> Database -> Rules (everyone can write to the database without creating an account):

```
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```

* Application: add your Firebase credentials in *.env.development* and *.env.production*
 * there are two files, in case you have different Firebase databases for these two environments
 * but you can use the same configuration in both files if you are lazy
* [Secure your Firebase Project with Domain Restriction in the Google Console](https://stackoverflow.com/questions/35418143/how-to-restrict-firebase-data-modification)
  * otherwise other domains are able to write to your Firebase Database
* optional: adjust your Firebase plan in case you are expecting spikes in traffic for your campaign

That's it for Firebase! You are now able to track your fundings and display your progress in the application.

#### Payment Server Setup

Furthermore, you will need a Stripe payment server where you can receive your fundings. The payment server is not included in this repository. Please use the following tutorial to setup a small [payment server with Stripe](https://github.com/rwieruch/react-express-stripe). As alternative, feel free to use the payment server from [this repository](https://github.com/rwieruch/react-express-stripe). It is located in the backend folder. But make sure to read the tutorial once to understand what's happening in the payment flow.

* Create a [Stripe Account](https://stripe.com/) (free)
* Application: add your public Stripe API keys in *.env.development* and *.env.production*
* Application: add your payment server URL in *.env.development* and *.env.production*
  * e.g. http://localhost:8080 for development if your development payment server runs under this address, but http://yourdomain.com for your production payment server that you host with an own domain or IP address

* start your payment server on the command line
  * verify that the localhost URL where it is started is the same as your payment server URL that is added in the client-side *.env.development*
  * verify that your payment server has all Stripe API keys specified

### Try it!

* run your client-side application and your payment server on the command line
* visit your client-side application in the browser
* fund the project with a [test credit card](https://stripe.com/docs/testing#cards)
* verify 1) that the funding progress updates and 2) the test payment is visible in your Stripe dashboard
* you are ready to deploy it!

## Customize

* modify funding configuration in *src/configuration.js*
* modify funding content in *src/Content.js*
* use an own favion in *static/favicon* (e.g. use https://realfavicongenerator.net/)
* add, remove or modify meta tags in *src/layouts/index.js*
* add, remove or modify global style in *src/layouts/index.js*
* add, remove or modify assets, such as images, in *static/*
* add, remove or modify gatsby [plugins](https://www.gatsbyjs.org/docs/plugins/) in *gatsby-config.js*

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

Follow further [installation instructions for the backend](https://github.com/rwieruch/react-express-stripe) to provide the necessary configuration (e.g. Stripe API keys).

### Second Command Line Tab:

* `git clone git@github.com:rwieruch/open-crowdfund.git`
* `cd open-crowdfund`
* `npm install`
* `gatsby develop`

Follow further installation instructions from this README to provide the necessary configuration.

* Formatting on the Command Line: `npm run format`

Thanks for your contribution. I am looking forward to it.
