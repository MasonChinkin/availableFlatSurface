import {
  DROP_DOWN_DROPPED,
  SEARCH_CALENDAR_DROPPED,
  REVIEW_FORM
} from "../../actions/uiActions";
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
  },
  displayReviewForm: false
};

const uiReducer = (oldState = defaultUIState, action) => {
  Object.freeze(oldState)
  let newState = Object.assign({}, oldState)
  switch (action.type) {
    case DROP_DOWN_DROPPED:
      newState.dropDown = action.bool
      return newState
    case SEARCH_CALENDAR_DROPPED:
      newState.searchCalendar = action.bool
      return newState
    case RECEIVE_RESERVATION_FORM_CHANGE:
      newState.reservationForm = action.reservationData
      return newState
    case RECEIVE_RESERVATION:
      newState.newReservation.id = action.reservation.id
      return newState
    case CLEAR_NEW_RESERVATION:
      newState.newReservation.id = null
      return newState
    case REVIEW_FORM:
      newState.displayReviewForm = action.bool
      return newState
    default:
      return oldState;
  }
}

export default uiReducer;