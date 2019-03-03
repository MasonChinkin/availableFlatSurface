import React, { Component } from 'react';
import RestaurantListItem from './RestaurantListItem/RestaurantListItem';
import SearchFormContainer from './SearchForm/SearchFormContainer';

class RestaurantList extends Component {

  // populates list with all restaurants if user goes straight to '/search'
  componentDidMount() {
    if (this.props.restaurants.length === 0) {
      // empty string returns all restaurants
      this.props.requestSearchedRestaurants({ searchTerm: '' })
    }
  }

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
