import React, { Component } from 'react';
import ProfileReservationItem from './ProfileReservationItem';

class ProfileReservations extends Component {
  componentWillUnmount() {
    // clear ui slice of state so new reservation does not remain highlighted
    this.props.clearNewReservation();
  }

  componentDidMount() {
    window.scrollTo(0, 0) // scroll to top
  }

  render() {
    if (this.props.restaurants === undefined) return null;
    let { upcomingReservations, pastReservations, restaurants } = this.props;

    let upcoming = upcomingReservations.map(res => {
      return <ProfileReservationItem
        key={res.id}
        cancelReservation={this.props.cancelReservation}
        newReservationId={this.props.newReservationId}
        reservation={res}
        restaurant={restaurants[res.restaurantId]} />
    })

    let past = pastReservations.map(res => {
      return <ProfileReservationItem key={res.id}
        reservation={res}
        restaurant={restaurants[res.restaurantId]}
        cancelReservation={this.props.cancelReservation} />
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
