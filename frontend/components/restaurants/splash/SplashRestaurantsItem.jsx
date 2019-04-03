import React, { Component } from 'react';
import * as SymbolUtils from '../../../utils/symbolUtils';
import { HashLink as Link } from 'react-router-hash-link';

class SplashRestaurantsItem extends Component {
  render() {
    let { restaurant } = this.props

    let rating = SymbolUtils.ratingSymbol(restaurant.rating, 'rgb(210, 40, 60)')
    let cost = SymbolUtils.costSymbol(restaurant.cost)

    return (
      <Link smooth to={`/restaurants/${restaurant.id}#top`} className="restaurant-recommendation-item">
        <img className="restaurant-recommendation-photo" src={restaurant.profilePhotoURL} alt="restaurant photo" />
        <div className="recommendation-details">
          <h2 className="recommendation-name">{restaurant.name}</h2>
          <div>{rating}</div>
          <div className="recommendation-details-row">
            <h3 className="">{restaurant.cuisine}</h3>
            <div>{cost}</div>
            <h3>{restaurant.neighborhood}</h3>
          </div>
          <div className="rec-booked"><i className="fa fa-line-chart" />Booked {restaurant.bookedTimesToday} times today</div>
        </div>
      </Link>
    );
  }
}

export default SplashRestaurantsItem;
