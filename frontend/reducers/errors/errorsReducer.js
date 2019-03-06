import {
  combineReducers
} from 'redux';
import sessionErrorsReducer from './sessionErrorsReducer';
import reservationErrorsReducer from './reservationErrorsReducer';

const errorsReducer = combineReducers({
  // Failure to log in
  sessionErrors: sessionErrorsReducer,

  // Failure to make new reservation
  reservationErrors: reservationErrorsReducer
});

export default errorsReducer;