import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      meta={[
        { name: 'description', content: 'Your open source solution to crowdfund your own projects and host it yourself.' },
        { name: 'keywords', content: 'open crowdfund' },
      ]}
    />
    <div
      style={{
        margin: '0 auto',
        padding: '30px 10px 60px',
        maxWidth: '610px',
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
