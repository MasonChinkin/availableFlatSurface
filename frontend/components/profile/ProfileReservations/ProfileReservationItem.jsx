import React, { Component } from 'react';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { NavHashLink as NavLink } from 'react-router-hash-link';

class ProfileReservationItem extends Component {
  constructor(props) {
    super(props);
    this.handleCancelClick = this.handleCancelClick.bind(this)
    this.handleMarkRead = this.handleMarkRead.bind(this)
  }

  handleMarkRead() {
    document.getElementsByClassName('new-reservation')[0]
      .className = 'profile-reservation-item new-reservation-read'

    document.getElementsByClassName('mark-read')[0].style.visibility = 'hidden'
  }

  handleCancelClick() {
    confirmAlert({
      message: 'Are you sure you want to cancel this reservation?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => this.props.cancelReservation(this.props.reservation.id)
        },
        {
          label: 'No',
          onClick: () => { }
        }
      ]
    })
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

    let newReservationClass = (this.props.newReservationId === res.id) ? ' new-reservation' : '';

    let markRead = <h2 className="mark-read" onClick={this.handleMarkRead}>Mark as Read</h2>

    return (
      <div>
        <div className={"profile-reservation-item" + newReservationClass}>
          <NavLink to={`/restaurants/${rest.id}#top`}><img src={rest.profilePhotoURL} alt="restaurant photo" /></NavLink>
          <div>
            <NavLink to={`/restaurants/${rest.id}#top`}><h2>{rest.name}</h2></NavLink>
            <h2>{dateTime}</h2>
            <h3>Table for {res.numPeople} people</h3>
          </div>
          <i onClick={this.handleCancelClick} className="fa fa-close" />
        </div>
        {/* if a new reservation */}
        {newReservationClass && markRead}
      </div>
    );
  }
}

export default ProfileReservationItem;
