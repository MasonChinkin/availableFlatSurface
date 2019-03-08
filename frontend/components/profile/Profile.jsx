import React, { Component } from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import ProfileReservationsContainer from './ProfileReservations/ProfileReservationsContainer';
import ProfileSavedRestaurantsContainer from './ProfileSavedRestaurants/ProfileSavedRestaurantsContainer';

class Profile extends Component {
  componentDidMount() {
    this.props.requestUser(this.props.match.params.id);
  }

  render() {
    if (this.props.user === undefined) return null;
    let { user } = this.props;
    let mainContent = (this.props.history.location.pathname.includes('reservations')) ?
      <ProfileReservationsContainer /> :
      <ProfileSavedRestaurantsContainer />

    return (
      <main className="profile-page">
        <h1>{user.name}</h1>
        <div>
          <ul className="profile-side-bar">
            <li><NavLink activeClassName="profile-active" smooth to={`/profile/${user.id}/reservations#top`}>Reservations</NavLink></li>
            <ul>
              <li><NavLink activeClassName="profile-active" smooth to={`/profile/${user.id}/reservations#upcoming-reservations`}>Upcoming Reservations</NavLink></li>
              <li><NavLink activeClassName="profile-active" smooth to={`/profile/${user.id}/reservations#past-reservations`}>Past Reservations</NavLink></li>
            </ul>
            <li><NavLink activeClassName="profile-active" to={`/profile/${user.id}/saved-restaurants#top`}>Saved Restaurants</NavLink></li>
          </ul>
          {mainContent}
        </div>
      </main>
    );
  }
}

export default Profile;