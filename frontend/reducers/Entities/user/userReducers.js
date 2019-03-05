import {
  RECEIVE_USER
} from '../../../actions/userActions';

export const userReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_USER:
      return action.user.user;
    default:
      return oldState;
  }
};

export const savedRestaurantsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_USER:
      return action.user.savedRestaurants;
    default:
      return oldState;
  }
};

export const reservationsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_USER:
      return action.user.reservations;
    default:
      return oldState;
  }
};