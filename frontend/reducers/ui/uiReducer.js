import {
  DROP_DOWN_DROPPED,
  SEARCH_CALENDAR_DROPPED
} from "../../actions/uiActions";
import {
  merge
} from 'lodash'
import {
  RECEIVE_RESERVATION_FORM_CHANGE,
  RECEIVE_RESERVATION,
  CLEAR_NEW_RESERVATION
} from "../../actions/reservationActions";

const defaultUIState = {
  dropDown: false,
  searchCalendar: false,
  reservationForm: null,
  newReservation: {
    id: null
  }
};

const uiReducer = (oldState = defaultUIState, action) => {
  Object.freeze(oldState)
  switch (action.type) {
    case DROP_DOWN_DROPPED:
      return merge({}, oldState, {
        dropDown: action.bool
      });
    case SEARCH_CALENDAR_DROPPED:
      return merge({}, oldState, {
        searchCalendar: action.bool
      });
    case RECEIVE_RESERVATION_FORM_CHANGE:
      return merge({}, oldState, {
        reservationForm: action.reservationData
      });
    case RECEIVE_RESERVATION:
      return merge({}, oldState, {
        newReservation: {
          id: action.reservation.id
        }
      });
    case CLEAR_NEW_RESERVATION:
      return merge({}, oldState, {
        newReservation: {
          id: null
        }
      });
    default:
      return oldState;
  }
}

export default uiReducer;