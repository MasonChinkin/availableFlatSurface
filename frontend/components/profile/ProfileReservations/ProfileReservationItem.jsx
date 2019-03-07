import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProfileReservationItem extends Component {
  render() {
    let rest = this.props.restaurant;
    let res = this.props.reservation;
    let resDate = new Date(res.reservation);
    let date = (resDate.getMonth()) + '/' + resDate.getDate() + '/' + resDate.getFullYear();

    return (
      <div className="profile-reservation-item">
        <Link to={`/restaurants/${rest.id}#top`}><img src={rest.profilePhotoURL} alt="restaurant photo" /></Link>
        <div>
          <Link to={`/restaurants/${rest.id}#top`}><h2>{rest.name}</h2></Link>
          <h2>{date}</h2>
          <h3>Table for {res.numPeople} people</h3>
        </div>
      </div>
    );
  }
}

export default ProfileReservationItem;
