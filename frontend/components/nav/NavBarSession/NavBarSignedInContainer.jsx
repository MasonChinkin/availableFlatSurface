import { connect } from 'react-redux';
import NavBarSignedIn from './NavBarSignedIn';
import { flipWindowListener } from '../../../actions/uiActions';
import { signout } from '../../../actions/sessionActions';

const mSP = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  dropDown: state.ui.dropDown,
  path: ownProps.history.location.pathName
});

const mDP = dispatch => ({
  signout: () => dispatch(signout()),
  flipWindowListener: bool => dispatch(flipWindowListener(bool))
});

const NavBarSignedInContainer = connect(mSP, mDP)(NavBarSignedIn);

export default NavBarSignedInContainer;