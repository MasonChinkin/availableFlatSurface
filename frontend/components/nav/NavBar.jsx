import React from 'react';
import { Link } from 'react-router-dom'

const NavBar = ({ currentUser, signout }) => {

  const sessionButtons = currentUser ? (
    <>
      <li><i className='far fa-calendar-alt'></i></li>
      <li>Hi, {currentUser.name} <i className="material-icons">keyboard_arrow_down</i></li>
      <li onClick={signout}>signout (temp)</li>
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
          AvailableOpenTable
          </li>
        <li className="nav-place">
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
