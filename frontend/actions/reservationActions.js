import * as ReservationUtils from '../utils/reservationUtils';

export const RECEIVE_RESERVATION = "RECEIVE_RESERVATION";
export const RECEIVE_RESERVATION_FORM_CHANGE = "RECEIVE_RESERVATION_FORM_CHANGE";
export const RECEIVE_RESERVATION_ERRORS = "RECEIVE_RESERVATION_ERRORS";
export const CLEAR_RESERVATION_ERRORS = "CLEAR_RESERVATION_ERRORS";

const receiveReservation = reservation => ({
  type: RECEIVE_RESERVATION,
  reservation
});

export const receiveReservationFormChange = reservationData => ({
  type: RECEIVE_RESERVATION_FORM_CHANGE,
  reservationData
});

const receiveReservationErrors = errors => ({
  type: RECEIVE_RESERVATION_ERRORS,
  errors
});

export const clearReservationErrors = () => ({
  type: CLEAR_RESERVATION_ERRORS
});

export const makeReservation = reservation => dispatch => {
  return ReservationUtils.postReservation(reservation)
    .then(
      reservation => dispatch(receiveReservation(reservation)),
      errors => dispatch(receiveReservationErrors(errors.responseJSON))
    );
};