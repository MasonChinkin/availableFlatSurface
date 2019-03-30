import { connect } from 'react-redux';
import { requestRestaurant } from '../../../actions/restaurantActions';
import RestaurantShow from './RestaurantShow';
import { createSavedRestaurant } from '../../../actions/savedRestaurantActions';

const mSP = ({ entities, session }, ownProps) => ({
  restaurant: entities.restaurants[ownProps.match.params.id],
  reviews: Object.values(entities.reviews),
  users: entities.users,
  currentUserId: session.currentUser.id
});

const mDP = dispatch => ({
  requestRestaurant: payload => dispatch(requestRestaurant(payload)),
  createSavedRestaurant: savedRestaurant => dispatch(createSavedRestaurant(savedRestaurant))
});

const RestaurantShowContainer = connect(mSP, mDP)(RestaurantShow);

export default RestaurantShowContainer;