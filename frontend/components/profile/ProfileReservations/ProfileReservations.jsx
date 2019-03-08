import React, { Component } from 'react';
import ProfileReservationItem from './ProfileReservationItem';

class ProfileReservations extends Component {
  render() {
    let { upcomingReservations, pastReservations } = this.props;

    let rests = this.props.restaurants;
    if (rests === undefined) return null;

    let upcoming = upcomingReservations.map(res => {
      return <ProfileReservationItem key={res.id} reservation={res} restaurant={rests[res.restaurantId]} />
    })

    let past = pastReservations.map(res => {
      return <ProfileReservationItem key={res.id} reservation={res} restaurant={rests[res.restaurantId]} />
    })

    return (
      <section className="reservations">
        <h2 id="upcoming-reservations">Upcoming Reservations</h2>
        {upcoming}
        <h2 id="past-reservations">Past Reservations</h2>
        {past}
      </section>
    );
  }
}

export default ProfileReservations;
