import {
  combineReducers
} from 'redux';
import restaurantReducer from './restaurants/restaurantsReducer';

const entitiesReducer = combineReducers({
  restaurants: restaurantReducer
});

export default entitiesReducer;