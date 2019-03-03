import React, { Component } from 'react';
import RestaurantListItem from './RestaurantListItem/RestaurantListItem';
import SearchFormContainer from './SearchForm/SearchFormContainer';

class RestaurantList extends Component {
  render() {
    const restaurants = this.props.restaurants.map(rest => {
      return <RestaurantListItem key={rest.id} restaurant={rest} />
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

export default RestaurantList;
