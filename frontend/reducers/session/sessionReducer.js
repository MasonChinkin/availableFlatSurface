import {
  RECEIVE_USER,
  LOGOUT_USER
} from "../../actions/sessionActions";

const _nullUser = {
  currentUser: null
};

const sessionReducer = (oldState = _nullUser, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_USER:
      return {
        currentUser: {
          id: Object.values(action.user.user)[0].id,
          name: Object.values(action.user.user)[0].name
        }
      };
    case LOGOUT_USER:
      return _nullUser;
    default:
      return oldState;
  }
};

export default sessionReducer;