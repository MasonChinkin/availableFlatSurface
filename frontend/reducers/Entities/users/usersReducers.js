import {
  SIGNIN_USER
} from '../../../actions/sessionActions';
import {
  RECEIVE_RESTAURANT
} from '../../../actions/restaurantActions';

export const usersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case SIGNIN_USER:
      return Object.assign({}, oldState, {
        [action.user.id]: action.user
      });
    case RECEIVE_RESTAURANT:
      return Object.assign({}, oldState, action.restaurant.reviewers);
    default:
      return oldState;
  }
};