import {
  RECEIVE_REVIEW_ERRORS,
  RECEIVE_REVIEW
} from "../../actions/reviewActions";

const reviewErrorsReducer = (oldState = '', action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_REVIEW_ERRORS:
      return action.err.responseJSON[0];
    case RECEIVE_REVIEW:
      return '';
    default:
      return oldState;
  }
};

export default reviewErrorsReducer;