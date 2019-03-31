import {
  RECEIVE_PROFILE
} from "../../../actions/userActions";
import {
  DELETE_RESERVATION
} from "../../../actions/reservationActions";

export const reservationsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_PROFILE:
      return (action.user.reservations === undefined) ? {} : (action.user.reservations);
    case DELETE_RESERVATION:
      let newState = Object.assign({}, oldState)
      delete newState[action.payload.id]
      return newState
    default:
      return oldState;
  }
};