import { connect } from 'react-redux';
import { requestAllRestaurants } from '../../../actions/restaurantActions';
import RestaurantSearch from './RestaurantSearch';

const mSP = ({ entities }) => ({
  restaurants: entities.restaurants
});

const mDP = dispatch => ({
  requestAllRestaurants: restaurants => dispatch(requestAllRestaurants(restaurants))
});

const RestaurantSearchContainer = connect(mSP, mDP)(RestaurantSearch);

export default RestaurantSearchContainer;