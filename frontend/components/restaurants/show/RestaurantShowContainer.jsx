import { connect } from 'react-redux';
import { requestRestaurant } from '../../../actions/restaurantActions';
import RestaurantShow from './RestaurantShow';
import { createSavedRestaurant } from '../../../actions/savedRestaurantActions';

const mSP = ({ entities, session }, ownProps) => ({
  restaurant: entities.restaurants[ownProps.match.params.id],
  reviews: Object.values(entities.reviews),
  users: entities.users,
  currentUser: entities.users[session.currentUser.id]
});

const mDP = dispatch => ({
  requestRestaurant: id => dispatch(requestRestaurant(id)),
  createSavedRestaurant: savedRestaurant => dispatch(createSavedRestaurant(savedRestaurant))
});

const RestaurantShowContainer = connect(mSP, mDP)(RestaurantShow);

export default RestaurantShowContainer;