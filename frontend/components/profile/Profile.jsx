import React, { Component } from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import ProfileReservations from './ProfileReservations';
import ProfileSavedRestaurants from './ProfileSavedRestaurants';

class Profile extends Component {
  componentDidMount() {
    this.props.requestUser(this.props.match.params.id);
  }

  render() {
    if (this.props.user === undefined) return null;

    let mainContent = (this.props.history.location.hash.length) ?
      <ProfileReservations reservations={this.props.reservations} restaurants={this.props.reservedRestaurants} /> :
      <ProfileSavedRestaurants restaurants={this.props.savedRestaurants} />

    let id = this.props.user.id

    return (
      <main className="profile-page">
        <h1>{this.props.user.name}</h1>
        <div>
          <ul className="profile-side-bar">
            <li><NavLink activeClassName="profile-active" smooth to={`/profile/${id}/reservations#top`}>Reservations</NavLink></li>
            <ul>
              <li><NavLink activeClassName="profile-active" smooth to={`/profile/${id}/reservations#upcoming-reservations`}>Upcoming Reservations</NavLink></li>
              <li><NavLink activeClassName="profile-active" smooth to={`/profile/${id}/reservations#past-reservations`}>Past Reservations</NavLink></li>
            </ul>
            <li><NavLink activeClassName="profile-active" to={`/profile/${id}/saved-restaurants`}>Saved Restaurants</NavLink></li>
          </ul>
          {mainContent}
        </div>
      </main>
    );
  }
}

export default Profile;
