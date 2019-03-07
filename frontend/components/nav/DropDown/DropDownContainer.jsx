import { connect } from 'react-redux';
import DropDown from './DropDown';
import { signout } from '../../../actions/sessionActions';

const mSP = ({ session, ui }) => ({
  currentUserId: session.currentUser.id,
  dropDown: ui.dropDown
});

const mDP = dispatch => ({
  signout: () => dispatch(signout())
});

const DropDownContainer = connect(mSP, mDP)(DropDown);

export default DropDownContainer;