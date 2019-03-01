import {
  RECEIVE_ALL_RESTAURANTS,
  RECEIVE_RESTAURANT
} from "../../../actions/restaurantActions";

const restaurantReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_RESTAURANTS:
      return action.restaurants;
    case RECEIVE_RESTAURANT:
      return action.restaurant;
    default:
      return oldState;
  }
};

export default restaurantReducer;