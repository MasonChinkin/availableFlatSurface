import {
  combineReducers
} from 'redux';
import sessionErrorsReducer from './sessionErrorsReducer';

const errorReducer = combineReducers({
  sessionErrors: sessionErrorsReducer
});

export default errorReducer;