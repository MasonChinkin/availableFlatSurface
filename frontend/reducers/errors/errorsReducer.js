import {
  combineReducers
} from 'redux';
import sessionErrorsReducer from './sessionErrorsReducer';

const errorsReducer = combineReducers({
  sessionErrors: sessionErrorsReducer
});

export default errorsReducer;