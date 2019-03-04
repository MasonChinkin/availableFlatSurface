import { connect } from 'react-redux';
import { requestRestaurant } from '../../../actions/restaurantActions';
import RestaurantShow from './RestaurantShow';

const mSP = ({ entities }) => ({
  // restaurants only contains one restaurant
  restaurant: entities.restaurants
});

const mDP = dispatch => ({
  requestRestaurant: id => dispatch(requestRestaurant(id))
})

const RestaurantShowContainer = connect(mSP, mDP)(RestaurantShow)

export default RestaurantShowContainer;