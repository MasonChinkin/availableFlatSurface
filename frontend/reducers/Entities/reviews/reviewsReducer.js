import {
  RECEIVE_RESTAURANT
} from "../../../actions/restaurantActions";


export const reviewsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_RESTAURANT:
      return action.restaurant.reviews;
    default:
      return oldState;
  }
};