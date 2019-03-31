import * as savedRestaurantUtils from '../utils/savedRestaurantUtil';

export const CREATE_SAVED_RESTAURANT = "CREATE_SAVED_RESTAURANT"
export const DELETE_SAVED_RESTAURANT = "DELETE_SAVED_RESTAURANT"

const receiveSavedRestaurant = savedRestaurant => ({
  type: CREATE_SAVED_RESTAURANT,
  savedRestaurant
})

const deleteSavedRestaurant = () => ({
  type: DELETE_SAVED_RESTAURANT
})

export const createSavedRestaurant = savedRestaurant => dispatch => {
  return savedRestaurantUtils.postSavedRestaurant(savedRestaurant)
    .then(savedRestaurant => dispatch(receiveSavedRestaurant(savedRestaurant)))
}

export const unSaveRestaurant = id => dispatch => {
  return savedRestaurantUtils.deleteSavedRestaurant(id)
    .then(() => dispatch(deleteSavedRestaurant()))
}