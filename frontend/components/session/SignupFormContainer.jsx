import { connect } from 'react-redux';
import { signup, clearSessionErrors } from '../../actions/sessionActions';
import SignupForm from './SignupForm';

const mST = ({ errors }) => ({
  errors: errors.sessionErrors,
})

const mDP = dispatch => ({
  signup: user => dispatch(signup(user)),
  clearSessionErrors: () => dispatch(clearSessionErrors())
})

const SignUpFormContainer = connect(mST, mDP)(SignupForm)

export default SignUpFormContainer;