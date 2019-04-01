import { connect } from 'react-redux';
import DropDown from './DropDown';
import { signout } from '../../../actions/sessionActions';
import { flipReviewForm } from '../../../actions/uiActions';

const mSP = ({ session, ui }) => ({
  currentUserId: session.currentUser.id,
  dropDown: ui.dropDown
});

const mDP = dispatch => ({
  signout: () => dispatch(signout()),
  flipReviewForm: bool => dispatch(flipReviewForm(bool))
});

const DropDownContainer = connect(mSP, mDP)(DropDown);

export default DropDownContainer;