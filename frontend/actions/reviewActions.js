import * as ReviewUtils from '../utils/reviewUtils';

export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const RECEIVE_REVIEW_ERRORS = 'RECEIVE_REVIEW_ERRORS';
export const DELETE_REVIEW = 'DELETE_REVIEW';

const receiveReview = payload => {
  return {
    type: RECEIVE_REVIEW,
    payload
  };
};

const removeReview = payload => {
  return {
    type: DELETE_REVIEW,
    payload
  };
};

const receiveReviewErrors = err => {
  return {
    type: RECEIVE_REVIEW_ERRORS,
    err
  };
};

export const createReview = payload => dispatch => {
  return ReviewUtils.postReview(payload)
    .then(
      review => dispatch(receiveReview(review)),
      err => dispatch(receiveReviewErrors(err))
    );
};

export const editReview = payload => dispatch => {
  return ReviewUtils.patchReview(payload)
    .then(
      review => dispatch(receiveReview(review)),
      err => dispatch(receiveReviewErrors(err))
    );
};

export const deleteReview = id => dispatch => {
  return ReviewUtils.deleteReview(id)
    .then(id => dispatch(removeReview(id)));
};