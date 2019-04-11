import { connect } from 'react-redux';
import SplashRestaurants from './SplashRestaurants';
import { requestRecommendedRestaurants } from '../../../actions/restaurantActions';

const fname = (name) => name.split(' ')[0];

const mSP = ({ entities, session }) => ({
  restaurants: Object.values(entities.restaurants),
  fname: (session.currentUser.id) ? fname(entities.users[session.currentUser.id].name) : null
})

const mDP = dispatch => ({
  requestRecommendedRestaurants: restaurants => dispatch(requestRecommendedRestaurants(restaurants))
})

const SplashRestaurantsContainer = connect(mSP, mDP)(SplashRestaurants)

export default SplashRestaurantsContainer