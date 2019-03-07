import { connect } from 'react-redux';
import NavBarSignedOut from './NavBarSignedOut';

const mSP = (state, ownProps) => ({
  path: ownProps.history.location.pathName
});

const NavBarSignedOutContainer = connect(mSP)(NavBarSignedOut);

export default NavBarSignedOutContainer;

