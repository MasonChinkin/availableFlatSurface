import { connect } from 'react-redux';
import RestaurantList from './RestaurantList';

const mSP = ({ entities, errors }) => ({
  restaurants: Object.values(entities.restaurants),
  noRestaurantFound: errors.restaurantErrors
});

const mDP = dispatch => ({
  requestSearchedRestaurants: restaurants => dispatch(requestSearchedRestaurants(restaurants))
});

const RestaurantListContainer = connect(mSP, mDP)(RestaurantList);

export default RestaurantListContainer;