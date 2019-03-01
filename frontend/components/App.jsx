import React from 'react';
import SignUpFormContainer from './session/SignupFormContainer';
import { Route } from 'react-router-dom'
import SigninFormContainer from './session/SigninFormContainer';
import { AuthedRoute, NotAuthedRoute } from '../utils/routesUtil';
import NavBarContainer from './nav/NavBarContainer';
import Footer from './footer/Footer';
import BackgroundImage from './splash/ResForm/BackgroundImage';
import RestaurantSearchContainer from './restaurants/search/RestaurantSearchContainer';

const App = () => (
  <>
    <Route path={`/`} component={NavBarContainer} />
    <Route exact path={`/`} component={BackgroundImage} />
    <NotAuthedRoute path={`/signup`} component={SignUpFormContainer} />
    <NotAuthedRoute path={`/signin`} component={SigninFormContainer} />
    <Route path={`/search`} component={RestaurantSearchContainer} />
    <Route path={`/`} component={Footer} />
  </>
)

export default App;
