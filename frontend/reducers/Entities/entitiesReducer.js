import {
  combineReducers
} from 'redux';
import restaurantReducer from './restaurants/restaurantReducer';
import {
  userReducer,
  savedRestaurantsReducer,
  reservationsReducer,
  reservedRestaurantReducer
} from './user/userReducers';

const entitiesReducer = combineReducers({
  restaurants: restaurantReducer,
  user: userReducer,
  savedRestaurants: savedRestaurantsReducer,
  reservations: reservationsReducer,
  reservedRestaurants: reservedRestaurantReducer
});

export default entitiesReducer;