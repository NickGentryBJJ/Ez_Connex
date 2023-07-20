import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import Searchbar from '../SearchBar/searchbar';

function Navigation() {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <div className='nav-right'>
          <NavLink to="/signup">
            <button className='join'>Join Now</button>
          </NavLink>
          <NavLink to="/login">
            <button className='sign-in'>Sign In</button>
          </NavLink>
      </div>
    );
  }
  
  return (
    <div className='nav-wrapper'>
      <div className='nav-left'>
        <img className='logo' src='https://ezconnex-dev.s3.us-west-1.amazonaws.com/favicon.ico'/>
        <div className='search-bar'>
          <Searchbar />
        </div>
      </div>
      {sessionLinks}
    </div>
  );
}

export default Navigation;