import * as RestaurantUtils from '../utils/restaurantUtils'

export const RECEIVE_ALL_RESTAURANTS = 'RECEIVE_ALL_RESTAURANTS';
export const RECEIVE_RESTAURANT = 'RECEIVE_RESTAURANTS';

const receiveAllRestaurants = restaurants => {
  return {
    type: RECEIVE_ALL_RESTAURANTS,
    restaurants
  }
};

const receiveRestaurant = restaurant => ({
  type: RECEIVE_RESTAURANT,
  restaurant
});

export const requestAllRestaurants = () => dispatch => {

  return RestaurantUtils.fetchRestaurants()
    .then(restaurants => dispatch(receiveAllRestaurants(restaurants)));
}

export const requestRestaurant = () => dispatch => {
  return RestaurantUtils.fetchRestaurants()
    .then(restaurant => dispatch(receiveRestaurant(restaurant)));
}