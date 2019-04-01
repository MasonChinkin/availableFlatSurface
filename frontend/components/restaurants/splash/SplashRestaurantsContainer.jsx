import { connect } from 'react-redux';
import { requestAllRestaurants } from '../../../actions/restaurantActions';
import SplashRestaurants from './SplashRestaurants';

const fname = (name) => name.split(' ')[0];

const mSP = ({ entities, session }) => ({
  restaurants: Object.values(entities.restaurants),
  fname: (session.currentUser.id) ? fname(entities.users[session.currentUser.id].name) : null
})

const mDP = dispatch => ({
  requestAllRestaurants: restaurants => dispatch(requestAllRestaurants(restaurants))
})

const SplashRestaurantsContainer = connect(mSP, mDP)(SplashRestaurants)

export default SplashRestaurantsContainer