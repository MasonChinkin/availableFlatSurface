import React from 'react';
import { Link } from 'react-router-dom'

const NavBar = ({ currentUser, signout }) => {

  const sessionButtons = currentUser ? (
    <>
      <li className="calendar-button"><i className='far fa-calendar-alt'></i></li>
      <li className="profile-button">Hi, {currentUser.name} <i className="material-icons">keyboard_arrow_down</i>
        <ul className="drop-down">
          <li><Link to={`/`}>My Profile</Link></li>
          <li><Link to={`/`}>Dining History</Link></li>
          <li><Link onClick={signout} to={`/`}>Sign out</Link></li>
        </ul>
      </li>
    </>
  ) : (
      <>
        <Link className="signup-button" to={`/signup`}>Sign up</Link>
        <Link className="signin-button" to={`/signin`}>Sign in</Link>
      </>
    );

  return (
    <nav>
      <ul className="left-nav">
        <li className="nav-logo">
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/46/Venn0110.svg" alt="table symbol" />
          AvailableFlatSurface
          </li>
        <li className="nav-place-button">
          <i className="material-icons place">place</i>
          <i className="material-icons keyboard-arrow">keyboard_arrow_down</i>
        </li>
      </ul>
      <ul className="right-nav">
        {sessionButtons}
      </ul>
    </nav>
  )
}

export default NavBar;
