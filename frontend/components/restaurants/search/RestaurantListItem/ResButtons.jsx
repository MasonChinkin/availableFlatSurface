import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ResButtons extends Component {

  constructor(props) {
    super(props);
    this.handleReservation = this.handleReservation.bind(this)
  }

  handleReservation(e) {
    e.preventDefault();
    let reservation = {
      reservation: this.props.searchedDateTime,
      num_people: this.props.numPeople,
      user_id: this.props.userId,
      restaurant_id: this.props.restaurantId // threaded in from above
    };

    this.props.makeReservation(reservation);
  }

  getResTimes() {
    const time = this.props.searchedDateTime;

    const resTimes = [];
    for (let i = 0; i < 5; i++) {
      let newTime = new Date(time);
      let minutes = time.getMinutes();
      minutes += (i === 0) ? 0 : i * 15;
      newTime.setMinutes(minutes);

      let buttonHours = newTime.getHours()
      let buttonMinutes = newTime.getMinutes();

      resTimes.push([buttonHours, buttonMinutes]);
    }

    return resTimes;
  }

  render() {

    const buttons = this.getResTimes().map((time, i) => {
      let hour = time[0];
      let min = time[1];
      let minutes = (min < 10) ? `0${min}` : `${min}`;
      minutes = (hour < 12) ? `${minutes} AM` : `${minutes} PM`;
      let hours = (hour > 12) ? `${hour - 12}` : `${hour}`;
      hours = (hours === "0") ? `12` : `${hours}`;

      let buttonTime = `${hours}:${minutes}`;

      return <Link onClick={this.handleReservation}
        key={i}
        className="submit-button res-submit-button"
        to={`/profile/${this.props.userId}/reservations#top`}>{buttonTime}</Link>
    })

    return (
      <ul className="res-buttons">
        {buttons}
      </ul>
    );
  }
}

export default ResButtons;
