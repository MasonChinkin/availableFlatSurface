import React from 'react';
import SignUpFormContainer from './session/SignupFormContainer';
import { Route } from 'react-router-dom'
import SigninFormContainer from './session/SigninFormContainer';
import { AuthedRoute, NotAuthedRoute } from '../utils/routesUtil';
import NavBarContainer from './nav/NavBarContainer';
import Footer from './footer/Footer';
import RestaurantSearchContainer from './restaurants/search/RestaurantSearchContainer';
import SearchResFormContainer from './restaurants/search/SearchResForm/SearchResFormContainer';

const App = () => (
  <>
    {/* Nav bar */}
    <Route path={`/`} component={NavBarContainer} />

    {/* search form */}
    <Route exact path={`/`} component={SearchResFormContainer} />
    <Route exact path={`/signup`} component={SearchResFormContainer} />
    <Route exact path={`/signin`} component={SearchResFormContainer} />

    {/* Index Page */}
    <Route exact path={`/search`} component={RestaurantSearchContainer} />

    {/* session forms */}
    <NotAuthedRoute path={`/signup`} component={SignUpFormContainer} />
    <NotAuthedRoute path={`/signin`} component={SigninFormContainer} />

    {/* Footer */}
    <Route path={`/`} component={Footer} />
  </>
)

export default App;
