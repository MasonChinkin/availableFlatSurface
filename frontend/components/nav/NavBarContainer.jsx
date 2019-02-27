import { connect } from 'react-redux';
import { signout } from '../../actions/sessionActions';
import NavBar from './NavBar';

const mSP = state => ({
  currentUser: state.session.currentUser
})

const mDP = dispatch => ({
  signout: () => dispatch(signout())
})

const NavBarContainer = connect(mSP, mDP)(NavBar)

export default NavBarContainer;