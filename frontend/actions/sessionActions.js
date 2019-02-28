import * as SessionUtils from "../utils/sessionUtils";

export const RECEIVE_USER = 'RECEIVE_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS';

const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

const signoutUser = () => ({
  type: LOGOUT_USER
});

const receiveSessionErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const clearSessionErrors = () => ({
  type: CLEAR_SESSION_ERRORS
});

export const signup = user => dispatch => {
  return SessionUtils.signup(user)
    .then(
      user => dispatch(receiveUser(user)),
      errors => dispatch(receiveSessionErrors(errors.responseJSON))
    );
};

export const signin = user => dispatch => {
  return SessionUtils.signin(user)
    .then(
      user => dispatch(receiveUser(user)),
      errors => dispatch(receiveSessionErrors(errors.responseJSON))
    );
};

export const signout = () => dispatch => {
  return SessionUtils.signout()
    .then(
      userId => dispatch(signoutUser()),
      errors => dispatch(receiveSessionErrors(errors.responseJSON))
    );
};