import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import ResButtonsContainer from './ResButtonsContainer';

class RestaurantListItem extends Component {

  costSymbol(cost) {
    const darkDollar = key => (
      <i key={key} className='fas fa-dollar-sign' style={{ color: 'black' }}></i>
    )

    const lightDollar = key => (
      <i key={key} className='fas fa-dollar-sign' style={{ color: 'lightgrey' }}></i>
    )

    let dollars = []
    for (let i = 0; i < 4; i++) {
      (i < cost) ? dollars.push(darkDollar(i)) : dollars.push(lightDollar(i))
    }

    return dollars;
  }

  ratingSymbol(rating) {
    const filledStar = key => <i key={key} className='fa fa-star' style={{ color: 'rgb(250, 160, 10)' }}></i>

    const emptyStar = key => <i key={key} className='fa fa-star' style={{ color: 'rgb(220, 210, 200)' }}></i>

    let dollars = []
    for (let i = 0; i < 5; i++) {
      (i < rating) ? dollars.push(filledStar(i)) : dollars.push(emptyStar(i))
    }

    return dollars;
  }

  render() {
    const rest = this.props.restaurant;

    const numTables = Math.ceil(Math.random() * 10);
    const numBookings = Math.ceil(Math.random() * 40);

    let costSymbol = this.costSymbol(rest.cost)
    let ratingSymbol = this.ratingSymbol(rest.rating)

    return (
      <div className="restaurant-profile-photo-wrapper">
        <img src={rest.profilePhotoURL} alt="restaurant photo" />
        <div className="search-item">
          <Link className="restaurant-item-link" smooth to={`/restaurants/${rest.id}#top`}>{rest.name}</Link>
          <div className="restaurant-item-top">
            <div className="restaurant-item-rating">{ratingSymbol}</div>
            <div className="restaurant-item-cost">{costSymbol}</div>
          </div>
          <div className="restaurant-item-middle">
            <div className="restaurant-item-cuisine">{rest.cuisine}</div>
            <div className="restaurant-item-neighborhood">{rest.neighborhood}</div>
          </div>
          <div className="restaurant-item-bottom">
            <div className="restaurant-item-bookings"><i className="fa fa-line-chart" />Booked {rest.bookedTimesToday} times today</div>
            <div className="restaurant-item-tables-left"><i className='far fa-clock' />Hurry, we only have {rest.tablesLeft} timeslots left!</div>
          </div>
          <ResButtonsContainer />
        </div>
      </div>
    );
  }
}

export default RestaurantListItem;
