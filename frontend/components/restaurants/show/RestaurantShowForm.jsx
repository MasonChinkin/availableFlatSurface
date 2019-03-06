import React, { Component } from 'react';
import Calendar from 'react-calendar';

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

  numPeople() {
    let options = [];

    for (let i = 1; i < 21; i++) {
      let val = `${i} people`
      options.push(<option key={i} value={val}>{val}</option>);
    }
    options.push(<option key={21} value="Large Party">Large Party</option>);

    return options;
  }

  times() {
    const time = new Date();
    time.setMinutes(0);
    time.setHours(12);

    const resTimes = [];
    for (let i = 0; i < 24; i++) {
      let minutes = time.getMinutes();
      minutes += (i === 0) ? 0 : 30;
      time.setMinutes(minutes);

      let hour = (time.getHours())
      let min = time.getMinutes();
      min = (min < 10) ? `0${min} PM` : `${min} PM`;
      hour = (hour < 13) ? `${hour}` : `${hour - 12}`;

      resTimes.push(
        <option key={i} value={`${hour}:${min}`}>{`${hour}:${min}`}</option>
      );
    }

    return resTimes;
  }

  flipCalendar() {
    this.props.flipSearchCalendar(!this.props.searchCalendar);
    event.stopPropagation();
  }

  handleInput(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value });
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    let reservation = {
      reservation: this.state.resDateTime.getTime(),
      num_people: this.state.numPeople,
      user_id: this.props.userId,
      restaurant_id: this.props.restaurantId
    }

    debugger

    this.props.makeReservation(reservation);
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
    const calendarDropDown = this.props.searchCalendar ?
      <Calendar
        className={this.state.calendarClass}
        value={this.state.resDateTime}
        onClickDay={this.handleDayPick}
      /> :
      undefined;

    const localeDateOptions = { day: 'numeric', month: 'short', year: 'numeric' }

    return (
      <div className="restaurant-show-reservation">
        <h1>Make a reservation</h1>
        <form onSubmit={this.handleSubmit}>
          <h2>Party Size</h2>
          <select className="show-party" onClick={this.handleNumPeoplePick} id="show-res-input" defaultValue='2 people'>
            {this.numPeople()}
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
                {this.times()}
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

export default RestaurantShowForm;
