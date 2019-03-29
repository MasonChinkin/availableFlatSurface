import * as savedRestaurantUtils from '../utils/savedRestaurantUtil';

const CREATE_SAVED_RESTAURANT = "CREATE_SAVED_RESTAURANT"

const receiveSavedRestaurant = savedRestaurant => ({
  type: CREATE_SAVED_RESTAURANT,
  savedRestaurant
})

export const createSavedRestaurant = savedRestaurant => dispatch => {
  return savedRestaurantUtils.postSavedRestaurant(savedRestaurant)
    .then(savedRestaurant => dispatch(receiveSavedRestaurant(savedRestaurant)))
}