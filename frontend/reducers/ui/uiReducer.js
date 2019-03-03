import {
  DROP_DOWN_DROPPED,
  SEARCH_CALENDAR_DROPPED
} from "../../actions/uiActions";
import {
  merge
} from 'lodash'

const defaultUIState = {
  dropDown: false,
  searchCalendar: false
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
    default:
      return oldState;
  }
}

export default uiReducer;