import { connect } from 'react-redux';
import ProfileSavedRestaurants from './ProfileSavedRestaurants';
import { withRouter } from 'react-router-dom';

const selectSavedRestaurants = (state, ownProps) => {
  let rests = state.entities.restaurants;
  let saves = Object.values(state.entities.savedRestaurantsJoin);
  let userSaves = saves.filter(save => save.userId == ownProps.match.params.id);
  return userSaves.map(save => rests[save.restaurantId]);
};

const mSP = (state, ownProps) => ({
  // restaurants: Object.values(entities.restaurants)
  restaurants: selectSavedRestaurants(state, ownProps)
});

export const ProfileSavedRestaurantsContainer = connect(mSP)(ProfileSavedRestaurants);

export default withRouter(ProfileSavedRestaurantsContainer);