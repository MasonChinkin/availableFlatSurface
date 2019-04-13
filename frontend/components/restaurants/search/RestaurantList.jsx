import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
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

    let makeNewSearch;
    if (this.props.history.location.pathname === '/search' &&
      sortedRestaurants.length === 0 &&
      this.props.noRestaurantFound === '') {
      makeNewSearch = 'Make a new search!'
    } else {
      makeNewSearch = ''
    }

    return (
      <>
        <SearchFormContainer />
        <main className="search-content">
          <h2 id="no-results">{this.props.noRestaurantFound}</h2>
          <h2 id="no-results">{makeNewSearch}</h2>
          {restaurants}
        </main>
      </>
    );
  }
}

export default withRouter(RestaurantList);
