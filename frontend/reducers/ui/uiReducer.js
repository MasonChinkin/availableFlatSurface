import {
  DROP_DOWN_DROPPED,
  SEARCH_CALENDAR_DROPPED
} from "../../actions/uiActions";
import {
  merge
} from 'lodash'
import {
  RECEIVE_RESERVATION_FORM_CHANGE
} from "../../actions/reservationActions";

const defaultUIState = {
  dropDown: false,
  searchCalendar: false,
  reservationForm: null
}

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
    default:
      return oldState;
  }
}

export default uiReducer;