import {
  DROP_DOWN_DROPPED
} from "../../actions/uiActions";

const uiReducer = (oldState = {
  dropped: false
}, action) => {
  Object.freeze(oldState)
  switch (action.type) {
    case DROP_DOWN_DROPPED:
      return {
        dropped: action.bool
      };
    default:
      return oldState;
  }
}

export default uiReducer;