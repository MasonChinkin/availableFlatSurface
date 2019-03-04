import {
  combineReducers
} from 'redux';
import restaurantReducer from './restaurants/restaurantReducer';

const entitiesReducer = combineReducers({
  restaurants: restaurantReducer
});

export default entitiesReducer;