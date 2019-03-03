import React, { Component } from 'react';
import RestaurantSearchItem from './RestaurantSearchItem/RestaurantSearchItem';
import SearchFormContainer from './SearchForm/SearchFormContainer';

class RestaurantSearch extends Component {
  render() {
    const restaurants = this.props.restaurants.map(rest => {
      return <RestaurantSearchItem key={rest.id} restaurant={rest} />
    });

    return (
      <>
        <SearchFormContainer />
        <main className="search-content">
          {restaurants}
        </main>
      </>
    );
  }
}

export default RestaurantSearch;
