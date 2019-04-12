import * as RestaurantUtils from '../utils/restaurantUtils';

export const RECEIVE_RECOMMENDED_RESTAURANTS = 'RECEIVE_RECOMMENDED_RESTAURANTS';
export const RECEIVE_SEARCHED_RESTAURANTS = 'RECEIVE_SEARCHED_RESTAURANTS';
export const RECEIVE_NO_RESTAURANTS_FOUND = 'RECEIVE_NO_RESTAURANTS_FOUND';
export const RECEIVE_RESTAURANT = 'RECEIVE_RESTAURANT';
export const CLEAR_RESTAURANTS = 'CLEAR_RESTAURANTS';

const receiveRecommendedRestaurants = restaurants => ({
  type: RECEIVE_RECOMMENDED_RESTAURANTS,
  restaurants
});

const receiveSearchedRestaurants = restaurants => ({
  type: RECEIVE_SEARCHED_RESTAURANTS,
  restaurants
});

const receiveNoRestaurantsFound = err => ({
  type: RECEIVE_NO_RESTAURANTS_FOUND,
  err
});

const receiveRestaurant = restaurant => ({
  type: RECEIVE_RESTAURANT,
  restaurant
});

export const clearRestaurants = () => ({
  type: CLEAR_RESTAURANTS
});

export const requestRecommendedRestaurants = () => dispatch => {
  return RestaurantUtils.fetchRecommendedRestaurants()
    .then(restaurants => dispatch(receiveRecommendedRestaurants(restaurants)));
};

export const requestSearchedRestaurants = searchTerm => dispatch => {
  return RestaurantUtils.searchRestaurants(searchTerm)
    .then(
      restaurants => dispatch(receiveSearchedRestaurants(restaurants)),
      err => dispatch(receiveNoRestaurantsFound(err))
    );
};

export const requestRestaurant = payload => dispatch => {
  return RestaurantUtils.fetchRestaurant(payload)
    .then(restaurant => dispatch(receiveRestaurant(restaurant)));
};