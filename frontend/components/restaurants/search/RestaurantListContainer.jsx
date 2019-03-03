import { connect } from 'react-redux';
import RestaurantList from './RestaurantList';

const mSP = ({ entities }) => ({
  restaurants: Object.values(entities.restaurants)
});

const RestaurantListContainer = connect(mSP)(RestaurantList);

export default RestaurantListContainer;