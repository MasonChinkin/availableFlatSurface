export const postSavedRestaurant = savedRestaurant => {
  return $.ajax({
    method: 'POST',
    url: '/api/saved_restaurants',
    data: {
      savedRestaurant
    }
  });
};