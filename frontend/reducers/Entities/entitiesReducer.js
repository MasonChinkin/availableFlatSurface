import {
  combineReducers
} from 'redux';
import restaurantReducer from './restaurants/restaurantReducer';
import {
  userReducer,
  savedRestaurantsReducer,
  reservationsReducer
} from './user/userReducers';

const entitiesReducer = combineReducers({
  restaurants: restaurantReducer,
  user: userReducer,
  savedRestaurants: savedRestaurantsReducer,
  reservations: reservationsReducer
});

export default entitiesReducer;