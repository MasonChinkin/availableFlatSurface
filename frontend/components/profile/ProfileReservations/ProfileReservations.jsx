import React, { Component } from 'react';
import ProfileReservationItem from './ProfileReservationItem';

class ProfileReservations extends Component {
  render() {
    let res = Object.values(this.props.reservations);
    let rests = this.props.restaurants;
    if (rests === undefined) return null;
    console.log("Profile Reservations Restaurants", rests);
    // yes...this is iterating twice over everything.
    let upcoming = res.map(res => {
      if (new Date(res.reservation) > new Date()) {
        return <ProfileReservationItem key={res.id} reservation={res} restaurant={rests[res.restaurantId]} />
      }
    })

    let past = res.map(res => {
      if (new Date(res.reservation) < new Date()) {
        return <ProfileReservationItem key={res.id} reservation={res} restaurant={rests[res.restaurantId]} />
      }
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
