import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Link from '../components/Link';

const Footer = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`;

const App = ({ children }) => (
  <div>
    <Helmet
      meta={[
        {
          name: 'description',
          content:
            'Your open source solution to crowdfund your own projects and host it yourself.'
        },
        { name: 'keywords', content: 'open crowdfund' }
      ]}
    />
    <div
      style={{
        margin: '0 auto',
        padding: '30px 10px 60px',
        maxWidth: '610px'
      }}
    >
      {children()}
    </div>
    <Footer>
      <p>Built by <Link href="https://www.robinwieruch.de/">Robin Wieruch</Link> 🐝</p>
    </Footer>
  </div>
);

App.propTypes = {
  children: PropTypes.func
};

export default App;
