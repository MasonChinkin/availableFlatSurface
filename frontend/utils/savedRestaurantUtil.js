export const postSavedRestaurant = savedRestaurant => {
  return $.ajax({
    method: 'POST',
    url: '/api/saved_restaurants',
    data: {
      savedRestaurant
    }
  });
};

export const deleteSavedRestaurant = id => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/saved_restaurants/${id}`
  });
};