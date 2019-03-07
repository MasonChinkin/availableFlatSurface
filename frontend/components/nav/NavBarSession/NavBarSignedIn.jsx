import { Link } from 'react-router-dom';

import React, { Component } from 'react';
import DropDownContainer from '../DropDown/DropDownContainer';

class NavBarSignedIn extends Component {

  constructor(props) {
    super(props);
    this.dropDown = this.dropDown.bind(this);
  }

  fname(name) {
    return name.split(' ')[0];
  }

  dropDown() {
    this.props.flipWindowListener(!this.props.dropDown);
    event.stopPropagation(); // avoid double event on click
  }

  render() {
    let { currentUser, dropDown } = this.props;
    const component = dropDown ? <DropDownContainer /> : "";

    return (
      <ul className="right-nav">
        <Link className="calendar-button" to={`/profile/${currentUser.id}/reservations#reservations`}><i className='far fa-calendar-alt' /></Link>
        <li onClick={this.dropDown} className="profile-button">Hi, PLACEHOLDER:{currentUser.id} <i className="material-icons">keyboard_arrow_down</i>
          {component}
        </li>
      </ul>
    );
  }
}

export default NavBarSignedIn;
