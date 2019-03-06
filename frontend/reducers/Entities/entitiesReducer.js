import {
  combineReducers
} from 'redux';
import {
  userReducer,
  savedRestaurantsReducer,
  userReservationsReducer,
  reservedRestaurantReducer
} from './user/userReducers';
import {
  restaurantReducer,
  reviewsReducer,
  reviewersReducer
} from './restaurants/restaurantReducer';
import {
  newReservationReducer
} from './reservations/reservationsReducer';

const entitiesReducer = combineReducers({
  // Restaurant index and show page
  restaurants: restaurantReducer,

  // Restaurant show page
  reviews: reviewsReducer,
  reviewers: reviewersReducer,

  // User show page
  user: userReducer,
  savedRestaurants: savedRestaurantsReducer,
  reservations: userReservationsReducer,
  reservedRestaurants: reservedRestaurantReducer,

  // Identify new reservation
  newReservation: newReservationReducer
});

export default entitiesReducer;