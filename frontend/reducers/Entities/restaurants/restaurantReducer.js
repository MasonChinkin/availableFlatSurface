import {
  RECEIVE_SEARCHED_RESTAURANTS,
  RECEIVE_RESTAURANT,
  RECEIVE_RECOMMENDED_RESTAURANTS
} from "../../../actions/restaurantActions";
import {
  merge
} from 'lodash';
import {
  RECEIVE_PROFILE
} from "../../../actions/userActions";

export const restaurantReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_SEARCHED_RESTAURANTS:
      return action.restaurants;
    case RECEIVE_RECOMMENDED_RESTAURANTS:
      return action.restaurants;
    case RECEIVE_RESTAURANT:
      let restaurant = Object.entries(action.restaurant.restaurant);
      return merge({}, oldState, {
        [restaurant[0][0]]: restaurant[0][1]
      });
    case RECEIVE_PROFILE:
      return Object.assign({}, oldState, action.user.restaurants);
      // case RECEIVE_PROFILE:
      //   return Object.assign({}, oldState, action.user.savedRestaurants);
    default:
      return oldState;
  }
};