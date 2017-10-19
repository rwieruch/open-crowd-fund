# Open Crowdfund

Your open source solution to crowdfund your own projects and host it yourself.

## Setup

`git clone git@github.com:rwieruch/open-crowdfund.git`
`cd open-crowdfund`
`npm install`
`gatsby develop`

- client side
-- firebase account, firebase open rules (decide on your own to create an account for ???)
-- stripe key
-- google analytics key

npm run build --> public folder

- server side
-- use this tutorial to setup your payment server as a microservice with express and stripe

## Utilities

- google analytics
- card TODO
- offline support

## Customize

- own favion in static/favicon wtih https://realfavicongenerator.net/
- gatsby plugins with confguration in gatsby-config.js  , find more plugins at URL https://www.gatsbyjs.org/docs/plugins/
- meta tags for application head in src/layouts/index.js
- global style in src/layouts/index.js
- assets such as images can be found in static/

## Contribute

`git clone git@github.com:rwieruch/open-crowdfund.git`
`cd open-crowdfund`
`npm install`
`gatsby develop`

Prettier formatting: `npm run format`

Contribute in three steps: Create an [Issue](https://github.com/rwieruch/open-crowdfund/issues), discuss with maintainers and contributors in the issue, create a [Pull Request](https://github.com/rwieruch/open-crowdfund/pulls).
