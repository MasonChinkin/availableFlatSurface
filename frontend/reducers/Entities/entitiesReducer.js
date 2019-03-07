import {
  combineReducers
} from 'redux';
import {
  userReservationsReducer,
  usersReducer
} from './users/usersReducers';
import {
  restaurantReducer,
  reviewsReducer,
  reviewersReducer
} from './restaurants/restaurantReducer';

const entitiesReducer = combineReducers({
  // Restaurant index and show page
  restaurants: restaurantReducer,

  // Restaurant show page
  reviews: reviewsReducer,
  reviewers: reviewersReducer,

  // User show page
  users: usersReducer,
  reservations: userReservationsReducer,
});

export default entitiesReducer;