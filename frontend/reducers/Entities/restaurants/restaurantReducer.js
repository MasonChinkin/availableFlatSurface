import {
  RECEIVE_SEARCHED_RESTAURANTS,
  RECEIVE_ALL_RESTAURANTS,
  RECEIVE_RESTAURANT
} from "../../../actions/restaurantActions";
import {
  merge
} from 'lodash';

export const restaurantReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_SEARCHED_RESTAURANTS:
      return action.restaurants;
    case RECEIVE_ALL_RESTAURANTS:
      return action.restaurants;
    case RECEIVE_RESTAURANT:
      let restaurant = Object.entries(action.restaurant.restaurant);
      return merge({}, oldState, {
        [restaurant[0][0]]: restaurant[0][1]
      });
    default:
      return oldState;
  }
};

export const reviewsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_RESTAURANT:
      return action.restaurant.reviews;
    default:
      return oldState;
  }
};

export const reviewersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_RESTAURANT:
      return action.restaurant.reviewers;
    default:
      return oldState;
  }
};