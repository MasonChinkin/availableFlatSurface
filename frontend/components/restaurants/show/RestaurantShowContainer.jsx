import { connect } from 'react-redux';
import { requestRestaurant } from '../../../actions/restaurantActions';
import RestaurantShow from './RestaurantShow';
import { createSavedRestaurant, unSaveRestaurant } from '../../../actions/savedRestaurantActions';

const mSP = ({ entities, session }, ownProps) => {
  // savedRestaurantsJoin returns empty object if not saved
  let savedRestaurantsJoin = Object.values(entities.savedRestaurantsJoin)
  let savedRestaurant = (savedRestaurantsJoin.length === 1) ?
    savedRestaurantsJoin[0] : null

  return {
    restaurant: entities.restaurants[ownProps.match.params.id],
    savedRestaurant: savedRestaurant,
    reviews: Object.values(entities.reviews),
    users: entities.users,
    currentUserId: session.currentUser.id,
  }
};

const mDP = dispatch => ({
  requestRestaurant: payload => dispatch(requestRestaurant(payload)),
  createSavedRestaurant: savedRestaurant => dispatch(createSavedRestaurant(savedRestaurant)),
  unSaveRestaurant: id => dispatch(unSaveRestaurant(id))
});

const RestaurantShowContainer = connect(mSP, mDP)(RestaurantShow);

export default RestaurantShowContainer;