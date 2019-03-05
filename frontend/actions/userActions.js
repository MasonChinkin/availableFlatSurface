import * as UserUtils from '../utils/userUtils';

export const RECEIVE_USER = 'RECEIVE_USER';

const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

export const requestUser = id => dispatch => {
  return UserUtils.fetchUser(id)
    .then(user => dispatch(receiveUser(user)));
};