import React, { Component } from 'react';

class ProfileReservations extends Component {
  render() {
    if (this.props.restaurants === undefined) return null;
    debugger
    return (
      <section className="reservations">
        <div>
          <h2>Upcoming Reservations</h2>
        </div>
        <div>
          <h2>Past Reservations</h2>
        </div>
      </section>
    );
  }
}

export default ProfileReservations;
