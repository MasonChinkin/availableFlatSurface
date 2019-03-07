import {
  combineReducers
} from 'redux';
import {
  usersReducer
} from './users/usersReducers';
import {
  restaurantReducer,
} from './restaurants/restaurantReducer';
import {
  reviewsReducer
} from './reviews/reviewsReducer';
import {
  reservationsReducer
} from './reservations/reservationsReducer';

const entitiesReducer = combineReducers({
  restaurants: restaurantReducer,
  reviews: reviewsReducer,
  users: usersReducer,
  reservations: reservationsReducer,
});

export default entitiesReducer;