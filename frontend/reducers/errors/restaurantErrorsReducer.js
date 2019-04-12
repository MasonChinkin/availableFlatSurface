import {
  RECEIVE_NO_RESTAURANTS_FOUND,
  RECEIVE_SEARCHED_RESTAURANTS
} from "../../actions/restaurantActions";

const restaurantErrorsReducer = (oldState = '', action) => {
  Object.freeze(oldState)
  switch (action.type) {
    case RECEIVE_NO_RESTAURANTS_FOUND:
      return action.err.responseText
    case RECEIVE_SEARCHED_RESTAURANTS:
      return ''
    default:
      return oldState
  }
}

export default restaurantErrorsReducer