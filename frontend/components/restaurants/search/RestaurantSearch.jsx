import React, { Component } from 'react';
import RestaurantSearchItem from './RestaurantSearchItem/RestaurantSearchItem';
import SearchResForm from './SearchResForm/SearchResForm';

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
        <SearchResForm />
        <main className="search-content">
          {restaurants}
        </main>
      </>
    );
  }
}

export default RestaurantSearch;
