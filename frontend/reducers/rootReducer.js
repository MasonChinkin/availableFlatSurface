import {
  combineReducers
} from 'redux';
import errorsReducer from './errors/errorsReducer';
import sessionReducer from './session/sessionReducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  errors: errorsReducer
});

export default rootReducer;