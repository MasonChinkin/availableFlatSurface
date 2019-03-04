import {
  RECEIVE_SEARCHED_RESTAURANTS,
  RECEIVE_ALL_RESTAURANTS
} from "../../../actions/restaurantActions";

const restaurantSearchReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_SEARCHED_RESTAURANTS:
      return action.restaurants;
    case RECEIVE_ALL_RESTAURANTS:
      return action.restaurants;
    default:
      return oldState;
  }
};

export default restaurantSearchReducer;