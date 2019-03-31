import {
  RECEIVE_PROFILE
} from '../../../actions/userActions';
import {
  RECEIVE_RESTAURANT
} from '../../../actions/restaurantActions';
import {
  CREATE_SAVED_RESTAURANT,
  DELETE_SAVED_RESTAURANT
} from '../../../actions/savedRestaurantActions';

export const savedRestaurantsJoinReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_PROFILE:
      return (action.user.savedRestaurantsJoin === undefined) ? {} : (action.user.savedRestaurantsJoin);
    case RECEIVE_RESTAURANT:
      return action.restaurant.savedRestaurantsJoin || {}
    case CREATE_SAVED_RESTAURANT:
      return action.savedRestaurant.savedRestaurantsJoin
    case DELETE_SAVED_RESTAURANT:
      return {}
    default:
      return oldState
  }
};