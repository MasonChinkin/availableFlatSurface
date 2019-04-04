import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import * as ResButtonsUtil from '../../../../utils/resButtonUtils';

class ResButtons extends Component {

  constructor(props) {
    super(props);
    this.handleReservation = this.handleReservation.bind(this);
  }

  handleReservation(hours, minutes) {
    event.preventDefault();
    if (this.props.userId === null) return this.props.history.push(`/search/signin`);
    hours = parseInt(hours)
    hours = (hours < 12) ? hours + 12 : 0
    minutes = parseInt(minutes)
    let setHours = this.props.searchedDateTime.setHours(hours)
    let setMinutes = new Date(setHours).setMinutes(minutes)

    let reservation = {
      reservation: setMinutes / 1000,
      num_people: this.props.numPeople,
      user_id: this.props.userId,
      restaurant_id: this.props.restaurantId // threaded in from above
    };

    this.props.makeReservation(reservation)
      .then(this.props.history.push(`/profile/${this.props.userId}/reservations`));
  }

  render() {
    const buttons = ResButtonsUtil.getResTimes(this.props.searchedDateTime).map((time, i) => {
      let hour = time[0];
      let min = time[1];
      let minutes = (min < 10) ? `0${min} PM` : `${min} PM`;
      let hours = (hour > 12) ? `${hour - 12}` : `${hour}`;
      hours = (hours === "0") ? `12` : `${hours}`;

      let buttonTime = `${hours}:${minutes}`;

      return <Link
        onClick={() => this.handleReservation(hours, minutes)}
        key={i}
        className="submit-button res-submit-button"
        to={`/profile/${this.props.userId}/reservations`}>{buttonTime}</Link>
    })

    return (
      <ul className="res-buttons">
        {buttons}
      </ul>
    );
  }
}

export default withRouter(ResButtons);
