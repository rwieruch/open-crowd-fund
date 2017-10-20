import React from 'react';
import styled from 'styled-components';

import Progress from '../components/Progress';
import Checkout from '../components/Checkout';

const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
`;

const Avatar = styled.img`
  margin: 0;
  align-self: start;
`;

const Description = styled.div`
  flex: 1;
  margin-left: 20px;
`;

const Username = styled.h2`
  margin: 0 0 12px 0;
  padding: 0;
`;

const Excerpt = styled.p`
  margin: 0;
`;

const Profile = ({ avatar, username, excerpt }) => (
  <ProfileWrapper>
    <Avatar src={avatar} alt="profile" />
    <Description>
      <Username>{username}</Username>
      <Excerpt>{excerpt}</Excerpt>
    </Description>
  </ProfileWrapper>
);

const LandingPage = () => (
  <div>
    <h1>The Road to learn React</h1>
    <p>Posted April 09, 2011</p>

    <p>
      From Richard Hamming’s classic and must-read talk, “<a href="http://www.cs.virginia.edu/~robins/YouAndYourResearch.html">
        You and Your Research.
      </a>”. There is indeed an element of luck, and no, there isn’t. The prepared
        mind sooner or later finds something important and does it. So yes, it
        is luck.
    </p>

    <p>
    There is indeed an element of luck, and no, there isn’t. The prepared
        mind sooner or later finds something important and does it. So yes, it
        is luck.
        There is indeed an element of luck, and no, there isn’t. The prepared
        mind sooner or later finds something important and does it. So yes, it
        is luck.
    </p>
    <blockquote>
      <p>
        There is indeed an element of luck, and no, there isn’t. The prepared
        mind sooner or later finds something important and does it. So yes, it
        is luck.
        There is indeed an element of luck, and no, there isn’t. The prepared
        mind sooner or later finds something important and does it. So yes, it
        is luck.{' '}
        <em>
          The particular thing you do is luck, but that you do something is
          not.
        </em>
      </p>
    </blockquote>

    <p>
      There is indeed an element of luck, and no, there isn’t. The prepared
          mind sooner or later finds something important and does it. So yes, it
          is luck.
          There is indeed an element of luck, and no, there isn’t. The prepared
          mind sooner or later finds something important and does it. So yes, it
          is luck.
      </p>

    <Progress />
    <Checkout />

      <p>
      There is indeed an element of luck, and no, there isn’t. The prepared
          mind sooner or later finds something important and does it. So yes, it
          is luck.
          There is indeed an element of luck, and no, there isn’t. The prepared
          mind sooner or later finds something important and does it. So yes, it
          is luck.
      </p>
            <p>
      There is indeed an element of luck, and no, there isn’t. The prepared
          mind sooner or later finds something important and does it. So yes, it
          is luck.
          There is indeed an element of luck, and no, there isn’t. The prepared
          mind sooner or later finds something important and does it. So yes, it
          is luck.
      </p>

    <Profile
      username="Robin Wieruch"
      avatar="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
      excerpt="I'm Bob smith, a vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicing elit. vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    />
  </div>
);

export default LandingPage;
