import {
  RECEIVE_PROFILE
} from '../../../actions/userActions';

export const savedRestaurantsJoinReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_PROFILE:
      return (action.user.savedRestaurants === undefined) ? {} : (action.user.savedRestaurants);
    default:
      return oldState;
  }
};