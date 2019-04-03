import React, { Component } from 'react';
import * as SymbolUtils from '../../../../utils/symbolUtils'
import { HashLink as Link } from 'react-router-hash-link';
import ResButtonsContainer from './ResButtonsContainer';

class RestaurantListItem extends Component {
  render() {
    const rest = this.props.restaurant;

    let costSymbol = SymbolUtils.costSymbol(rest.cost)
    let ratingSymbol = SymbolUtils.ratingSymbol(rest.rating, 'rgb(250, 160, 10)')

    return (
      <div className="restaurant-profile-photo-wrapper">
        <Link smooth to={`/restaurants/${rest.id}#top`}><img src={rest.profilePhotoURL} alt="restaurant photo" /></Link>
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
          <ResButtonsContainer restaurantId={rest.id} />
        </div>
      </div>
    );
  }
}

export default RestaurantListItem;
