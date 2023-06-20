import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import { VscAccount } from 'react-icons/vsc';
import { IoMdCreate, IoMdHome } from "react-icons/io";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  
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
  };

  return (
    <>
      <button className="prof" onClick={openMenu}>
        <VscAccount />
      </button>
      {showMenu && (
        <ul className="profile-dropdown">
          <li>{user.email}</li>
          <li>{user.firstName}</li>
          <li><NavLink to='/'><IoMdHome /></NavLink></li>
          <li><NavLink to='/posts'><IoMdCreate /></NavLink></li>
          <li>{user.title}</li>
          
            <button onClick={logout}>Log Out</button>
        </ul>
      )}
    </>
  );
}

export default ProfileButton;