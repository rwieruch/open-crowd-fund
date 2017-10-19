import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import './index.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: 'title', content: 'Open Crowdfund ' },
        { name: 'description', content: 'Your open source solution to crowdfund your own projects and host it yourself.' },
        { name: 'keywords', content: 'open crowdfund' },
      ]}
    />
    <div
      style={{
        margin: '0 auto',
        padding: '30px 10px 60px',
        maxWidth: '610px',
        fontFamily: 'Source Sans Pro',
        lineHeight: '1.45',
        fontSize: '17px',
      }}
    >
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
