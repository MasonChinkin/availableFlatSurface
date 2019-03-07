import { connect } from 'react-redux';
import ProfileSavedRestaurants from './ProfileSavedRestaurants';

const mSP = ({ entities }) => ({
  restaurants: entities.restaurants
})

export const ProfileSavedRestaurantsContainer = connect(mSP)(ProfileSavedRestaurants);

export default ProfileSavedRestaurantsContainer;