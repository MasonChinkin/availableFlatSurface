import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import DropDownContainer from './DropDownContainer';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.dropDown = this.dropDown.bind(this);
    this.rootPage = this.rootPage.bind(this)
  }

  fname(name) {
    return name.split(' ')[0];
  }

  rootPage() {
    this.props.history.push('/')
  }

  dropDown() {
    this.props.flipWindowListener(!this.props.dropDown);
    event.stopPropagation(); // avoid double event on click
  }

  componentDidUpdate() {
    if (this.props.dropDown) {
      window.addEventListener('click', this.dropDown);
    } else {
      window.removeEventListener('click', this.dropDown);
    }
  }

  render() {
    const { path, currentUser, dropDown, signout } = this.props;
    // name = (currentUser === null) ? '' : this.fname(currentUser.name);

    const component = dropDown ? <DropDownContainer /> : "";

    const signupPath = (path === '/') ? '/signup' : `${path}/signup`;
    const signinPath = (path === '/') ? '/signin' : `${path}/signin`;

    const sessionButtons = currentUser ? (
      <>
        <Link className="calendar-button" to={`/profile/${currentUser.id}/reservations#reservations`}><i className='far fa-calendar-alt' /></Link>
        <li onClick={this.dropDown} className="profile-button">Hi, PLACEHOLDER:{currentUser.id} <i className="material-icons">keyboard_arrow_down</i>
          {component}
        </li>
      </>
    ) : (
        <>
          <Link className="signup-button" to={signupPath}>Sign up</Link>
          <Link className="signin-button" to={signinPath}>Sign in</Link>
        </>
      );

    return (
      <nav id="top">
        <ul className="left-nav">
          <li onClick={this.rootPage} className="nav-logo">
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/46/Venn0110.svg" alt="table symbol" />
            AvailableFlatSurface
          </li>
          <li className="nav-place">
            <i className="material-icons place">place</i>
            <h2>Bay Area</h2>
            {/* commented until drop down implemented */}
            {/* <i className="material-icons keyboard-arrow">keyboard_arrow_down</i> */}
          </li>
        </ul>
        <ul className="right-nav">
          {sessionButtons}
        </ul>
      </nav>)
  }
}


export default withRouter(NavBar);
