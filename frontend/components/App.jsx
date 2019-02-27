import React from 'react';
import SignUpFormContainer from './session/SignupFormContainer';
import { Route } from 'react-router-dom'
import SigninFormContainer from './session/SigninFormContainer';

const App = () => (
  <div>
    <Route path={`/signup`} component={SignUpFormContainer} />
    <Route path={`/signin`} component={SigninFormContainer} />
  </div>
)

export default App;
