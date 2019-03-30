export const fetchAllRestaurants = () => {
  return $.ajax({
    method: 'GET',
    url: `/api/restaurants/`
  });
};

export const fetchRestaurant = payload => {
  return $.ajax({
    method: 'GET',
    url: `/api/restaurants/${payload.restaurant_id}`,
    data: {
      payload
    }
  });
};

export const searchRestaurants = searchTerm => {
  return $.ajax({
    method: 'GET',
    url: `/api/restaurants/`,
    data: {
      searchTerm
    }
  });
};