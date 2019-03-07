import {
  RECEIVE_PROFILE
} from '../../../actions/userActions';
import {
  SIGNIN_USER
} from '../../../actions/sessionActions';

export const usersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case SIGNIN_USER:
      return Object.assign({}, oldState, {
        [action.user.id]: action.user
      });
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