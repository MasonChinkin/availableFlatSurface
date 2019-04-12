import {
  RECEIVE_RESTAURANT
} from "../../../actions/restaurantActions";
import {
  RECEIVE_REVIEW,
  DELETE_REVIEW
} from "../../../actions/reviewActions";


export const reviewsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState)
  switch (action.type) {
    case RECEIVE_RESTAURANT:
      return action.restaurant.reviews;
    case RECEIVE_REVIEW:
      newState[action.payload.review.id] = action.payload.review
      return newState
    case DELETE_REVIEW:
      delete newState[action.payload.review.id]
      return newState
    default:
      return oldState;
  }
};