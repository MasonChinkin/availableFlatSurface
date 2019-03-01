import {
  combineReducers
} from 'redux';
import errorsReducer from './errors/errorsReducer';
import sessionReducer from './session/sessionReducer';
import uiReducer from './ui/uiReducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  errors: errorsReducer,
  ui: uiReducer
});

export default rootReducer;