import * as SessionUtils from "../utils/sessionUtils";

export const RECEIVE_USER = 'RECEIVE_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

const signoutUser = userId => ({
  type: LOGOUT_USER,
  userId
});

const receiveSessionErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const signup = user => dispatch => {
  return SessionUtils.signup(user)
    .then(
      user => dispatch(receiveUser(user)),
      errors => dispatch(receiveSessionErrors(errors))
    );
};

export const signin = user => dispatch => {
  return SessionUtils.signin(user)
    .then(
      user => dispatch(receiveUser(user)),
      errors => dispatch(receiveSessionErrors(errors))
    );
};

export const signout = user => dispatch => {
  return SessionUtils.signout(user)
    .then(
      userId => dispatch(signoutUser(userId)),
      errors => dispatch(receiveSessionErrors(errors))
    );
};