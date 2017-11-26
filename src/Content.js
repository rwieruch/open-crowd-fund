import React from 'react';
import styled from 'styled-components';

const Content = ({ children }) => (
  <div>
    <BannerWrapper>
      <Banner
        src={__PATH_PREFIX__ + '/banner.jpg'}
        alt="Your Crowdfunding Title"
      />
    </BannerWrapper>

    <h1>Your Crowdfunding Title</h1>

    <p>
      Hey there. My name is Robin Wieruch and over the last year I have written{' '}
      <a href="https://roadtoreact.com/">two ebooks 📚</a> about React.js. One
      of these ebooks was downloaded over 13.000 times, it is for free and currently
      in its 4th edition after being out for only 12 months. It went from 90
      pages to 190 pages. The community and I keep it updated, because there are always improvements to teach
      React and it should include all the recent best practices from the React
      ecosystem. 🦊
    </p>

    <blockquote>
      <p>
        This is one of the most well-written & informative coding books I've
        ever worked through. A solid React & ES6 introduction.
      </p>
      <p>
        -{' '}
        <a href="https://twitter.com/nhuntwalker/status/845730837823840256">
          Nicholas Hunt-Walker, Instructor of Python at a Seattle Coding School
        </a>
      </p>
    </blockquote>

    <p>
      Now I want to give crowdfunding a shot to get my new ebook out of the door. ... 🚀
    </p>

    <h2>The Pitch</h2>

    <p>Lorem ipsum ...</p>

    <h2>Goals and Perks</h2>

    <p>
      This crowd funding campaign runs until ...
    </p>

    <ul>
      <li>
        If more than <strong>100 €</strong> are funded, I am able to create the ebook!
      </li>
      <li>
        If more than <strong>500 €</strong> are funded, I am going to do it!
      </li>
      <li>
        If more than <strong>1500 €</strong> are funded, I will ...!
      </li>
    </ul>

    <p>
      The payments are handled by <a href="https://stripe.com/">Stripe</a> and
      thus your credit card details are securely managed by them. No credit card
      information is saved on my server.
    </p>

    <p>
      So what are the perks for your contribution to this crowdfunding campaign ...
    </p>

    <ul>
      <li>
        If you contribute <strong>5 € or more</strong>, you will be notified
        about the release to grab a free ebook in PDF, EPUB or MOBI.
      </li>
      <li>
        If you contribute <strong>25 € or more</strong>, you can choose to be
        included in the list of backers on the official website.
      </li>
      <li>
        If you contribute <strong>75 € or more</strong>, you can choose to be
        included in the list of backers in the ebook.
      </li>
    </ul>

    <p>
      Thank you for reading and for your support, Robin Wieruch
    </p>

    {children}
  </div>
);

const BannerWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Banner = styled.img`
  margin: 0;
  max-width: 100%;
  height: 400px;
`;

export default Content;
