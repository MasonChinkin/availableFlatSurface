import { connect } from 'react-redux';
import { requestRestaurant } from '../../../actions/restaurantActions';
import RestaurantShow from './RestaurantShow';
import { createSavedRestaurant, unSaveRestaurant, clearSavedRestaurant } from '../../../actions/savedRestaurantActions';

const mSP = ({ entities, session }, ownProps) => {
  return {
    restaurant: entities.restaurants[ownProps.match.params.id],
    savedRestaurantsJoin: entities.savedRestaurantsJoin,
    reviews: Object.values(entities.reviews),
    users: entities.users,
    currentUserId: session.currentUser.id,
  }
};

const mDP = dispatch => ({
  requestRestaurant: payload => dispatch(requestRestaurant(payload)),
  createSavedRestaurant: savedRestaurant => dispatch(createSavedRestaurant(savedRestaurant)),
  unSaveRestaurant: id => dispatch(unSaveRestaurant(id)),
  clearSavedRestaurant: () => dispatch(clearSavedRestaurant())
});

const RestaurantShowContainer = connect(mSP, mDP)(RestaurantShow);

export default RestaurantShowContainer;