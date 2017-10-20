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

const AppWrapper = styled.div`
  margin: 0 auto;
  padding: 30px 10px 60px;
  max-width: 610px;
`;

const App = ({ children }) =>
  <AppWrapper>
    <Helmet
      meta={[
        {
          name: 'description',
          content: 'Your open source solution to crowdfund your own projects and host it yourself.'
        },
        { name: 'keywords', content: 'open crowdfund' }
      ]}
    />

    {children()}

    <Footer>
      <small>Created<span> by <Link href="https://www.robinwieruch.de/">@rwieruch</Link></span> 🐝</small>
    </Footer>
  </AppWrapper>

App.propTypes = {
  children: PropTypes.func
};

export default App;
