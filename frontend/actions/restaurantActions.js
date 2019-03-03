import * as RestaurantUtils from '../utils/restaurantUtils';

export const RECEIVE_SEARCHED_RESTAURANTS = 'RECEIVE_SEARCHED_RESTAURANTS';
export const RECEIVE_RESTAURANT = 'RECEIVE_RESTAURANTS';

const receiveSearchedRestaurants = restaurants => {
  return {
    type: RECEIVE_SEARCHED_RESTAURANTS,
    restaurants
  }
};

const receiveRestaurant = restaurant => ({
  type: RECEIVE_RESTAURANT,
  restaurant
});

export const requestSearchedRestaurants = searchTerm => dispatch => {

  return RestaurantUtils.searchRestaurants(searchTerm)
    .then(restaurants => dispatch(receiveSearchedRestaurants(restaurants)));
}

export const requestRestaurant = id => dispatch => {
  return RestaurantUtils.fetchRestaurant(id)
    .then(restaurant => dispatch(receiveRestaurant(restaurant)));
}