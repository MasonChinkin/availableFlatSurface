import { connect } from 'react-redux';
import { requestRestaurant } from '../../../actions/restaurantActions';
import RestaurantShow from './RestaurantShow';

const mSP = (state, ownProps) => ({
  restaurant: state.entities.restaurants[ownProps.match.params.id]
});

const mDP = dispatch => ({
  requestRestaurant: id => dispatch(requestRestaurant(id))
});

const RestaurantShowContainer = connect(mSP, mDP)(RestaurantShow);

export default RestaurantShowContainer;