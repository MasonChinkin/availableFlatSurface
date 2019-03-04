import * as RestaurantUtils from '../utils/restaurantUtils';

export const RECEIVE_ALL_RESTAURANTS = 'RECEIVE_ALL_RESTAURANTS';
export const RECEIVE_SEARCHED_RESTAURANTS = 'RECEIVE_SEARCHED_RESTAURANTS';
export const RECEIVE_RESTAURANT = 'RECEIVE_RESTAURANT';

const receiveAllRestaurants = restaurants => {
  return {
    type: RECEIVE_ALL_RESTAURANTS,
    restaurants
  };
};

const receiveSearchedRestaurants = restaurants => {
  return {
    type: RECEIVE_SEARCHED_RESTAURANTS,
    restaurants
  };
};

const receiveRestaurant = restaurant => ({
  type: RECEIVE_RESTAURANT,
  restaurant
});

export const requestAllRestaurants = () => dispatch => {
  return RestaurantUtils.fetchAllRestaurants()
    .then(restaurants => dispatch(receiveAllRestaurants(restaurants)));
};

export const requestSearchedRestaurants = searchTerm => dispatch => {
  return RestaurantUtils.searchRestaurants(searchTerm)
    .then(restaurants => dispatch(receiveSearchedRestaurants(restaurants)));
};

export const requestRestaurant = id => dispatch => {
  return RestaurantUtils.fetchRestaurant(id)
    .then(restaurant => dispatch(receiveRestaurant(restaurant)));
};