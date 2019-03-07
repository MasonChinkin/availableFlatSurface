import { connect } from 'react-redux';
import Profile from './Profile';
import { requestUser } from '../../actions/userActions';

const mSP = ({ entities }, ownProps) => {
  // debugger
  return {
    user: entities.user[ownProps.match.params.id],
    reservations: entities.reservations,
    savedRestaurants: entities.savedRestaurants,
    reservedRestaurants: entities.reservedRestaurants,
    newReservation: entities.newReservation
  };
};

const mDP = dispatch => ({
  requestUser: user => dispatch(requestUser(user))
});

const ProfileContainer = connect(mSP, mDP)(Profile);

export default ProfileContainer;