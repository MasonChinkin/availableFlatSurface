import * as SessionUtils from "../utils/session";

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER'
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS'

const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
})

const signoutCurrentUser = userId => ({
  type: LOGOUT_CURRENT_USER,
  userId
})

const receiveSessionErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
})

export const signup = user => dispatch => {
  return SessionUtils.signup(user)
    .then(
      user => dispatch(receiveCurrentUser(user)),
      errors => dispatch(receiveSessionErrors(errors))
    )
}

export const signin = user => dispatch => {
  return SessionUtils.signin(user)
    .then(
      user => dispatch(receiveCurrentUser(user)),
      errors => dispatch(receiveSessionErrors(errors))
    )
}

export const signout = user => dispatch => {
  return SessionUtils.signout(user)
    .then(
      userId => dispatch(signoutCurrentUser(userId)),
      errors => dispatch(receiveSessionErrors(errors))
    )
}