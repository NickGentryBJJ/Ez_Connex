import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import { BiHomeAlt, BiLogInCircle } from "react-icons/bi";
import {IoMdCreate} from "react-icons/io"

import './Navigation.css';

function Navigation() {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <div className='nav'>
        <NavLink exact to="/"> <BiHomeAlt /> </NavLink>
        
        <NavLink to="/login"><BiLogInCircle/></NavLink>
        
        <NavLink to="/signup"> <IoMdCreate /></NavLink>
      </div>
    );
  }

  return (
    <div className='nav'>
        {sessionLinks}
    </div>
      
  );
}

export default Navigation;