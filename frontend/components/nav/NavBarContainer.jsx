import { connect } from 'react-redux';
import { signout } from '../../actions/sessionActions';
import NavBar from './NavBar';
import { flipWindowListener } from '../../actions/uiActions';

const mSP = state => ({
  currentUser: state.session.currentUser,
  dropDown: state.ui.dropDown
})

const mDP = dispatch => ({
  signout: () => dispatch(signout()),
  flipWindowListener: bool => dispatch(flipWindowListener(bool))
})

const NavBarContainer = connect(mSP, mDP)(NavBar)

export default NavBarContainer;