import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Calendar from 'react-calendar';

class SearchForm extends Component {

  constructor(props) {
    super(props);

    let date = new Date()
    let hours = date.getHours();
    date.setHours(hours + 1);
    date.setMinutes(0);

    this.state = {
      searchTerm: '',
      numPeople: 2,
      resDateTime: date,
      calendarClass: 'search-calendar'
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.flipCalendar = this.flipCalendar.bind(this);
    this.handleDayPick = this.handleDayPick.bind(this);
    this.handleNumPeople = this.handleNumPeople.bind(this);
  }

  numPeople() {
    let options = [];

    for (let i = 1; i < 21; i++) {
      let val = `${i} people`
      options.push(<option key={i} value={val}>{val}</option>);
    }

    return options;
  }

  times() {
    const resTimes = [];
    for (let i = 0; i < 24; i++) {
      let newDateTime = new Date(this.state.resDateTime);
      let minutes = newDateTime.getMinutes();
      minutes += (i === 0) ? 0 : i * 30;
      newDateTime.setMinutes(minutes);

      let hour = (newDateTime.getHours())
      let min = newDateTime.getMinutes();
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

    this.props.requestSearchedRestaurants(this.state)
      .then(this.props.history.push('/search'))
  }

  handleDayPick(date) {
    this.setState({ resDateTime: date });
    this.props.reservationFormChange({
      numPeople: this.state.numPeople,
      resDateTime: this.state.resDateTime
    })
  }

  handleNumPeople(e) {
    console.log(e)
    this.setState({ numPeople: e.currentTarget.value });
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

    if (this.props.history.location.pathname === '/search') {
      return (
        <div className='restaurant-index-search-form'>
          <form onSubmit={this.handleSubmit}>
            <select id="res-search-input-left" defaultValue='2 people'>
              {this.numPeople()}
            </select>
            <div
              type='button'
              onClick={this.flipCalendar}
              id="search-form-date">
              {this.state.resDateTime.toLocaleDateString('en-US', localeDateOptions)}
              {calendarDropDown}
            </div>
            <select id="res-search-input" defaultValue='7:00 PM'>
              {this.times()}
            </select>
            <input
              type='text'
              onChange={this.handleInput('searchTerm')}
              value={this.state.searchTerm}
              id="res-search-input"
              placeholder='Restaurant name' />
            <input
              type="submit"
              id="res-search-input-right"
              className="submit-button"
              value="Find a Table" />
          </form>
        </div >
      )
    } else {
      return (
        <div className='root-search-form' style={{
          backgroundImage: "url(https://s3-us-west-1.amazonaws.com/availableflatsurface-seed/one-off-use/splash.png)"
        }}>
          <h1>Find your table for any occasion</h1>
          <form onSubmit={this.handleSubmit}>
            <select id="res-search-input-left" defaultValue='2 people'>
              {this.numPeople()}
            </select>
            <div
              type='button'
              onClick={this.flipCalendar}
              id="search-form-date">
              {this.state.resDateTime.toLocaleDateString('en-US', localeDateOptions)}
              {calendarDropDown}
            </div>
            <select id="res-search-input-right" defaultValue='7:00 PM'>
              {this.times()}
            </select>
            <input
              type='text'
              onChange={this.handleInput('searchTerm')}
              value={this.state.searchTerm}
              id="res-search-input-text-island"
              placeholder='Restaurant name' />
            <input
              type="submit"
              id="res-search-input-island-button"
              className="submit-button"
              value="Let's go" />
          </form>
        </div >
      )
    }
  }
}

export default withRouter(SearchForm);
