import React from 'react';
import { Link } from 'react-router-dom'

const NavBar = ({ currentUser, signout }) => {

  const sessionButtons = currentUser ? (
    <>
      <button><i className='far fa-calendar-alt'></i></button>
      <h1>Hi, {currentUser.name} <i className="material-icons">keyboard_arrow_down</i></h1>
      <button onClick={signout}>signout (temp)</button>
    </>
  ) : (
      <>
        <Link className="signup-button" to={`/signup`}>Sign up</Link>
        <Link className="signup-button" to={`/signin`}>Sign in</Link>
      </>
    );

  return (
    <nav>
      <div className="left-nav">
        <h1><img src="https://upload.wikimedia.org/wikipedia/commons/4/46/Venn0110.svg" alt="table symbol" />
          AvailableOpenTable</h1>
        <button >
          <i className="material-icons">place</i>
          <i className="material-icons">keyboard_arrow_down</i>
        </button>
      </div>
      <div className="right-nav">
        {sessionButtons}
      </div>
    </nav>
  )
}

export default NavBar;
