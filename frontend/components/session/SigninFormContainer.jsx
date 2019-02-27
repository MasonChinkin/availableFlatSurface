import { connect } from 'react-redux';
import { signin } from '../../actions/sessionActions';
import SigninForm from './SigninForm';

const mDP = dispatch => ({
  signin: user => dispatch(signin(user))
})

const SigninFormContainer = connect(null, mDP)(SigninForm)

export default SigninFormContainer;