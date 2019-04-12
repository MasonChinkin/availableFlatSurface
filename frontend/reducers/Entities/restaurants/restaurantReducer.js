import {
  RECEIVE_SEARCHED_RESTAURANTS,
  RECEIVE_RESTAURANT,
  RECEIVE_RECOMMENDED_RESTAURANTS,
  CLEAR_RESTAURANTS,
  RECEIVE_NO_RESTAURANTS_FOUND
} from "../../../actions/restaurantActions";
import {
  RECEIVE_PROFILE
} from "../../../actions/userActions";
import {
  RECEIVE_REVIEW,
  DELETE_REVIEW
} from "../../../actions/reviewActions";

export const restaurantReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState)
  switch (action.type) {
    case RECEIVE_SEARCHED_RESTAURANTS:
      return action.restaurants;
    case RECEIVE_RECOMMENDED_RESTAURANTS:
      return action.restaurants;
    case RECEIVE_RESTAURANT:
      let restaurant = Object.entries(action.restaurant.restaurant);
      return Object.assign({}, oldState, {
        [restaurant[0][0]]: restaurant[0][1]
      });
    case RECEIVE_REVIEW:
      newState[action.payload.review.restaurantId].rating = action.payload.newRating.rating
      return newState
    case DELETE_REVIEW:
      newState[action.payload.review.restaurantId].rating = action.payload.newRating.rating
      return newState
    case RECEIVE_PROFILE:
      return Object.assign({}, oldState, action.user.restaurants);
    case CLEAR_RESTAURANTS:
      return {}
    case RECEIVE_NO_RESTAURANTS_FOUND:
      return {}
    default:
      return oldState;
  }
};