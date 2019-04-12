import React, { Component } from 'react';
import RestaurantListItem from './RestaurantListItem/RestaurantListItem';
import SearchFormContainer from './SearchForm/SearchFormContainer';

class RestaurantList extends Component {
  componentDidMount() {
    window.scroll(0, 0)
  }

  render() {
    let sortedRestaurants = this.props.restaurants.sort((a, b) => {
      var textA = a.name.toUpperCase();
      var textB = b.name.toUpperCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    })

    let restaurants = sortedRestaurants.map(rest => {
      return <RestaurantListItem key={rest.id} restaurant={rest} />
    });

    return (
      <>
        <SearchFormContainer />
        <main className="search-content">
          <h2 id="no-results">{this.props.noRestaurantFound}</h2>
          {restaurants}
        </main>
      </>
    );
  }
}

export default RestaurantList;
