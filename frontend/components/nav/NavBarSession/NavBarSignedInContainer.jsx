import { connect } from 'react-redux';
import NavBarSignedIn from './NavBarSignedIn';
import { flipWindowListener } from '../../../actions/uiActions';
import { signout } from '../../../actions/sessionActions';

const fname = (name) => name.split(' ')[0];

const mSP = ({ entities, session, ui }, ownProps) => {
  return {
    fname: fname(entities.users[session.currentUser.id].name),
    currId: session.currentUser.id,
    dropDown: ui.dropDown
  }
};

const mDP = dispatch => ({
  signout: () => dispatch(signout()),
  flipWindowListener: bool => dispatch(flipWindowListener(bool))
});

const NavBarSignedInContainer = connect(mSP, mDP)(NavBarSignedIn);

export default NavBarSignedInContainer;