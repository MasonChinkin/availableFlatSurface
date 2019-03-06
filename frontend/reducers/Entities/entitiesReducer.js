import {
  combineReducers
} from 'redux';
import {
  userReducer,
  savedRestaurantsReducer,
  reservationsReducer,
  reservedRestaurantReducer
} from './user/userReducers';
import {
  restaurantReducer,
  reviewsReducer,
  reviewersReducer
} from './restaurants/restaurantReducer';

const entitiesReducer = combineReducers({
  restaurants: restaurantReducer,
  reviews: reviewsReducer,
  reviewers: reviewersReducer,
  user: userReducer,
  savedRestaurants: savedRestaurantsReducer,
  reservations: reservationsReducer,
  reservedRestaurants: reservedRestaurantReducer
});

export default entitiesReducer;