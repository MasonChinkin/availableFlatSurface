import {
  combineReducers
} from 'redux';
import sessionErrorsReducer from './sessionErrorsReducer';
import reservationErrorsReducer from './reservationErrorsReducer';
import restaurantErrorsReducer from './restaurantErrorsReducer';

const errorsReducer = combineReducers({
  // Failure to log in
  sessionErrors: sessionErrorsReducer,

  // Failure to make new reservation
  reservationErrors: reservationErrorsReducer,

  // No restaurants found
  restaurantErrors: restaurantErrorsReducer
});

export default errorsReducer;