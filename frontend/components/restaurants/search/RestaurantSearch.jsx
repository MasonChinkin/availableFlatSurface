import React, { Component } from 'react';
import RestaurantSearchItem from './RestaurantSearchItem';

class RestaurantSearch extends Component {
  componentDidMount() {
    this.props.requestAllRestaurants();
  }

  render() {
    const restaurants = this.props.restaurants.map(rest => {
      return <RestaurantSearchItem key={rest.id} restaurant={rest} />
    });

    return (
      <>
        <main className="search-content">
          {restaurants}
        </main>
      </>
    );
  }
}

export default RestaurantSearch;
