import * as ReviewUtils from '../utils/reviewUtils';

export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
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

export const createReview = payload => dispatch => {
  return ReviewUtils.postReview(payload)
    .then(review => dispatch(receiveReview(review)));
};

export const editReview = payload => dispatch => {
  return ReviewUtils.patchReview(payload)
    .then(review => dispatch(receiveReview(review)));
};

export const deleteReview = id => dispatch => {
  return ReviewUtils.deleteReview(id)
    .then(id => dispatch(removeReview(id)));
};