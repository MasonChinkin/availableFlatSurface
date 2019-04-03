import React, { Component } from 'react';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { dateToString } from '../../../utils/timeUtils';

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
        { label: 'No', onClick: () => { } }
      ]
    })
  }

  render() {
    if (this.props.restaurant === undefined) return null;
    let { restaurant, reservation } = this.props

    let dateTime = dateToString(reservation.reservation)

    let newReservationClass = (this.props.newReservationId === reservation.id) ? ' new-reservation' : '';
    let markRead = <h2 className="mark-read" onClick={this.handleMarkRead}>Mark as Read</h2>

    return (
      <div>
        <div className={"profile-reservation-item" + newReservationClass}>
          <NavLink to={`/restaurants/${restaurant.id}#top`}><img src={restaurant.profilePhotoURL} alt="restaurant photo" /></NavLink>
          <div>
            <NavLink to={`/restaurants/${restaurant.id}#top`}><h2>{restaurant.name}</h2></NavLink>
            <h2>{dateTime}</h2>
            <h3>Table for {reservation.numPeople} people</h3>
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
