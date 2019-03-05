import React, { Component } from 'react';

class ProfileReservationItem extends Component {
  render() {
    let rest = this.props.restaurant;
    let res = this.props.reservation;

    return (
      <div className="profile-reservation-item">
        <img src={rest.profilePhotoURL} alt="restaurant photo" />
        <div>
          <h2>{rest.name}</h2>
          <h2>{res.reservation}</h2>
          <h3>Table for {res.numPeople} people</h3>
        </div>
      </div>
    );
  }
}

export default ProfileReservationItem;
