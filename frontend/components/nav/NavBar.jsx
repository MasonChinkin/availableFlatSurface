import React from 'react';
import { Link, withRouter } from 'react-router-dom'
import DropDown from './DropDown';

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
    const path = this.props.history.location.pathname;
    const component = this.props.dropDown ? (<DropDown signout={this.props.signout} dropDown={this.props.dropDown} />) : "";

    const signupPath = (path === '/') ? '/signup' : `${path}/signup`;
    const signinPath = (path === '/') ? '/signin' : `${path}/signin`;

    const sessionButtons = this.props.currentUser ? (
      <>
        <li className="calendar-button"><i className='far fa-calendar-alt'></i></li>
        <li onClick={this.dropDown} className="profile-button">Hi, {this.fname(this.props.currentUser.name)} <i className="material-icons">keyboard_arrow_down</i>
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
      <nav>
        <ul className="left-nav">
          <li onClick={this.rootPage} className="nav-logo">
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
      </nav>)
  }
}


export default withRouter(NavBar);
