import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Calendar from 'react-calendar';

class SearchForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      resTime: new Date()
    };

    this.handleSubmit = this.handleSubmit.bind(this)
    this.flipCalendar = this.flipCalendar.bind(this)
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
    this.props.requestSearchedRestaurants(this.state)
      .then(this.props.history.push('/search'))
  }

  // componentDidUpdate() {
  //   if (this.props.calendarDropDown) {
  //     console.log('true')
  //     window.addEventListener('click', this.flipCalendar);
  //   } else {
  //     window.removeEventListener('click', this.flipCalendar);
  //   }
  // }

  render() {
    const calendarDropDown = this.props.searchCalendar ?
      <Calendar
        className="search-calendar"
      /> :
      undefined;

    if (this.props.history.location.pathname === '/search') {
      return (
        <div className='restaurant-index-search-form'>
          <form onSubmit={this.handleSubmit}>
            <select id="res-search-input-left" defaultValue='2 people'>
              {this.numPeople()}
            </select>
            <input
              type='button'
              className="search-form-date"
              onClick={this.flipCalendar}
              id="res-search-input" />
            {calendarDropDown}
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
        <div className='root-search-form'>
          <h1>Find your table for any occasion</h1>
          <form onSubmit={this.handleSubmit}>
            <select id="res-search-input-left" defaultValue='2 people'>
              {this.numPeople()}
            </select>
            {/* <Calendar /> */}
            <select id="res-search-input"></select>
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
