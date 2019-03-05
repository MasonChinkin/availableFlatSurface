import React, { Component } from 'react';
import ProfileSidebar from './ProfileSidebar';

class ProfileReservations extends Component {
  render() {
    return (
      <main>
        <ProfileSidebar />
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
      </main>
    );
  }
}

export default ProfileReservations;
