import {
  combineReducers
} from 'redux';
import restaurantSearchReducer from './restaurants/restaurantSearchReducer';
import restaurantShowReducer from './restaurants/restaurantShowReducer';

const entitiesReducer = combineReducers({
  restaurants: restaurantSearchReducer,
  restaurant: restaurantShowReducer
});

export default entitiesReducer;