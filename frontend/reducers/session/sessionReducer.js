import {
  RECEIVE_USER,
  LOGOUT_USER
} from "../../actions/sessionActions";

const _nullUser = {
  id: null
}

const sessionReducer = (oldState = _nullUser, action) => {
  Object.freeze(oldState)
  switch (action.type) {
    case RECEIVE_USER:
      return {
        id: action.user.id
      }
    case LOGOUT_USER:
      return _nullUser
    default:
      return oldState
  }
}

export default sessionReducer