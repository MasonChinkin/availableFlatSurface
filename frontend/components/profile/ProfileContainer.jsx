import { connect } from 'react-redux';
import Profile from './Profile';
import { requestUser } from '../../actions/userActions';

const mSP = ({ entities, ui }, ownProps) => ({
  user: entities.users[ownProps.match.params.id]
});

const mDP = dispatch => ({
  requestUser: user => dispatch(requestUser(user)),
});

const ProfileContainer = connect(mSP, mDP)(Profile);

export default ProfileContainer;