import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ResButtons extends Component {
  getResTimes() {
    const time = new Date();
    let minutes = time.getMinutes();

    minutes += 30;
    time.setMinutes(minutes);
    time.setMinutes(0);

    let hours = time.getHours();
    hours += (hours < 7) ? 0 : 2;
    time.setHours(hours);

    const resTimes = [];
    for (let i = 0; i < 5; i++) {
      let minutes = time.getMinutes();
      minutes += (i === 0) ? 0 : 15;
      time.setMinutes(minutes);

      let buttonHours = (time.getHours())
      let buttonMinutes = time.getMinutes();

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

      return <Link key={i} className="submit-button res-submit-button" to="/">{buttonTime}</Link>
    })

    return (
      <ul className="res-buttons">
        {buttons}
      </ul>
    );
  }
}

export default ResButtons;
