import React, { Component } from 'react';
import ResButtons from './ResButtons';

class RestaurantSearchItem extends Component {

  render() {

    const numTables = Math.floor(Math.random() * 10);
    const numBookings = Math.floor(Math.random() * 40);

    return (
      <div class="restaurant-profile-photo-wrapper">
        <img src="https://s3-media4.fl.yelpcdn.com/bphoto/sYOTILQrRDeiycLkc1hIzw/o.jpg" alt="restaurant photo" />
        <div className="search-item">
          <h1>{this.props.restaurant.name}</h1>
          <div className="restaurant-item-top">
            <div className="restaurant-item-rating">rating</div>
            <div className="restaurant-item-cost">cost</div>
          </div>
          <div className="restaurant-item-middle">
            <div className="restaurant-item-rating">Cuisine</div>
            <div className="restaurant-item-cost">Neighborhood</div>
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

export default RestaurantSearchItem;
