import {
  combineReducers
} from 'redux';
import sessionErrorsReducer from './sessionErrorsReducer';
import reservationErrorsReducer from './reservationErrorsReducer';
import restaurantErrorsReducer from './restaurantErrorsReducer';
import reviewErrorsReducer from './reviewErrorsReducer';

const errorsReducer = combineReducers({
  // Failure to log in
  sessionErrors: sessionErrorsReducer,

  // Failure to make new reservation
  reservationErrors: reservationErrorsReducer,

  // No restaurants found
  restaurantErrors: restaurantErrorsReducer,

  // Review body can't be blank
  reviewErrors: reviewErrorsReducer
});

export default errorsReducer;