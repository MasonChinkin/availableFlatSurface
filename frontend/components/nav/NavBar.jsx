import React from 'react';
import { Link } from 'react-router-dom'
import DropDown from './DropDown';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.dropDown = this.dropDown.bind(this);
  }

  fname(name) {
    return name.split(' ')[0];
  }

  dropDown() {
    this.props.flipWindowListener(!this.props.dropped);
    event.stopPropagation(); // avoid double event on click
  }

  componentDidUpdate() {
    if (this.props.dropped) {
      window.addEventListener('click', this.dropDown);
    } else {
      window.removeEventListener('click', this.dropDown);
    }
  }

  render() {
    const component = this.props.dropped ? (<DropDown signout={this.props.signout} />) : "";

    const sessionButtons = this.props.currentUser ? (
      <>
        <li className="calendar-button"><i className='far fa-calendar-alt'></i></li>
        <li onClick={this.dropDown} className="profile-button">Hi, {this.fname(this.props.currentUser.name)} <i className="material-icons">keyboard_arrow_down</i>
          {component}
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
      </nav>)
  }
}


export default NavBar;
