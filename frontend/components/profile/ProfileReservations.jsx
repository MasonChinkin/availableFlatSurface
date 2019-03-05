import React, { Component } from 'react';

class ProfileReservations extends Component {
  render() {
    if (this.props.restaurants === undefined) return null;
    return (
      <section className="reservations">
        <div>
          <h2>Upcoming Reservations</h2>
          {upcomingRes}
        </div>
        <div>
          <h2>Past Reservations</h2>
          {pastRes}
        </div>
      </section>
    );
  }
}

export default ProfileReservations;
