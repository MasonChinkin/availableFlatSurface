import { connect } from 'react-redux';
import RestaurantList from './RestaurantList';

const mSP = ({ entities }) => ({
  restaurants: Object.values(entities.searchedRestaurants)
});

const mDP = dispatch => ({
  requestSearchedRestaurants: restaurants => dispatch(requestSearchedRestaurants(restaurants))
});

const RestaurantListContainer = connect(mSP, mDP)(RestaurantList);

export default RestaurantListContainer;