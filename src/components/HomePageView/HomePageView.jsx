import React from 'react';
import { ContactPageLink, HomeContainer } from './HomePageView';
import { useSelector } from 'react-redux';
import { isLoggedInSelector } from 'redux/auth/selectors';

function HomePageView() {
  const isLoggedIn = useSelector(isLoggedInSelector);

  return (
    <HomeContainer>
      <div className="titlesWrapp">
        <h1 className="title">Welcome</h1>
        <h2 className="subtitle">Phone Book</h2>
      </div>
      <p>
        This is a beautifully designed phonebook app that saves contacts
        securely. Register to create your collection of phone numbers.
      </p>
      {/* <p>
        Experience the convenience and reliability of our phonebook app. Start
        organizing your contacts today!"
      </p> */}
      <ContactPageLink to={isLoggedIn ? '/contacts' : '/login'}>
        Start using
      </ContactPageLink>
    </HomeContainer>
  );
}

export default HomePageView;
