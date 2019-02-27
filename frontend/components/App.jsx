import React from 'react';
import SignUpFormContainer from './session/SignupFormContainer';
import { Route } from 'react-router-dom'
import SigninFormContainer from './session/SigninFormContainer';
import { AuthedRoute, NotAuthedRoute } from '../utils/routesUtil';
import NavBarContainer from './nav/NavBarContainer';

const App = () => (
  <div>
    <Route path={`/`} component={NavBarContainer} />
    <AuthedRoute path={`/signup`} component={SignUpFormContainer} />
    <AuthedRoute path={`/signin`} component={SigninFormContainer} />
  </div>
)

export default App;
