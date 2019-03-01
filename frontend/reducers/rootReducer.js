import {
  combineReducers
} from 'redux';
import errorsReducer from './errors/errorsReducer';
import sessionReducer from './session/sessionReducer';
import uiReducer from './ui/uiReducer';
import entitiesReducer from './Entities/entitiesReducer';

const rootReducer = combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  errors: errorsReducer,
  ui: uiReducer
});

export default rootReducer;