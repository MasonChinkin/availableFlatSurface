import {
  RECEIVE_SESSION_ERRORS,
  RECEIVE_USER
} from '../../actions/sessionActions';

const sessionErrorsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    case RECEIVE_USER:
      return [];
    default:
      return oldState;
  }
};

export default sessionErrorsReducer;