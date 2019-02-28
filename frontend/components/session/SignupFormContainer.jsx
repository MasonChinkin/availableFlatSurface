import { connect } from 'react-redux';
import { signup } from '../../actions/sessionActions';
import SignupForm from './SignupForm';

const mDP = dispatch => ({
  signup: user => dispatch(signup(user))
})

const SignUpFormContainer = connect(null, mDP)(SignupForm)

export default SignUpFormContainer;