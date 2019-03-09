import React, { Component } from 'react';
import Calendar from 'react-calendar';
import { withRouter } from 'react-router-dom';
import * as FormUtils from '../../../../utils/formUtils';

class RestaurantShowForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      resDateTime: new Date(),
      numPeople: 2,
      calendarClass: 'search-calendar'
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.flipCalendar = this.flipCalendar.bind(this);
    this.handleDayPick = this.handleDayPick.bind(this);
    this.handleNumPeoplePick = this.handleNumPeoplePick.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
  }

  flipCalendar() {
    if (event.target.className.includes('react-calendar__navigation') ||
      event.target.className.includes('months') ||
      event.target.className.includes('years')) {
      event.stopPropagation();
    } else {
      this.props.flipSearchCalendar(!this.props.searchCalendar);
      event.stopPropagation();
    }
  }

  handleInput(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.props.userId === null) return this.props.history.push(`${this.props.history.location.pathname}/signin`);

    let reservation = {
      reservation: (this.state.resDateTime.getTime()) / 1000,
      num_people: this.state.numPeople,
      user_id: this.props.userId,
      restaurant_id: this.props.restaurantId
    };

    this.props.makeReservation(reservation)
      .then(this.props.history.push(`/profile/${this.props.userId}/reservations#new-reservation`));
  }

  handleDayPick(date) {
    this.setState({ resDateTime: date });
  }

  handleNumPeoplePick(e) {
    this.setState({ numPeople: parseInt(e.currentTarget.value) });
  }

  handleTimeChange(e) {
    let selected = e.currentTarget.value
    let newDateTime = new Date(this.state.resDateTime)
    let newHours = parseInt(selected.split(':')[0]) + 12
    let newMinutes = parseInt(selected.split(':')[1])
    newDateTime.setHours(newHours)
    newDateTime.setMinutes(newMinutes)
    this.setState({ resDateTime: newDateTime });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.searchCalendar) {
      addEventListener('click', this.flipCalendar);
    } else {
      removeEventListener('click', this.flipCalendar)
    }

    // below structure necessary to avoid lag inducing processing
    if (this.props.searchCalendar && prevState.calendarClass === 'search-calendar') {
      setTimeout(() => this.setState({ calendarClass: 'search-calendar search-calendar-active' }), 1);
    }

    if (!this.props.searchCalendar && prevState.calendarClass === 'search-calendar search-calendar-active') {
      setTimeout(() => this.setState({ calendarClass: 'search-calendar' }), 1);
    }
  }

  render() {
    let times = FormUtils.times();
    let numPeopleOptions = FormUtils.numPeople();
    const calendarDropDown = this.props.searchCalendar ?
      <Calendar
        className={this.state.calendarClass}
        value={this.state.resDateTime}
        onClickDay={this.handleDayPick}
        minDetail="month"
      /> :
      undefined;

    const localeDateOptions = { day: 'numeric', month: 'short', year: 'numeric' }

    return (
      <div className="restaurant-show-reservation">
        <h1>Make a reservation</h1>
        <form onSubmit={this.handleSubmit}>
          <h2>Party Size</h2>
          <select className="show-party" onClick={this.handleNumPeoplePick} id="show-res-input" defaultValue='2 people'>
            {numPeopleOptions}
          </select>
          <div className="show-date-time">
            <div>
              <h2>Date</h2>
              <div
                type='button'
                onClick={this.flipCalendar}
                id="show-res-date">
                {this.state.resDateTime.toLocaleDateString('en-US', localeDateOptions)}
                {calendarDropDown}
              </div>
            </div>
            <div>
              <h2>Time</h2>
              <select id="show-res-input" onChange={this.handleTimeChange} defaultValue='12:00 PM'>
                {times}
              </select>
            </div>
          </div>
          <input
            type="submit"
            id="submit-button"
            className="submit-button"
            value="Make a Reservation" />
        </form>
        <h3 className="show-booked"><i className="fa fa-line-chart" />Booked {this.props.bookedTimesToday} times today</h3>
      </div>
    );
  }
}

export default withRouter(RestaurantShowForm);
