import * as UserUtils from '../utils/userUtils';

export const RECEIVE_USER_DETAILS = 'RECEIVE_USER_DETAILS';

const receiveUser = user => ({
  type: RECEIVE_USER_DETAILS,
  user
});

export const requestUser = id => dispatch => {
  return UserUtils.fetchUser(id)
    .then(user => dispatch(receiveUser(user)));
};