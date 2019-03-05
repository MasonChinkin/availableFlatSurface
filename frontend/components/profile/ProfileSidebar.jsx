import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link'

class ProfileSidebar extends Component {
  render() {
    return (
      <ul className="reservations">
        <li><Link to="/profile/reservations#reservations">Reservations</Link></li>
        <ul>
          <li><Link to="/profile/reservations#upcoming">Upcoming Reservations</Link></li>
          <li><Link to="/profile/reservations#past">Past Reservations</Link></li>
        </ul>
        <li><Link to="/profile/saved-restaurants">Saved Restaurants</Link></li>
        <li><Link>Account Details</Link></li>
      </ul>
    );
  }
}

export default ProfileSidebar;
