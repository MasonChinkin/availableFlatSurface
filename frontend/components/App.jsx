import React from 'react';
import SignUpFormContainer from './session/SignupFormContainer';
import { Route } from 'react-router-dom'

const App = () => (
  <div>
    <Route path={`/signup`} component={SignUpFormContainer} />
  </div>
)

export default App;
