import {
  RECEIVE_RESERVATION_ERRORS,
  CLEAR_RESERVATION_ERRORS
} from "../../actions/reservationActions";

const reservationErrorsReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_RESERVATION_ERRORS:
      return action.errors;
    case CLEAR_RESERVATION_ERRORS:
      return [];
    default:
      return oldState;
  }
};

export default reservationErrorsReducer;