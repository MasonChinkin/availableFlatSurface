import { connect } from 'react-redux';
import { signin } from '../../actions/sessionActions';
import SigninForm from './SigninForm';

const mST = ({ errors }) => ({
  errors: errors.sessionErrors,
})

const mDP = dispatch => ({
  signin: user => dispatch(signin(user)),
  clearSessionErrors: () => dispatch(clearSessionErrors())
})

const SigninFormContainer = connect(mST, mDP)(SigninForm)

export default SigninFormContainer;