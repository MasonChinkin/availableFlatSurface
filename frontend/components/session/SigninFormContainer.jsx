import { connect } from 'react-redux';
import { signin, clearSessionErrors } from '../../actions/sessionActions';
import SigninForm from './SigninForm';

const mST = ({ errors, session }) => ({
  errors: errors.sessionErrors,
  session
})

const mDP = dispatch => ({
  signin: user => dispatch(signin(user)),
  clearSessionErrors: () => dispatch(clearSessionErrors())
})

const SigninFormContainer = connect(mST, mDP)(SigninForm)

export default SigninFormContainer;