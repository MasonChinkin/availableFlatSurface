import { Link, withRouter } from 'react-router-dom';

import React, { Component } from 'react';

class NavBarSignedOut extends Component {

  render() {
    let { path } = this.props;
    const signupPath = (path === '/') ? '/signup' : `${path}/signup`;
    const signinPath = (path === '/') ? '/signin' : `${path}/signin`;

    return (
      <ul className="right-nav">
        <Link className="signup-button" to={signupPath}>Sign up</Link>
        <Link className="signin-button" to={signinPath}>Sign in</Link>
      </ul>
    );
  }
}

export default withRouter(NavBarSignedOut);
