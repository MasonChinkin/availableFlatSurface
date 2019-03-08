import React, { Component } from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';

class ProfileReservationItem extends Component {

  componentDidMount() {
    // https://stackoverflow.com/questions/8922107/javascript-scrollintoview-middle-alignment
    if (this.props.newReservationId) {
      document.addEventListener("DOMContentLoaded", () => {
        Element.prototype.documentOffsetTop = function () {
          return this.offsetTop + (this.offsetParent ? this.offsetParent.documentOffsetTop() : 0);
        };

        let top = document.getElementById('new-reservation').documentOffsetTop() - (window.innerHeight / 2);
        window.scrollTo(0, top);
      })
    }
  }

  render() {
    if (this.props.restaurant === undefined) return null;
    let rest = this.props.restaurant;
    let res = this.props.reservation;
    let resDate = new Date(res.reservation);
    let date = (resDate.getMonth() + 1) + '/' + resDate.getDate() + '/' + resDate.getFullYear();
    let minutes = (resDate.getMinutes() < 10) ? `0${resDate.getMinutes()} PM` : `${resDate.getMinutes()} PM`;
    let hours = (resDate.getHours() === 12) ? `${resDate.getHours()}` : `${resDate.getHours() - 12}`;
    let time = hours + ':' + minutes;
    let dateTime = (resDate > new Date()) ? date + ' ' + time : date;

    let id = (this.props.newReservationId === res.id) ? 'new-reservation' : '';

    return (
      <div className="profile-reservation-item" id={id}>
        <NavLink to={`/restaurants/${rest.id}#top`}><img src={rest.profilePhotoURL} alt="restaurant photo" /></NavLink>
        <div>
          <NavLink to={`/restaurants/${rest.id}#top`}><h2>{rest.name}</h2></NavLink>
          <h2>{dateTime}</h2>
          <h3>Table for {res.numPeople} people</h3>
        </div>
      </div>
    );
  }
}

export default ProfileReservationItem;
