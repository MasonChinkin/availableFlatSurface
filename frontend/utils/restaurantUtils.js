export const fetchAllRestaurants = () => {
  return $.ajax({
    method: 'GET',
    url: `/api/restaurants/`
  });
};

export const fetchRestaurant = id => {
  return $.ajax({
    method: 'GET',
    url: `/api/restaurants/${id}`
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