import {
  RECEIVE_RESERVATION
} from "../../../actions/reservationActions";

export const newReservationReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_RESERVATION:
      return action.reservation.id;
    default:
      return oldState;
  }
};