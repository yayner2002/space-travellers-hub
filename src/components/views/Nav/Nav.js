import React from 'react'
import planet from './assets/images/planet.png'
import { NavLink } from 'react-router-dom'
import navStyle from './assets/style/Nav.module.css'
const Nav = () => {
  const activeStyle = {
    textDecoration: 'underline',
  };
  return (
    <nav className={navStyle.nav}>
      <div className={navStyle.navLeft}>
        <NavLink to="/">
          <img src={planet} alt="logo" className={navStyle.logo} />
        </NavLink>
        <NavLink to="/">
          <h1>Space Travellers Hub</h1>
        </NavLink>
      </div>
      <div className={navStyle.navRight}>
        <ul className={navStyle.navLinks}>
          <li>
            <NavLink
              to="/"
              className={navStyle.navLink}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Rockets
            </NavLink>
          </li>
          <li>
            <NavLink
              to="missions"
              className={navStyle.navLink}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Missions
            </NavLink>
          </li>
          <li>
            <NavLink
              to="myprofile"
              className={navStyle.navLink}
              id={navStyle.profile}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Profile
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;