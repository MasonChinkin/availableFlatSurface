import {
  RECEIVE_PROFILE
} from "../../../actions/userActions";

export const reservationsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_PROFILE:
      return (action.user.reservations === undefined) ? {} : (action.user.reservations);
    default:
      return oldState;
  }
};