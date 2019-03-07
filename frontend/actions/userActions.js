import * as UserUtils from '../utils/userUtils';

export const RECEIVE_PROFILE = 'RECEIVE_PROFILE';

const receiveUser = user => ({
  type: RECEIVE_PROFILE,
  user
});

export const requestUser = id => dispatch => {
  return UserUtils.fetchUser(id)
    .then(user => dispatch(receiveUser(user)));
};