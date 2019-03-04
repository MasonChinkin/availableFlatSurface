import {
  RECEIVE_RESTAURANT
} from "../../../actions/restaurantActions";

const restaurantShowReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_RESTAURANT:
      return action.restaurant;
    default:
      return oldState;
  }
};

export default restaurantShowReducer;