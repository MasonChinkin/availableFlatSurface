import React from 'react';

const NavBar = ({ currentUser, signout }) => {

  const sessionButtons = currentUser ? (
    <>
      <button><i className='far fa-calendar-alt'></i></button>
      <h1>Hi, {currentUser.name} <i className="material-icons">keyboard_arrow_down</i></h1>
      <button onClick={signout}>signout (temp)</button>
    </>
  ) : (
      <>
        <h1 className="signup-button">Sign up</h1>
        <h1 className="signup-button">Sign in</h1>
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
