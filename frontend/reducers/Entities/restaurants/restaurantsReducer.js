import {
  RECEIVE_RESTAURANT,
  RECEIVE_SEARCHED_RESTAURANTS
} from "../../../actions/restaurantActions";

const restaurantReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_SEARCHED_RESTAURANTS:
      return action.restaurants;
    case RECEIVE_RESTAURANT:
      return action.restaurant;
    default:
      return oldState;
  }
};

export default restaurantReducer;