import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
// import Calendar from 'react-calendar';

class SearchForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this)
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

  render() {
    let searchFormClass, rootTitle;

    if (this.props.history.location.pathname === '/search') {
      searchFormClass = 'restaurant-index-search-form'
    } else {
      searchFormClass = 'root-search-form'
      rootTitle = <h1>Find your table for any occasion</h1>
    }

    return (
      <div className={searchFormClass}>
        {rootTitle}
        <form onSubmit={this.handleSubmit}>
          <select id="res-search-input-left" defaultValue='2 people'>
            {this.numPeople()}
          </select>
          {/* <Calendar /> */}
          <select id="res-search-input"></select>
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
    );
  }
}

//

export default withRouter(SearchForm);
