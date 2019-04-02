import React from 'react';
import SignUpFormContainer from './session/SignupFormContainer';
import { Route } from 'react-router-dom'
import SigninFormContainer from './session/SigninFormContainer';
import { AuthedRoute, NotAuthedRoute } from '../utils/routesUtils';
import NavBarContainer from './nav/NavBarContainer';
import Footer from './footer/Footer';
import RestaurantListContainer from './restaurants/search/RestaurantListContainer';
import SearchFormContainer from './restaurants/search/SearchForm/SearchFormContainer';
import RestaurantShowContainer from './restaurants/show/RestaurantShowContainer';
import ProfileContainer from './profile/ProfileContainer';
import SplashRestaurantsContainer from './restaurants/splash/SplashRestaurantsContainer';

const App = () => (
  <>
    {/* Nav bar */}
    <Route path={`/`} component={NavBarContainer} />

    {/* search form */}
    <Route exact path={`/`} component={SearchFormContainer} />
    <Route exact path={`/signup`} component={SearchFormContainer} />
    <Route exact path={`/signin`} component={SearchFormContainer} />

    {/* Index Page */}
    <Route path={`/search`} component={RestaurantListContainer} />

    {/* session forms (':params*' is catch all for anything in front of signin/up ) */}
    <NotAuthedRoute path={`/:params*/signup`} component={SignUpFormContainer} />
    <NotAuthedRoute path={`/:params*/signin`} component={SigninFormContainer} />

    {/* Profile Page */}
    <AuthedRoute path={`/profile/:id`} component={ProfileContainer} />

    {/* restaurant show page */}
    <Route path={`/restaurants/:id`} component={RestaurantShowContainer} />

    {/* Footer */}
    <Route path={`/`} component={Footer} />
  </>
)

export default App;
