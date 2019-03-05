import React, { Component } from 'react';

class ProfileReservationItem extends Component {
  render() {
    let rest = this.props.restaurant;
    let res = this.props.reservation;
    return (
      <div>
        <img src={rest.profilePhotoURL} alt="restaurant photo" />


      </div>
    );
  }
}

export default ProfileReservationItem;
