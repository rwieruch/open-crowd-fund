# Open Crowdfund

Your open source solution to crowd fund your own ideas and host it yourself.

## Setup

* `git clone git@github.com:rwieruch/open-crowdfund.git`
* `cd open-crowdfund`
* `npm install`
* `gatsby develop`
* visit http://localhost:8000/
* modify funding configuration in *src/crowdFundingConfiguration.js*
* modify funding content in *src/pages/index.js*

### Client-side Setup

The client-side project is this project. You just need to provide your own information for it and fill in your own content for your crowd funding project.

* provide Firebase Credentials (read Server-side Setup)
* provide Stripe Credentials (read Server-side Setup)
* optional: provide Google Analytics Key in *gatsby-config.js*

### Server-side Setup

There are two requirements for the server-side application: a firebase database and a stripe payment server. Firebase is needed to store the funding information (e.g. who funded you and how much funded they), but doesn't need to be hosted by yourself. The server-side project, to be specific the payment server, is not included in this repository. There is another GitHub repository where you could simply clone the server part. On the other hand, you could follow the provided tutorial to build your own minimal payment server from scratch. Here you get all the instructions on how to setup your server-side.

**Note:** You don't want to worry about a payment server or a database to collect the funding information? [Please let me know](mailto:rwieruch@fastmail.com?Subject=Hello%20Open%20Crowdfund). If there is an interest in such service, I would love to provide an affordable solution for you. If you don't want to worry about the client-side and server-side setup at all, please reach out as well to work with me on it.

#### Firebase Setup

* create a [Firebase account and a Firebase project](https://firebase.google.com/) (free)
* modify the Firebase -> Database -> Rules:

```
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```

* Client-side: add your Firebase credentials in *.env.development* and *.env.production*
 * there are two files, in case you have different Firebase databases for different environments
 * otherwise use the same configuration in both files
* [Secure your Firebase Project with Domain Restriction](https://stackoverflow.com/questions/35418143/how-to-restrict-firebase-data-modification)
  * otherwise other domains are able to write to your Firebase Database
* adjust your Firebase Plan, if you are expecting spikes in traffic for your campaign

That's it for Firebase!

#### Payment Server Setup

Furthermore, you will need a Stripe payment server where you can receive your fundings. The payment server is not included in this repository. Please use the following tutorial to setup a small [payment server with Stripe](https://github.com/rwieruch/react-express-stripe). Otherwise, feel free to take the payment server from [this repository's backend folder](https://github.com/rwieruch/react-express-stripe).

* Create a [Stripe Account](https://stripe.com/) (free)
* Client-side: add your Stripe API keys in *.env.development* and *.env.production*
* Client-side: add your payment server URL in *.env.development* and *.env.production*
  * e.g. http://localhost:8080 for development, but http://myapidomain.com for your production payment server

* start your payment server on the command line
  * verify that the localhost URL where it is started is the same as your payment server URL that is added in the client-side *.env.development*
  * verify that your payment server has all Stripe API keys specified

## Customize

* use an own favion in *static/favicon* (e.g. use https://realfavicongenerator.net/)
* add, remove or modify gatsby [plugins](https://www.gatsbyjs.org/docs/plugins/) in *gatsby-config.js*
* add, remove or modify meta tags in *src/layouts/index.js*
* add, remove or modify global style in *src/layouts/index.js*
* add, remove or modify assets, such as images, in *static/*

## Deploy to Production

* verify that the payment with Stripe works on localhost when client-side and payment server are running
* deploy your client-side project (this repository) to your hosting solution (read up the [Gatsby documentation](https://www.gatsbyjs.org) on how to deploy your application)
* deploy your payment server to your hosting solution
* make sure that your payment server URL matches in *.env.production* with your domain for your payment server

## Contribute

* `git clone git@github.com:rwieruch/open-crowdfund.git`
* `cd open-crowdfund`
* `npm install`
* `gatsby develop`

Formatting on the Command Line: `npm run format`

Contribute in three steps: Create an [Issue](https://github.com/rwieruch/open-crowdfund/issues), discuss with maintainers and contributors in the issue, create a [Pull Request](https://github.com/rwieruch/open-crowdfund/pulls).
