import React, { Component } from 'react';
import RestaurantSearchItem from './RestaurantSearchItem/RestaurantSearchItem';
import SearchResFormContainer from './SearchResForm/SearchResFormContainer';

class RestaurantSearch extends Component {
  render() {
    const restaurants = this.props.restaurants.map(rest => {
      return <RestaurantSearchItem key={rest.id} restaurant={rest} />
    });

    return (
      <>
        <SearchResFormContainer />
        <main className="search-content">
          {restaurants}
        </main>
      </>
    );
  }
}

export default RestaurantSearch;
