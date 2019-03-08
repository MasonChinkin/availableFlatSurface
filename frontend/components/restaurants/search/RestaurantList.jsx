import React, { Component } from 'react';
import RestaurantListItem from './RestaurantListItem/RestaurantListItem';
import SearchFormContainer from './SearchForm/SearchFormContainer';

class RestaurantList extends Component {

  render() {
    let restaurants = this.props.restaurants.map(rest => {
      return <RestaurantListItem key={rest.id} restaurant={rest} />
    });

    restaurants = (restaurants.length === 0) ?
      <h2 className="no-results">No Results Found!</h2> :
      restaurants

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
