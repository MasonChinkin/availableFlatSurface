import { connect } from 'react-redux';
import RestaurantSearch from './RestaurantSearch';

const mSP = ({ entities }) => ({
  restaurants: Object.values(entities.restaurants)
});

const RestaurantSearchContainer = connect(mSP)(RestaurantSearch);

export default RestaurantSearchContainer;