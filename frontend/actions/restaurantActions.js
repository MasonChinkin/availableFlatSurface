import * as RestaurantUtils from '../utils/restaurantUtils';

export const RECEIVE_RECOMMENDED_RESTAURANTS = 'RECEIVE_RECOMMENDED_RESTAURANTS';
export const RECEIVE_SEARCHED_RESTAURANTS = 'RECEIVE_SEARCHED_RESTAURANTS';
export const RECEIVE_RESTAURANT = 'RECEIVE_RESTAURANT';

const receiveRecommendedRestaurants = restaurants => {
  return {
    type: RECEIVE_RECOMMENDED_RESTAURANTS,
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

export const requestRecommendedRestaurants = () => dispatch => {
  return RestaurantUtils.fetchRecommendedRestaurants()
    .then(restaurants => dispatch(receiveRecommendedRestaurants(restaurants)));
};

export const requestSearchedRestaurants = searchTerm => dispatch => {
  return RestaurantUtils.searchRestaurants(searchTerm)
    .then(restaurants => dispatch(receiveSearchedRestaurants(restaurants)));
};

export const requestRestaurant = payload => dispatch => {
  return RestaurantUtils.fetchRestaurant(payload)
    .then(restaurant => dispatch(receiveRestaurant(restaurant)));
};