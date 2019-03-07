import {
  RECEIVE_PROFILE
} from '../../../actions/userActions';

export const userReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_PROFILE:
      return action.user.user;
    default:
      return oldState;
  }
};

export const savedRestaurantsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_PROFILE:
      return (action.user.savedRestaurants === undefined) ? {} : (action.user.savedRestaurants)
    default:
      return oldState;
  }
};

export const userReservationsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_PROFILE:
      return (action.user.reservations === undefined) ? {} : (action.user.reservations);
    default:
      return oldState;
  }
};

export const reservedRestaurantReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_PROFILE:
      return (action.user.reservedRestaurants === undefined) ? {} : (action.user.reservedRestaurants);
    default:
      return oldState;
  }
};