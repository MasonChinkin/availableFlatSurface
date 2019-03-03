import React from 'react';
import SignUpFormContainer from './session/SignupFormContainer';
import { Route } from 'react-router-dom'
import SigninFormContainer from './session/SigninFormContainer';
import { AuthedRoute, NotAuthedRoute } from '../utils/routesUtil';
import NavBarContainer from './nav/NavBarContainer';
import Footer from './footer/Footer';
import RestaurantSearchContainer from './restaurants/search/RestaurantSearchContainer';
import SearchFormContainer from './restaurants/search/SearchForm/SearchFormContainer';

const App = () => (
  <>
    {/* Nav bar */}
    <Route path={`/`} component={NavBarContainer} />

    {/* search form */}
    <Route exact path={`/`} component={SearchFormContainer} />
    <Route exact path={`/signup`} component={SearchFormContainer} />
    <Route exact path={`/signin`} component={SearchFormContainer} />

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
