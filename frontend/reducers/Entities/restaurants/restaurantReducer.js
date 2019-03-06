import {
  RECEIVE_SEARCHED_RESTAURANTS,
  RECEIVE_ALL_RESTAURANTS,
  RECEIVE_RESTAURANT
} from "../../../actions/restaurantActions";
import {
  merge
} from 'lodash';

const restaurantReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_SEARCHED_RESTAURANTS:
      return action.restaurants;
    case RECEIVE_ALL_RESTAURANTS:
      return action.restaurants;
    case RECEIVE_RESTAURANT:
      return merge({}, oldState, {
        [action.restaurant.id]: action.restaurant
      })
    default:
      return oldState;
  }
};

export default restaurantReducer;