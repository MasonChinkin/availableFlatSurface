import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Calendar from 'react-calendar';
import * as FormUtils from '../../../../utils/formUtils';

class SearchForm extends Component {

  constructor(props) {
    super(props);

    let date = new Date();
    let hours = date.getHours();
    if (hours >= 22) {
      date.setHours(24);
      date.setHours(12);
      date.setMinutes(0);
    } else {
      date.setHours(19);
      date.setMinutes(0);
    }

    this.state = {
      searchTerm: '',
      numPeople: (this.props.reservationForm === null) ? 2 : this.props.reservationForm.numPeople,
      resDateTime: (this.props.reservationForm === null) ? date : this.props.reservationForm.resDateTime,
      calendarClass: 'search-calendar'
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.flipCalendar = this.flipCalendar.bind(this);
    this.handleDayPick = this.handleDayPick.bind(this);
    this.handleNumPeople = this.handleNumPeople.bind(this);
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
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.reservationFormChange({
      numPeople: this.state.numPeople,
      resDateTime: this.state.resDateTime
    })

    this.props.requestSearchedRestaurants(this.state)
      .then(this.props.history.push('/search'));
  }

  handleDayPick(date) {
    this.setState({ resDateTime: date });
    this.props.reservationFormChange({
      numPeople: this.state.numPeople,
      resDateTime: this.state.resDateTime
    })
  }

  handleNumPeople(e) {
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
    const localeDateOptions = { day: 'numeric', month: 'short', year: 'numeric' }
    const times = FormUtils.times();
    let numPeopleOptions = FormUtils.numPeople();
    let defaultTime;

    if (this.props.reservationForm === null) {
      defaultTime = times[0]
    } else {
      const searchTime = this.props.reservationForm.resDateTime
      const defaultHours = (searchTime.getHours() === 12) ? '12' : `${searchTime.getHours() - 12}`
      const min = searchTime.getMinutes()
      const defaultMinutes = (min < 10) ? `0${min} PM` : `${min} PM`
      defaultTime = `${defaultHours}:${defaultMinutes}`
    }

    let numPeople = this.state.numPeople
    let numPeopleString = (numPeople === 1) ? `${numPeople} person` : `${numPeople} people`

    const calendarDropDown = this.props.searchCalendar ?
      <Calendar
        className={this.state.calendarClass}
        activeStartDate={this.state.resDateTime}
        onClickDay={this.handleDayPick}
        minDetail="month"
      /> :
      undefined;

    if (this.props.history.location.pathname === '/search') {
      return (
        <div className='restaurant-index-search-form'>
          <form onSubmit={this.handleSubmit}>
            <select id="res-search-input-left" onChange={this.handleNumPeople} defaultValue={numPeopleString}>
              {numPeopleOptions}
            </select>
            <div
              type='button'
              onClick={this.flipCalendar}
              id="search-form-date">
              {this.state.resDateTime.toLocaleDateString('en-US', localeDateOptions)}
              {calendarDropDown}
            </div>
            <select id="res-search-input" onChange={this.handleTimeChange} defaultValue={defaultTime}>
              {times}
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
        <main>
          <div className='root-search-form' style={{
            backgroundImage: "url(https://s3-us-west-1.amazonaws.com/availableflatsurface-seed/one-off-use/splash.png)"
          }}>
            <h1>Find your table for any occasion</h1>
            <form onSubmit={this.handleSubmit}>
              <select id="res-search-input-left" onChange={this.handleNumPeople} defaultValue={numPeopleString}>
                {numPeopleOptions}
              </select>
              <div
                type='button'
                onClick={this.flipCalendar}
                id="search-form-date">
                {this.state.resDateTime.toLocaleDateString('en-US', localeDateOptions)}
                {calendarDropDown}
              </div>
              <select id="res-search-input-right" onChange={this.handleTimeChange} defaultValue={times[0]}>
                {times}
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
        </main>
      )
    }
  }
}

export default withRouter(SearchForm);
