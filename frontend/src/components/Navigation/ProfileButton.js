import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import * as sessionActions from '../../store/session';
import { IoMdCreate, IoMdHome } from "react-icons/io";
import { NavLink, Redirect } from "react-router-dom/cjs/react-router-dom.min";

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const sessionUser = useSelector(state => state.session.user)

  
  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };
  
  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);
  
    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    return <Redirect to="/" />
  };

  return (
    <div className="profile-menu-wrapper">
      <button className="prof" onClick={openMenu}>
        <img className='nav-profile-pic' alt="" src={sessionUser.photo}/>
      </button>
        {showMenu && (
      <div className="profile-menu-container">
          <ul className="profile-dropdown">
            <li>{user.email}</li>
            <li>{user.firstName}</li>
            <li className="drop-title">{user.title}</li>
            <li><NavLink to='/'><IoMdHome /></NavLink></li>
            <li><NavLink to='/posts'><IoMdCreate /></NavLink></li>            
              <button className='logout-button' onClick={logout}>Log Out</button>
          </ul>
      </div>
        )}
    </div>
  );
}

export default ProfileButton;