import React, { Component } from 'react';
import ResButtons from './ResButtons';

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
    const filledStar = key => (
      <i key={key} className='fa fa-star' style={{ color: 'rgb(250, 160, 10)' }}></i>
    )

    const emptyStar = key => (
      <i key={key} className='fa fa-star' style={{ color: 'rgb(220, 210, 200)' }}></i>
    )

    let dollars = []
    for (let i = 0; i < 5; i++) {
      (i < rating) ? dollars.push(filledStar(i)) : dollars.push(emptyStar(i))
    }

    return dollars;
  }

  render() {

    const numTables = Math.ceil(Math.random() * 10);
    const numBookings = Math.ceil(Math.random() * 40);

    let costSymbol = this.costSymbol(this.props.restaurant.cost)
    let ratingSymbol = this.ratingSymbol(this.props.restaurant.rating)

    return (
      <div className="restaurant-profile-photo-wrapper">
        <img src="https://s3-media4.fl.yelpcdn.com/bphoto/sYOTILQrRDeiycLkc1hIzw/o.jpg" alt="restaurant photo" />
        <div className="search-item">
          <h1>{this.props.restaurant.name}</h1>
          <div className="restaurant-item-top">
            <div className="restaurant-item-rating">{ratingSymbol}</div>
            <div className="restaurant-item-cost">{costSymbol}</div>
          </div>
          <div className="restaurant-item-middle">
            <div className="restaurant-item-cuisine">{this.props.restaurant.cuisine}</div>
            <div className="restaurant-item-neighborhood">{this.props.restaurant.neighborhood}</div>
          </div>
          <div className="restaurant-item-bottom">
            <div className="restaurant-item-bookings"><i className="fa fa-line-chart" />Booked {numBookings} today</div>
            <div className="restaurant-item-tables-left"><i className='far fa-clock' />Hurry, we only have {numTables} left!</div>
          </div>
          <ResButtons />
        </div>
      </div>
    );
  }
}

export default RestaurantListItem;
