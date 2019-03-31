import { connect } from 'react-redux';
import ProfileSavedRestaurants from './ProfileSavedRestaurants';
import { withRouter } from 'react-router-dom';
import { unSaveRestaurant } from '../../../actions/savedRestaurantActions';

const mSP = ({ entities }) => {
  return {
    restaurants: entities.restaurants,
    savedRestaurantsJoin: entities.savedRestaurantsJoin
  }
};

const mDP = dispatch => ({
  unSaveRestaurant: id => dispatch(unSaveRestaurant(id))
});

export const ProfileSavedRestaurantsContainer = connect(mSP, mDP)(ProfileSavedRestaurants);

export default withRouter(ProfileSavedRestaurantsContainer);