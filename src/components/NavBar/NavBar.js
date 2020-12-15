import React from "react";
import {Link} from 'react-router-dom'
import Logo from '../../Assets/galogo2.png'

import './NavBar.css'

const NavBar = ({ user, handleLogout }) => {
  let nav = user ? 
    <>
      <nav className="nav-bar">
        <div className="nav-wrapper">
          <Link to="/posts"><img alt="" src={Logo}></img></Link>
          <ul className="right">
            <li>
              <Link to={`/user/${user._id}`}>Welcome, {user.name}</Link>
            </li>
            <li>
              <Link to=" " onClick={handleLogout}>Log Out</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
    :
    <>
      <nav className="nav-bar">
        <div className="nav-wrapper">
          <ul className="right">
            <li>
              <Link to="/login">Log In</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>

  return (
    nav
  );
};

export default NavBar;