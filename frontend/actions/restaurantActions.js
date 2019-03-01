import * as RestaurantUtils from '../utils/restaurantUtils'

const RECEIVE_ALL_RESTAURANTS = 'RECEIVE_ALL_RESTAURANTS';
const RECEIVE_RESTAURANT = 'RECEIVE_RESTAURANTS';

const receiveAllRestaurants = restaurants => ({
  type: RECEIVE_ALL_RESTAURANTS,
  restaurants
});

const receiveRestaurant = restaurant => ({
  type: RECEIVE_ALL_RESTAURANTS,
  restaurant
});

export const requestAllRestaurants = () => dispatch => {
  return RestaurantUtils.fetchRestaurants()
    .then(restaurants => dispatches(receiveAllRestaurants(restaurants)))
}

export const requestRestaurant = () => dispatch => {
  return RestaurantUtils.fetchRestaurants()
    .then(restaurants => dispatches(receiveAllRestaurants(restaurants)))
}