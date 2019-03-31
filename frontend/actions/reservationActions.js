import * as ReservationUtils from '../utils/reservationUtils';

export const RECEIVE_RESERVATION = "RECEIVE_RESERVATION";
export const RECEIVE_RESERVATION_FORM_CHANGE = "RECEIVE_RESERVATION_FORM_CHANGE";
export const RECEIVE_RESERVATION_ERRORS = "RECEIVE_RESERVATION_ERRORS";
export const DELETE_RESERVATION = "DELETE_RESERVATION";
export const CLEAR_RESERVATION_ERRORS = "CLEAR_RESERVATION_ERRORS";
export const CLEAR_NEW_RESERVATION = "CLEAR_NEW_RESERVATION";

const receiveReservation = reservation => ({
  type: RECEIVE_RESERVATION,
  reservation
});

export const receiveReservationFormChange = reservationData => ({
  type: RECEIVE_RESERVATION_FORM_CHANGE,
  reservationData
});

export const clearNewReservation = () => ({
  type: CLEAR_NEW_RESERVATION
});

export const deleteReservation = payload => ({
  type: DELETE_RESERVATION,
  payload
});

export const makeReservation = reservation => dispatch => {
  return ReservationUtils.postReservation(reservation)
    .then(reservation => dispatch(receiveReservation(reservation)));
};

export const cancelReservation = id => dispatch => {
  return ReservationUtils.deleteReservation(id)
    .then(deletedId => dispatch(deleteReservation(deletedId)));
};